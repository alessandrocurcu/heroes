import { defineStore } from 'pinia';
import useFetch from '@/composables/useFetch';
import useEntity from '@/composables/useEntity';
import { propertiesList } from '@/data/propertiesList';
import { rulesActionsManifest } from '@/data/rulesActionsManifest';
import { kebabCase } from 'change-case';
import { toRaw } from 'vue';
import { prop, map, groupBy, compose } from 'ramda';

const transformFrom = (result: any[]): any[] => {
  return compose(
    map((property: any) => ({
      id: property?.id ?? 'MISSING ID',
      propertyId: property?.propertyId ?? 'MISSING PROPERTY ID',
      name: property?.name ?? 'MISSING NAME',
      nameFile: property?.nameFile ?? 'MISSING NAME FILE',
      slug: kebabCase(property?.name ?? 'MISSING NAME'),
      description: property?.description ?? '',
      topic: property?.topic ?? '',
      type: property?.type ?? '',
      seojs3: property?.seojs3 ?? false,
      note: property?.note ?? '',
      copy: property?.copy ?? false,
      oldPath: property?.oldPath ?? ''
    }))
  )(result);
};

export const usePropertyStore = defineStore('PropertyStore', {
  state: (): any => {
    return {
      properties: transformFrom(propertiesList ?? []),
      rulesActionsManifest,
      propertiesAllowed: null,
      isLoadingProperties: false
    };
  },
  getters: {
    propertiesIndexedByTopic(): any {
      return groupBy(prop('topic') as any, this.properties);
    },
    propertiesTopics(): any {
      return Object.keys(this.propertiesIndexedByTopic);
    },
    propertiesWithoutTopic(): any {
      return this.properties.filter((property: any) => !property.topic);
    }
  },
  actions: {
    // Questo carica PropertiesList nel CouchDB: serve per configurare il SEO Tech ed è tra le cose più importanti
    async uploadProperties() {
      const { postEntity } = useEntity();
      this.isLoadingProperties = true;
      try {
        await postEntity({
          entityId: 'TECH_PROPERTIES_LIST_2',
          entityData: this.properties
        });
      } catch (err) {
        console.error(err);
      } finally {
        this.isLoadingProperties = false;
      }
    },
    // Questo carica i rulesActionsManifest nel CouchDB: serve per configurare le azioni HTML del Source Editor ed è tra le cose più importanti
    async uploadEditorsActions() {
      const { postEntity } = useEntity();
      this.isLoadingProperties = true;
      try {
        await postEntity({
          entityId: 'TECH_EDITORS_ACTIONS',
          entityData: this.rulesActionsManifest
        });
      } catch (err) {
        console.error(err);
      } finally {
        this.isLoadingProperties = false;
      }
    },
    // Questo ritorna le proprietà SEO TECH che sono accessibili ai vari Business
    async getPropertiesAllowed() {
      const { httpGet, httpPost } = useFetch();
      this.isLoadingProperties = true;
      try {
        const result = await httpGet('/seojs3/permissions');
        this.propertiesAllowed = result;
        console.log('risultato properies allowed', this.propertiesAllowed);
      } catch (err) {
        console.error(err);
      } finally {
        this.isLoadingProperties = false;
      }
    },
    // Questo serve per stabilire quali proprietà SEO TECH sono accessibili ai vari business
    async updateBusinessesAccessToSeoTech(businessPropertiesAllowed: any) {
      const { httpPost } = useFetch();
      const businnessToEditId = businessPropertiesAllowed.business;
      if (
        this.propertiesAllowed['filter'].find(
          (business: any) => business.business === businnessToEditId
        )
      ) {
        const index = this.propertiesAllowed['filter'].findIndex(
          (business: any) => business.business === businnessToEditId
        );
        this.propertiesAllowed['filter'][index] = businessPropertiesAllowed;
      } else {
        this.propertiesAllowed['filter'].push(businessPropertiesAllowed);
      }
      this.isLoadingProperties = true;
      try {
        console.log('Proprietà permesse da caricare', toRaw(this.propertiesAllowed));
        const result = await httpPost('/seojs3/permissions', toRaw(this.propertiesAllowed));
        console.log('risultato', result);
      } catch (err) {
        console.error(err);
      } finally {
        this.isLoadingProperties = false;
      }
    }
  }
});
