<script setup lang="ts">
import { usePropertyStore } from '@/stores/PropertyStore';
import { useBusinessStore } from '@/stores/BusinessStore';
import { useRoute } from 'vue-router';
import { computed, onMounted, ref } from 'vue';
const route = useRoute();
const BusinessStore = useBusinessStore();
const businnessPropertiesAllowed: any = ref({
  properties: [],
  user: null,
  profile: null,
  business: null
});
onMounted(async () => {
  if (route.params.id && BusinessStore.businesses) {
    const business = BusinessStore.businesses?.find(
      (_business: any) => _business.id === route.params.id
    );
    if (business) {
      await PropertyStore.getPropertiesAllowed();
      businnessPropertiesAllowed.value = PropertyStore.propertiesAllowed?.['filter'].find(
        (item: any) => {
          return item.business === BusinessStore.businessToEdit?.label;
        }
      ) ?? {
        properties: [],
        user: null,
        profile: null,
        business: BusinessStore.businessToEdit?.label
      };
    }
  }
});
const PropertyStore = usePropertyStore();
const copyFromAnotherBusiness = ref(false);

const addPropertiesByTopic = (topic: any) => {
  const properties = PropertyStore.propertiesIndexedByTopic[topic];
  properties.forEach((property: any) => {
    if (!businnessPropertiesAllowed.value.properties.includes(property.propertyId)) {
      businnessPropertiesAllowed.value.properties.push(property.propertyId);
    }
  });
};

const removePropertiesByTopic = (topic: any) => {
  const properties = PropertyStore.propertiesIndexedByTopic[topic];
  properties.forEach((property: any) => {
    if (businnessPropertiesAllowed.value.properties.includes(property.propertyId)) {
      businnessPropertiesAllowed.value.properties =
        businnessPropertiesAllowed.value.properties.filter(
          (propertyId: any) => propertyId !== property.propertyId
        );
    }
  });
};

const addProperty = (propertyId: any) => {
  if (businnessPropertiesAllowed.value) {
    businnessPropertiesAllowed.value.properties.push(propertyId);
  }
};

const removeProperty = (propertyId: any) => {
  if (businnessPropertiesAllowed.value) {
    businnessPropertiesAllowed.value.properties =
      businnessPropertiesAllowed.value.properties.filter(
        (property: any) => property !== propertyId
      );
  }
};

const updateAccessToProperties = () => {
  PropertyStore.updateBusinessesAccessToSeoTech(businnessPropertiesAllowed.value);
};

const propertiesAllowedFromAnotherBusiness = ref(null);

const copyProperties = (business: any) => {
  const tmp = PropertyStore.propertiesAllowed?.['filter'].find((item: any) => {
    console.log('item', item.business, business.id);
    return item.business === business.id;
  });
  propertiesAllowedFromAnotherBusiness.value = tmp?.properties ?? [];
};

const applyProperties = () => {
  businnessPropertiesAllowed.value.properties = propertiesAllowedFromAnotherBusiness.value;
};
const selectedBusinnessToCopy: any = ref(null);

