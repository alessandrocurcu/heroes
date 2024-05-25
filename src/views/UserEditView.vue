<script setup lang="ts">
import { onMounted, onUnmounted, ref, type Ref } from 'vue';
import { useInstanceStore } from '@/stores/InstanceStore';
import { useBusinessStore } from '@/stores/BusinessStore';
import { useNotificationStore } from '@/stores/NotificationStore';
import { useUserStore } from '@/stores/UserStore';
import { useRouter } from 'vue-router';
import { useRoute } from 'vue-router';
import { kebabCase } from 'change-case';
import { clone } from 'ramda';
import useFetch from '@/composables/useFetch';
import useRestrictions from '@/composables/useRestrictions';
import useResources from '@/composables/useResources';
import { generatePassword, sleep } from './../utils';
import type { User, Instance, InstanceApi } from '@/models';
const { restrictions, restrictionsDescription } = useRestrictions();
useResources();
const InstanceStore = useInstanceStore();
const BusinessStore = useBusinessStore();
const UserStore = useUserStore();
const NotificationStore = useNotificationStore();
const { httpPost } = useFetch();
const isLoading = ref(false);
const route = useRoute();
const newData: Ref<any> = ref({
  password: generatePassword()
});

const changePassword: Ref<boolean> = ref(false);

