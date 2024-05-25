<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import { useBusinessStore } from '@/stores/BusinessStore';
import { useInstanceStore } from '@/stores/InstanceStore';
import { useNotificationStore } from '@/stores/NotificationStore';
import { useUserStore } from '@/stores/UserStore';
import { useRoute } from 'vue-router';
import useFetch from '@/composables/useFetch';
import PropertiesViewer from '@/components/PropertiesViewer.vue';
import { clone } from 'ramda';
import type { BusinessApi, Instance, User, UserApi } from '@/models';
import useRestrictions from '@/composables/useRestrictions';
import BusinessesRestrictions from '@/components/BusinessesRestrictions.vue';
const InstanceStore = useInstanceStore();
const BusinessStore = useBusinessStore();
const NotificationStore = useNotificationStore();

const route = useRoute();
const items = ref([
  {
    label: 'Businesses',
    routeName: 'Businesses'
  }
]);
onMounted(async () => {
  if (route.params.id && BusinessStore.businesses) {
    const business = BusinessStore.businesses?.find(
      (_business: any) => _business.id === route.params.id
    );
    if (business) {
      BusinessStore.setSelectedBusiness(business);
      BusinessStore.businessToEdit = clone(business) ?? null;
    } else {
      NotificationStore.notify('Business not found', 'Please contact team dev about this', {
        style: 'error'
      });
    }
  }
});