const businessesPropertiesIds = computed(() => {
  return PropertyStore.propertiesAllowed?.['filter'].map((item: any) => {
    return {
      id: item.business ?? 'no',
      label: item.business ?? 'no'
    };
  });
});
</script>
<template>
  <div>
    <div class="mb-12" v-if="businessesPropertiesIds">
      <div class="mb-4">
        <BaseCheckBox
          label="Copy configuration from another business"
          help="You can use this option to speed up the configuration process"
          v-model="copyFromAnotherBusiness" />
      </div>
      <div v-if="copyFromAnotherBusiness">
        <BaseCombobox
          label="Business"
          help=""
          name="changeBusiness"
          v-model="selectedBusinnessToCopy"
          :items="businessesPropertiesIds"
          @change="copyProperties" />

        <div
          v-if="propertiesAllowedFromAnotherBusiness && selectedBusinnessToCopy"
          class="mt-4 text-xs prose">
          {{ propertiesAllowedFromAnotherBusiness }}
          <div class="mt-4">
            <BaseButton @click="applyProperties" kind="tertiary">
              Copy Properties from {{ selectedBusinnessToCopy.label }} to
              {{ selectedBusinnessToCopy.label }}</BaseButton
            >
          </div>
        </div>
      </div>
    </div>
    <!-- <p class="mt-8 mb-8 text-xs uppercase">business </p> -->
    <!-- ciao {{ businnessPropertiesAllowed }} -->
    <div class="gap-6 space-y-6 columns-2 lg:columns-3 xl:columns-4">
      <div
        class="p-4 border border-gray-200 rounded-md shadow-md bg-gray-50"
        v-for="(properties, topic) in PropertyStore.propertiesIndexedByTopic"
        :key="topic">
        <div
          @click="
            properties.some(
              (property: any) =>
                !businnessPropertiesAllowed?.properties?.includes(property.propertyId)
            )
              ? addPropertiesByTopic(topic)
              : removePropertiesByTopic(topic)
          "
          :class="{
            'hover:text-indigo-500 hover:bg-indigo-100': properties.some(
              (property: any) =>
                !businnessPropertiesAllowed?.properties?.includes(property.propertyId)
            ),
            'hover:text-red-500 hover:bg-red-100': properties.every((property: any) =>
              businnessPropertiesAllowed?.properties?.includes(property.propertyId)
            )
          }"
          class="flex items-center mb-4 rounded-md cursor-pointer group">
          <BaseIcon
            v-show="
              properties.some(
                (property: any) =>
                  !businnessPropertiesAllowed?.properties?.includes(property.propertyId)
              )
            "
            class="hidden w-4 h-4 mr-1 rounded-md group-hover:inline hover:bg-indigo-100 hover:text-indigo-800"
            name="PlusIcon" />
          <span
            class="mr-1"
            v-show="
              properties.every((property: any) =>
                businnessPropertiesAllowed?.properties?.includes(property.propertyId)
              )
            ">
            –
          </span>
          <h3 class="text-sm font-medium">{{ topic }}</h3>
        </div>
        <div
          :class="{
            'text-red-500': businnessPropertiesAllowed?.properties?.includes(property.propertyId)
          }"
          class="text-gray-700 px-1 py-0.5 -mx-1 text-xs cursor-pointer group"
          v-for="property in properties"
          :key="property.id">
          <div
            @click="
              !businnessPropertiesAllowed?.properties?.includes(property.propertyId)
                ? addProperty(property.propertyId)
                : removeProperty(property.propertyId)
            "
            :class="
              !businnessPropertiesAllowed?.properties?.includes(property.propertyId)
                ? 'group-hover:text-indigo-500 group-hover:bg-indigo-100'
                : 'group-hover:text-red-500 group-hover:bg-red-100'
            "
            class="flex items-center rounded-md">
            <BaseIcon
              v-show="!businnessPropertiesAllowed?.properties?.includes(property.propertyId)"
              class="hidden w-4 h-4 mr-1 rounded-md group-hover:inline hover:bg-indigo-100 hover:text-indigo-800"
              name="PlusIcon" />
            <span
              class="mr-1"
              v-show="businnessPropertiesAllowed?.properties?.includes(property.propertyId)">
              –
            </span>
            <p class="truncate">
              {{ property.propertyId }}
            </p>
          </div>
        </div>
      </div>
      <div class="p-4 border border-indigo-300 rounded-md shadow-md bg-indigo-50">
        <h3 class="mb-4 text-sm font-medium text-indigo-900">Current Properties Allowed</h3>
        <ul class="text-xs text-gray-700">
          <li v-for="(property, i) in businnessPropertiesAllowed.properties" :key="i">
            {{ property }}
          </li>
        </ul>
      </div>
    </div>

    <div class="mt-16 w-[500px]">
      <BaseButton @click="updateAccessToProperties" kind="primary">
        Update Access to Properties
      </BaseButton>
    </div>
  </div>
</template>
