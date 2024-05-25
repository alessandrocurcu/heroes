import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useRouter } from 'vue-router';
export default function useResources(resourceList: any = null) {
  const router = useRouter();
  const route = useRoute();
  const selectedResource: any = ref(null);
  const sidebarIsOpen = ref(false);
  onMounted(async () => {
    const id = route.params.instanceId ?? route.params.id;
    if (id && resourceList) {
      const resource = resourceList.find((_resource: any) => _resource.id === id);
      selectResource(resource);
    }
  });
  function selectResource(resource: any) {
    sidebarIsOpen.value = true;
    selectedResource.value = resource;
  }

  const crudActionDispatcher = (action: string, resourceName: string) => {
    switch (action) {
      case 'create':
        router.push({
          name: `${resourceName}New`
        });
        break;
    }
  };

  return {
    selectResource,
    crudActionDispatcher,
    selectedResource,
    sidebarIsOpen
  };
}
