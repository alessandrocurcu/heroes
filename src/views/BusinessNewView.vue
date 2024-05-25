<script setup lang="ts">
import DxTagBox from 'devextreme-vue/tag-box';

import { ref, type Ref } from 'vue';
import { useInstanceStore } from '@/stores/InstanceStore';
import { useBusinessStore } from '@/stores/BusinessStore';
import { useNotificationStore } from '@/stores/NotificationStore';
import { useRouter } from 'vue-router';
import useFetch from '@/composables/useFetch';
import PropertiesViewer from '@/components/PropertiesViewer.vue';
import useRestrictions from '@/composables/useRestrictions';
import useResources from '@/composables/useResources';
import { generatePassword, sleep } from './../utils';
import type { Business, UserApi, BusinessApi, Instance } from '@/models';
import { kebabCase } from 'change-case';
const { restrictions, restrictionsDescription } = useRestrictions();
useResources();
const InstanceStore = useInstanceStore();
const BusinessStore = useBusinessStore();
const NotificationStore = useNotificationStore();
const { httpPost } = useFetch();
const isLoading = ref(false);
const newData: Ref<any> = ref({
  label: '',
  name: '',
  instances: [],
  restrictions
});

const users: Ref<any> = ref([]);
const addUser = () => {
  users.value.push({
    email: '',
    name: '',
    surname: '',
    password: generatePassword()
  });
};
const removeUser = (index: number) => {
  users.value.splice(index, 1);
};

// give a type to labelAlreadyExist
const labelAlreadyExist: Ref<Business | undefined> = ref(undefined);

const router = useRouter();

const confirmCreateBusiness = async () => {
  isLoading.value = true;
  const { oldRoles, kleecksOldRoles } = useRestrictions();
  if (newData.value.label === '') {
    console.log('label is empty');
    return;
  }
  const newLabel = newData.value.label.trim();
  const businessUpdated: BusinessApi = {
    fulladdress: '',
    isDisabled: null,
    label: newLabel.toLowerCase(),
    piva: '',
    ragsoc: newData.value.name,
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
    instances:
      newData.value.instances?.map((instanceId: string) => {
        const instanceWithRightData: Instance | undefined =
          InstanceStore.instances?.find((_instance: any) => _instance.id === instanceId) ??
          undefined;
        return {
          id: null,
          instanceId: instanceWithRightData?.instanceId ?? 'ABORT',
          roles: oldRoles ?? 'ABORT',
          serverUrl: instanceWithRightData?.node ?? 'ABORT'
        };
      }) ?? [],
    permissions: JSON.stringify(newData.value.restrictions)
  };

  // TODO: tutti sti controlli sotto sicuramente si possono estrarre e ridurre, tra l'altro ci sono anche in BuinessEditView

  if (businessUpdated.instances.some((instance: any) => instance.instanceId.includes('ABORT'))) {
    const instanceAborted = businessUpdated.instances.find((instance: any) =>
      instance.instanceId.includes('ABORT')
    );
    console.log('instanceAborted', instanceAborted);
    NotificationStore.notify(
      'Unable to save Business',
      `Instance ${instanceAborted?.instanceId ?? 'missing instanceId'} not found`,
      {
        style: 'error'
      }
    );
    isLoading.value = false;
    return;
  }

  if (businessUpdated.instances.some((instance: any) => instance.roles === 'ABORT')) {
    NotificationStore.notify('Unable to save Business', 'Roles not found', {
      style: 'error'
    });
    isLoading.value = false;
    return;
  }

  if (businessUpdated.instances.some((instance: any) => instance.serverUrl === 'ABORT')) {
    NotificationStore.notify('Unable to get save Business', 'ServerUrl not found', {
      style: 'error'
    });
    isLoading.value = false;
    return;
  }

  try {
    await httpPost(`analyzer_view/postClient`, businessUpdated);

    if (users.value.length > 0) {
      users.value.forEach(async (user: any) => {
        const userUpdated: UserApi = {
          admin: false,
          cognome: user.surname,
          instances: businessUpdated.instances,
          kclient: businessUpdated.label.toLowerCase(),
          login: user.email,
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
          nome: user.name,
          permissions: businessUpdated.permissions,
          settings: null
        };

        try {
          await httpPost(`analyzer_view/postUser`, userUpdated);
          await httpPost(`seojs3/setPassword`, {
            user: user.email,
            password: user.password,
            skip2FA: false
          });
          NotificationStore.notify('User Created', '', {
            style: 'success'
          });
        } catch (err: any) {
          NotificationStore.notify('Unable to create User', err.message, {
            style: 'error'
          });
        }
      });
    }
    await BusinessStore.getBusinessesAndUsers();
    await InstanceStore.getInstancesAndProjects();
    NotificationStore.notify('Business Updated', '', {
      style: 'success'
    });
  } catch (err: any) {
    NotificationStore.notify('Unable to save Business', err.message, {
      style: 'error'
    });
  } finally {
    sleep(100);
    router.push({ name: 'Business', params: { id: kebabCase(businessUpdated.label) } });
    isLoading.value = false;
  }
};

