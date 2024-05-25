<script setup lang="ts">
import { useNotificationStore } from '@/stores/NotificationStore';
import { useInstanceStore } from '@/stores/InstanceStore';
import { useProjectStore } from '@/stores/ProjectStore';
import { useBusinessStore } from '@/stores/BusinessStore';
import { usePropertyStore } from '@/stores/PropertyStore';
import { useUserStore } from '@/stores/UserStore';
import { clone, isNil } from 'ramda';
import { useRoute } from 'vue-router';
import { onMounted } from 'vue';
import { sleep } from './utils';
const NotificationStore = useNotificationStore();

onMounted(async () => {
  const route = useRoute();
  await sleep(1000);
  if (route?.name === 'Login') {
    return;
  }
  const InstanceStore = useInstanceStore();
  const ProjectStore = useProjectStore();
  const BusinessStore = useBusinessStore();
  const UserStore = useUserStore();
  const PropertyStore = usePropertyStore();
  if (isNil(InstanceStore.instances) && !InstanceStore.isLoadingInstances) {
    await InstanceStore.getInstancesAndProjects();
  }
  const id = route.params.id;
  switch (route.name) {
    case 'SeoTech':
      if (id && InstanceStore.instances) {
        const instance = InstanceStore.instances?.find((_instance: any) => _instance.id === id);
        if (instance) {
          InstanceStore.setSelectedInstance(instance);
        } else {
          NotificationStore.notify('Instance not found', 'Please contact team dev about this', {
            style: 'error'
          });
        }
      }
      break;
    case 'Instance':
      if (id && InstanceStore.instances) {
        const instance = InstanceStore.instances?.find((_instance: any) => _instance.id === id);
        if (instance) {
          InstanceStore.setSelectedInstance(instance);
        } else {
          NotificationStore.notify('Instance not found', 'Please contact team dev about this', {
            style: 'error'
          });
        }
      }
      break;
    case 'Project':
    case 'ProjectAudit':
    case 'ProjectNewAudit':
    case 'CrawlExplorer':
    case 'GeneratorChart':
    case 'AuditOverview':
      if (id && InstanceStore.instances) {
        const project = ProjectStore.projects?.find((_project: any) => _project.slug === id);
        if (project) {
          await ProjectStore.setSelectedProject(project);
          ProjectStore.getIssuesOfAllCrawlsByProjectId();
        } else {
          NotificationStore.notify('Project not found', 'Please contact team dev about this', {
            style: 'error'
          });
        }
      }
      break;
    case 'Business':
      if (id && InstanceStore.instances) {
        const business = BusinessStore.businesses?.find((_business: any) => _business.id === id);
        if (business) {
          BusinessStore.setSelectedBusiness(business);
        } else {
          NotificationStore.notify('Business not found', 'Please contact team dev about this', {
            style: 'error'
          });
        }
      }
      break;
    case 'BusinessEdit':
      if (id && InstanceStore.instances) {
        const business = BusinessStore.businesses?.find((_business: any) => _business.id === id);
        if (business) {
          PropertyStore.getPropertiesAllowed();
          BusinessStore.setSelectedBusiness(business);
          BusinessStore.businessToEdit = clone(business) ?? null;
        } else {
          NotificationStore.notify('Business not found', 'Please contact team dev about this', {
            style: 'error'
          });
        }
      }
      break;
    case 'BusinessNew':
      if (InstanceStore.instances) {
        PropertyStore.getPropertiesAllowed();
      }
      break;
    case 'User':
      if (id && InstanceStore.instances) {
        const user = UserStore.users?.find((_user: any) => _user.slug === id);
        if (user) {
          UserStore.setSelectedUser(user);
          const selectedBusiness = BusinessStore.businesses?.find(
            (_business: any) => _business.label === user.business
          );
          UserStore.setSelectedUserBusiness(selectedBusiness);
        } else {
          NotificationStore.notify('User not found', 'Please contact team dev about this', {
            style: 'error'
          });
        }
      }
      break;
    case 'UserEdit':
      if (id && InstanceStore.instances) {
        const user = UserStore.users?.find((_user: any) => _user.slug === id);
        if (user) {
          UserStore.setSelectedUser(user);
          const selectedBusiness = BusinessStore.businesses?.find(
            (_business: any) => _business.label === user.business
          );
          UserStore.setSelectedUserBusiness(selectedBusiness);
          UserStore.userToEdit = clone(user) ?? null;
        } else {
          NotificationStore.notify('User not found', 'Please contact team dev about this', {
            style: 'error'
          });
        }
      }
      break;
    default:
      break;
  }
});
</script>
<template>
  <router-view name="TheNav"></router-view>
  <router-view></router-view>
  <div
    aria-live="assertive"
    class="fixed inset-0 z-50 flex items-end px-8 py-6 pointer-events-none sm:items-start sm:p-8">
    <div class="flex flex-col items-center w-full space-y-4 sm:items-end">
      <BaseNotification
        v-for="item in NotificationStore?.items ?? []"
        :key="item.id"
        :message="item.message"
        :cause="item.cause"
        :style="item.style"
        :id="item.id" />
    </div>
  </div>
</template>
