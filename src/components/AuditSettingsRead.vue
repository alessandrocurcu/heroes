<script setup lang="ts">
import { onMounted, ref } from 'vue';
import BaseTextArea from './baseComponents/TextArea';
import { clone, on } from 'ramda';
export interface SettingsReadProps {
  auditSettings: any;
}
const props = withDefaults(defineProps<SettingsReadProps>(), {
  auditSettings: {}
});

const auditSettingsRead: any = ref(null);
onMounted(() => {
  if (!props.auditSettings) {
    return;
  }
  auditSettingsRead.value = clone(props.auditSettings);
  if (!auditSettingsRead.value.agent1) {
    auditSettingsRead.value.agent1 = {
      id: '',
      label: ''
    };
  }
  switch (auditSettingsRead.value.userAgent) {
    case 'BOT':
      auditSettingsRead.value.agent1.id = 'BOT';
      auditSettingsRead.value.agent1.label = 'Bot';
      break;
    case 'MOB':
      auditSettingsRead.value.agent1.id = 'MOB';
      auditSettingsRead.value.agent1.label = 'Mobile';
      break;
    case 'PC':
      auditSettingsRead.value.agent1.id = 'PC';
      auditSettingsRead.value.agent1.label = 'Desktop';
      break;
    default:
      auditSettingsRead.value.agent1.id = 'CUSTOM';
      auditSettingsRead.value.agent1.label = 'Custom';
      break;
  }
});

const settings = [
  {
    id: 'checkImages',
    label: 'Check Images',
    description: '',
    default: false,
    type: 'checkbox'
  },
  {
    id: 'checkCss',
    label: 'Check Css',
    description: '',
    default: false,
    type: 'checkbox'
  },
  {
    id: 'checkJS',
    label: 'Check Javascript',
    description: '',
    default: false,
    type: 'checkbox'
  },
  {
    id: 'checkSWF',
    label: 'Check Swf',
    description: '',
    default: false,
    type: 'checkbox'
  },
  {
    id: 'checkExt',
    label: 'Check External Links',
    description: '',
    default: false,
    type: 'checkbox'
  },
  {
    id: 'checkOutDom',
    label: 'Check Links Outside the Domain',
    description: '',
    default: false,
    type: 'checkbox'
  },
  {
    id: 'followInt',
    label: 'Follow Internal "nofollow"',
    description: '',
    default: false,
    type: 'checkbox'
  },
  {
    id: 'followExt',
    label: 'Follow External "nofollow"',
    description: '',
    default: false,
    type: 'checkbox'
  },
  {
    id: 'crawlAllSubs',
    label: 'Crawl All SubDomains',
    description: '',
    default: false,
    type: 'checkbox'
  },
  {
    id: 'crawlUsability',
    label: 'Crawl Accessibility Issues',
    description: '',
    default: false,
    type: 'checkbox'
  },
  {
    id: 'crawlCanon',
    label: 'Crawl Canonicals',
    description: '',
    default: false,
    type: 'checkbox'
  },
  {
    id: 'crawlNextPrev',
    label: 'Crawl Next/Prev',
    description: '',
    default: false,
    type: 'checkbox'
  },
  {
    id: 'checkHrefLang',
    label: 'Check Href-lang',
    description: '',
    default: false,
    type: 'checkbox'
  },
  {
    id: 'crawlHrefLang',
    label: 'Crawl Href-lang',
    description: '',
    default: false,
    type: 'checkbox'
  },
  {
    id: 'crawlSitemap',
    label: 'Crawl Links in Sitemaps',
    description: '',
    default: false,
    type: 'checkbox'
  },
  {
    id: 'addSitemaps',
    label: 'Crawl These Sitemap',
    description: '',
    default: '',
    type: 'textbox'
  },
  {
    id: 'cookies',
    label: 'Use These Cookies',
    description: '',
    default: '',
    type: 'textbox'
  },
  {
    id: 'maxurl',
    label: 'Limit Crawl Total',
    description: '',
    default: '',
    type: 'numberbox'
  },
  {
    id: 'maxcrawlerdepth',
    label: 'Limit Crawl Depth',
    description: '',
    default: '',
    type: 'numberbox'
  },
  {
    id: 'urlsperdepth',
    label: 'Limit Urls per Depth',
    description: '',
    default: '',
    type: 'numberbox'
  },
  {
    id: 'maxdepth',
    label: 'Limit Max Folder Depth',
    description: '',
    default: '',
    type: 'numberbox'
  },
  {
    id: 'maxquerystrings',
    label: 'Limit Number of Query Strings',
    description: '',
    default: '',
    type: 'numberbox'
  },
  {
    id: 'maxdepth',
    label: 'Limit Max Folder Depth',
    description: '',
    default: '',
    type: 'numberbox'
  },
  {
    id: 'maxurllength',
    label: 'Max Url Lenght to Crawl',
    description: '',
    default: '',
    type: 'numberbox'
  },
  {
    id: 'maxlinksperurl',
    label: 'Max Links per URL',
    description: '',
    default: '',
    type: 'numberbox'
  },
  {
    id: 'maxpagesize',
    label: 'Max Page Size in KB',
    description: '',
    default: '',
    type: 'numberbox'
  },
  {
    id: 'includeUrl',
    label: 'Include URLs',
    description: '',
    default: '',
    type: 'textarea'
  },
  {
    id: 'excludeUrl',
    label: 'Exclude URLs',
    description: '',
    default: '',
    type: 'textarea'
  },
  {
    id: 'noRescan',
    label: 'Recrawl last scanned urls',
    description: '',
    default: false,
    type: 'checkbox'
  },
  {
    id: 'okRescan',
    label: 'RegEx',
    description: '',
    default: false,
    type: 'textbox'
  },
  {
    id: 'pixelsMin',
    label: 'Min Pixels Title',
    description: '',
    default: '',
    type: 'numberbox'
  },
  {
    id: 'pixelsMax',
    label: 'Max Pixels Title',
    description: '',
    default: '',
    type: 'numberbox'
  },
  {
    id: 'charsMin',
    label: 'Min Chars Title',
    description: '',
    default: '',
    type: 'numberbox'
  },
  {
    id: 'charsMax',
    label: 'Max Chars Title',
    description: '',
    default: '',
    type: 'numberbox'
  },
  {
    id: 'pixelsMinDescription',
    label: 'Min Pixels Description',
    description: '',
    default: '',
    type: 'numberbox'
  },
  {
    id: 'pixelsMaxDescription',
    label: 'Max Pixels Description',
    description: '',
    default: '',
    type: 'numberbox'
  },
  {
    id: 'charsMinDescription',
    label: 'Min Chars Description',
    description: '',
    default: '',
    type: 'numberbox'
  },
  {
    id: 'charsMaxDescription',
    label: 'Max Chars Description',
    description: '',
    default: '',
    type: 'numberbox'
  },
  {
    id: 'pixelsMaxH1',
    label: 'H1 Chars',
    description: '',
    default: '',
    type: 'numberbox'
  },
  {
    id: 'charsMaxUrl',
    label: 'Url Lenght Chars',
    description: '',
    default: '',
    type: 'numberbox'
  },
  {
    id: 'charsMaxH2',
    label: 'H2 Chars',
    description: '',
    default: '',
    type: 'numberbox'
  },
  {
    id: 'charsMaxAlt',
    label: 'Images ALT Text Chars',
    description: '',
    default: '',
    type: 'numberbox'
  },
  {
    id: 'sizeMaxImages',
    label: 'Max Kb Images Size',
    description: '',
    default: '',
    type: 'numberbox'
  }
];

