import { defineStore } from 'pinia';
import type { BusinessApi, Business, BusinessStore, Instance } from '@/models';
import useFetch from '@/composables/useFetch';
import { map, zipObj, isNil, filter, not } from 'ramda';
import { useUserStore } from '@/stores/UserStore';
import { useInstanceStore } from './InstanceStore';
import { useNotificationStore } from '@/stores/NotificationStore';

const transformResults = (results: any): (Business | any)[] => {
  // ℹ️ techRestrictions is an object with a property names "filter" which is an array
  // HACK: Have to put let istead of const due to ISSUE#1
  let { businesses }: { businesses: any; techRestrictions: any } = zipObj(
    ['businesses', 'techRestrictions'],
    results
  );
  const { techRestrictions }: { businesses: any; techRestrictions: any } = zipObj(
    ['businesses', 'techRestrictions'],
    results
  );
  const UserStore = useUserStore();

  // HACK: Have to put a guard due to ISSUE#1
  if (not(Array.isArray(businesses))) {
    businesses = [businesses];
  }
  return map(
    (business: BusinessApi) => ({
      id: business?.label ?? 'MISSING_LABEL',
      label: business?.label ?? 'MISSING_LABEL',
      instances: business?.instances,
      isDisabled: isNil(business?.isDisabled) ? false : business.isDisabled,
      users: filter((user) => user.business === business.label, UserStore.users ?? []),
      businessOldApi: business,
      permissions: business?.permissions
        ? JSON.parse(business?.permissions)
        : 'MISSING_PERMISSIONS',
      techRestrictions:
        techRestrictions?.filter?.find((el: any) => el.business === business?.label)?.properties ??
        []
      // techRestrictions:
      //   techRestrictions?.filter?.find((el: any) => el.business === business?.label)?.properties ??
      //   business?.label === 'kleecks'
      //     ? true
      //     : []
    }),
    businesses
  );
};
// TODO: HACK: La gestione di quelle due chiamate non mi piace
// TODO: Il tipo non è BusinessStore ma BusinessState
export const useBusinessStore = defineStore('BusinessStore', {
  state: (): BusinessStore => {
    return {
      businesses: null,
      isLoadingBusinesses: false,
      selectedBusiness: undefined,
      businessToEdit: undefined
    };
  },
  getters: {
    businessesLabels(): (string | undefined)[] {
      return this.businesses?.map((business: Business) => business.label) ?? [];
    },
    businessesIds(): (string | undefined)[] {
      return this.businesses?.map((business: Business) => business.id) ?? [];
    },
    businessInstances(): (Instance | undefined)[] {
      const InstanceStore = useInstanceStore();
      return (
        this.selectedBusiness?.instances?.map((oldInstance) => {
          return InstanceStore.instances?.find(
            (instance) => instance.id === oldInstance.instanceId
          );
        }) ?? []
      );
    }
  },
  actions: {
    async getBusinessesAndUsers(): Promise<void> {
      const NotificationStore = useNotificationStore();
      this.isLoadingBusinesses = true;
      const UserStore = useUserStore();
      const { httpGet } = useFetch();

      try {
        const results = await Promise.all([
          // FIXME: ISSUE#1 This call return {} or [] which is inconsistent
          httpGet('analyzer_view/getClients'),
          httpGet('/seojs3/permissions'),
          UserStore.getUsers()
        ]);

        const start = performance.now();
        this.businesses = transformResults(results);
        const end = performance.now();
        console.log(
          `Execution time transformation businesses: %c ${end - start} ms`,
          'color: #fb923c'
        );
      } catch (err: any) {
        NotificationStore.notify('Unable to get businnesses', err.message, {
          style: 'error'
        });
        // console.error(err);
      } finally {
        this.isLoadingBusinesses = false;
      }
    },
    setSelectedBusiness(business: Business) {
      this.selectedBusiness = business;
    }
  }
});
