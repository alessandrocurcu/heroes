import { defineStore } from 'pinia';
import useFetch from '@/composables/useFetch';
import { compose, map, omit, toPairs } from 'ramda';
import { findResourceByParamLabel, findResourceBySlug, sleep } from '@/utils';
import type { Project, ProjectStore, Crawl, Instance, Domain } from '@/models';
import { useInstanceStore } from '@/stores/InstanceStore';
import { useNotificationStore } from '@/stores/NotificationStore';
import { useIssueStore } from '@/stores/IssueStore';

const transformCrawlIssue = (el: any) => {
  const IssueStore = useIssueStore();
  return compose(
    map(([label, urlsAfflicted]) => ({
      id: label,
      label: IssueStore.issuesGroupedByCodeerr[label]?.[0]?.label ?? '',
      urlsAfflicted,
      alert:
        IssueStore.issuesGroupedByCodeerr[label]?.[0]?.label === 'No Response' ||
        IssueStore.issuesGroupedByCodeerr[label]?.[0]?.label === '4xx Response'
          ? true
          : false,
      warn:
        IssueStore.issuesGroupedByCodeerr[label]?.[0]?.label === 'Not In Sitemap' ||
        IssueStore.issuesGroupedByCodeerr[label]?.[0]?.label === 'Url Not Valid'
          ? true
          : false
    })),
    toPairs
  )(el);
};

