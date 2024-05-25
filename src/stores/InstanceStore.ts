import { defineStore } from 'pinia';
import useFetch from '@/composables/useFetch';
import type { ProjectApi } from '@/models';
import { map, filter, pipe, pluck, reject, includes, zipObj, project, prop, indexBy } from 'ramda';
import { useProjectStore } from '@/stores/ProjectStore';
import { useBusinessStore } from '@/stores/BusinessStore';
import useAuth from '@/composables/useAuth';
import useDomains from '@/composables/useDomains';
import { useNotificationStore } from '@/stores/NotificationStore';
import type { Instance, Project, InstanceStore, Domain } from '@/models';
import { kebabCase } from 'change-case';
import useEntity from '@/composables/useEntity';

import qs from 'qs';
const { getSeoToken } = useAuth();

// const { httpGet, httpPost } = useFetch();
const { setRoot, setLangUI, setDomainListed } = useDomains();
const splitDate = (date: string) => {
  // the date format is Apr 4, 2022 12:16:47 PM, I want to split it in "Apr 4", "2022" and "12:16:47 PM"
  const dateArray = date.split(' ');
  dateArray[1] = dateArray[1].slice(0, -1);
  return {
    monthDay: dateArray[0] + ' ' + dateArray[1],
    year: dateArray[2],
    time: dateArray[3],
    time2: dateArray[4]
  };
};
const transformProjects = (result: ProjectApi[], allInstancesDomains: any): Project[] => {
  return map((_project: ProjectApi) => {
    const projectEl = {
      id: _project?.site?.id ?? 'MISSING ID',
      label: _project?.site?.label ?? 'MISSING LABEL',
      slug: kebabCase(_project?.site?.label ?? 'MISSING Slug'),
      seedUrl: _project?.seeds?.[0] ?? 'MISSING SEED',
      instanceId: _project?.site?.instanceId ?? null,
      domainId: _project?.site?.domainId ?? null,
      businessesIds:
        _project?.site?.client
          ?.split(',')
          ?.filter((businessId: string) => businessId !== 'kleecks') ?? null,
      crawlsTotal: _project?.scans?.length ?? null,
      crawls: indexBy(
        <any>prop('id'),
        _project?.scans.map((item: any) => {
          return {
            id: item.id,
            date: item.scandate,
            dateUI: splitDate(item.scandate ?? ''),
            settings: JSON.parse(item.prefs)
          };
        })
      ),
      status: _project?.runInfo?.status ?? null,
      lastCrawlDate: _project?.scans?.[0]?.scandate
        ? _project?.scans?.[0]?.scandate
        : _project?.runInfo?.status !== 0
          ? new Date().toISOString()
          : null
    };
    if (projectEl.instanceId && allInstancesDomains[projectEl.instanceId]) {
      const projectInstanceDomains = allInstancesDomains[projectEl.instanceId];
      let instanceDomainData = null;
      if (Array.isArray(projectInstanceDomains)) {
        instanceDomainData =
          projectInstanceDomains?.find((_domain: any) => _domain.id === projectEl.domainId) ?? null;
      }
      if (instanceDomainData) {
        return {
          ...projectEl,
          domainData: {
            id: instanceDomainData.id,
            root: setRoot(instanceDomainData),
            langUi: setLangUI(instanceDomainData),
            domainListed: setDomainListed(instanceDomainData)
          }
        };
      } else {
        return projectEl;
      }
    } else {
      return projectEl;
    }
  }, result);
};

const transformInstances = async (results: any): Promise<Instance[]> => {
  const BusinessStore = useBusinessStore();
  const {
    systemInstancesAndDomains,
    enabledInstances,
    projectsApi
  }: {
    systemInstancesAndDomains: any;
    enabledInstances: any;
    projectsApi: any;
  } = zipObj(['systemInstancesAndDomains', 'enabledInstances', 'projectsApi'], results);
  const ProjectStore = useProjectStore();
  const projects = transformProjects(projectsApi, systemInstancesAndDomains.allInstancesDomains);
  // order projects by status: id status === 0 or status === 1 put at the beginning
  const orderedProjects = projects.sort((a, b) => {
    if (a.status === 0 || a.status === 1) {
      return -1;
    }
    if (b.status === 0 || b.status === 1) {
      return 1;
    }
    return 0;
  });
  ProjectStore.projects = orderedProjects;

  return map((systemInstance: any) => {
    // console.log('ciao', systemInstance.instanceId);
    // console.log('ciao', systemInstancesAndDomains.allInstancesDomains);
    if (!Array.isArray(systemInstancesAndDomains.allInstancesDomains[systemInstance.instanceId])) {
      console.error('Errore di sistema', systemInstance.instanceId);
    }
    const projects = filter(
      (project: Project) => project?.instanceId === systemInstance?.instanceId,
      ProjectStore.projects ?? []
    );
    return {
      ...systemInstance,
      id: systemInstance.instanceId,
      label: systemInstance.instanceId,
      apikbase: systemInstance.node + '/SPServices/',
      isEnabled: enabledInstances.includes(systemInstance.instanceId),
      projects: projects.length,
      ...(projects.length > 0 && {
        projectsDetail: filter(
          (project: Project) => project?.instanceId === systemInstance?.instanceId,
          ProjectStore.projects ?? []
        )
      }),
      domains: !Array.isArray(
        systemInstancesAndDomains.allInstancesDomains[systemInstance.instanceId]
      )
        ? []
        : systemInstancesAndDomains.allInstancesDomains[systemInstance.instanceId]?.map(
            (_domainData: any) => {
              return {
                ..._domainData,
                root: setRoot(_domainData),
                langUi: setLangUI(_domainData),
                domainListed: setDomainListed(_domainData)
              };
            }
          ) ?? [],
      businessesIds: pipe(
        filter(
          (businnes: any) =>
            businnes.instances
              .map((instance: any) => instance.instanceId)
              .includes(systemInstance.instanceId) && !businnes.isDisabled
        ),
        <any>pluck('id'),
        reject((instanceId) =>
          includes(instanceId, ['KleecksReports', 'kleecks', 'cancellamidopo'])
        )
      )(BusinessStore.businesses ?? [])
    };
  }, systemInstancesAndDomains.systemInstances) as Instance[];
};

