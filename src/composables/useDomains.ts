// eslint-disable-next-line prettier/prettier
import { parseDomain, fromUrl } from 'parse-domain';
export default function useDomains() {
  const setRoot = (domainData: any) => {
    let domainRoot = '';
    if (domainData.ssl) {
      domainRoot += 'https://';
    } else {
      domainRoot += 'http://';
    }
    if (domainData.domain.split('.').length === 2) {
      if (!domainData.forceNoWww) {
        domainRoot += 'www.';
      }
    }
    domainRoot += domainData.domain;

    if (domainData.explicit_url_lang) {
      domainRoot += '/' + domainData.lang;
      if (domainData.country) {
        domainRoot += '_' + domainData.country;
      }
    }

    if (domainData.subfolder) {
      domainRoot += '/' + domainData.subfolder;
    }

    return domainRoot;
  };

  const setLangUI = (domainData: any) => {
    let constructedLang = '';
    if (domainData.explicit_url_lang) {
      constructedLang += '/' + domainData.lang;
      if (domainData.country) {
        constructedLang += '_' + domainData.country;
      }
    }
    if (domainData.subfolder) {
      constructedLang += '/' + domainData.subfolder;
    }
    if (!domainData.explicit_url_lang && !domainData.subfolder) {
      constructedLang += '/';
    }
    return constructedLang;
  };

  const setDomainListed = (domainData: any) => {
    let domainRoot = '';
    if (domainData.ssl) {
      domainRoot += 'https://';
    } else {
      domainRoot += 'http://';
    }
    const domainToParse = domainData.domain.replaceAll('_', 'abcde');
    const parseResult = <any>parseDomain(fromUrl(domainToParse));
    // console.log('domainData', domainData);
    // console.log(fromUrl(domainToParse));
    // console.log(<any>parseDomain(fromUrl(domainToParse)));
    // console.log('parseResult', parseResult);

    if (parseResult.subDomains) {
      parseResult.subDomains =
        parseResult.subDomains?.map((el: any) => el.replaceAll('abcde', '_')) ??
        [];

      if (
        !domainData.forceNoWww &&
        parseResult &&
        parseResult.subDomains &&
        parseResult.subDomains.length === 0
      ) {
        domainRoot += 'www.';
      } else if (parseResult.subDomains.length > 0) {
        domainRoot += parseResult.subDomains.join('.') + '.';
      }
      domainRoot += parseResult.domain;
      domainRoot += '.' + parseResult.topLevelDomains.join('.');
    }

    if (domainData.explicit_url_lang) {
      domainRoot += '/' + domainData.lang;
      if (domainData.country) {
        domainRoot += '_' + domainData.country;
      }
    }

    if (domainData.subfolder) {
      domainRoot += '/' + domainData.subfolder;
    }

    return domainRoot;
  };

  return {
    setRoot,
    setLangUI,
    setDomainListed,
  };
}