export const useProjectStore = defineStore('ProjectStore', {
  state: (): ProjectStore => {
    return {
      projects: null,
      isLoadingProjects: false,
      isSettingProject: false,
      selectedProject: undefined,
      selectedCrawl: undefined,
      issuesOfAllCrawlsByProject: null,
      issuesOfAllCrawlsByProjectWithNoZero: null,
      strategy: {
        summary: null,
        basket: null,
        dates: null,
        competitors: null,
        backlinks: null
      },
      strategyIsLoading: true
    };
  },
  getters: {
    selectedProjectId(): string {
      return this.selectedProject?.id ?? '';
    },
    selectedProjectInstanceId(): string | undefined {
      return this.selectedProject?.instanceId;
    },
    selectedProjectDomainId(): number | undefined {
      return this.selectedProject?.domainId;
    },
    selectedProjectServerNode(): string | undefined {
      return this.selectedProject?.domainData?.serverNode;
    },
    crawlIssues(): any {
      return this.issuesOfAllCrawlsByProject[this.selectedCrawl?.id ?? ''] ?? [];
    },
    crawlIssuesByTypes(): any {
      if (!this.issuesOfAllCrawlsByProject)
        return {
          errors: [],
          warnings: [],
          notices: [],
          infos: [],
          accessibilityErrors: [],
          accessibilityWarnings: [],
          accessibilityNotices: []
        };
      const crawlIssues = this.issuesOfAllCrawlsByProject[this.selectedCrawl?.id ?? ''] ?? [];
      return {
        errors: transformCrawlIssue(crawlIssues?.[0] ?? []),
        warnings: transformCrawlIssue(crawlIssues?.[1] ?? []),
        notices: transformCrawlIssue(crawlIssues?.[2] ?? []),
        infos: transformCrawlIssue(crawlIssues?.[9] ?? []),
        accessibilityErrors: transformCrawlIssue(crawlIssues?.[4] ?? []),
        accessibilityWarnings: transformCrawlIssue(crawlIssues?.[5] ?? []),
        accessibilityNotices: transformCrawlIssue(crawlIssues?.[6] ?? [])
      };
    },
    newCrawlsStats(): any {
      if (!this.issuesOfAllCrawlsByProject) return {};
      const allCrawlsId: any = Object.keys(this.issuesOfAllCrawlsByProject);
      return allCrawlsId.reduce((acc: any, crawlId: string) => {
        acc[crawlId] = {
          mimeALL: this.issuesOfAllCrawlsByProject[crawlId]?.['ALL']?.['MIME_ALL'] ?? 0,
          fromSitemap: this.issuesOfAllCrawlsByProject[crawlId]?.['ALL']?.['INSITEMAP_YES'] ?? 0,
          fromCrawler: this.issuesOfAllCrawlsByProject[crawlId]?.['ALL']?.['CRAWLED_YES'] ?? 0,
          mimeHTML: this.issuesOfAllCrawlsByProject[crawlId]?.['ALL']?.['MIME_HTML'] ?? 0,
          mimeIMAGE: this.issuesOfAllCrawlsByProject[crawlId]?.['ALL']?.['MIME_IMAGE'] ?? 0,
          mimeJs: this.issuesOfAllCrawlsByProject[crawlId]?.['ALL']?.['MIME_JS'] ?? 0,
          mimeCSS: this.issuesOfAllCrawlsByProject[crawlId]?.['ALL']?.['MIME_CSS'] ?? 0,
          crawledUrls: this.issuesOfAllCrawlsByProject[crawlId]?.['ALL']?.['TOTROWS'] ?? 0,
          status200: this.issuesOfAllCrawlsByProject[crawlId]?.['ALL']?.['INT-HTTP_2XX'] ?? 0,
          status300: this.issuesOfAllCrawlsByProject[crawlId]?.['ALL']?.['INT-HTTP_3XX'] ?? 0,
          status400: this.issuesOfAllCrawlsByProject[crawlId]?.['ALL']?.['INT-HTTP_4XX'] ?? 0,
          status500: this.issuesOfAllCrawlsByProject[crawlId]?.['ALL']?.['INT-HTTP_5XX'] ?? 0
        };
        return acc;
      }, {});
    }
  },
  actions: {
    findProjectByParamLabel(paramLabel: string): Project | undefined {
      return findResourceByParamLabel<Project>(paramLabel, this.projects);
    },
    findProjectBySlug(slug: string): Project | undefined {
      return findResourceBySlug<Project>(slug, this.projects);
    },
    async setSelectedProject(project: Project) {
      const InstanceStore = useInstanceStore();
      const NotificationStore = useNotificationStore();
      this.selectedProject = project;
      const listOfProjectCrawls: any[] = Object.values(project?.crawls ?? {});
      this.setSelectedCrawl(listOfProjectCrawls.at(-1));
      const instance = InstanceStore.instances?.find(
        (instance) => instance.id === project?.instanceId
      );
      if (instance) {
        InstanceStore.setSelectedInstance(instance);
        const domain = instance?.domains?.find((domain: Domain) => domain.id === project?.domainId);
        if (domain) {
          InstanceStore.setSelectedDomain(domain);
        } else {
          NotificationStore.notify(
            'Instance Default Domain not found',
            'Please contact team dev about this',
            {
              style: 'error'
            }
          );
        }
      } else {
        console.log('Il Progetto non è legato a una istanza');
      }
    },
    async setSelectedCrawl(crawl: Crawl | undefined) {
      this.selectedCrawl = crawl;
    },
    async changeOwner(projects: Project[], owners: any) {
      const { httpGet } = useFetch();
      const client = owners.join(',');
      return await Promise.all(
        projects.map(async (_project: Project) => {
          const clientWithoutKleecks = client?.replace('kleecks', '') ?? '';
          const arrayClientWithoutKleecks = clientWithoutKleecks?.split(',') ?? [];
          const arrayClientWithoutKleecksFiltered = arrayClientWithoutKleecks?.filter(
            (item: any) => item !== ''
          );
          _project.businessesIds = arrayClientWithoutKleecksFiltered;
          const res = await httpGet('scan/updScan', {
            params: {
              id: _project.id,
              client
            }
          });
          return res;
        })
      );
    },
    getSuitableInstances(selectedProjects: any[]) {
      const { seedUrl } = selectedProjects[0];
      const InstanceStore = useInstanceStore();
      const getSuitableDomains = (seed: string) => {
        return InstanceStore.instances?.reduce((acc: any, instance: Instance) => {
          instance.domains?.forEach((domain: any) => {
            // ℹ️ Exclude last charcter of seed if it is a slash
            seed = seed?.replace(/\/$/, '');
            // ℹ️ Seed is an url and i want just the base url
            const seedURL = new URL(seed);
            if (
              (seed && domain.domainListed?.includes(seedURL.href)) ||
              domain.domainListed === seedURL.origin
            ) {
              const domainWithInstanceApikbase = Object.assign(domain, {
                apikbase: instance.apikbase,
                instanceId: instance.id
              });
              acc[instance.id] = [domainWithInstanceApikbase];
            }
          });
          return acc;
        }, {});
      };

      return getSuitableDomains(seedUrl);
    },
    async changeInstance(selectedNewInstance: any) {
      const { httpGet } = useFetch();
      const { id: domainId, apikbase, instanceId, projectId: id } = selectedNewInstance;
      console.log('setApik', domainId, apikbase, instanceId, id);
      return await httpGet('analyzer_view/setAPIK', {
        params: { id, apikbase, domainId, instanceId }
      });
    },
    async getIssuesOfAllCrawlsByProjectId() {
      this.isLoadingProjects = true;
      const { httpGet } = useFetch();
      await sleep(100);
      const issuesOfAllCrawlsByProject = await httpGet('analyzer_view/analyzer', {
        params: {
          instanceId: this.selectedProject?.id,
          action: 'total',
          what: 'codiciall'
        }
      });
      // HACK: che ogni tanto ci sono del crawl buggati che hanno l'id = 0;
      this.issuesOfAllCrawlsByProjectWithNoZero = issuesOfAllCrawlsByProject;
      this.issuesOfAllCrawlsByProject = omit(['0'], issuesOfAllCrawlsByProject);
      this.isLoadingProjects = false;
    },
    async getStrategySummary(instance: any, domainId: any) {
      this.strategyIsLoading = true;
      this.strategy.summary = null;
      this.strategy.basket = null;
      this.strategy.dates = null;
      this.strategy.competitors = null;
      this.strategy.backlinks = null;
      const { httpGet } = useFetch();
      const summaryPromise = httpGet(
        'keywords_new/summary',
        {
          params: {
            instanceId: instance.instanceId,
            domainId: domainId
          }
        },
        instance.apikbase,
        'strategy'
      )
        .then((res) => {
          if (res.code === 'ERR_BAD_REQUEST' || res.code === 'ERR_BAD_RESPONSE') {
            this.strategy.summary = null;
          } else {
            if (res && res.general && res.general.length > 0) {
              this.strategy.summary = res;
            } else {
              this.strategy.summary = null;
            }
          }
        })
        .catch((err) => {
          console.error(err);
          this.strategy.summary = null;
        });

      const basketPromise = httpGet(
        'keywords_new/basket',
        {
          params: {
            instanceId: instance.instanceId,
            domainId: domainId
          }
        },
        instance.apikbase,
        'strategy'
      )
        .then((res) => {
          if (res.code === 'ERR_BAD_REQUEST' || res.code === 'ERR_BAD_RESPONSE') {
            this.strategy.basket = null;
          } else {
            this.strategy.basket = res;
          }
        })
        .catch((err) => {
          console.error(err);
          this.strategy.basket = null;
        });

      const startegyDatePromise = httpGet(
        'keywords_new/keywords_dates',
        {
          params: {
            instanceId: instance.instanceId,
            domainId: domainId
          }
        },
        instance.apikbase,
        'strategy'
      )
        .then((res) => {
          if (res.code === 'ERR_BAD_REQUEST' || res.code === 'ERR_BAD_RESPONSE') {
            this.strategy.dates = null;
          } else {
            if (res.length > 0) {
              this.strategy.dates = res.map((el: any) => {
                const date = new Date(el);
                return date.toLocaleDateString('it-IT');
              });
            } else {
              this.strategy.dates = null;
            }
          }
        })
        .catch((err) => {
          console.error(err);
          this.strategy.dates = null;
        });

      const competitorsPromise = httpGet(
        'keywords_new/competitors',
        {
          params: {
            instanceId: instance.instanceId,
            domainId: domainId
          }
        },
        instance.apikbase,
        'strategy'
      )
        .then((res) => {
          if (res.code === 'ERR_BAD_REQUEST' || res.code === 'ERR_BAD_RESPONSE') {
            this.strategy.competitors = null;
          } else {
            this.strategy.competitors = res;
          }
        })
        .catch((err) => {
          console.error(err);
          this.strategy.competitors = null;
        });
      const backlinksPromise = httpGet(
        'backlinks_new/summary',
        {
          params: {
            instanceId: instance.instanceId
          }
        },
        instance.apikbase,
        'strategy'
      )
        .then((res) => {
          if (res.code === 'ERR_BAD_REQUEST' || res.code === 'ERR_BAD_RESPONSE') {
            this.strategy.backlinks = null;
          } else {
            this.strategy.backlinks = res;
          }
        })
        .catch((err) => {
          console.error(err);
          this.strategy.backlinks = null;
        });

      try {
        await summaryPromise;
        await basketPromise;
        await startegyDatePromise;
        await competitorsPromise;
        await backlinksPromise;
      } catch (err) {
        console.error(err);
      } finally {
        this.strategyIsLoading = false;
      }
    }
  }
});
