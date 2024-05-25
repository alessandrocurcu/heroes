<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useUserStore } from '@/stores/UserStore';
import { useInstanceStore } from '@/stores/InstanceStore';
import { useNotificationStore } from '@/stores/NotificationStore';
import { useRoute, useRouter } from 'vue-router';
import RestrictionsInfo from '@/components/RestrictionsInfo.vue';
const InstanceStore = useInstanceStore();
const UserStore = useUserStore();
const NotificationStore = useNotificationStore();
const route = useRoute();
const router = useRouter();
const items = ref([
  {
    label: 'Users',
    routeName: 'Users'
  }
]);

onMounted(async () => {
  if (route.params.id && UserStore.users) {
    const user = UserStore.users?.find((_user: any) => _user.slug === route.params.id);
    if (user) {
      UserStore.setSelectedUser(user);
    } else {
      NotificationStore.notify('User not found', 'Please contact team dev about this', {
        style: 'error'
      });
    }
  }
});
const userIsDeleted = ref(false);
const restricitonInfoIsOpen = ref(false);
const prova = () => {
  deleteUserModalIsOpen.value = true;
};
const deleteUser = async () => {
  if (UserStore.selectedUser) {
    const response = await UserStore.deleteUser(UserStore.selectedUser);
    if (response) {
      deleteUserModalIsOpen.value = false;
      userIsDeleted.value = true;
    }
  }
};
const deleteUserModalIsOpen = ref(false);
</script>
<template>
  <div class="grid grid-cols-12">
    <div
      v-if="InstanceStore.isLoadingInstances || InstanceStore.isInizializingApplication"
      class="col-span-full">
      <BaseApplicationLoader />
    </div>
    <div v-else-if="userIsDeleted" class="col-span-full">
      <BaseBreadcrumb title="User Deleted" :items="items" />
      <div class="p-8 col-span-full">
        <p>
          User {{ UserStore.selectedUser?.id }} has been deleted.
          <strong>Please refresh the page</strong>
        </p>
      </div>
    </div>
    <div v-else-if="InstanceStore.instances && UserStore.selectedUser" class="col-span-full">
      <BaseBreadcrumb :title="UserStore.selectedUser.label" :items="items">
        <div class="w-200px">
          <BaseButton
            kind="primary"
            size="sm"
            icon="PencilSquareIconOutline"
            :disabled="false"
            @click="router.push({ name: 'UserEdit' })">
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
                <p><span class="mr-2 font-bold">id</span>{{ UserStore.selectedUser.id }}</p>
                <p><span class="mr-2 font-bold">name</span>{{ UserStore.selectedUser.label }}</p>
                <p>
                  <span class="mr-2 font-bold">business</span>
                  <BaseTableInternalLink
                    v-if="UserStore.selectedUser.business"
                    as="span"
                    resource="Business"
                    underlined
                    :resourceId="UserStore.selectedUser.business" />
                  <span class="text-orange-600" v-else> N/D </span>
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
                      UserStore.selectedUser.permissions.handleCrawls
                        ? 'text-green-600'
                        : 'text-red-600'
                    "
                    class="mr-2 font-bold"
                    >Audit Crawl</span
                  >{{ UserStore.selectedUser.permissions.handleCrawls ?? false }}
                </p>
                <p>
                  <span
                    :class="
                      UserStore.selectedUser.permissions.accessibility
                        ? 'text-green-600'
                        : 'text-red-600'
                    "
                    class="mr-2 font-bold"
                    >Accessibility</span
                  >{{ UserStore.selectedUser.permissions.accessibility ?? false }}
                </p>
                <p>
                  <span
                    :class="
                      UserStore.selectedUser.permissions.onlyStrategy
                        ? 'text-green-600'
                        : 'text-red-600'
                    "
                    class="mr-2 font-bold"
                    >Only Strategy</span
                  >{{ UserStore.selectedUser.permissions.onlyStrategy ?? false }}
                </p>
                <p>
                  <span
                    :class="
                      UserStore.selectedUser.permissions.JakalaMSC
                        ? 'text-green-600'
                        : 'text-red-600'
                    "
                    class="mr-2 font-bold"
                    >Jakala MSC</span
                  >{{ UserStore.selectedUser.permissions.JakalaMSC ?? false }}
                </p>
                <p>
                  <span
                    :class="
                      UserStore.selectedUser.permissions.contentGeneration
                        ? 'text-green-600'
                        : 'text-red-600'
                    "
                    class="mr-2 font-bold"
                    >Content Generation</span
                  >{{ UserStore.selectedUser.permissions.contentGeneration ?? false }}
                </p>
                <p>
                  <span
                    :class="
                      UserStore.selectedUser.permissions.aiKeywordResearch
                        ? 'text-green-600'
                        : 'text-red-600'
                    "
                    class="mr-2 font-bold"
                    >AI Keyword Research</span
                  >{{ UserStore.selectedUser.permissions.aiKeywordResearch ?? false }}
                </p>
                <p>
                  <span
                    :class="
                      UserStore.selectedUser.permissions.writeSeotool
                        ? 'text-green-600'
                        : 'text-red-600'
                    "
                    class="mr-2 font-bold"
                    >Access Seo Tool</span
                  >{{ UserStore.selectedUser.permissions.writeSeotool ?? false }}
                </p>
                <p>
                  <span
                    :class="
                      UserStore.selectedUser.permissions.writeSeotech
                        ? 'text-green-600'
                        : 'text-red-600'
                    "
                    class="mr-2 font-bold"
                    >Access Seo Tech</span
                  >{{ UserStore.selectedUser.permissions.writeSeotech ?? false }}
                </p>
              </div>
            </div>
          </div>
          <div>
            <BaseTableTitle class="mt-2 mb-3" text="Raw Data" />
            <div class="p-8 space-y-8 border border-gray-200 rounded-sm">
              <json-viewer :value="UserStore.selectedUser"></json-viewer>
            </div>
          </div>
          <BaseButton
            kind="danger"
            @click="prova"
            class="mt-12"
            :disabled="!UserStore.adminUsers.includes(UserStore.currentUserMail)"
            >Delete User
          </BaseButton>
        </div>

        <!-- <json-viewer :value="UserStore.selectedUser"></json-viewer> -->
      </div>
      <BaseDialog
        @cancel="restricitonInfoIsOpen = false"
        :open="restricitonInfoIsOpen"
        title="Restriction Documentation - draft 08/02/2024"
        just-text
        isLarge>
        <template #default><RestrictionsInfo /></template>
      </BaseDialog>
      <BaseDialog
        @cancel="deleteUserModalIsOpen = false"
        @confirm="deleteUser"
        :open="deleteUserModalIsOpen"
        title="Delete User"
        hasDanger>
        <template #default>
          <p>Are you sure you want to delete this user?</p>
          <p>This action is irreversible</p>
        </template>
      </BaseDialog>
    </div>
    <div v-else class="col-span-full">
      <BaseBreadcrumb title="Error" :items="items" />
      <!-- {{ UserStore.users }}
      <div>
        <json-viewer :value="UserStore.selectedUser"></json-viewer>
      </div> -->
    </div>
  </div>
</template>