onMounted(async () => {
  if (route.params.id && UserStore.users) {
    const user = UserStore.users?.find((_user: any) => _user.slug === route.params.id);
    if (user) {
      UserStore.setSelectedUser(user);
      UserStore.userToEdit = clone(user) ?? null;
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
});

onUnmounted(() => {
  UserStore.userToEdit = undefined;
});

// const users: Ref<any> = ref([]);
// const addUser = () => {
//   users.value.push({
//     email: '',
//     name: '',
//     surname: '',
//     password: generatePassword()
//   });
// };
// const removeUser = (index: number) => {
//   users.value.splice(index, 1);
// };

// give a type to labelAlreadyExist
const labelAlreadyExist: Ref<User | undefined> = ref(undefined);

const goBackToUsers = () => {
  router.push({ name: 'Users' });
};

const router = useRouter();

const confirmUpdateUser = async () => {
  const { oldRoles, kleecksOldRoles } = useRestrictions();
  if (!UserStore.userToEdit || !UserStore.userToEdit?.userOldApi) {
    console.log('user to edit does not exist');
    return;
  }
  const userUpdated = {
    admin: false,
    cognome: UserStore.userToEdit?.userOldApi?.cognome ?? '',
    instances: UserStore.selectedUserBusiness?.instances?.map((instance: InstanceApi) => {
      const instanceWithRightData: Instance | undefined =
        InstanceStore.instances?.find((_instance: any) => _instance.id === instance.instanceId) ??
        undefined;
      return {
        id: null,
        instanceId: instanceWithRightData?.instanceId ?? 'ABORT',
        roles: UserStore.selectedUserBusiness?.label === 'kleecks' ? kleecksOldRoles : oldRoles,
        serverUrl: instanceWithRightData?.node ?? 'ABORT'
      };
    }),
    kclient: UserStore.selectedUserBusiness?.label,
    login: UserStore.userToEdit?.id,
    menu: [
      'ba',
      'bb',
      'bc',
      'bd',
      'be',
      'bf',
      'bg',
      'b',
      'l',
      'la',
      'lb',
      'lc',
      'ld',
      'le',
      'c',
      'ca',
      'cb',
      'cc',
      'cd',
      'ce',
      'cf',
      'cg',
      'd',
      'da',
      'db',
      'dc',
      'de',
      'df',
      'e',
      'ea',
      'eb',
      'ec',
      'ed'
    ],
    nome: UserStore.userToEdit?.userOldApi?.nome ?? '',
    permissions: JSON.stringify(UserStore.selectedUserBusiness?.permissions),
    settings: null
  };

  userUpdated.instances?.forEach((instance: any) => {
    if (instance.instanceId === 'ABORT' || instance.serverUrl === 'ABORT') {
      NotificationStore.notify('Error', 'Please contact team dev about this', {
        style: 'error'
      });
      return;
    }
  });

  // const UserStore = useUserStore();
  console.log('userUpdated da salvare', userUpdated);
  isLoading.value = true;
  try {
    // TODO: richiedi a Robi circa skip2FA
    await httpPost(`analyzer_view/postUser`, userUpdated);
    if (changePassword.value) {
      await httpPost(`seojs3/setPassword`, {
        user: UserStore.userToEdit?.id,
        password: newData.value.password,
        skip2FA: false
      });
    }
    await BusinessStore.getBusinessesAndUsers();
    await InstanceStore.getInstancesAndProjects();
    NotificationStore.notify('User Updated', '', {
      style: 'success'
    });
  } catch (err: any) {
    NotificationStore.notify('Unable to update User', err.message, {
      style: 'error'
    });
  } finally {
    sleep(100);
    let label =
      UserStore.userToEdit?.userOldApi?.nome + ' ' + UserStore.userToEdit?.userOldApi?.cognome;
    router.push({ name: 'User', params: { id: kebabCase(label.toLowerCase()) } });
    isLoading.value = false;
  }
};

// create computed named samelabel
const samelabel = () => {
  if (UserStore.users) {
    labelAlreadyExist.value = UserStore.users.find((user: User) => user.id === newData.value.email);
  } else {
    labelAlreadyExist.value = undefined;
  }
};
const items = ref([
  {
    label: 'Users',
    routeName: 'Users'
  }
]);
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
    <div v-else-if="InstanceStore.instances && UserStore.userToEdit" class="col-span-full">
      <BaseBreadcrumb
        :title="UserStore.userToEdit.label"
        action="Edit"
        :items="items"
        :resource="{
          name: 'Users',
          slug: UserStore.userToEdit.slug
        }">
      </BaseBreadcrumb>
      <div class="grid grid-cols-12 gap-8 p-4 xl:p-8">
        <div class="col-span-6">
          <div class="space-y-12">
            <div class="space-y-8">
              <div class="flex items-center gap-8">
                <BaseTextInput
                  v-model.trim="UserStore.userToEdit.userOldApi.nome"
                  label="Name"
                  type="text"
                  placeholder="" />
                <BaseTextInput
                  v-model.trim="UserStore.userToEdit.userOldApi.cognome"
                  label="Surname"
                  type="text"
                  placeholder="" />
              </div>
              <div class="flex items-center gap-8">
                <BaseTextInput
                  @change="samelabel"
                  disabled
                  v-model.trim="UserStore.userToEdit.id"
                  label="Email"
                  help="Email cannot be changed"
                  type="text"
                  placeholder="" />
              </div>
              <BaseCombobox
                v-if="BusinessStore.businesses"
                label="Business"
                name="changeBusiness"
                v-model="UserStore.selectedUserBusiness"
                :items="BusinessStore.businesses" />
              <div class="space-y-8">
                <BaseCheckBox
                  v-model="changePassword"
                  label="Change Password?"
                  name="changePassword" />
                <BaseTextInput
                  v-if="changePassword"
                  v-model.trim="newData.password"
                  label="Password"
                  type="text"
                  placeholder="" />
              </div>
              <div>
                <!-- <BaseTextInput
                      v-model="newData.label"
                      label="Label"
                      type="text"
                      placeholder=""
                      @change="samelabel" />

                    <div v-if="labelAlreadyExist" class="text-red-500">
                      <p>Label already exist</p>
                    </div> -->
              </div>
            </div>
          </div>
          <div v-if="labelAlreadyExist" class="text-red-500">
            <p>Email already exist</p>
          </div>

          <BaseButton
            :disabled="labelAlreadyExist"
            class="w-48"
            kind="primary"
            @click="confirmUpdateUser"
            >Update User
          </BaseButton>
        </div>
        <!-- <div class="col-span-6">
          <json-viewer :value="newData"></json-viewer>
        </div> -->
      </div>
    </div>
    <div v-else class="col-span-full">
      <BaseBreadcrumb title="Error" :items="items" />
    </div>
  </div>
</template>
