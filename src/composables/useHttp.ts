import axios, { AxiosError, type AxiosInstance, type AxiosResponse } from 'axios';
import useAuth from '@/composables/useAuth';
import router from '@/router/index';

const http: AxiosInstance = axios.create();
// TODO: aggiungere altri server, non va bene che siano hard codati
// TODO: 2024 Servono?
const serversBaseUrl = [
  'ofservices.kleecks.com',
  'ogservices.kleecks.com',
  'ovhservices.kleecks.com',
  'services01va.kleecks.com',
  'service-germania1.kleecks.com',
  'service-francia1.kleecks.com',
  'service-usa1.kleecks.com'
];

http.interceptors.request.use(
  (config: any) => {
    const { kleecksToken, seoToolsToken } = useAuth();

    for (const serverBaseUrl of serversBaseUrl) {
      if (config.url.includes(serverBaseUrl)) {
        if (seoToolsToken) {
          // TODO: i due token sono diveris o sono uguali
          config.headers['Accept-Encoding'] = 'gzip, deflate, br';
          config.headers['authorization'] = seoToolsToken.value;
          // config.headers['authorization'] = kleecksToken.value;
        }
        return config;
      }
    }
    if (kleecksToken.value) {
      config.headers['x-access-token' as string] = kleecksToken.value as string;
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);
http.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    const { logOut } = useAuth();
    // TODO: Ci sono dei casi (come in strategy) dove non deve portare al logout
    if (
      error?.response?.status === 401 &&
      !error.request.responseURL.includes('keywords_new') &&
      !error.request.responseURL.includes('backlinks_new')
    ) {
      logOut();
      router.push({
        name: 'Login'
      });
    }
    return Promise.reject(error);
  }
);

export default function useHttp() {
  return {
    http
  };
}
