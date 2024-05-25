import { ref } from 'vue';
import { useNProgress } from '@vueuse/integrations/useNProgress';
import useHttp from '@/composables/useHttp';
import type { AxiosRequestConfig } from 'axios';
import { isEmpty, isNil } from 'ramda';
import { sleep } from './../utils';
const activeRequest = ref([] as number[]);

export default function useFetch() {
  const error = ref(false);
  const { isLoading: globalLoading } = useNProgress();
  const { http } = useHttp();
  const httpGet = async (
    url: string,
    config?: AxiosRequestConfig,
    apikbase?: string,
    area?: string
  ) => {
    error.value = false;

    const baseUrl = apikbase ? apikbase : `https://kxspanelservices.kleecks.com/KServices/`;

    if (isNil(baseUrl)) {
      throw new Error('The baseUrl is not set');
    }
    activeRequest.value.push(1);
    // TODO Sostituire quello sotto con un watch?
    if (activeRequest.value.length > 0) {
      globalLoading.value = true;
    }
    try {
      // TODO posso applicare parzialmente per cambiare il base Url?
      const startApi = performance.now();
      const response = await http.get(baseUrl + url, config);
      const endApi = performance.now();
      console.log(`Execution time ${url} API calls: %c ${endApi - startApi} ms`, 'color: #fb923c');
      if (response && isEmpty(response.data)) {
        // if is an empty array return it
        if (Array.isArray(response.data)) {
          return response.data;
        }
        if (area !== 'strategy') {
          throw new Error('No Data');
        }
      }
      return response.data;
    } catch (err: any) {
      if (err.response) {
        // AxiosError: the client was given an error response (5xx, 4xx)
        if (area !== 'strategy') {
          throw new Error(err.message);
        }
      } else if (err.request) {
        // AxiosError: the client never received a response, and the request was never left
        if (area !== 'strategy') {
          throw new Error(err.message);
        }
      } else {
        console.error('Unexpected error', err);
      }
      return err;
    } finally {
      activeRequest.value.pop();
      await sleep(250);
      if (activeRequest.value.length === 0) {
        globalLoading.value = false;
      }
    }
  };

  const httpPost = async (url: string, params?: any, config?: any, apikbase?: string) => {
    error.value = false;
    const baseUrl = apikbase ? apikbase : `https://kxspanelservices.kleecks.com/KServices/`;
    activeRequest.value.push(1);
    if (activeRequest.value.length > 0) {
      globalLoading.value = true;
    }
    try {
      const response = await http.post(baseUrl + url, params, config);
      if (isEmpty(response.data)) {
        throw new Error('No Data');
      }
      if (response.data === 'KO') {
        throw new Error('Something went wrong');
      }
      return response.data;
    } catch (err) {
      if (err instanceof Error) {
        throw new Error(err.message);
      } else {
        console.error('Unexpected error', err);
      }
    } finally {
      activeRequest.value.pop();
      // Questo serve per dare in tempo al sistema di aggiungere un altra request qualora ci sia altrimenti la barra del progress scomparirebbe per poi riapparire subito
      await sleep(250);
      if (activeRequest.value.length === 0) {
        globalLoading.value = false;
      }
    }
  };

  const httpDelete = async (
    url: string,
    config?: AxiosRequestConfig,
    apikbase?: string,
    area?: string
  ) => {
    error.value = false;

    const baseUrl = apikbase ? apikbase : `https://kxspanelservices.kleecks.com/KServices/`;

    if (isNil(baseUrl)) {
      throw new Error('The baseUrl is not set');
    }
    activeRequest.value.push(1);
    if (activeRequest.value.length > 0) {
      globalLoading.value = true;
    }
    try {
      const response = await http.delete(baseUrl + url, config);
    } catch (err: any) {
      if (err.response) {
        // AxiosError: the client was given an error response (5xx, 4xx)
        if (area !== 'strategy') {
          throw new Error(err.message);
        }
      } else if (err.request) {
        // AxiosError: the client never received a response, and the request was never left
        if (area !== 'strategy') {
          throw new Error(err.message);
        }
      } else {
        console.error('Unexpected error', err);
      }
    } finally {
      activeRequest.value.pop();
      await sleep(250);
      if (activeRequest.value.length === 0) {
        globalLoading.value = false;
      }
    }
  };

  return { error, httpGet, httpPost, httpDelete, activeRequest };
}
