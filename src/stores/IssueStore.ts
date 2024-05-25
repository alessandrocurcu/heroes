import { defineStore } from 'pinia';
import useFetch from '@/composables/useFetch';
import useEntity from '@/composables/useEntity';
import { useNotificationStore } from '@/stores/NotificationStore';
import { issuesList } from '@/data/issuesList.js';
import { kebabCase } from 'change-case';
import { map, filter, compose } from 'ramda';
import type { Issue, IssueStore, IssueApi } from '@/models';
// const NotificationStore = useNotificationStore();
// const { httpGet, httpPost } = useFetch();

const transformFrom = (result: any | IssueApi[]): Issue[] => {
  return compose(
    map((issue: IssueApi) => ({
      id: issue?.id ?? 'MISSING ID',
      label: issue?.name ?? 'MISSING LABEL',
      howtofix: issue?.howtofix ?? 'MISSING HOW TO FIX',
      type: issue?.level ?? 'MISSING TYPE',
      // activites: issue?.activities ?? 'MISSING ACTIVITIES',
      schema: issue?.schema ?? 'MISSING SCHEMA',
      // paramLabel: paramCase(issue?.name ?? 'MISSING LABEL'),
      slug: kebabCase(issue?.name ?? 'MISSING LABEL'),
      level: issue?.level ?? 'MISSING LEVEL',
      // category: issue?.category?.join(', ') ?? '',
      shortDescription: issue?.descr ?? 'MISSING SHORT DESCRIPTION'
      // md: `${issue.id ?? 'nd'}.md`
    })),
    filter((issue: IssueApi) => !issue?.name?.includes('(PM)'))
  )(result);
};

const tranformTo = (issues: Issue[]): IssueApi[] => {
  return map(
    (issue: Issue) => ({
      id: issue?.id ?? 'MISSING ID',
      coderr: issue?.id ?? 'MISSING ID',
      howtofix: issue?.howtofix ?? 'MISSING HOW TO FIX',
      level: issue?.level ?? 'MISSING LEVEL',
      activities: issue?.activities ?? [],
      schema: issue?.schema ?? [],
      name: issue?.label ?? 'MISSING LABEL',
      descr: issue?.shortDescription ?? 'MISSING SHORT DESCRIPTION',
      category: issue?.category?.split(', ') ?? []
    }),
    issues
  );
};
export const useIssueStore = defineStore('IssueStore', {
  state: (): any => {
    return {
      issues: transformFrom(issuesList ?? []),
      isLoadingIssues: false,
      selectedIssue: undefined
    };
  },
  getters: {
    issuesGroupedByCodeerr(): any {
      return this.issues.reduce((acc: any, issue: any) => {
        const codeerr = issue.id;
        if (!acc[codeerr]) {
          acc[codeerr] = [];
        }
        acc[codeerr].push(issue);
        return acc;
      }, {});
    }
  },
  actions: {
    setIssues(issues: any) {
      this.issues = issues;
    },
    setSelectedIssue(issue: any) {
      this.selectedIssue = issue;
    },
    async uploadIssues() {
      this.isLoadingIssues = true;
      const { postEntity, getEntity } = useEntity();
      try {
        await postEntity({
          entityId: 'TECH_ISSUES',
          entityData: tranformTo(this.issues)
        });
      } catch (err) {
        console.error(err);
      } finally {
        this.isLoadingIssues = false;
      }
    }
  }
});
