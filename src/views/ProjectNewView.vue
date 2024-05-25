<script setup lang="ts">
import useNewProject from '@/composables/useNewProject';
import AuditSettings from '@/components/AuditSettings.vue';
import useFetch from '@/composables/useFetch';
import DxTagBox from 'devextreme-vue/tag-box';
import { useBusinessStore } from '@/stores/BusinessStore';
import { useInstanceStore } from '@/stores/InstanceStore';
import { useProjectStore } from '@/stores/ProjectStore';
import { useRouter } from 'vue-router';
import { nextTick, onUnmounted, ref } from 'vue';
import md5 from 'md5';
import { sleep } from '@/utils';
const hasInstance = ref({ id: 'Y', label: 'Yes' });
const langs = [
  'it-IT',
  'af-ZA',
  'am-ET',
  'ar-AE',
  'ar-BH',
  'ar-DZ',
  'ar-EG',
  'ar-IQ',
  'ar-JO',
  'ar-KW',
  'ar-LB',
  'ar-LY',
  'ar-MA',
  'arn-CL',
  'ar-OM',
  'ar-QA',
  'ar-SA',
  'ar-SY',
  'ar-TN',
  'ar-YE',
  'as-IN',
  'ba-RU',
  'be-BY',
  'bg-BG',
  'bn-BD',
  'bn-IN',
  'bo-CN',
  'br-FR',
  'ca-ES',
  'co-FR',
  'cs-CZ',
  'cy-GB',
  'da-DK',
  'de-AT',
  'de-CH',
  'de-DE',
  'de-LI',
  'de-LU',
  'dsb-DE',
  'dv-MV',
  'el-GR',
  'en-029',
  'en-AU',
  'en-BZ',
  'en-CA',
  'en-GB',
  'en-IE',
  'en-IN',
  'en-JM',
  'en-MY',
  'en-NZ',
  'en-PH',
  'en-SG',
  'en-TT',
  'en-US',
  'en-ZA',
  'en-ZW',
  'es-AR',
  'es-BO',
  'es-CL',
  'es-CO',
  'es-CR',
  'es-DO',
  'es-EC',
  'es-ES',
  'es-GT',
  'es-HN',
  'es-MX',
  'es-NI',
  'es-PA',
  'es-PE',
  'es-PR',
  'es-PY',
  'es-SV',
  'es-US',
  'es-UY',
  'es-VE',
  'et-EE',
  'eu-ES',
  'fa-IR',
  'fi-FI',
  'fil-PH',
  'fo-FO',
  'fr-BE',
  'fr-CA',
  'fr-CH',
  'fr-FR',
  'fr-LU',
  'fr-MC',
  'fy-NL',
  'ga-IE',
  'gd-GB',
  'gl-ES',
  'gsw-FR',
  'gu-IN',
  'he-IL',
  'hi-IN',
  'hr-BA',
  'hr-HR',
  'hsb-DE',
  'hu-HU',
  'hy-AM',
  'id-ID',
  'ig-NG',
  'ii-CN',
  'is-IS',
  'it-CH',
  'it-IT',
  'ja-JP',
  'ka-GE',
  'kk-KZ',
  'kl-GL',
  'km-KH',
  'kn-IN',
  'kok-IN',
  'ko-KR',
  'ky-KG',
  'lb-LU',
  'lo-LA',
  'lt-LT',
  'lv-LV',
  'mi-NZ',
  'mk-MK',
  'ml-IN',
  'mn-MN',
  'moh-CA',
  'mr-IN',
  'ms-BN',
  'ms-MY',
  'mt-MT',
  'nb-NO',
  'ne-NP',
  'nl-BE',
  'nl-NL',
  'nn-NO',
  'nso-ZA',
  'oc-FR',
  'or-IN',
  'pa-IN',
  'pl-PL',
  'prs-AF',
  'ps-AF',
  'pt-BR',
  'pt-PT',
  'qut-GT',
  'quz-BO',
  'quz-EC',
  'quz-PE',
  'rm-CH',
  'ro-RO',
  'ru-RU',
  'rw-RW',
  'sah-RU',
  'sa-IN',
  'se-FI',
  'se-NO',
  'se-SE',
  'si-LK',
  'sk-SK',
  'sl-SI',
  'sma-NO',
  'sma-SE',
  'smj-NO',
  'smj-SE',
  'smn-FI',
  'sms-FI',
  'sq-AL',
  'sv-FI',
  'sv-SE',
  'sw-KE',
  'syr-SY',
  'ta-IN',
  'te-IN',
  'th-TH',
  'tk-TM',
  'tn-ZA',
  'tr-TR',
  'tt-RU',
  'ug-CN',
  'uk-UA',
  'ur-PK',
  'vi-VN',
  'wo-SN',
  'xh-ZA',
  'yo-NG',
  'zh-CN',
  'zh-HK',
  'zh-MO',
  'zh-SG',
  'zh-TW',
  'zu-ZA'
];
const itemsRadio = [
  { id: 'Y', label: 'Yes' },
  { id: 'N', label: 'No' }
];
const router = useRouter();
const isLoading = ref(false);

