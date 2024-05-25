<script setup lang="ts">
import { ref, watchEffect, computed, type Ref } from 'vue';
import { clone } from 'ramda';
import DxTagBox from 'devextreme-vue/tag-box';
import type { Business } from '@/models';
import { useInstanceStore } from '@/stores/InstanceStore';
import { useProjectStore } from '@/stores/ProjectStore';
import useRestrictions from '@/composables/useRestrictions';
import RestrictionsInfo from '@/components/RestrictionsInfo.vue';
const handleCrawlsOnChange = (value: any) => {
  const numberOfProjectsByBusiness =
    ProjectStore.projects?.filter(
      (project) => project.businessesIds?.includes(selectedbusinesses.value.id) ?? []
    )?.length ?? 1;
  value
    ? (newData.value.restrictions.numOfCrawls =
        5 * (numberOfProjectsByBusiness === 0 ? 1 : numberOfProjectsByBusiness))
    : (newData.value.restrictions.numOfCrawls = 0);
};
const writeSeotechOnChange = () => {
  if (newData.value.restrictions['writeSeotech'] === false) {
    restrictionsDescription.forEach((item: any) => {
      if (item.category === 'advanced' && item.id !== 'writeSeotech') {
        newData.value.restrictions[item.id] = false;
      }
    });
  }
};
const { restrictions, restrictionsDescription } = useRestrictions({
  handleCrawlsOnChange,
  writeSeotechOnChange
});
const enableUsersChanges = ref(true);
const ProjectStore = useProjectStore();
const InstanceStore = useInstanceStore();
const emit = defineEmits(['update-business-data', 'enable-users-changes']);
const props = defineProps<{
  businesses: Business[];
}>();
const selectedbusinesses: Ref<Business | Business[] | any> =
  props.businesses.length === 1 ? ref(props.businesses[0]) : ref(clone(props.businesses));
const selectedBusinessUI = computed(() => {
  if (Array.isArray(selectedbusinesses.value)) {
    return selectedbusinesses.value.map((_business: Business) => _business.id);
  } else {
    return selectedbusinesses.value.id;
  }
});

// TODO: questi in realtà sono i dati di default che è possibile cambiare
const dataDefault = {
  restrictions,
  instances: []
};
const newData: any =
  props.businesses.length === 1
    ? ref(
        clone({
          restrictions: props.businesses[0]?.permissions ?? dataDefault.restrictions,
          instances:
            props.businesses[0]?.instances?.map((instance: any) => instance.instanceId) ?? []
        })
      )
    : ref(clone(dataDefault));

watchEffect(() => {
  emit('update-business-data', newData);
});

const restricitonInfoIsOpen = ref(false);
</script>
<template>
  <div>
    <div v-if="newData && newData.restrictions" class="grid items-start gap-8">
      <div class="col-span-full" v-if="newData['instances']">
        <p class="mb-2">
          <BaseTableTitle text="Instances" />
        </p>
        <DxTagBox
          v-model="newData['instances']"
          :items="InstanceStore.instancesIDs"
          :search-enabled="true" />
      </div>
      <div>
        <!-- <h3 class="mb-2 text-gray-500">Restrictions</h3> -->
        <div class="mb-2">
          <BaseTableTitle
            @show-info="restricitonInfoIsOpen = true"
            :info="true"
            text="Restrictions" />
        </div>
        <div class="p-8 space-y-8 border border-gray-200 rounded-sm">
          <template v-for="restricition in restrictionsDescription" :key="restricition.id">
            <BaseCheckBox
              v-if="restricition && restricition.type === 'checkbox'"
              v-model="newData.restrictions[restricition.id]"
              :label="restricition.label"
              :name="restricition.id"
              :help="restricition.description"
              @change="restricition.onChange" />
          </template>
        </div>
      </div>
    </div>
    <div class="mt-8">
      <BaseCheckBox
        v-model="enableUsersChanges"
        v-if="!Array.isArray(selectedBusinessUI)"
        label="Apply changes to all business users restrictions"
        name="enableUsersChanges"
        @change="($event: any) => $emit('enable-users-changes', $event)"
        help="" />
      <div class="mt-8 col-span-full" v-if="Array.isArray(selectedBusinessUI)">
        <p class="mb-2 text-xs text-orange-600 uppercase">WARNING</p>
        <p class="mb-1">
          All these businesses and all their users will be modified with the settings above
        </p>
        <div class="mt-2 text-sm text-gray-500">
          <p v-for="(user, i) in selectedBusinessUI" :key="i">
            {{ user }}
          </p>
        </div>
      </div>
    </div>
    <BaseDialog
      @cancel="restricitonInfoIsOpen = false"
      :open="restricitonInfoIsOpen"
      title="Restriction Documentation"
      just-text
      isLarge>
      <template #default><RestrictionsInfo /></template>
    </BaseDialog>
    <!-- <json-viewer class="mt-1" :value="newData"></json-viewer> -->
  </div>
</template>