export const useInstanceStore = defineStore('InstanceStore', {
  state: (): InstanceStore => {
    return {
      instances: undefined,
      isLoadingInstances: false,
      isSettingInstance: false,
      selectedInstance: undefined,
      selectedDomain: undefined,
      isInizializingApplication: true
    };
  },

  getters: {
    instancesIDs(): string[] {
      // TODO: Quando setti il progetto corrente ci dovrebbe essere un check che controlla se la forma è corretta
      return this.instances?.map((instance: Instance) => instance.id) ?? [];
    }
  },

  actions: {
    async getInstancesAndProjects() {
      const BusinessStore = useBusinessStore();
      const NotificationStore = useNotificationStore();
      this.isLoadingInstances = true;
      const { httpGet } = useFetch();
      try {
        const results = await Promise.all([
          httpGet('seojs3/getInstances').then(async (systemInstances) => {
            const allInstancesDomains = (await this.getAllInstancesDomains(
              project(['instanceId', 'node'], systemInstances)
            )) as any;
            return { systemInstances, allInstancesDomains };
          }),
          httpGet('seojs3/getEnabledInstances'),
          httpGet('analyzer_view/listScans'),
          BusinessStore.getBusinessesAndUsers()
        ]);

        const start = performance.now();
        this.instances = await transformInstances(results);
        const end = performance.now();
        console.log(
          `Execution time transformation instances: %c ${end - start} ms`,
          'color: #fb923c'
        );
      } catch (err) {
        NotificationStore.notify('Application data error', 'Please contact team dev about this', {
          style: 'error'
        });
        console.error(err);
      } finally {
        this.isLoadingInstances = false;
        this.isInizializingApplication = false;
      }
    },

    async getAllInstancesDomains(instances: { instaceId: string; node: string }[]): Promise<any> {
      const { httpPost } = useFetch();
      try {
        const result = await httpPost('seojs3/getDomains', qs.stringify({ instances }));
        return result;
      } catch (err) {
        console.error(err);
      }
    },

    async setSelectedInstance(instance: Instance) {
      console.log('setSelectedInstance', instance);
      // const NotificationStore = useNotificationStore();
      this.isSettingInstance = true;
      // TODO: metti un controllo di sicurezza per vedere se istance esiste
      try {
        const token = await getSeoToken(instance.instanceId);
        this.selectedInstance = { ...instance, seoToolsToken: token };
      } catch (error) {
        console.error(error);
      } finally {
        this.isSettingInstance = false;
      }
    },

    async cleanCache(instanceId: string, domainId: string) {
      const { cleanEntity } = useEntity();
      cleanEntity({
        currentInstanceId: instanceId,
        entityId: `kw_summary_${domainId}`,
        entityData: '{}',
        time: 0
      });
      cleanEntity({
        currentInstanceId: instanceId,
        entityId: `kw_basket_${domainId}`,
        entityData: '{}',
        time: 0
      });
      cleanEntity({
        currentInstanceId: instanceId,
        entityId: `kw_dates_${domainId}`,
        entityData: '{}',
        time: 0
      });
      cleanEntity({
        currentInstanceId: instanceId,
        entityId: `kw_keywords_${domainId}`,
        entityData: '{}',
        time: 0
      });
      cleanEntity({
        currentInstanceId: instanceId,
        entityId: `kw_keywordsByPage_${domainId}`,
        entityData: '{}',
        time: 0
      });
      cleanEntity({
        currentInstanceId: instanceId,
        entityId: `kw_keywordsCompetitors_${domainId}`,
        entityData: '{}',
        time: 0
      });
      cleanEntity({
        currentInstanceId: instanceId,
        entityId: `kw_keywordsWithCompetitors_${domainId}`,
        entityData: '{}',
        time: 0
      });
      cleanEntity({
        currentInstanceId: instanceId,
        entityId: `kw_searchengines_${domainId}`,
        entityData: '{}',
        time: 0
      });
      cleanEntity({
        currentInstanceId: instanceId,
        entityId: `kw_keywordsToCheck_${domainId}`,
        entityData: '{}',
        time: 0
      });
      cleanEntity({
        currentInstanceId: instanceId,
        entityId: `bl_summary`,
        entityData: '{}',
        time: 0
      });
      cleanEntity({
        currentInstanceId: instanceId,
        entityId: `bl_histsummary`,
        entityData: '{}',
        time: 0
      });
      cleanEntity({
        currentInstanceId: instanceId,
        entityId: `bl_backlinks`,
        entityData: '{}',
        time: 0
      });
      cleanEntity({
        currentInstanceId: instanceId,
        entityId: `bl_refdom`,
        entityData: '{}',
        time: 0
      });
      cleanEntity({
        currentInstanceId: instanceId,
        entityId: `bl_anchors`,
        entityData: '{}',
        time: 0
      });
      cleanEntity({
        currentInstanceId: instanceId,
        entityId: `bl_scores`,
        entityData: '{}',
        time: 0
      });
    },

    setSelectedDomain(domain: Domain) {
      this.selectedDomain = domain;
    },

    async reloadApplicationData() {
      await this.getInstancesAndProjects();
    }
  }
});