const itemsSettings = [
  { id: 'default', label: 'Default' },
  { id: 'custom', label: 'Custom' }
];
const settingsType = ref({ id: 'default', label: 'Default' });
const { newProject, resetNewProject, checkUrl, addHttp, isCheckLoading } = useNewProject();
const InstanceStore = useInstanceStore();
const BusinessStore = useBusinessStore();
const ProjectStore = useProjectStore();

const saveProject = async () => {
  isLoading.value = true;
  const { httpGet } = useFetch();
  const project = {
    ...newProject.value.settings,
    selectedItems: [],
    seed0: newProject.value.burl,
    seeds: [newProject.value.burl],
    // id: uuidv4(),
    id:
      md5(newProject.value.label).substring(0, 6) +
      '_' +
      md5(newProject.value.label + newProject.value.burl),
    label: newProject.value.label
  };
  httpGet('scan/addScan', {
    params: {
      json: JSON.stringify(project)
    }
  });
  await sleep(2000);
  if (newProject.value.businesses.length > 0) {
    await ProjectStore.changeOwner([project], newProject.value.businesses);
  }
  await sleep(2000);
  if (newProject.value.instance) {
    await ProjectStore.changeInstance({
      ...newProject.value.instanceAPI,
      projectId: project?.id
    })
      .then(() => {
        try {
          httpGet('scan/runScan', {
            params: {
              id: project.id
            }
          });
        } catch (err) {
          console.error(err);
        }
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(async () => {
        await sleep(10000);
        await InstanceStore.reloadApplicationData();
        await sleep(1000);
        // const formatProjectLabel = kebabCase(project.label);
        // const projectLabel = formatProjectLabel.charAt(0).toUpperCase() + formatProjectLabel.slice(1);
        // router.push({ name: 'Project', params: { id: kebabCase(project.label) } });
        router.push({ name: 'Projects' });
        isLoading.value = false;
      });
  } else {
    try {
      httpGet('scan/runScan', {
        params: {
          id: project.id
        }
      });
    } catch (err) {
      console.error(err);
    } finally {
      await sleep(10000);
      await InstanceStore.reloadApplicationData();
      await sleep(1000);
      // const formatProjectLabel = kebabCase(project.label);
      // const projectLabel = formatProjectLabel.charAt(0).toUpperCase() + formatProjectLabel.slice(1);
      router.push({ name: 'Projects' });
      isLoading.value = false;
    }
  }
};

const resetData = () => {
  newProject.value.url = '';
  newProject.value.urlTransformed = '';
  newProject.value.burl = '';
  newProject.value.tableData = [];
  newProject.value.instanceOld = null;
  newProject.value.instanceAPI = null;
  newProject.value.label = '';
  newProject.value.lang = '';
  newProject.value.agent = 'BOT';
  newProject.value.businesses = [];
};
const resetData2 = () => {
  hasInstance.value = { id: 'Y', label: 'Yes' };
  newProject.value.instance = '';
  newProject.value.url = '';
  newProject.value.urlTransformed = '';
  newProject.value.burl = '';
  newProject.value.tableData = [];
  newProject.value.label = '';
  newProject.value.lang = '';
  newProject.value.agent = 'BOT';
  newProject.value.instanceOld = null;
  newProject.value.instanceAPI = null;
  newProject.value.businesses = [];
};

onUnmounted(() => {
  resetData2();
});

const scrollPageToEnd = () => {
  nextTick(() => {
    window.scrollTo(0, document.body.scrollHeight + 300);
  });
};

const setProjectLabel = () => {
  const url = new URL(newProject.value.burl);
  // extract domain from hostname
  const domain = url.hostname.split('.').slice(-2).join('.');
  // remove TDL from domain
  const domainNoTdl = domain.split('.').slice(0, -1).join('.');
  // capitalize domain
  const domainCapitalized = domainNoTdl.charAt(0).toUpperCase() + domainNoTdl.slice(1);
  // sobsitute - with empty space
  const domainSane = domainCapitalized.replace(/-/g, ' ');
  // extract pathname and sobsitute / with empty space
  const pathname = url.pathname.replace(/\//g, ' ');
  // concatenate domain and pathname
  const label = domainSane + pathname.toUpperCase();
  newProject.value.label = label;
};
const items = ref([
  {
    label: 'Projects',
    routeName: 'Projects'
  }
]);

const setLang = (e: any) => {
  newProject.value.lang = e.id;
};

// await API.addProject(project);

// if (this.newProject.instance) {
//   await API.setAPIK({
//     id: this.projectId,
//     apikbase: this.newProject.instance.node + "/SPServices/",
//     domainId: this.newProject.instance.domainId,
//     instanceId: this.newProject.instance.instanceId
//   });
// }
</script>
<template>
  <div class="grid grid-cols-12">
    <div
      v-if="InstanceStore.isLoadingInstances || InstanceStore.isInizializingApplication"
      class="col-span-full">
      <BaseApplicationLoader />
    </div>
    <div v-else-if="InstanceStore.instances" class="col-span-full">
      <BaseBreadcrumb action="Create" :items="items"> </BaseBreadcrumb>
      <div class="p-8">
        <BaseRadioGroup
          :items="itemsRadio"
          name="hasInstance"
          v-model="hasInstance"
          @change="resetNewProject"
          label="1. The Project must be associated to an Instance?"
          help="You need to associate a Project to an Instance to see Strategy data and use the Seo Tool" />
        <div class="mt-12" v-if="hasInstance.id === 'Y'">
          <BaseCombobox
            v-model="newProject.instance"
            label="2. Select an Instance"
            help=""
            name="select-instance"
            :items="InstanceStore.instances"
            @change="resetData" />
          <div v-if="newProject.instance" class="mt-12 max-w-[1200px]">
            <p class="block text-sm text-gray-700">3. Select the URL you want to crawl</p>
            <ul class="grid grid-cols-4 gap-1 mt-1 -mx-2 overflow-x-auto">
              <li
                class="px-2 py-1 text-xs rounded-md cursor-pointer hover:bg-gray-100"
                @click="
                  (newProject.url = domain.domainListed),
                    (newProject.urlTransformed = addHttp(domain.domainListed)),
                    (newProject.instanceOld = domain),
                    (newProject.instanceAPI = {
                      id: domain.id,
                      apikbase: newProject.instance.apikbase,
                      instanceId: newProject.instance.id
                    }),
                    scrollPageToEnd()
                "
                v-for="domain in newProject.instance.domains"
                :key="domain.id">
                {{ domain.domainListed }}
              </li>
            </ul>
          </div>
        </div>
        <div v-if="newProject.urlTransformed || hasInstance.id === 'N'" class="mt-12 max-w-[800px]">
          <BaseTextInput
            :label="(hasInstance.id === 'Y' ? '4' : '2') + '. Check if URL is crawlable'"
            v-model.trim="newProject.url" />
          <BaseButton
            :disabled="!newProject.url"
            class="w-[200px] mt-4"
            kind="tertiary"
            :is-loading="isCheckLoading"
            @click="
              hasInstance.id === 'Y'
                ? checkUrl(newProject.urlTransformed)
                : checkUrl(addHttp(newProject.url))
            ">
            Check
          </BaseButton>
        </div>
        <div v-if="newProject.tableData.length > 0" class="mt-12 max-w-[800px]">
          <p class="block text-sm text-gray-700">
            {{ hasInstance.id === 'Y' ? '5.' : '3.' }} Select the URL if it is crawlable
          </p>
          <ul class="grid grid-cols-3 gap-1 mt-1 -mx-2">
            <li
              class="px-2 py-1 text-xs rounded-md cursor-pointer hover:bg-gray-100"
              @click="(newProject.burl = item.burl), setProjectLabel(), scrollPageToEnd()"
              v-for="(item, i) in newProject.tableData"
              :key="i">
              <p>{{ item.url }}</p>
              <p
                class="text-xs"
                :class="{
                  'text-red-700': item.kind === 'Not Crawlable',
                  'text-green-700': item.kind === 'Crawlable'
                }">
                {{ item.kind }}
              </p>
            </li>
          </ul>
          <BaseMessage
            kind="warning"
            class="mt-4"
            v-if="
              newProject.tableData &&
              newProject.tableData.some((el: any) => el.kind === 'Not Crawlable')
            ">
            <div class="text-xs">
              If a URL is not crawlable there must be some technical issues. Please check with
              <a class="underline" href="mailto:roberto.pellagatti@kleecks.com"
                >Roberto Pellagatti</a
              >.
            </div>
          </BaseMessage>
        </div>
        <div v-if="newProject.burl" class="mt-12 max-w-[800px]">
          <BaseTextInput
            :label="(hasInstance.id === 'Y' ? '6.' : '4.') + ' Choose the label'"
            help="This is the name of the project. It will be used to identify the project in the
              list of projects. Choose it carefully since it cannot be changed later"
            v-model.trim="newProject.label" />
        </div>
        <!-- v-if="newProject.label" -->
        <div v-if="newProject.label" class="mt-12 max-w-[800px]">
          <p class="block text-sm text-gray-700"></p>
          <BaseCombobox
            :label="(hasInstance.id === 'Y' ? '7.' : '5.') + ' Define Accept-Language header'"
            help="This is needed to technical reason. Set it as the language of the site you are
              auditing"
            name="select-lang"
            @change="setLang($event), scrollPageToEnd()"
            :items="langs" />
        </div>
        <div v-if="newProject.label" class="mt-12 max-w-[800px]">
          <p class="block text-sm text-gray-700">
            {{ hasInstance.id === 'Y' ? '8.' : '6.' }} Define Audit Settings
          </p>
          <BaseRadioGroup
            :items="itemsSettings"
            name="settings"
            v-model="settingsType"
            label=""
            help="" />
          <AuditSettings v-show="settingsType.id === 'custom'" />
          <div class="text-xs text-gray-500" v-show="settingsType.id === 'default'">
            <p>
              Audit will crawl 2000 URLs without recording accessibility issues (which takes
              considerably more time)
            </p>
          </div>
        </div>
        <div v-if="newProject.label" class="mt-12 max-w-[800px]">
          <p class="block text-sm text-gray-700">
            {{ hasInstance.id === 'Y' ? '9.' : '7.' }} Choose project ownership
          </p>
          <div>
            <div class="mt-1 text-xs text-gray-500">
              <p>
                In order for a User to see a Project, the Project must be owned by the Business of
                the User
              </p>
              <p>Leave it blank in order to make it visible only to Kleecks' users</p>
            </div>
            <DxTagBox
              class="my-4"
              v-model="newProject.businesses"
              :items="BusinessStore.businessesLabels"
              :search-enabled="true" />
          </div>
        </div>
        <BaseButton
          v-if="newProject.label"
          class="w-[200px] mt-12"
          kind="primary"
          :is-loading="isLoading"
          @click="saveProject">
          Run Project
        </BaseButton>
      </div>
    </div>
    <div class="col-span-full">
      <!-- <json-viewer :expanded="true" :value="newProject"> </json-viewer> -->
    </div>
  </div>
</template>
<style>
/* scrool smooth */
html {
  scroll-behavior: smooth;
}
</style>