const samelabel = () => {
  if (BusinessStore.businesses) {
    labelAlreadyExist.value = BusinessStore.businesses.find(
      (business: Business) => business.label === newData.value.label
    );
  } else {
    labelAlreadyExist.value = undefined;
  }

  newData.value.name = newData.value.label;
};
const items = ref([
  {
    label: 'Businesses',
    routeName: 'Businesses'
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
    <div v-else-if="BusinessStore.businesses" class="col-span-full">
      <BaseBreadcrumb action="Create" :items="items"> </BaseBreadcrumb>
      <div class="p-4 xl:p-8">
        <div class="col-span-6">
          <BaseTabs>
            <BaseTab class="py-6" title="Base">
              <!-- ❌ Controllo su altre label esistenti -->
              <!-- ❌ Controllo che sia riempito -->
              <div v-if="newData" class="space-y-12 max-w-[800px]">
                <div class="space-y-8">
                  <div>
                    <BaseTextInput
                      v-model="newData.label"
                      label="Business ID"
                      type="text"
                      placeholder=""
                      help="This is the unique identifier of the business. It is used primarily for the API. It is not visible to the user. It will not be editable once the Business is created"
                      @change="samelabel" />

                    <div v-if="labelAlreadyExist" class="text-xs text-red-500">
                      <p>ID already exist</p>
                    </div>
                  </div>
                  <!-- ❌ Controllo che sia riempito -->
                  <BaseTextInput
                    v-model="newData.name"
                    label="Name"
                    type="text"
                    placeholder=""
                    help="This is the name of the Business visible to the user" />
                  <div>
                    <p class="mb-1 text-sm text-gray-700">Instances</p>
                    <DxTagBox
                      v-model="newData.instances"
                      :items="InstanceStore.instancesIDs"
                      :search-enabled="true" />
                    <p class="mt-2 text-xs text-gray-500">
                      This is the list of the instance ID which a Business is allowed to access. It
                      is necessary in order to access the Strategy, Seo Tool and Seo Tech
                    </p>
                  </div>
                </div>
                <div>
                  <h3 class="mb-2 text-gray-500">Restrictions</h3>
                  <div class="p-8 space-y-8 border border-gray-200 rounded-sm">
                    <template v-for="permit in restrictionsDescription" :key="permit.id">
                      <BaseCheckBox
                        v-if="permit.type === 'checkbox'"
                        v-model="newData.restrictions[permit.id]"
                        :label="permit.label"
                        :name="permit.id"
                        :help="permit.description"
                        @change="permit.onChange" />
                    </template>
                  </div>
                </div>
                <div>
                  <h3 class="mb-2 text-gray-500">Users</h3>
                  <div class="p-8 border border-gray-200 rounded-sm">
                    <div v-if="users && users.length > 0" class="space-y-8">
                      <div
                        class="p-4 space-y-4 bg-gray-100"
                        v-for="(user, i) in users"
                        :key="user.id">
                        <div class="grid items-start grid-cols-2 gap-8">
                          <BaseTextInput
                            v-model="user.name"
                            label="Name"
                            help="es: Mario"
                            type="text"
                            placeholder="" />
                          <BaseTextInput
                            v-model="user.surname"
                            label="Surname"
                            help="es: Rossi"
                            type="text"
                            placeholder="" />
                        </div>
                        <div class="grid items-start grid-cols-2 gap-8">
                          <BaseTextInput
                            v-model="user.email"
                            label="Email"
                            help="es: mario.rossi@gmail.com. This will be used ad the unique identifier of the User. It will not be editable once the User is created"
                            type="text"
                            placeholder="" />
                          <BaseTextInput
                            v-model="user.password"
                            label="Password"
                            help="Remember to note this password somewhere since It has to be communicated to the User. It will not be visible once the User is created"
                            type="text"
                            placeholder="" />
                        </div>
                        <BaseButton
                          kind="danger"
                          size="sm"
                          @click="removeUser(i)"
                          icon="TrashIcon"></BaseButton>
                      </div>
                    </div>
                    <BaseButton
                      class="w-32 mt-4"
                      kind="ghost"
                      size="sm"
                      @click="addUser"
                      icon="PlusIcon"
                      >Add User
                    </BaseButton>
                  </div>
                </div>
                <BaseButton
                  :disabled="labelAlreadyExist ? true : false"
                  class="w-48"
                  kind="primary"
                  @click="confirmCreateBusiness"
                  >Create Business
                </BaseButton>
                <BaseMessage kind="warning" class="mt-4">
                  <div class="text-xs">
                    Rember to communicate to
                    <a class="underline" href="mailto:roberto.pellagatti@kleecks.com"
                      >Roberto Pellagatti</a
                    >
                    the id of the business in order to activate it. This step is necessary.
                  </div>
                </BaseMessage>
              </div>
            </BaseTab>
            <BaseTab
              class=""
              title="Properties Allowed"
              :disabled="!newData.restrictions.writeSeotech">
              <div class="mt-12">
                <PropertiesViewer />
              </div>
            </BaseTab>
          </BaseTabs>
        </div>
        <!-- <div class="col-span-6">
          <json-viewer :value="newData"></json-viewer>
        </div> -->
      </div>
    </div>
    <div v-else class="col-span-full">Error</div>
  </div>
</template>
