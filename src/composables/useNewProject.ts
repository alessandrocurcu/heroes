import useFetch from '@/composables/useFetch';
import { clone } from 'ramda';
import { nextTick, ref } from 'vue';
const { httpGet } = useFetch();
const newProjectDefaultSettings = {
  environment: 0,
  instance: '',
  label: '',
  agent: 'BOT',
  // PC è Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36
  url: '',
  urlTransformed: '',
  lang: 'it-IT',
  tableData: [],
  businesses: [],
  settings: {
    noRescan: false,
    okRescan: '',
    checkImages: true,
    checkCss: true,
    checkJS: true,
    checkSWF: true,
    checkExt: false,
    checkOutDom: false,
    followInt: true,
    followExt: true,
    crawlAllSubs: true,
    crawlCanon: true,
    crawlNextPrev: true,
    checkHrefLang: true,
    crawlHrefLang: true,
    crawlSitemap: true,
    addSitemaps: '',
    respectRobots: false,
    includeUrl: '',
    excludeUrl: '',
    maxThreads: 32,
    maxUrlThreads: 50,
    userAgent: 'BOT', // Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36
    agent1: { id: 'BOT', label: 'BOT' },
    checkJsonLD: false,
    checkMicrodata: false,
    checkRDFa: false,
    responseTimeout: 3000,
    responseRetries: 0,
    crawlAmp: false,
    renderText: true,
    renderJS: false,
    pixelsMin: 200,
    pixelsMax: 568,
    charsMin: 30,
    charsMax: 65,
    pixelsMinDescription: 400,
    pixelsMaxDescription: 970,
    charsMinDescription: 70,
    charsMaxDescription: 155,
    charsMaxUrl: 115,
    pixelsMaxH1: 70,
    charsMaxH2: 70,
    charsMaxAlt: 100,
    sizeMaxImages: 100,
    urlsperdepth: 999,
    maxdepth: 15,
    maxurl: 2000,
    maxcrawlerdepth: 3,
    maxquerystrings: 3,
    maxurllength: 999,
    maxlinksperurl: 100,
    maxredirtofollow: 9,
    maxpagesize: 2000000,
    selectedItems: [],
    multiple: false,
    collapsible: false,
    animationDuration: 300,
    ignoreNofollow: false,
    checkDuplicates: false,
    snippets: '[]',
    crawlUsability: false,
    hasLogin: { id: 'N', label: 'No' }
  }
};
const isCheckLoading = ref(false);
export const addHttp = (url: string) => {
  if (!/^(?:f|ht)tps?:\/\//.test(url)) {
    if (url) {
      url = 'http://' + url;
    } else {
      url = '';
    }
  }
  let newUrl = null;
  try {
    newUrl = new URL(url);
  } catch (error) {
    newUrl = null;
  }
  return newUrl && newUrl.href ? newUrl.href : 'ABORT';
};
const newProject: any = ref(clone(newProjectDefaultSettings));

const scrollPageToEnd = () => {
  nextTick(() => {
    window.scrollTo(0, document.body.scrollHeight + 300);
  });
};

export default function useNewProject() {
  const resetNewProject = () => {
    newProject.value = clone(newProjectDefaultSettings);
  };
  const redirects = ref(0);
  const triedhttp = ref(false);
  const triedhttps = ref(false);
  // INFO: In questa sotto c'è un escape character in più sembrerebbe: testo la versione sotto meglio per vedere
  // se tutto funziona
  // const addhttp = (url: string) => {
  //   if (!/^(?:f|ht)tps?\:\/\//.test(url)) {
  //     url = 'http://' + url;
  //   }
  //   return url;
  // };
  // Esportandola la rendiamo testabile
  let tableDataTmp: any = [];

  const checkUrl = async (url: any) => {
    isCheckLoading.value = true;
    newProject.value.tableData = [];
    tableDataTmp = [];
    const response = await httpGet('scan/homeUrl', {
      params: { url, lang: 'it-IT', bot: 'BOT', authUser: '', authPassword: '' }
    });
    if (response.listErrors.includes('SITE_REDIR')) {
      tableDataTmp.push({
        kind: 'Redirects to',
        burl: url,
        url: response.stats.redirectUrl,
        httpstatus: 'Redir',
        httpcode: response.stats.statusCode + ' - Redir'
      });
      if (redirects.value++ < 5) {
        await checkUrl(response.stats.redirectUrl);
      }
    }
    if (response.listOKs.includes('SITE_OK')) {
      if (tableDataTmp.filter((td: any) => td.url === url && td.burl === url).length == 0) {
        tableDataTmp.push({
          kind: 'Crawlable',
          burl: url,
          url: url,
          httpstatus: 'Ok',
          httpcode: response.stats.statusCode + ' - Crawlable'
        });
      }
    }
    if (response.listErrors.includes('SITE_NOHTTP') && url.startsWith('http:')) {
      triedhttp.value = true;
      if (tableDataTmp.filter((td: any) => td.url === url && td.burl === url).length === 0) {
        tableDataTmp.push({
          kind: 'Not Crawlable',
          burl: url,
          url: url,
          httpstatus: 'Forbidden',
          httpcode: response.stats.statusCode + ' - Forbidden'
        });
      }
      if (!triedhttps.value) {
        triedhttps.value = true;
        await checkUrl(url.replace(/http:/gi, 'https:'));
      }
    }
    if (response.listErrors.includes('SITE_NOHTTPS') && url.startsWith('https:')) {
      if (tableDataTmp.filter((td: any) => td.url === url && td.burl === url).length === 0) {
        tableDataTmp.push({
          kind: 'Not Crawlable',
          burl: url,
          url: url,
          httpstatus: 'Forbidden',
          action: ''
        });
      }
      triedhttps.value = true;
      if (!triedhttp.value) {
        triedhttp.value = true;
        await checkUrl(url.replace(/https:/gi, 'http:'));
      }
    }
    isCheckLoading.value = false;
    newProject.value.tableData = tableDataTmp;
    scrollPageToEnd();
  };

  return {
    newProject,
    resetNewProject,
    checkUrl,
    addHttp,
    isCheckLoading
  };
}
