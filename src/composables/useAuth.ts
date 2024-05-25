import { ref, computed } from 'vue';
import { useStorage } from '@vueuse/core';
import useHttp from '@/composables/useHttp';
import { isEmpty, not } from 'ramda';
const apiKServices = `https://kxspanelservices.kleecks.com/KServices/`;

export default function useAuth() {
  const user = <any>useStorage('user', {});
  const kleecksToken = <any>useStorage('jwt', null);
  const seoToolsToken = <any>useStorage('seoToolsToken', null);
  const userMail = ref('');
  const userPassword = ref('');
  const isUserLoading = ref(false);
  const pin = ref('');
  const showDialogTwoFactor = ref(false);
  const authError = ref('');
  const { http } = useHttp();

  const transformUserResponse = (response: any) => {
    return {
      ...response,
      data: {
        ...response.data,
        permissions: JSON.parse(response.data.permissions)
      }
    };
  };

  const resetState = () => {
    userMail.value = '';
    userPassword.value = '';
    user.value = {};
    pin.value = '';
    kleecksToken.value = null;
    showDialogTwoFactor.value = false;
    authError.value = '';
  };

  const tryTologIn = () => {
    if (userMail.value.includes('@')) {
      if (tryLogInWithTwoFactor()) {
        showDialogTwoFactor.value = true;
      } else {
        resetState();
        showError('Something went wrong');
      }
    }
  };

  const tryLogInWithTwoFactor = () => {
    const optHasBeenSent = logInWithTwoFactor(userMail.value, userPassword.value);
    return !!optHasBeenSent;
  };

  const logIn = async () => {
    isUserLoading.value = true;
    try {
      kleecksToken.value = await getToken(userMail.value, userPassword.value, pin.value);
      http.defaults.headers['x-access-token'] = kleecksToken.value;
      const userResponse = await getUser(userMail.value);
      user.value = userResponse.data;
      return true;
    } catch (error) {
      resetState();
      showError('Something went wrong');
      isUserLoading.value = false;
    }
  };

  const showError = (msg: string) => {
    authError.value = msg;
    return false;
  };

  const logOut = () => {
    user.value = {};
    kleecksToken.value = null;
  };

  const isLoggedIn = computed(() => {
    return not(isEmpty(user.value));
  });

  /** API CALLS */

  const logInWithTwoFactor = async (user: string, password: string): Promise<boolean> => {
    try {
      const response = await http.post(`${apiKServices}seojs3/login2fa`, {
        user,
        password
      });
      if (response && response.data === false) {
        throw new Error();
      } else {
        return response.data;
      }
    } catch (e) {
      resetState();
      showError('Something went wrong');
      return false;
    }
  };

  const getToken = async (user: string, password: string, pin: string) => {
    try {
      const response = await http.post(`${apiKServices}seojs3/login`, {
        user,
        password,
        pin
        // to
      });
      //localStorage.setItem("jwt", response.data);
      return response.data;
    } catch (err) {
      if (err instanceof Error) {
        throw new Error(err.message);
      } else {
        console.error('Unexpected error', err);
      }
    }
  };

  const getSeoToken = async (instanceId: string) => {
    try {
      const response = await http.get(`${apiKServices}seojs3/getToken`, {
        params: { instanceId }
      });
      //localStorage.setItem("jwt", response.data);
      setSeoToolsToken(response.data);
      return response.data;
    } catch (err) {
      setSeoToolsToken(null);
      if (err instanceof Error) {
        throw new Error(err.message);
      } else {
        console.error('Unexpected error', err);
      }
    }
  };

  const setSeoToolsToken = (token: string | null) => {
    seoToolsToken.value = token;
  };

  const getUser = async (userMail: string) => {
    try {
      const response = await http.get(`${apiKServices}analyzer_view/getUsers`, {
        params: {
          id: userMail
        }
      });

      if (response?.data?.permissions) {
        return transformUserResponse(response);
      }

      throw new Error();
    } catch (err) {
      if (err instanceof Error) {
        throw new Error(err.message);
      } else {
        console.error('Unexpected error', err);
      }
    }
  };

  return {
    userMail,
    userPassword,
    showDialogTwoFactor,
    user,
    pin,
    isUserLoading,
    authError,
    tryTologIn,
    logIn,
    kleecksToken,
    seoToolsToken,
    isLoggedIn,
    logOut,
    getSeoToken
  };
}
