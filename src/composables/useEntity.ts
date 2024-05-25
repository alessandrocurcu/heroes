const instanceId = 'KleecksDev';
import useFetch from '@/composables/useFetch';
import { useInstanceStore } from '@/stores/InstanceStore';
import { head } from 'ramda';
import type { Entity } from '@/models';
import qs from 'qs';
import { ref } from 'vue';

const systemEntities = ['TECH_ISSUES', 'TECH_ACTIVITIES', 'TECH_PROPERTIES_LIST_2'];
const isLoadingEntity = ref(false);
const hasError = ref(false);
// instanceId e qs potrebbero essere inseriti dinamicamente? qs quasi sicuramentem anzi magari spostandolo in usefetch
export default function useEntity() {
  const InstanceStore = useInstanceStore();
  const { httpGet, httpPost } = useFetch();
  isLoadingEntity.value = true;
  const getEntity = async ({
    entityId,
    instanceId,
    time
  }: {
    entityId: string;
    instanceId?: string;
    time?: number; // If It's 0 return the last entity state, by defualt is 0
  }) => {
    try {
      const entityResponse: Entity[] = await httpGet('analyzer_view/getSeotech', {
        params: {
          instanceId: systemEntities.includes(entityId)
            ? 'KleecksDev'
            : InstanceStore.selectedInstance?.instanceId ?? instanceId,
          code: entityId,
          time
        }
      });
      // FIXME: ISSUE#2 The value returned is [] or [{}: Entity]
      // HACK: Guard due to ISSUE#2
      return head(entityResponse); // If the array is empty return undefined
    } catch (error) {
      hasError.value = true;
    } finally {
      isLoadingEntity.value = false;
    }
  };

  const postEntity = async ({
    currentInstanceId,
    entityId,
    entityData,
    time
  }: {
    currentInstanceId?: string;
    entityId: string;
    entityData: any;
    time?: number;
  }) => {
    const preparedEntityData = JSON.stringify({
      who: 'System',
      when: new Date().toUTCString(),
      data: entityData
    });

    const params: any = {
      instanceId: currentInstanceId ? currentInstanceId : instanceId,
      code: entityId,
      json: preparedEntityData
    };

    await httpPost('analyzer_view/setSeotech', qs.stringify(params));
  };
  const cleanEntity = async ({
    currentInstanceId,
    entityId,
    entityData,
    time
  }: {
    currentInstanceId?: string;
    entityId: string;
    entityData: any;
    time?: number;
  }) => {
    const params: any = {
      instanceId: currentInstanceId ? currentInstanceId : instanceId,
      code: entityId,
      json: entityData
    };

    if (time) {
      params['ash_id'] = time;
      params['cas'] = false;
    }

    await httpPost('analyzer_view/setSeotech', qs.stringify(params));
  };

  return {
    getEntity,
    postEntity,
    cleanEntity,
    isLoadingEntity,
    hasError
  };
}
