<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useBusinessStore } from '@/stores/BusinessStore';
import { useInstanceStore } from '@/stores/InstanceStore';
import { useNotificationStore } from '@/stores/NotificationStore';
import { useRoute, useRouter } from 'vue-router';
import InstancesTable from '@/components/InstancesTable.vue';
import UsersTable from '@/components/UsersTable.vue';
import RestrictionsInfo from '@/components/RestrictionsInfo.vue';
const InstanceStore = useInstanceStore();
const BusinessStore = useBusinessStore();
const NotificationStore = useNotificationStore();
const route = useRoute();
const router = useRouter();
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
    } else {
      NotificationStore.notify('Business not found', 'Please contact team dev about this', {
        style: 'error'
      });
    }
  }
});

const restricitonInfoIsOpen = ref(false);
</script>
<template>
  <div class="grid grid-cols-12">
    <div
      v-if="InstanceStore.isLoadingInstances || InstanceStore.isInizializingApplication"
      class="col-span-full">
      <BaseApplicationLoader />
    </div>
    <div
      v-else-if="InstanceStore.instances && BusinessStore.selectedBusiness"
      class="col-span-full">
      <BaseBreadcrumb :title="BusinessStore.selectedBusiness.label" :items="items">
        <div class="w-200px">
          <BaseButton
            kind="primary"
            size="sm"
            icon="PencilSquareIconOutline"
            :disabled="false"
            @click="router.push({ name: 'BusinessEdit' })">
            Edit
          </BaseButton>
        </div>
      </BaseBreadcrumb>
      <div class="grid grid-cols-3 gap-8 p-8">
        <div class="space-y-12">
          <div>
            <BaseTableTitle class="mt-2 mb-3" text="Base Info" />
            <div class="p-8 space-y-8 border border-gray-200 rounded-sm">
              <div class="space-y-0.5 text-sm">
                <p><span class="mr-2 font-bold">id</span>{{ BusinessStore.selectedBusiness.id }}</p>
                <p>
                  <span class="mr-2 font-bold">name</span
                  >{{ BusinessStore.selectedBusiness.businessOldApi.ragsoc }}
                </p>
              </div>
            </div>
          </div>
          <div>
            <p class="mt-2 mb-3">
              <BaseTableTitle
                @show-info="restricitonInfoIsOpen = true"
                :info="true"
                text="Restrictions" />
            </p>
            <div class="p-8 space-y-8 border border-gray-200 rounded-sm">
              <div class="space-y-0.5 text-sm">
                <p>
                  <span
                    :class="
                      BusinessStore.selectedBusiness.permissions.handleCrawls
                        ? 'text-green-600'
                        : 'text-red-600'
                    "
                    class="mr-2 font-bold"
                    >Run Audit</span
                  >{{ BusinessStore.selectedBusiness.permissions.handleCrawls ?? false }}
                </p>
                <p>
                  <span
                    :class="
                      BusinessStore.selectedBusiness.permissions.accessibility
                        ? 'text-green-600'
                        : 'text-red-600'
                    "
                    class="mr-2 font-bold"
                    >Accessibility</span
                  >{{ BusinessStore.selectedBusiness.permissions.accessibility ?? false }}
                </p>
                <p>
                  <span
                    :class="
                      BusinessStore.selectedBusiness.permissions.onlyStrategy
                        ? 'text-green-600'
                        : 'text-red-600'
                    "
                    class="mr-2 font-bold"
                    >Only Strategy</span
                  >{{ BusinessStore.selectedBusiness.permissions.onlyStrategy ?? false }}
                </p>
                <p>
                  <span
                    :class="
                      BusinessStore.selectedBusiness.permissions.JakalaMSC
                        ? 'text-green-600'
                        : 'text-red-600'
                    "
                    class="mr-2 font-bold"
                    >Jakala MSC</span
                  >{{ BusinessStore.selectedBusiness.permissions.JakalaMSC ?? false }}
                </p>
                <p>
                  <span
                    :class="
                      BusinessStore.selectedBusiness.permissions.contentGeneration
                        ? 'text-green-600'
                        : 'text-red-600'
                    "
                    class="mr-2 font-bold"
                    >Content Generation</span
                  >{{ BusinessStore.selectedBusiness.permissions.contentGeneration ?? false }}
                </p>
                <p>
                  <span
                    :class="
                      BusinessStore.selectedBusiness.permissions.aiKeywordResearch
                        ? 'text-green-600'
                        : 'text-red-600'
                    "
                    class="mr-2 font-bold"
                    >AI Keyword Research</span
                  >{{ BusinessStore.selectedBusiness.permissions.aiKeywordResearch ?? false }}
                </p>
                <p>
                  <span
                    :class="
                      BusinessStore.selectedBusiness.permissions.writeSeotool
                        ? 'text-green-600'
                        : 'text-red-600'
                    "
                    class="mr-2 font-bold"
                    >Access Seo Tool</span
                  >{{ BusinessStore.selectedBusiness.permissions.writeSeotool ?? false }}
                </p>
                <p>
                  <span
                    :class="
                      BusinessStore.selectedBusiness.permissions.writeSeotech
                        ? 'text-green-600'
                        : 'text-red-600'
                    "
                    class="mr-2 font-bold"
                    >Access Seo Tech</span
                  >{{ BusinessStore.selectedBusiness.permissions.writeSeotech ?? false }}
                </p>
                <p>
                  <span
                    :class="
                      BusinessStore.selectedBusiness.label === 'kleecks' ||
                      (BusinessStore.selectedBusiness.techRestrictions &&
                        BusinessStore.selectedBusiness.techRestrictions?.length > 0)
                        ? 'text-green-600'
                        : 'text-red-600'
                    "
                    class="mr-2 font-bold"
                    >Properties allowed</span
                  >{{
                    BusinessStore.selectedBusiness.label === 'kleecks'
                      ? ' all'
                      : BusinessStore.selectedBusiness.techRestrictions?.length > 0
                        ? BusinessStore.selectedBusiness.techRestrictions?.length
                        : 'none'
                  }}
                </p>
              </div>
            </div>
          </div>
          <div>
            <BaseTableTitle class="mt-2 mb-3" text="Raw Data" />
            <div class="p-8 space-y-8 border border-gray-200 rounded-sm">
              <json-viewer :value="BusinessStore.selectedBusiness"></json-viewer>
            </div>
          </div>
        </div>
        <div class="grid col-span-2 gap-12 kl-table-inpage">
          <InstancesTable
            internal-type="instance"
            :instances="BusinessStore.businessInstances ?? []" />
          <UsersTable internal-type="user" :users="BusinessStore.selectedBusiness.users ?? []" />
        </div>
        <!-- <json-viewer :value="BusinessStore.selectedBusiness"></json-viewer> -->
      </div>
      <BaseDialog
        @cancel="restricitonInfoIsOpen = false"
        :open="restricitonInfoIsOpen"
        title="Restriction Documentation - draft 08/02/2024"
        just-text
        isLarge>
        <template #default><RestrictionsInfo /></template>
      </BaseDialog>
    </div>
    <div v-else class="col-span-full">
      <BaseBreadcrumb title="Error" :items="items" />
    </div>
  </div>
</template>
