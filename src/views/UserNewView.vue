<script setup lang="ts">
import { ref, type Ref } from 'vue';
import { useInstanceStore } from '@/stores/InstanceStore';
import { useBusinessStore } from '@/stores/BusinessStore';
import { useNotificationStore } from '@/stores/NotificationStore';
import { useUserStore } from '@/stores/UserStore';
import { useRouter } from 'vue-router';
import { kebabCase } from 'change-case';
import useFetch from '@/composables/useFetch';
import useRestrictions from '@/composables/useRestrictions';
import useResources from '@/composables/useResources';
import { generatePassword, sleep } from './../utils';
import type { User, Business, Instance, InstanceApi } from '@/models';
useResources();
const InstanceStore = useInstanceStore();
const BusinessStore = useBusinessStore();
const UserStore = useUserStore();
const NotificationStore = useNotificationStore();
const { httpPost } = useFetch();
const isLoading = ref(false);
const newData: Ref<any> = ref({
  email: '',
  name: '',
  surname: '',
  password: generatePassword()
});
const labelAlreadyExist: Ref<User | undefined> = ref(undefined);

const router = useRouter();

const selectedBusiness: Ref<Business | undefined | null> = ref(null);

const confirmCreateUser = async () => {
  const { oldRoles, kleecksOldRoles } = useRestrictions();
  // C'è un ruolo "ai_enabled" che serve per sbloccare una featuere riferita alla ai nel seo-tool: questo ruolo lo aggiunge o toglie Luca  Manigrasso direttamente dal DB, si è deciso che non serve gestirlo qui
  const userUpdated = {
    // Per gli utenti Kleecks mettiamo admin a true, non ha nessuna importanza davvero ma serve per far funzionare la K4 correttamente
    admin: selectedBusiness.value?.label === 'kleecks' ? true : false,
    cognome: newData.value.surname,
    instances: selectedBusiness.value?.instances?.map((instance: InstanceApi) => {
      const instanceWithRightData: Instance | undefined =
        InstanceStore.instances?.find((_instance: any) => _instance.id === instance.instanceId) ??
        undefined;
      return {
        id: null,
        instanceId: instanceWithRightData?.instanceId ?? 'ABORT',
        roles: selectedBusiness.value?.label === 'kleecks' ? kleecksOldRoles : oldRoles,
        serverUrl: instanceWithRightData?.node ?? 'ABORT'
      };
    }),
    kclient: selectedBusiness.value?.label,
    login: newData.value.email,
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
    nome: newData.value.name,
    permissions: JSON.stringify(selectedBusiness.value?.permissions),
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

  try {
    // TODO: richiedi a Robi circa skip2FA
    await httpPost(`analyzer_view/postUser`, userUpdated);
    await httpPost(`seojs3/setPassword`, {
      user: newData.value.email,
      password: newData.value.password,
      skip2FA: false
    });
    await BusinessStore.getBusinessesAndUsers();
    await InstanceStore.getInstancesAndProjects();
    NotificationStore.notify('User Created', '', {
      style: 'success'
    });
  } catch (err: any) {
    NotificationStore.notify('Unable to create User', err.message, {
      style: 'error'
    });
  } finally {
    sleep(100);
    let label = newData.value.email;
    router.push({ name: 'User', params: { id: kebabCase(label) } });
    isLoading.value = false;
  }
};

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
      v-if="UserStore.isLoadingUsers || InstanceStore.isLoadingInstances"
      class="p-8 text-sm text-gray-600 uppercase col-span-full animate-pulse">
      Loading
    </div>
    <div v-else-if="UserStore.users" class="col-span-full">
      <BaseBreadcrumb action="Create" :items="items"> </BaseBreadcrumb>
      <div class="grid grid-cols-12 gap-8 p-4 xl:p-8">
        <div class="col-span-6">
          <BaseMessage kind="info" class="mb-8">
            <div class="text-xs">
              <p>
                Prima di creare uno User assicuratevi che l'utente abbia firmato il documento di
                accesso a Kleecks.
              </p>
              <p class="mt-2">
                <a
                  class="underline cursor-pointer"
                  href="/access.pdf"
                  download="kleecks access document"
                  >Download Document</a
                >
              </p>
            </div>
          </BaseMessage>
          <div v-if="newData" class="mb-8 space-y-12">
            <div class="space-y-8">
              <BaseTextInput
                v-model.trim="newData.name"
                help="es: Mario"
                label="Name"
                type="text"
                placeholder="" />
              <BaseTextInput
                v-model.trim="newData.surname"
                label="Surname"
                help="es: Rossi"
                type="text"
                placeholder="" />
              <BaseTextInput
                @change="samelabel"
                v-model.trim="newData.email"
                help="es: mario.rossi@gmail.com. This will be used ad the unique identifier of the User. It will not be editable once the User is created"
                label="Email"
                type="text"
                placeholder="" />
              <BaseTextInput
                v-model.trim="newData.password"
                label="Password"
                type="text"
                help="Remember to note this password somewhere since It has to be communicated to the User. It will not be visible once the User is created"
                placeholder="" />
              <BaseCombobox
                v-if="BusinessStore.businesses"
                label="Business"
                name="changeBusiness"
                help="The User will inherit the restrictions and Instances of the selected Business"
                v-model="selectedBusiness"
                :items="BusinessStore.businesses" />
            </div>
          </div>
          <div v-if="labelAlreadyExist" class="mb-8 font-bold text-red-500">
            <p>Email already exist</p>
          </div>

          <BaseButton
            :disabled="labelAlreadyExist ? true : false"
            class="w-48"
            kind="primary"
            @click="confirmCreateUser"
            >Create User
          </BaseButton>
        </div>
        <!-- <div class="col-span-6">
          <json-viewer :value="newData"></json-viewer>
        </div> -->
      </div>
    </div>
    <!-- <div v-else class="col-span-full">Error</div> -->
  </div>
</template>