onUnmounted(() => {
  BusinessStore.businessToEdit = undefined;
});
const businessData: any = ref(null);
const enableUsersChanges = ref(true);
const isLoading = ref(false);
const updateBusiness = () => {
  isLoading.value = true;
  const { oldRoles, kleecksOldRoles } = useRestrictions();
  const { httpPost } = useFetch();
  const UserStore = useUserStore();

  const businessesUpdated: any[] = [BusinessStore.businessToEdit].map((business: any): any => {
    return {
      ...business.businessOldApi,
      instances:
        businessData.value.instances?.map((instanceId: string) => {
          const instanceWithRightData: Instance | undefined =
            InstanceStore.instances?.find((_instance: any) => _instance.id === instanceId) ??
            undefined;
          // TODO: Alcune istanze potrebbero non esistere più e quindi metterebbe ABORT
          // Fai un controllo/pulizia delle istanze che non esistono più
          return {
            id: null,
            instanceId: instanceWithRightData?.instanceId ?? `ABORT ${instanceId}`,
            roles: business.id === 'kleecks' ? kleecksOldRoles : oldRoles,
            serverUrl: instanceWithRightData?.node ?? 'ABORT'
          };
        }) ?? business.businessOldApi.instances,
      permissions: JSON.stringify(businessData.value.restrictions)
    };
  });

  businessesUpdated.forEach(async (business: BusinessApi) => {
    if (business.instances.some((instance: any) => instance.instanceId.includes('ABORT'))) {
      const instanceAborted = business.instances.find((instance: any) =>
        instance.instanceId.includes('ABORT')
      );
      console.log('instanceAborted', instanceAborted);
      NotificationStore.notify(
        'Unable to save Business',
        `Instance ${instanceAborted?.instanceId ?? 'missing instanceId'} not found`,
        {
          style: 'error'
        }
      );
      isLoading.value = false;
      return;
    }
    if (business.instances.some((instance: any) => instance.roles === 'ABORT')) {
      NotificationStore.notify('Unable to save Business', 'Roles not found', {
        style: 'error'
      });
      isLoading.value = false;
      return;
    }
    if (business.instances.some((instance: any) => instance.serverUrl === 'ABORT')) {
      NotificationStore.notify('Unable to get save Business', 'ServerUrl not found', {
        style: 'error'
      });
      isLoading.value = false;
      return;
    }

    try {
      // TODO: servono tutte queste chiamate?
      await httpPost(`analyzer_view/postClient`, business);

      NotificationStore.notify('Business Updated', '', {
        style: 'success'
      });
      console.log('ciao', enableUsersChanges.value);
      if (enableUsersChanges.value) {
        const users =
          UserStore.users?.filter((user: any) => user.business === business.label) ?? [];
        const usersUpdated: UserApi[] = users.map((user: User): UserApi => {
          return {
            ...user.userOldApi,
            instances:
              businessData.value.instances?.map((instanceId: string) => {
                const instanceWithRightData: Instance | undefined =
                  InstanceStore.instances?.find((_instance: any) => _instance.id === instanceId) ??
                  undefined;
                return {
                  id: null,
                  instanceId: instanceWithRightData?.instanceId ?? 'ABORT',
                  roles: user.business === 'kleecks' ? kleecksOldRoles : oldRoles,
                  serverUrl: instanceWithRightData?.node ?? 'ABORT'
                };
              }) ?? user.userOldApi.instances,
            permissions: JSON.stringify(businessData.value.restrictions)
          };
        });
        usersUpdated.forEach(async (user: UserApi) => {
          console.log('user', user);
          try {
            await httpPost(`analyzer_view/postUser`, user);
            NotificationStore.notify('User Updated', '', {
              style: 'success'
            });
          } catch (err: any) {
            NotificationStore.notify(
              'Unable to update User - TRY SAVING BUSINESS AGAIN',
              err.message,
              {
                style: 'error'
              }
            );
          } finally {
            // isLoading.value = false;
          }
        });
      }
    } catch (err: any) {
      NotificationStore.notify('Unable to save Business', err.message, {
        style: 'error'
      });
    } finally {
      await BusinessStore.getBusinessesAndUsers();
      await InstanceStore.getInstancesAndProjects();
      if (route.params.id && BusinessStore.businesses) {
        const business = BusinessStore.businesses?.find(
          (_business: any) => _business.id === route.params.id
        );
        if (business) {
          BusinessStore.setSelectedBusiness(business);
          BusinessStore.businessToEdit = clone(business) ?? null;
        } else {
          NotificationStore.notify('Business not found', 'Please contact team dev about this', {
            style: 'error'
          });
        }
      }
      isLoading.value = false;
    }
  });
};
</script>
<template>
  <div class="grid grid-cols-12">
    <div
      v-if="
        InstanceStore.isLoadingInstances || InstanceStore.isInizializingApplication || isLoading
      "
      class="col-span-full">
      <BaseApplicationLoader />
    </div>
    <div v-else-if="InstanceStore.instances && BusinessStore.businessToEdit" class="col-span-full">
      <BaseBreadcrumb
        :title="BusinessStore.businessToEdit.label"
        action="Edit"
        :items="items"
        :resource="{
          name: 'Business',
          slug: BusinessStore.businessToEdit.slug
        }" />

      <div class="p-4 xl:p-8" v-if="BusinessStore.businessToEdit">
        <BaseTabs>
          <BaseTab class="" title="Restrictions">
            <div class="max-w-[800px]">
              <!-- {{ businessData }} -->
              <div class="mt-12">
                <BusinessesRestrictions
                  :businesses="BusinessStore.businessToEdit ? [BusinessStore.businessToEdit] : []"
                  @updateBusinessData="
                    ($event: any) => {
                      businessData = $event.value;
                    }
                  "
                  @enableUsersChanges="
                    ($event: any) => {
                      enableUsersChanges = $event;
                    }
                  " />
                <BaseButton class="mt-16" @click="updateBusiness" kind="primary">
                  Update Business
                </BaseButton>
              </div>
            </div>
          </BaseTab>
          <BaseTab
            class=""
            title="Properties Allowed"
            :disabled="businessData && !businessData.restrictions.writeSeotech">
            <div class="mt-12">
              <PropertiesViewer />
            </div>
          </BaseTab>
          <BaseTab class="" title="Name">
            <div class="mt-12 space-y-8 max-w-[800px]">
              <BaseTextInput
                v-model="BusinessStore.businessToEdit.label"
                disabled
                label="Label"
                type="text"
                help="Label cannot be changed"
                placeholder="" />
              <BaseTextInput
                v-model="BusinessStore.businessToEdit.businessOldApi.ragsoc"
                label="Name"
                type="text"
                placeholder="" />
              <BaseButton class="mt-16" @click="updateBusiness" kind="primary">
                Update Business
              </BaseButton>
            </div>
          </BaseTab>
        </BaseTabs>
      </div>
      <!-- <BaseTab class="" title="Raw Info">
            <div class="mt-12 max-w-[800px]">
              <json-viewer :value="BusinessStore.businessToEdit"></json-viewer>
              <json-viewer :value="BusinessStore.selectedBusiness"></json-viewer>
            </div>
          </BaseTab> -->
    </div>
    <div v-else class="col-span-full">
      <BaseBreadcrumb title="Error" :items="items" />
    </div>
  </div>
</template>