const itemsUserAgent = [
  { id: 'BOT', label: 'BOT' },
  { id: 'PC', label: 'DESKTOP' },
  { id: 'MOB', label: 'MOBILE' },
  { id: 'CUSTOM', label: 'CUSTOM' }
];
</script>
<template>
  <div class="mt-1" v-if="auditSettingsRead">
    <div class="p-8 space-y-2 border border-gray-200 rounded-sm">
      <BaseTextInput
        v-if="auditSettingsRead.authUser"
        v-model="auditSettingsRead.authUser"
        disabled
        label="Username"
        name="authUser" />
      <BaseTextInput
        v-if="auditSettingsRead.authPassword"
        v-model="auditSettingsRead.authPassword"
        disabled
        label="Password"
        name="authPassword" />
      <BaseRadioGroup
        :items="itemsUserAgent"
        v-model="auditSettingsRead.agent1"
        name="agent1"
        disabled
        label="User Agent"
        help="" />
      <BaseTextInput
        v-if="auditSettingsRead.agent1 && auditSettingsRead.agent1.id === 'CUSTOM'"
        v-model="auditSettingsRead.userAgent"
        disabled
        label="User Agent Custom"
        name="userAgent" />
      <template v-for="setting in settings" :key="setting.id">
        <BaseCheckBox
          v-if="setting.type === 'checkbox'"
          v-model="auditSettingsRead[setting.id]"
          :label="setting.label"
          disabled
          :name="setting.id"
          :help="setting.description" />
        <BaseTextInput
          v-if="setting.type === 'textbox' || setting.type === 'numberbox'"
          v-model="auditSettingsRead[setting.id]"
          :type="setting.type === 'numberbox' ? 'number' : 'text'"
          disabled
          :label="setting.label"
          :name="setting.id"
          :help="setting.description" />
        <BaseTextArea
          v-if="setting.type === 'textarea'"
          v-model="auditSettingsRead[setting.id]"
          disabled
          :label="setting.label"
          :name="setting.id"
          :help="setting.description" />
      </template>
    </div>
  </div>
</template>
