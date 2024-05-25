import type { BaseResource } from '@/models';
import { prop, propOr, find, propEq } from 'ramda';
import useFetch from './composables/useFetch';
// export const getLabel = prop<'label', string>('label');
export const getPropLabelWithDefault = propOr('MISSING_LABEL', 'label');
export const sleep = (ms: number) => {
  const { activeRequest } = useFetch();
  activeRequest.value.push(1);
  return new Promise<void>((resolve) => {
    return setTimeout(() => {
      activeRequest.value.pop();
      resolve();
    }, ms);
  });
};

export const numbers = '0123456789';
export const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
export const lowerCaseLettters = 'abcdefghijklmnopqrstuvwxyz';
// export const specialCharacters = "!'^+%&/()=?_#$½§{[]}|;:>÷`<.*-@é";
export const specialCharacters = '+%&?_$§-@é';

// source https://dcodingsourcecode.darija-coding.com/tutorial/how-to-use-vue-js-3-to-generate-random-passwords
export const generatePassword = (): string => {
  let password = '';
  let charsList = lowerCaseLettters;
  charsList += numbers;
  charsList += upperCaseLetters;
  charsList += specialCharacters;
  for (let i = 0; i < 8; i++) {
    const charIndex = Math.round(Math.random() * charsList.length);
    password = password + charsList.charAt(charIndex);
  }
  return password;
};

// TODO sarebbe bello usare curry ma poi mi sfancula TypeScript
// C'è anche il problema di prop e propEq che devo usare as any
export const findResourceByParamLabel = <T extends BaseResource>(
  label: string,
  resourceList: T[] | null
): T | undefined => find(propEq('paramLabel', label) as any, resourceList ?? []);

export const findResourceBySlug = <T extends BaseResource>(
  label: string,
  resourceList: T[] | null
): T | undefined => find(propEq('slug', label) as any, resourceList ?? []);

export const findResourceById = <T extends BaseResource>(
  id: string,
  resourceList: T[] | null
): T | undefined => {
  return find(propEq('id', id) as any, resourceList ?? []);
};

export const findResourceByLabel = <T extends BaseResource>(
  label: string,
  resourceList: T[] | null
): T | undefined => {
  return find(propEq('label', label) as any, resourceList ?? []);
};
