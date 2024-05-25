<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useInstanceStore } from '@/stores/InstanceStore';
import { useRoute } from 'vue-router';
import ProjectsTable from '@/components/ProjectsTable.vue';
import DomainsTable from '@/components/DomainsTable.vue';
import { useNotificationStore } from '@/stores/NotificationStore';
import InstanceInfo from '@/components/InstanceInfo.vue';
const InstanceStore = useInstanceStore();
const route = useRoute();
const NotificationStore = useNotificationStore();
const items = ref([
  {
    label: 'Instances',
    routeName: 'Instances'
  }
]);

onMounted(async () => {
  if (route.params.id && InstanceStore.instances) {
    const instance = InstanceStore.instances?.find(
      (_instance: any) => _instance.id === route.params.id
    );
    if (instance) {
      InstanceStore.setSelectedInstance(instance);
    } else {
      NotificationStore.notify('Instance not found', 'Please contact team dev about this', {
        style: 'error'
      });
    }
  }
});
const instanceInfoIsOpen = ref(false);
</script>
<template>
  <div class="grid grid-cols-12">
    <div
      v-if="InstanceStore.isLoadingInstances || InstanceStore.isInizializingApplication"
      class="col-span-full">
      <BaseApplicationLoader />
    </div>
    <div
      v-else-if="InstanceStore.instances && InstanceStore.selectedInstance"
      class="col-span-full">
      <BaseBreadcrumb :title="InstanceStore.selectedInstance.label" :items="items" />
      <div class="grid grid-cols-3 gap-8 p-8">
        <div>
          <div>
            <BaseTableTitle
              class="mt-2 mb-3"
              text="Base Info"
              @show-info="instanceInfoIsOpen = true"
              :info="true" />
            <div class="p-8 space-y-8 border border-gray-200 rounded-sm">
              <div class="space-y-0.5 text-sm">
                <p><span class="mr-2 font-bold">id</span>{{ InstanceStore.selectedInstance.id }}</p>
                <p>
                  <span class="mr-2 font-bold">server</span
                  >{{ InstanceStore.selectedInstance.node }}
                </p>
                <p>
                  <span class="mr-2 font-bold">businnesses</span>
                  <span
                    v-if="
                      InstanceStore.selectedInstance.businessesIds &&
                      InstanceStore.selectedInstance.businessesIds.length > 0
                    ">
                    <span
                      class="space-x-2"
                      v-for="(owner, i) in InstanceStore.selectedInstance.businessesIds"
                      :key="i + owner">
                      <BaseTableInternalLink
                        as="span"
                        resource="Business"
                        underlined
                        :resourceId="owner" />
                    </span>
                  </span>
                  <span class="text-orange-600" v-else> N/D </span>
                </p>
                <p>
                  <span class="mr-2 font-bold">is enabled?</span
                  >{{ InstanceStore.selectedInstance.isEnabled }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="grid col-span-2 gap-12 kl-table-inpage">
          <DomainsTable :domains="InstanceStore.selectedInstance?.domains ?? []" />
          <ProjectsTable
            internal-type="instance"
            :projects="InstanceStore.selectedInstance?.projectsDetail ?? []" />
        </div>
      </div>
      <div>
        <!-- <json-viewer
          :value="
            InstanceStore.selectedInstance.domains?.filter((domain) => domain.subfolder === 'IT/it')
          "></json-viewer> -->
        <!-- <json-viewer :value="InstanceStore.selectedInstance"></json-viewer> -->
      </div>
    </div>
    <div v-else class="col-span-full">
      <BaseBreadcrumb title="Error" :items="items" />
      <div>
        <json-viewer :value="InstanceStore.selectedInstance"></json-viewer>
      </div>
    </div>
    <BaseDialog
      @cancel="instanceInfoIsOpen = false"
      :open="instanceInfoIsOpen"
      title="Instances Documentation"
      just-text
      isLarge>
      <template #default><InstanceInfo /></template>
    </BaseDialog>
  </div>
</template>
