export const propertiesList: any = [
  {
    id: '324',
    propertyId: 'TECH_SETTINGS',
    name: 'Page Types Definition',
    nameFile: '279578',
    copy: {
      sentinelsWithSelector: {
        label: 'Sentinels and Selectors',
        description: ''
      }
    },
    description: 'Define page types',
    topic: 'Site Settings',
    type: 'SPECIAL',
    seojs3: true,
    business: ['Fendi'],
    note: []
  },
  {
    id: '184',
    propertyId: 'ESSENTIAL_GET_PARAMETERS',
    name: 'Get Parameters That Define Pages',
    nameFile: '157a42',
    copy: {
      label: 'List of parameters',
      itemLabel: 'Parameter',
      description: ''
    },
    oldPath: 'General > site > URL PARAMETERS',
    description:
      'Parametri in GET che insieme al path definiscono una entità pagina (ad es. lurl /contenuto.html?id=123 se considerato senza il parametro id perde completamente di significato)',
    description2: `Parametri in GET che insieme al path definiscono una entità pagina (ad es. lurl /contenuto.html?id=123 se considerato senza il parametro id perde completamente di significato).
    Nel caso in cui più parametri siano correlati e siano da mantenere solo se tutti sono presenti e validi è necessario utilizzare la sintassi parametro1¶metro2&... anziché inserirne uno per riga.
    Un parametro essenziale definisce un tipo di pagina: quell'URL con quel parametro è la mia pagina filtrata
    Ti aggiunge delle classi al body: nome + valore
    Questa attività serve per non far crescere il DB
    È un attività pre per definire una lista di prodotti con filtri
    `,
    perPageType: true,
    type: 'STRINGHE',
    topic: 'URL - Query parameters',
    note: []
  },
  {
    id: '345',
    propertyId: 'ESSENTIAL_GET_PARAMETERS_REGEX',
    name: 'Essential Get Parameter Regex',
    nameFile: '157a42',
    copy: {
      label: 'Parameters',
      itemLabel: 'Parameter',
      description: ''
    },
    topic: 'URL - Query parameters',
    oldPath: 'General > site > URL PARAMETERS',
    type: 'STRINGHE'
  },
  {
    id: '362',
    propertyId: 'ESSENTIAL_GET_PARAMETERS_METATAGS',
    name: 'Essential get parameters metatags',
    nameFile: 'f0574e',
    type: 'KTOGGLE',
    label: 'Activate?',
    topic: 'URL - Query parameters',
    note: []
  },
  {
    id: '34',
    propertyId: 'ESSENTIAL_GET_PARAMETERS_EXCLUSIONS',
    name: 'Exclusion list of get parameters to define pages',
    nameFile: 'd286f8',
    description:
      'Permette di definire delle regole per cui in determinate circostanze dei parametri in GET non debbano essere considerati come essenziali per la definizione di una pagina (es: mi interessa solo ottimizzare color=red)',
    oldPath: 'General > Site > URL PARAMETERS',
    copy: {
      parameter: {
        label: 'Parameter',
        description: 'The essential GET parameter as defined in the previous setting'
      },
      values: {
        label: 'Values - RegExes',
        description: ''
      }
    },
    type: 'COMPLEX-OBJECT-PROPERTY-ARRAY',
    perPageType: true,
    seojs3: true,
    topic: 'URL - Query parameters',
    note: []
  },
  {
    id: '333',
    propertyId: 'ESSENTIAL_GET_PARAMETERS_INCLUSIONS',
    name: 'Essential Get Parameters Inclusions',
    copy: {
      label1: 'The essential GET parameter as defined in the previous setting',
      label2: 'List of items'
    },
    nameFile: 'b1014e',
    oldPath: 'General > site > URL PARAMETERS',
    type: 'COMPLEX-ARRAY',
    topic: 'URL - Query parameters',
    note: []
  },
  {
    id: '65',
    propertyId: 'ESSENTIAL_GET_PARAMETERS_EXCLUDED_URLS',
    name: 'Essential Get Parameters Excluded Urls',
    nameFile: '157a42',
    copy: {
      label: 'List of parameters',
      itemLabel: 'Parameter',
      description: ''
    },
    topic: 'URL - Query parameters',
    oldPath: 'General > site > URL PARAMETERS',
    type: 'STRINGHE'
    // EXCLUSION LIST OF GET PARAMETERS TO DEFINE PAGES BASED ON URL
  },
  {
    id: '176',
    propertyId: 'URL_WITH_ESSENTIAL_GET_PARAMETERS_AS_CANONICAL',
    name: 'Url With Essential Get Parameters As Canonical',
    nameFile: 'f0574e',
    oldPath: 'General > Site > URL PARAMETERS',
    type: 'KTOGGLE',
    label: 'Activate?',
    topic: 'URL - Query parameters',
    note: []
  },
  {
    id: '344',
    propertyId: 'ESSENTIAL_GET_PARAMETERS_INCLUDED_URLS',
    name: 'Essential Get Parameter Included URLs',
    nameFile: '157a42',
    copy: {
      label: 'Parameters',
      itemLabel: 'Parameter',
      description: ''
    },
    topic: 'URL - Query parameters',
    type: 'STRINGHE'
  },
  {
    id: '338',
    propertyId: 'KEEP_ORIGINAL_ALTERNATES_URLS',
    name: 'Keep original alternates URLs',
    nameFile: '157a42',
    copy: {
      label: 'List of parameters',
      itemLabel: 'Parameter',
      description: ''
    },
    topic: 'Alternates',
    type: 'STRINGHE',
    note: []
  },
  {
    id: '3',
    propertyId: 'ADDITIONAL_URL_EXTRACTORS',
    name: 'Selectors For Additional Url In Html Elements',
    nameFile: 'de520c',
    description:
      'Additional set of instructions for extracting URLs within the site pages; (eg. non-standard attributes that are then managed In Javascript by carousel libraries)',
    type: 'COMPLEX-ARRAY-MULTIPLE',
    oldPath: 'General > Site > Url Parameters',
    topic: 'URL - Rewrite',
    seojs3: true,
    note: []
  },
  {
    id: '33',
    propertyId: 'CMS_URL_REPLACE_RULES',
    name: 'Replace Rules',
    nameFile: 'cfe0b2',
    description:
      'Define regEx based replace rules to apply on all CMS URLs before Kleecks overwrites them',
    oldPath: 'General > Site > URL PARAMETERS',
    oldFormatData:
      '[{"condition":"current URL","condition2":"exclusion","from":"from","to":"xxx","flag":true}]',
    copy: {
      firstValue: {
        label: 'Current URL - RegEx-URL',
        description:
          'Optional regex on container page or resource original URL (the resource that is being processed and containing the URL you want to modify)'
      },
      secondValue: {
        label: 'Exclusion - RegEx-URL',
        description:
          'Optional regex to avoid rewriting the URLs that match. You can accomplish the same result by properly write From instruction, but with this is pretty much easier'
      },
      thirdValue: {
        label: 'From - RegEx',
        description: ''
      },
      fourthValue: {
        label: 'To',
        description: ''
      },
      fifthValue: {
        label: 'Process next rules?',
        description:
          'If flagged next rules will be processed even if this rule is applied: otherwise url processing will terminate with this one'
      }
    },
    type: 'COMPLEX-OBJECT-ARRAY-PARALLEL',
    topic: 'URL - Rewrite',
    seojs3: true,
    slug: 'cms-replace-urls',
    templateFile: 'TechReplaceUrl',
    note: []
  },
  {
    id: '4',
    propertyId: 'REQUEST_URL_REPLACE',
    name: 'Requested Url Replace Rules',
    nameFile: 'e2d9f9',
    copy: {
      firstValue: {
        label: 'From',
        description: ''
      },
      secondValue: {
        label: 'To',
        description: ''
      }
    },
    description:
      'Define regEx based replace rules to apply on URLs required by Kleecks before they get processed by Kleecks itself',
    oldPath: 'General > Site > REQUESTS RESPONSE CODES REDIRECTS',
    type: 'COMPLEX-ARRAY-MULTIPLE',
    topic: 'URL - Rewrite',
    seojs3: true,
    note: []
  },
  {
    id: '258',
    propertyId: 'UNTOUCHABLE_URLS',
    name: 'Untouchable Urls',
    nameFile: '9940c4',
    description:
      'Per definire regole su URL originali (anche relativi) che non devono essere toccati, riscritti o resi assoluti (ad esempio perchè contengono variabili che vanno riscritte client-side)',
    oldPath: 'General > Site > URL PARAMETERS',
    typeOld: 'STRINGHE-REGEX-URL',
    type: 'STRINGHE',
    topic: 'URL - Rewrite',
    note: []
  },
  {
    id: '190',
    propertyId: 'HTTP_TO_HTTPS_DOMAINS',
    name: 'Force Https External Domains',
    nameFile: 'f78d9d',
    description:
      'Allows you to define a list of domains that includes resources that need to be rewritten by replacing the HTTP protocol with https. It is used to prevent that a change of protocol between cms and the tool results in a lack of external resources. It works only if the specified domain has an HTTPS corresponding (eg google fonts, facebook, etc.)',
    oldPath: 'General > Site > URL PARAMETERS',
    typeOld: 'STRINGHE-URL',
    type: 'STRINGHE',
    topic: 'URL - Rewrite',
    note: []
  },
  {
    id: '13',
    propertyId: 'HTTP_LOCATION_REWRITE',
    name: 'Http Location Rewrite',
    nameFile: 'bb069a',
    description:
      'Permette di definire delle regole di riscrittura degli url di redirect ricevuti dal CMS. E possibile settare lurl (Kleecks) inviato come regex di condition',
    type: 'COMPLEX-OBJECT-ARRAY-MULTIPLE',
    oldPath: 'General > site > REQUESTS - RESPONSE CODES - REDIRECTS',
    topic: 'URL - Rewrite',
    seojs3: true,
    note: []
  },
  {
    id: '340',
    propertyId: 'URL_WITH_LOCALES',
    name: 'URL with locales',
    nameFile: '157a42',
    topic: 'URL - Rewrite',
    label: 'List of locales',
    itemLabel: 'Locale',
    type: 'STRINGHE',
    note: []
  },
  {
    id: '119',
    propertyId: 'APPLY_CMS_URL_REPLACE_RULES_TO_LOCATION',
    name: 'Apply Cms Url Replace Rules To Location',
    nameFile: '5bbe5f',
    oldPath: 'General > site > REQUESTS - RESPONSE CODES - REDIRECTS',
    description:
      "Se abilitato le regole di CMS URL REPLACE RULES vengono applicate anche agli URL contenuti nell'header di Location di un redirect, nel caso in cui quelle più specifiche di HTTP LOCATION REWRITE non ci siano o non vengano applicate sullURL in oggetto",
    type: 'KTOGGLE',
    topic: 'URL - Rewrite',
    note: []
  },
  {
    id: '196',
    propertyId: 'BYPASSED_URLS',
    name: 'Bypass by URLs',
    nameFile: '706db7',
    oldPath: 'General > Site > Bypassed request',
    description: 'URLs which must be bypassed (both on request and in response)',
    typeOld: 'STRINGHE-REGEX-URL',
    type: 'STRINGHE',
    topic: 'Bypass rules',
    note: []
  },
  {
    id: '341',
    propertyId: 'BYPASSED_URLS_EXCEPTIONS',
    name: 'Bypassed URLs exceptions',
    nameFile: '157a42',
    topic: 'Bypass rules',
    copy: {
      label: 'URLs',
      itemLabel: 'URL',
      description: ''
    },
    type: 'STRINGHE',
    note: []
  },
  {
    id: '197',
    propertyId: 'BYPASSED_URLS_BY_BYPASSED_REFERER',
    name: 'Bypass by HTTP referer',
    nameFile: '7c37c6',
    description:
      'List of regexes related to url which must be bypassed (both on request and in response)',
    oldPath: 'General > Site > Bypassed request',
    typeOld: 'STRINGHE-REGEX-URL',
    type: 'STRINGHE',
    topic: 'Bypass rules',
    note: []
  },
  {
    id: '369',
    propertyId: 'BYPASSED_USER_AGENTS',
    name: 'Bypass User Agent',
    nameFile: '7512cc',
    copy: {
      label: 'User Agent',
      description: ''
    },
    description: '',
    type: 'STRINGA',
    topic: 'Bypass rules',
    note: []
  },
  {
    id: '223',
    propertyId: 'BYPASSED_COOKIES',
    type: 'DOPPIE-STRINGHE-REGEX',
    name: 'Bypass by cookies',
    nameFile: 'e9b47d',
    description: 'List of regex on name and value of cookies to bypass when at least one matches',
    oldPath: 'General > Site > Bypassed request',
    topic: 'Bypass rules',
    note: []
  },
  {
    id: '350',
    propertyId: 'BYPASSED_UNTOUCHABLE_URLS',
    name: 'Bypass untouchable URLs',
    nameFile: 'f0574e',
    type: 'KTOGGLE',
    label: 'Bypass?',
    topic: 'Bypass rules',
    note: []
  },
  {
    id: '224',
    propertyId: 'BYPASS_REDIRECTS',
    //name: 'Url Change Before Bypass',
    name: 'Redirect URLs before bypass',
    nameFile: 'b606fd',
    description:
      'List of redirects regular expression (match -> replaceall) for requests that are bypassed for some reason',
    oldPath: 'General > Site > Bypassed request',
    topic: 'Bypass rules',
    typeOld: 'DOPPIE-STRINGHE-REGEX',
    type: 'DOPPIE-STRINGHE',
    note: []
  },
  {
    id: '285',
    propertyId: 'AGGREGATOR_EXCLUSION_PATTERN',
    name: 'Bypass Response',
    nameFile: '108e59',
    description:
      'Regular expression to be compared with the URI of a Request to define which content should not be aggregated (and then processed by tool filters) but passed directly: to be used for downloads, movies, audio, ...',
    oldPath: 'General > Site > Bypassed request',
    typeOld: 'STRINGHE-REGEX-URL',
    type: 'STRINGHE',
    topic: 'Bypass rules',
    note: []
  },
  {
    id: '375',
    propertyId: 'DECODE_GET_PARAMETERS',
    name: 'Decode GET paramters',
    nameFile: '157a42',
    copy: {
      label: 'List of parameters',
      itemLabel: 'Parameter',
      description: ''
    },
    topic: 'URL - Query parameters',
    type: 'STRINGHE',
    note: []
  },
  {
    id: '376',
    propertyId: 'SUBPATH_PAGINATION_PATTERN',
    name: 'Subpath Pagination Pattern',
    nameFile: '157a42',
    topic: 'URL - Rewrite',
    copy: {
      label: 'Patterns',
      itemLabel: 'Pattern',
      description: ''
    },
    label: 'Patterns',
    itemLabel: 'Pattern',
    type: 'STRINGHE',
    note: []
  },
  {
    id: '377',
    propertyId: 'IMMEDIATELY_CLEANED_URLMAP_404',
    name: 'Immediately cleaned URL map 404',
    nameFile: '157a42',
    topic: 'Kleecks Settings',
    copy: {
      label: 'Items',
      itemLabel: 'Item',
      description: ''
    },
    type: 'STRINGHE',
    note: []
  },
  {
    id: '378',
    propertyId: 'KEEP_ORIGINAL_ALTERNATES_SERVERURLS',
    name: 'Keep original alternates by original URLs',
    nameFile: '157a42',
    copy: {
      label: 'URLs',
      itemLabel: 'URL',
      description: ''
    },
    topic: 'Alternates',
    type: 'STRINGHE',
    note: []
  },
  {
    id: '379',
    propertyId: 'BANNED_USER_AGENTS',
    name: 'Banned User Agents',
    nameFile: '157a42',
    copy: {
      label: 'User Agents',
      itemLabel: 'User Agent',
      description: ''
    },
    topic: 'Security',
    type: 'STRINGHE',
    note: []
  },
  {
    id: '346',
    propertyId: 'ALTERNATES_REMOVE_BROKEN',
    name: 'Remove broken alternates',
    nameFile: 'f0574e',
    type: 'KTOGGLE',
    label: 'Remove?',
    topic: 'Alternates',
    note: []
  },
  {
    id: '347',
    propertyId: 'SERVERURL_FROM_URL_PRESERVE_REQUESTED',
    name: 'Server URL From URL Preserve Requested',
    nameFile: 'f0574e',
    type: 'KTOGGLE',
    label: 'Preserve?',
    topic: 'Kleecks Settings',
    note: []
  },
  {
    id: '348',
    propertyId: 'DISABLE_COOKIE_PROCESSING',
    name: 'Disable Cookie Processing',
    nameFile: 'f0574e',
    type: 'KTOGGLE',
    label: 'Disable?',
    topic: 'Cookies',
    note: []
  },
  {
    id: '349',
    propertyId: 'PAGESTORE_DONT_STORE_NOT_CANONICAL',
    name: "Page don't Store not Canonical",
    nameFile: 'f0574e',
    type: 'KTOGGLE',
    label: "Don't store?",
    topic: 'Kleecks Settings',
    note: []
  },
  {
    id: '414',
    propertyId: 'REPLACE_CMS_URL_WITH_CANONICALS',
    name: 'Replace CMS URL with Canonicals',
    nameFile: 'f0574e',
    type: 'KTOGGLE',
    label: 'Replace?',
    topic: 'Canonical',
    note: []
  },
  {
    id: '352',
    propertyId: 'ALTERNATES_ALWAYS_ADD_SELF',
    name: 'Add self referencing alternate',
    nameFile: 'f0574e',
    type: 'KTOGGLE',
    label: 'Add self?',
    topic: 'Alternates',
    note: []
  },
  {
    id: '353',
    propertyId: 'URL_PRESERVE_CASE',
    name: 'URL Preserve Case',
    nameFile: 'f0574e',
    type: 'KTOGGLE',
    label: 'Preserve?',
    topic: 'URL - Rewrite',
    note: []
  },
  {
    id: '354',
    propertyId: 'CANONICAL_ADD_SELF_IF_MISSING',
    name: 'Canonical Add Self id Missing',
    nameFile: 'f0574e',
    type: 'KTOGGLE',
    label: 'Add?',
    topic: 'Canonical',
    note: []
  },
  {
    id: '355',
    propertyId: 'HTMLCOMPRESSOR_DISABLED',
    name: 'HTML Compressor Disabled',
    nameFile: 'f0574e',
    type: 'KTOGGLE',
    label: 'Disable?',
    topic: 'Performance HTML',
    note: []
  },
  {
    id: '356',
    propertyId: 'JSCOMPRESSOR_INLINE_DISABLED',
    name: 'JS Compressor inline disabled',
    nameFile: 'f0574e',
    type: 'KTOGGLE',
    label: 'Disable?',
    topic: 'Performance JS',
    note: []
  },
  {
    id: '64',
    propertyId: 'ABOVETHEFOLD_ONLY_FOR_PAGESPEED',
    name: 'Above the fold only for pagespeed',
    nameFile: 'f0574e',
    type: 'KTOGGLE',
    label: 'Activate?',
    topic: 'Performance Extra',
    note: []
  },
  {
    id: '357',
    propertyId: 'CSSCOMPRESSOR_INLINE_DISABLED',
    name: 'CSS Compressor Inline Disabled',
    nameFile: 'f0574e',
    type: 'KTOGGLE',
    label: 'Disable?',
    topic: 'Performance CSS',
    note: []
  },
  {
    id: '358',
    propertyId: 'KEEP_0_ORIGIN_404',
    name: 'Keep 0 Origin 404',
    nameFile: 'f0574e',
    type: 'KTOGGLE',
    label: 'Keep?',
    topic: 'Kleecks Settings',
    note: []
  },
  {
    id: '359',
    propertyId: 'JSCOMPRESSOR_USE_GOOGLECLOSURE',
    name: 'JS Compressor Use Google Closure',
    nameFile: 'f0574e',
    type: 'KTOGGLE',
    label: 'Use?',
    topic: 'Performance JS',
    note: []
  },
  {
    id: '360',
    propertyId: 'MARK_LINK_TO_SELF',
    name: 'Mark Link To Self',
    nameFile: 'f0574e',
    type: 'KTOGGLE',
    label: 'Mark?',
    topic: 'URL - Query parameters',
    note: []
  },
  {
    id: '361',
    propertyId: 'HTML_ADD_DATA_LOCALE',
    name: 'HTML Add Data Locale',
    nameFile: 'f0574e',
    type: 'KTOGGLE',
    label: 'Add?',
    topic: 'International',
    note: []
  },
  {
    id: '363',
    propertyId: 'SOURCE_EDITOR_ADD_GEO_VARS',
    name: 'Source Editor Add Geo Vars',
    nameFile: 'f0574e',
    type: 'KTOGGLE',
    label: 'Add?',
    topic: 'International',
    note: []
  },
  {
    id: '364',
    propertyId: 'PAGE_TYPE_ALL_INCLUDE_EXCLUDED',
    name: 'Page Type All Include Excluded',
    nameFile: 'f0574e',
    type: 'KTOGGLE',
    label: 'Activate?',
    topic: 'Source Editors',
    note: []
  },
  {
    id: '365',
    propertyId: 'STEAL_CLEAN_URLS_FROM_VIRTUALS',
    name: 'Steal Clean URLs from Virtuals',
    nameFile: 'f0574e',
    type: 'KTOGGLE',
    label: 'Steal?',
    topic: 'Kleecks Settings',
    note: []
  },
  {
    id: '366',
    propertyId: 'ENABLE_404_PARENT_REDIRECT_TO_ROOT',
    name: 'Enable 404 Parent Redirect to Root',
    nameFile: 'f0574e',
    type: 'KTOGGLE',
    label: 'Enable?',
    topic: 'Redirects',
    note: []
  },
  {
    id: '367',
    propertyId: 'HTML_LANG_OVERRIDE_DISABLED',
    name: 'HTML Lang Override disabled',
    nameFile: 'f0574e',
    type: 'KTOGGLE',
    label: 'Override?',
    topic: 'International',
    note: []
  },
  {
    id: '368',
    propertyId: 'HTML_LANG_COMPLETE_LOCALE',
    name: 'HTML Lang Complete Locale',
    nameFile: 'f0574e',
    type: 'KTOGGLE',
    label: 'Complete?',
    topic: 'international',
    note: []
  },
  {
    id: '67',
    propertyId: 'ADD_COUNTRY_HEADER',
    name: 'Add country header',
    nameFile: 'f0574e',
    type: 'KTOGGLE',
    label: 'Add?',
    topic: 'International',
    note: []
  },
  {
    id: '387',
    propertyId: 'VERSIONING_GET_PARAMETERS',
    name: 'Versioning GET parameters',
    nameFile: 'plain1',
    copy: {
      condition: {
        label: 'URL condition',
        description: 'Optional regular expression on cleaned URL (without query part)'
      },
      name: {
        label: 'Parameter',
        description: 'Parameter name (mandatory)'
      },
      value: {
        label: 'Value',
        description: 'Optional regular expression un parameter value'
      }
    },
    description: '',
    oldPath: '',
    type: 'COMPLEX-PLAIN',
    topic: 'URL - Query parameters',
    note: []
  },
  // {
  //   id: '389',
  //   propertyId: 'URL_IN_GET_PARAMETERS',
  //   name: 'Rewrite URL in GET parameters 1',
  //   nameFile: 'plain3',
  //   description: '',
  //   oldPath: '',
  //   type: 'COMPLEX-PLAIN',
  //   topic: 'URL - Query parameters',
  //   note: []
  // },
  // {
  //   id: '390',
  //   propertyId: 'URL_IN_EXTERNALURLS_GET_PARAMETERS',
  //   name: 'URL in external urls GET parameters',
  //   nameFile: 'plain4',
  //   description: '',
  //   oldPath: '',
  //   type: 'COMPLEX-PLAIN',
  //   topic: 'URL - Query parameters',
  //   note: []
  // },
  // {
  //   id: '85',
  //   propertyId: 'URL_IN_EXTERNALURLS_GET_PARAMETERS',
  //   name: 'Url In External Urls Get Parameters',
  //   nameFile: 'UrlInExternalUrlsGetParameters',
  //   oldPath: 'Uncategorized',
  //   type: 'STRINGA',
  //   parent1: 'Url parameters',
  //   parent2: 'Url',
  //   note: ['Da fare']
  // },
  {
    id: '76',
    propertyId: 'PAGINATOR_PAGE_PARAMETER',
    name: 'Original Cms Get Parameter For Paginations',
    nameFile: '7512cc',
    copy: {
      label: 'Parameter',
      description: ''
    },
    description: 'Parameter name (in GET) of the pager, which is replaced with a simple page',
    oldPath: 'General > Site > URL PARAMETERS',
    perPageType: true,
    type: 'STRINGA',
    topic: 'URL - Pagination',
    note: []
  },
  {
    id: '370',
    propertyId: 'WAF_COUNTRY_HEADER',
    name: 'WAF Country Header',
    nameFile: '7512cc',
    description: '',
    label: 'Country Header',
    type: 'STRINGA',
    topic: 'International',
    note: []
  },
  {
    id: '371',
    propertyId: 'RESOLVED_IP_FLUSH_INTERVAL',
    name: 'Resolved IP flush interval',
    nameFile: '7512cc',
    copy: {
      label: 'Interval',
      description: ''
    },
    description: '',
    type: 'STRINGA',
    topic: 'Kleecks Settings',
    note: []
  },
  {
    id: '372',
    propertyId: 'AGGREGATOR_MAX_SIZE',
    name: 'Aggregator Max Size',
    nameFile: '7512cc',
    description: '',
    copy: {
      label: 'Max Size',
      description: ''
    },
    type: 'STRINGA',
    topic: 'Kleecks Settings',
    note: []
  },
  {
    id: '373',
    propertyId: 'REQUEST_AGGREGATOR_MAX_SIZE',
    name: 'Request Aggregator Max Size',
    nameFile: '7512cc',
    copy: {
      label: 'Max Size',
      description: ''
    },
    description: '',
    type: 'STRINGA',
    topic: 'Kleecks Settings',
    note: []
  },
  {
    id: '180',
    propertyId: 'USE_FAKE_CHILDREN_PAGINATION',
    name: 'Force Subpath For Pagination',
    nameFile: '31e2ff',
    description:
      'Force the use of pagination as a sub-path of the current page instead of as a parameter in GET (eg /page_listing/page/2)',
    oldPath: 'General > Site > URL PARAMETERS',
    perPageType: true,
    type: 'STRINGA',
    topic: 'URL - Pagination',
    note: []
  },
  {
    id: '27',
    propertyId: 'GTM_URL_MAPPING',
    name: 'URL - GTM Url mapping script',
    nameFile: 'e1acb3',
    copy: {
      enabled: {
        label: 'Enabled',
        description: ''
      },
      originalUrlVarName: {
        label: 'Original URL variable name',
        description: 'The name for the attribute containing the original URL of the page'
      },
      modifiedUrlVarName: {
        label: 'Optimized URL variable name',
        description: 'The name for the attribute containing the optimized URL of the page'
      },
      gtmScriptContainsIdentifier: {
        label: 'GTM script identifier',
        description:
          'Optional string used to identify GTM script using a contains function (the mapping script has to be placed before this): if nothing is provided the default //www.googletagmanager.com/gtm.js pattern is used.'
      },
      excludeUrlQueryParameters: {
        label: 'Exclude URL Query Parameters',
        description:
          'Allows you to define a list of query parameter that will be removed from provided URLs'
      }
    },
    description:
      'It allows you to configure a script that pushes variables containing the original URL and the one modified by the tool on the dataLayer, for use by Google Tag Manager, which will be configured accordingly',
    oldPath: 'General > Site > URL PARAMETERS',
    type: 'COMPLEX-OBJECT',
    topic: 'Status',
    seojs3: true,
    note: []
  },
  {
    id: '193',
    propertyId: 'FAKE_CHILDREN_PATHS',
    name: 'Un-Necessary Subpaths In Urls',
    nameFile: '5c7b46',
    description:
      'Parameter to configure the path to be treated with fake children, you must insert regex in which the fake path starts from group 1',
    oldPath: 'General > Site > URL PARAMETERS',
    typeOld: 'STRINGHE-URL',
    type: 'STRINGHE',
    topic: 'URL - Path',
    note: []
  },
  {
    id: '35',
    propertyId: 'PRESERVED_FAKE_CHILDREN',
    name: 'Un-Necessary Subpaths That Defines Pages',
    nameFile: 'e69f94',
    copy: {
      activator: {
        label: 'Activator - RegEx',
        description:
          "A regex on the 'activator' of the params subpath: the activator is the path part identified by the group 1 in the fake children path's identifier regex"
      },
      values: {
        label: 'Values',
        description: ''
      }
    },
    description:
      'Analogamente a quanto fattibile con in parametri in GET è possibile definire che alcuni sottopath in precedenza definiti come non essenziali (ed analoghi a parametri) debbano essere mantenuti ed ottimizzati insieme alla pagina di riferimento. E utile ad esempio in presenza di un meccanismo di filtri su listing basati su sottopath (es /s-1/...) in cui qualcuno di questi (es. /brand-abc) vada ottimizzato (e gli altri no)',
    oldPath: 'General > Site > URL PARAMETERS',
    type: 'COMPLEX-OBJECT-PROPERTY-ARRAY',
    topic: 'URL - Path',
    perPageType: true,
    seojs3: true,
    note: []
  },
  {
    id: '220',
    propertyId: 'SERVER_URL_REPLACE',
    name: 'Server Url Replace',
    nameFile: '2ab7fa',
    copy: {
      label: 'Server URL replaceAll instructions'
    },
    description:
      'Defines a series of replaceall rules to be applied to the url server immediately before setting it in the request sent to the cms',
    oldPath: 'General > Site > URL PARAMETERS',
    type: 'DOPPIE-STRINGHE',
    topic: 'URL - Rewrite',
    note: []
  },
  {
    id: '194',
    propertyId: 'URL_WITHOUT_LOCALES',
    name: 'URL - Url without locale subpath',
    nameFile: '4715b1',
    description:
      'In caso di più domini in lingua specifica che gli URL che verificano una delle condizione non hanno indicazione della località e quindi non deve essere mai ricercata in sede di censimento degli URL. ULR originale e Kleecks tendenzialmente saranno uguali, ma la regex verrà valutata sullURL originale, quindi eventuali case originali vanno considerati',
    oldPath: 'General > Site > URL PARAMETERS',
    typeOld: 'STRINGHE-URL',
    type: 'STRINGHE',
    topic: 'International',
    note: []
  },
  {
    id: '137',
    propertyId: 'URL_LOCALES_CHECK_DISABLED',
    name: 'URL - Disable URL locales check',
    nameFile: 'fc7656',
    description:
      "Definisce che a parte gli url che matchano le condizioni nella 'URL WITHOUT LOCALE SUBPATH' tutti gli altri URL avranno sempre indicazione geografica e non bisogna verificare se esistono senza",
    oldPath: 'General > Site > URL PARAMETERS',
    topic: 'International',
    type: 'KTOGGLE',
    note: ['Traduci e aggiungi la descrizione']
  },
  {
    id: '175',
    propertyId: 'URL_PRESERVE_FINAL_SLASH',
    name: 'Preserve Original Final Slash in url',
    nameFile: 'c0ba98',
    oldPath: 'General > Site > URL PARAMETERS',
    type: 'KTOGGLE',
    topic: 'URL - Path',
    note: []
  },
  {
    id: '170',
    propertyId: 'SEARCH_PAGE_WITH_EXTENSION',
    name: 'Search Page With .Html Extension',
    nameFile: '6dcf4a',
    description:
      'In caso di 404 su una richiesta verifica se esiste una pagina che abbia lo stesso lurl di quella richiesta ma con estensione .html e in caso affermativo manda un redirect ad essa (es. viene richiesto /pagina, che non esiste, mentre esiste /pagina.html): è un caso molto frequente navigando manualmente la gerarchia degli url di alcuni CMS (es. /pagina/sottopagina.html)',
    oldPath: 'General > site > REQUESTS - RESPONSE CODES - REDIRECTS',
    type: 'KTOGGLE',
    topic: 'Redirects',
    note: []
  },
  {
    id: '239',
    propertyId: 'ADDITIONAL_SCRIPT_EXTRACTORS',
    oldPath: 'Webmaster > Advanced > Advanced URL Rewriting',
    name: 'Additional Script Extractors',
    nameFile: '961187',
    type: 'COMPLEX-ARRAY',
    topic: 'URL - Rewrite',
    seojs3: true,
    note: []
  },
  {
    id: '63',
    propertyId: 'LANDING_PAGES_PATH',
    name: 'Custom Pages Base Path',
    nameFile: 'ebba9e',
    description: 'Base URL for all custom pages created (default /ck-landing)',
    oldPath: 'Webmaster > Advanced > Resources',
    type: 'STRINGA',
    topic: 'URL - Path',
    note: []
  },
  {
    id: '128',
    propertyId: 'CUSTOM_RESOURCES_USE_FINGERPRINT',
    name: 'Custom Resources Use Fingerprint',
    nameFile: '9d2ac6',
    description: 'Adds fingerprint to custom resources',
    oldPath: 'Webmaster > Advanced > Resources',
    type: 'KTOGGLE',
    topic: 'URL - Query parameters',
    note: []
  },
  {
    id: '343',
    propertyId: 'SELECTOR_SERP',
    name: 'Selector SERP',
    nameFile: '7512cc',
    copy: {
      label: 'Selector',
      description: ''
    },
    description: '',
    oldPath: 'Webmasters > page Types',
    type: 'STRINGA',
    topic: 'Page Type - Advanced',
    note: []
  },
  {
    id: '192',
    propertyId: 'SERP_URLS',
    name: 'SERP Urls - IDENTIFICATION BY PATH',
    nameFile: 'f9c408',
    copy: {
      label: 'List of page URLs',
      description: ''
    },
    description:
      'List of page URLs with variable content depending on the request, on which content-based optimizations are not enabled',
    oldPath: 'Webmasters > page Types',
    type: 'STRINGHE-URL',
    typeOld: 'STRINGHE',
    topic: 'Page Type - Advanced',
    note: []
  },
  {
    id: '103',
    propertyId: 'SERP_URLS_REGEX',
    name: 'SERP Urls Regex -  IDENTIFICATION BY URL REGEX',
    nameFile: 'ca8c7c',
    description: 'Regular expression on the URL to identify SERP pages',
    oldPath: 'Webmaster > Dynamic Search Results Pages', // Webmaster > Dynamic Search Results Pages
    type: 'STRINGA',
    topic: 'Page Type - Advanced',
    note: []
  },
  {
    id: '261',
    name: 'Url Redirects',
    nameFile: '13f87f',
    propertyId: 'URL_REDIRECTS',
    type: 'SPECIAL',
    topic: 'Services/Tools',
    copy: {
      h2: 'Redirects',
      xmlInlineHelp:
        'Create an XLSX file with columns named url, dest_url and type. The first line can be used as a header.',
      url: {
        label: 'Url',
        description: ''
      },
      destUrl: {
        label: 'Destination Url',
        description: ''
      },
      type: {
        label: 'Type',
        description: ''
      }
    },
    isBigger: true,
    slug: 'redirect-urls',
    templateFile: 'TechUrlRedirect',
    note: []
  },
  {
    id: '18',
    propertyId: 'IMMEDIATE_REDIRECTS',
    name: 'Predefined Redirects',
    nameFile: '6c7d1a',
    description:
      'Permette di configurare regole di riscrittura basate su regular expressions sugli URL per inviare immediatamente dei redirect, senza chiedere al CMS sottostante',
    oldPath: 'General > site > REQUESTS - RESPONSE CODES - REDIRECTS',
    type: 'COMPLEX-ARRAY-MULTIPLE',
    copy: {
      firstValue: {
        label: 'From - RegEx-URL',
        description: 'Regular expression on requested URL'
      },
      fourthValue: {
        label: 'Referer - RegEx',
        description: 'Optional additional regex check on received Referrer'
      },
      secondValue: {
        label: 'To - Tipo URL2',
        description: 'eplace all directive (you can refer to regex groups with $n syntax)'
      },
      thirdValue: {
        label: 'Redirect Type - Tipo STATUSCODE3XX',
        description: ''
      }
    },
    topic: 'Redirects',
    seojs3: true,
    note: []
  },
  {
    id: '200',
    propertyId: 'IGNORE_404_REDIRECT_REGEX',
    name: 'Exclude Automatic Redirection To 404',
    nameFile: '9ca3e9',
    description: 'Allows you to disable automatic redirect in case of 404 for match urls',
    oldPath: 'General > site > REQUESTS - RESPONSE CODES - REDIRECTS',
    typeOld: 'STRINGHE-REGEX-URL',
    type: 'STRINGHE',
    topic: 'Redirects',
    note: []
  },
  {
    id: '131',
    propertyId: 'DISABLE_404_REDIRECTION_FOR_0_ORIGIN_URLS',
    name: 'Disable Automatic Redirection For User Generated Url',
    description:
      'Disabilita il redirect automatico in caso di 404 quando lURL non è stato trovato in pagina ma proviene da una richiesta esterna',
    oldPath: 'General > site > REQUESTS - RESPONSE CODES - REDIRECTS',
    nameFile: '397a81',
    type: 'KTOGGLE',
    topic: 'Redirects',
    note: ['Traduci e aggiungi la descrizione']
  },
  {
    id: '132',
    propertyId: 'DISABLE_404_REDIRECT_BY_SIMILARITY',
    name: 'Disable Automatic Redirection To Similar Pages',
    nameFile: '5bb0bf',
    description:
      'Disabilita il redirect automatico in caso di 404 quando lURL non è stato trovato in pagina ma proviene da una richiesta esterna',
    oldPath: 'General > site > REQUESTS - RESPONSE CODES - REDIRECTS',
    type: 'KTOGGLE',
    topic: 'Redirects',
    note: ['']
  },
  {
    id: '139',
    propertyId: 'ENABLE_REDIRECT_SAME_PAGEURL',
    name: 'Redirection To Same Page Name Url',
    nameFile: 'a25f76',
    description: 'In case of 404 it enables the automatic redirect to a page with the same name',
    oldPath: 'General > site > REQUESTS - RESPONSE CODES - REDIRECTS',
    type: 'KTOGGLE',
    topic: 'Redirects',
    sidebarSection: 'Redirects',
    slug: 'redirects/automatic-redirection-to-same-page-name-url',
    template: 'ToggleTemplate',
    note: []
  },
  {
    id: '177',
    propertyId: 'SEND_TEMPORARY_REDIRECTS',
    name: 'Use 302 For Automatic Redirections',
    nameFile: '27fc21',
    description: 'Send 302 instead of 301 on automatic redirects',
    oldPath: 'General > site > REQUESTS - RESPONSE CODES - REDIRECTS',
    type: 'KTOGGLE',
    topic: 'Redirects',
    note: []
  },
  {
    id: '218',
    propertyId: 'ACCEPT_LANGUAGE_REDIRECT_SETTINGS',
    name: 'Automatic Redirection Based On Request Ip And Accept Language',
    nameFile: '0752b9',
    copy: {
      enabled: {
        label: 'Enabled',
        description: ''
      },
      prefIP: {
        label: 'Prefer IP Country Language',
        description:
          "If enabled the system tries to identify a user's country from its origin IP and redirect to country or country spoken language version of the site instead of using its browser's accept-language"
      },
      deflang: {
        label: 'Default Language',
        description: 'Language to redirect to when no proper match is found'
      },
      exlbot: {
        label: 'Exclude Bots',
        description: 'Disable the mechanism for configured bots'
      },
      exclRefs: {
        label: 'Excluded Referers',
        description:
          'Disable the mechanism when the request referer matches one of these conditions (as regular expression)'
      },
      domains: {
        label: 'Manual Countries Mapping',
        description: ''
      },
      countries: {
        label: 'Issue Actions',
        description: ''
      },
      domain: {
        label: 'Domain',
        description: 'Domain to redirect to'
      },
      actEvPage: {
        label: 'Activate On Every Page',
        description:
          'If enabled the mechanism will be activate on each page, not only on the root of the domain'
      },
      includedURLS: {
        label: 'Included URLs',
        description:
          'Limits the activation only on matching URLs. If nothing is set every page will be considered. The previous flag has to be enabled'
      },
      excludedURLS: {
        label: 'Excluded URLs',
        description: 'Matching URLs will be excluded from the mechanism activation'
      },
      mred: {
        label: 'Manual Redirects"',
        description: ''
      },
      sourceUrl: {
        label: 'Source URL - RegEx-URL',
        description: 'Regular expression on requested URL'
      },
      destURLS: {
        label: 'Destination URL',
        description: 'A list of redirect destinations, on for each locale'
      },
      red2alt: {
        label: 'Redirect To Alternate',
        description:
          'If enabled the user will be redirected to current page localized alternate, if any'
      },
      preservedGetParameters: {
        label: 'Preserved GET Parameters',
        description: 'A list of GET garameters that have to be included in the redirect location'
      }
    },
    description:
      'Configuration of the mechanism that allows to redirect between home pages according to the clients accept-language',
    oldPath: 'General > Site > REQUESTS RESPONSE CODES REDIRECTS',
    type: 'COMPLEX-OBJECT-QUIRK-1',
    topic: 'Redirects',
    seojs3: true,
    note: []
  },
  // {
  //   id: '381',
  //   propertyId: 'HTTPS_REDIRECT_SERVER_URL_REPLACE',
  //   name: 'Redirect Server URL replaceAll instructions',
  //   nameFile: '2ab7f1',
  //   label1: 'From',
  //   label2: 'To',
  //   description: '',
  //   oldPath: '',
  //   type: 'DOPPIE-STRINGHE',
  //   topic: 'Redirects',
  //   note: []
  // },
  // {
  //   id: '382',
  //   propertyId: 'POST_BODY_REPLACE',
  //   name: 'POST request body replaceAll instructions',
  //   nameFile: '2ab7f1',
  //   label1: 'From',
  //   label2: 'To',
  //   description: '',
  //   oldPath: '',
  //   type: 'DOPPIE-STRINGHE',
  //   topic: 'Redirects',
  //   note: []
  // },
  // {
  //   id: '384',
  //   propertyId: 'REQUEST_HOST_REPLACE',
  //   name: 'Request Host replace',
  //   nameFile: '2ab7f1',
  //   label1: 'From',
  //   label2: 'To',
  //   description: '',
  //   oldPath: '',
  //   type: 'DOPPIE-STRINGHE',
  //   topic: 'Redirects',
  //   note: []
  // },
  {
    id: '385',
    propertyId: 'CUSTOM_404_REDIRECTS',
    name: 'Custom redirects on 404 error',
    nameFile: '2ab7f1',
    label1: 'From',
    label2: 'To',
    description: '',
    oldPath: '',
    type: 'DOPPIE-STRINGHE',
    topic: 'Redirects',
    note: []
  },
  // {
  //   id: '388',
  //   propertyId: 'ADD_MISSING_CONTENTTYPE',
  //   name: 'Rules to add missing content type',
  //   nameFile: 'plain2',
  //   description: '',
  //   oldPath: '',
  //   type: 'COMPLEX-PLAIN',
  //   topic: 'Redirects',
  //   note: []
  // },
  // {
  //   id: '392',
  //   propertyId: 'LAST_MODIFIED_EXTRACTION_PATTERNS',
  //   name: 'Localized patterns',
  //   nameFile: 'plain6',
  //   description: '',
  //   oldPath: '',
  //   type: 'COMPLEX-PLAIN',
  //   topic: 'Redirects',
  //   note: []
  // },
  // {
  //   id: '393',
  //   propertyId: 'DELETE_RESOURCES_UNUSED_FOR_DAYS',
  //   name: 'DELETE_RESOURCES_UNUSED_FOR_DAYS',
  //   nameFile: '7512cc',
  //   description: '',
  //   oldPath: '',
  //   type: 'STRINGA',
  //   topic: 'Redirects',
  //   note: []
  // },
  {
    id: '394',
    propertyId: 'COUNTRY_HEADER_CUSTOM_NAME',
    name: 'Country Header Custom Name',
    nameFile: '7512cc',
    copy: {
      label: 'Header name',
      description: ''
    },
    description: '',
    oldPath: '',
    type: 'STRINGA',
    topic: 'International',
    note: []
  },
  {
    id: '395',
    propertyId: 'ACCEPT_LANGUAGE_SETTINGS',
    name: 'Accept Language Settings',
    nameFile: 'justObject',
    copy: {
      disableChangeForUsers: {
        label: 'Disable Accept Language modifications for users requests',
        description: ''
      },
      disableChangeForBots: {
        label: 'Disable Accept Language modifications for bots requests',
        description: ''
      },
      disableChangeForKleecksCrawler: {
        label: "Disable Accept Language modifications for Kleecks crawler's requests",
        description: ''
      }
    },
    description: '',
    oldPath: '',
    type: 'COMPLEX-OBJECT',
    topic: 'International',
    note: []
  },
  {
    id: '397',
    propertyId: 'PRERENDER_ADVANCED_CACHE_CONFIGURATION',
    name: 'Kleecks prerender service advance caching configuration',
    nameFile: 'justObject1',
    copy: {
      enableDbCache: {
        label: 'Enable DB Cache',
        description: ''
      },
      validateWithApiCall: {
        label: 'Validate cache with API call',
        description: ''
      },
      validityCheckApiCall: {
        label: 'Cache validation API request URL',
        description: ''
      },
      useCacheRefreshEngine: {
        label: "Disable Accept Language modifications for Kleecks crawler's requests",
        description: ''
      },
      staleCacheValidity: {
        label: 'Prerender Cache Stale Validity',
        description:
          'Additional cache validity after expiration (in minutes) for bot requests (except Kleecks cache refresher): the previous flag has to be active'
      }
    },
    description: '',
    oldPath: '',
    type: 'COMPLEX-OBJECT',
    topic: 'Prerender',
    note: []
  },
  // {
  //   id: '398',
  //   propertyId: 'JS_CUSTOM_BY_URL',
  //   name: 'Custom JS by URL',
  //   nameFile: 'plain8',
  //   description: '',
  //   oldPath: '',
  //   type: 'COMPLEX-PLAIN',
  //   topic: 'Redirects',
  //   note: []
  // },
  // {
  //   id: '400',
  //   propertyId: 'PROCESS_STATIC_RESOURCES',
  //   name: 'Process static resources',
  //   nameFile: 'f0574e',
  //   oldPath: '',
  //   description:
  //     "28/09/2022: flag per dire che le risorse statiche vanno anch'esse processate da Kleecks come se arrivassero dall'origin",
  //   type: 'KTOGGLE',
  //   topic: 'Redirects',
  //   note: []
  // },
  // {
  //   id: '401',
  //   propertyId: 'REPLACE_CANONICAL_WITH_HTML_SELECTOR',
  //   name: 'Replace canonical with html selector',
  //   nameFile: 'plain9',
  //   description: '',
  //   oldPath: '',
  //   type: 'COMPLEX-PLAIN',
  //   topic: 'Redirects',
  //   note: []
  // },
  // {
  //   id: '402',
  //   propertyId: 'OPENGRAPH_SETTINGS',
  //   name: 'OpenGraph settings',
  //   nameFile: 'justObject3',
  //   description: '',
  //   oldPath: '',
  //   type: 'COMPLEX-OBJECT',
  //   topic: 'Redirects',
  //   note: []
  // },
  {
    id: '32',
    propertyId: 'PAGE_CUSTOM_CANONICAL',
    name: 'Custom Canonical Urls',
    nameFile: '9af4d1',
    description:
      'Definizione di canonical custom sulle pagine che verificano almeno una delle condizioni',
    copy: {
      condition: {
        label: 'Requested URL - RegEx Url',
        description: 'Regex on current page requested URL'
      },
      condition2: {
        label: 'Requested CMS Url - RegEx',
        description: "Regex on requested original CMS URL. It's mandatory that one condition is set"
      },
      from: {
        label: 'From',
        description:
          "Optional regex that will be used as FROM clause in a replaceAll instruction. It's useful to extract fragments from the requested URL and use them in the rewritten canonical. If nothing is provided the entire URL will be replaced with TO condition"
      },
      to: {
        label: 'Canonical URL',
        description:
          'The absolute canonical URL that will be used. Fragments from the FROM field can be accessed with the $-index syntax'
      }
    },
    type: 'COMPLEX-ARRAY',
    oldPath: 'SEO > Variables > Canonical',
    perPageType: true,
    topic: 'Canonical',
    seojs3: true,
    note: ['Traduci e aggiungi la descrizione']
  },
  {
    id: '259',
    propertyId: 'CANONICAL_PRESERVED_PARAMETERS',
    name: 'Preserved Get Parameters',
    nameFile: 'c37968',
    description:
      "Elenco di parametri in GET dellURL corrente di pagina che debbano essere preservati nellURL canonico. Eventuali parametri 'page' vengono già mantenuti di default",
    oldPath: 'SEO > Variables > Canonical',
    perPageType: true,
    typeOld: 'STRINGHE-REGEX-URL',
    type: 'STRINGHE',
    topic: 'Canonical',
    note: []
  },
  {
    id: '225',
    propertyId: 'CANONICAL_PRESERVED_SUBPATHS',
    name: 'Preserved Subpaths',
    nameFile: '5b111b',
    description:
      'Definizione di regole per cui eventuali finti sottopath (configurati come tali) quando soddisfano le regole debbano essere aggiunti allURL di pagina canonico',
    oldPath: 'SEO > Variables > Canonical',
    perPageType: true,
    typeOld: 'DOPPIE-STRINGHE-REGEX',
    type: 'DOPPIE-STRINGHE',
    topic: 'Canonical',
    note: []
  },
  {
    id: '207',
    propertyId: 'KEEP_ORIGINAL_CANONICAL_SERVERURLS',
    name: 'Keep Original Canonical Server Urls',
    nameFile: 'b00dcf',
    description:
      'Lista di URL che verranno aggiunti nellHEAD di pagina come indicazione di rel=PRECONNECT',
    oldPath: 'SEO > Variables > Canonical',
    typeOld: 'STRINGHE-REGEX-URL',
    type: 'STRINGHE',
    topic: 'Canonical',
    note: []
  },
  {
    id: '208',
    propertyId: 'KEEP_ORIGINAL_CANONICAL_URLS',
    name: 'Keep Original Canonical Urls',
    nameFile: '1d5871',
    description:
      'Set di regole per cui i canonical URL delle pagine i cui URL matchano una delle condizioni non verranno sostituiti rispetto alle regole di ottimizzazione dello strumento',
    oldPath: 'SEO > Variables > Canonical',
    typeOld: 'STRINGHE-REGEX-URL',
    type: 'STRINGHE',
    topic: 'Canonical',
    note: ['Traduci e aggiungi la descrizione']
  },
  {
    id: '164',
    propertyId: 'PAGESTORE_IGNORE_CANONICAL',
    name: 'Page Store Ignore Canonical',
    nameFile: 'e69b6d',
    description:
      'Ability to ignore the canonical into the page to associate the pages when they are stored',
    oldPath: 'SEO > Variables > Canonical',
    type: 'KTOGGLE',
    topic: 'Canonical',
    note: []
  },
  // {
  //   id: '79',
  //   propertyId: 'REPLACE_CANONICAL_WITH_HTML_SELECTOR',
  //   name: 'Replace Canonical With Html Selector',
  //   nameFile: 'ReplaceCanonicalWithHtmlSelector',
  //   oldPath: 'Uncategorized',
  //   type: 'STRINGA',
  //   parent1: 'Canonical',
  //   parent2: 'Url',
  //   note: []
  // },
  {
    id: '6',
    propertyId: 'IMMEDIATE_ERROR_RESPONSES',
    name: 'Predefined Error Responses',
    nameFile: 'cd5fe7',
    description:
      'Permette di configurare regole sugli URL per inviare immediatamente dei codici di risposta di errore, senza chiedere al CMS sottostante',
    oldPath: 'General > site > REQUESTS - RESPONSE CODES - REDIRECTS',
    type: 'COMPLEX-ARRAY-MULTIPLE',
    topic: 'Status Code',
    seojs3: true,
    note: ['Traduci e aggiungi la descrizione']
  },
  {
    id: '20',
    propertyId: 'CHANGE_STATUS_CODE',
    name: 'Replace Status Code',
    nameFile: '1bcc07',
    description:
      'Permette di sostituire uno status code con un altro. Viene eseguito prima che il sistema decida come comportarsi sulla base dello status code. Attenzione a non configurare status code (es. 30x) per i quali poi manchino informazion negli headers (es. Location)',
    oldPath: 'General > site > REQUESTS - RESPONSE CODES - REDIRECTS',
    copy: {
      firstValue: {
        label: 'Original URL - RegEx Url',
        description: 'Optional regular expression on requested original CMS URL'
      },
      secondValue: {
        label: 'Kleecks URL - RegEx Url',
        description: 'Optional regular expression on Kleecks optimized URL'
      },
      thirdValue: {
        label: 'Content type - RegEx',
        description: 'Optional regular expression on response content type'
      },
      fourthValue: {
        label: 'Content type',
        description: 'Apply the rule only to configured bots'
      },
      fifthValue: {
        label: 'From Status Code - Tipo STATUSCODE',
        description: ''
      },
      sixthValue: {
        label: 'To Status Code - Tipo STATUSCODE',
        description: ''
      }
    },
    type: 'COMPLEX-ARRAY-MULTIPLE',
    topic: 'Status Code',
    seojs3: true,
    note: ['Traduci e aggiungi la descrizione']
  },
  {
    id: '2',
    propertyId: 'ERROR_URLS',
    name: 'Change Status Code To 404 By Url',
    nameFile: 'e103b9',
    oldPath: 'General > Site > REQUESTS RESPONSE CODES REDIRECTS',
    copy: {
      firstValue: {
        label: 'RegEx',
        description: 'Regular expression used to identify the error resource'
      },
      secondValue: {
        label: 'Status Code',
        description: 'Status code that has to be returned'
      }
    },
    type: 'COMPLEX-ARRAY-MULTIPLE',
    topic: 'Status Code',
    seojs3: true,
    note: ['Dalla vecchia interfaccia aggiungi traduzione della descrizione']
  },
  {
    id: '31',
    propertyId: 'CHANGE_30x_TO_404',
    name: 'Change Status Code By Redirect Location',
    nameFile: '2c1c02',
    description: 'Allows you to configure the transformation of a redirect to 404',
    oldPath: 'General > Site > REQUESTS - RESPONSE CODES - REDIRECTS',
    copy: {
      firstValue: {
        label: 'Redirect Type - STATUSCODE3XX',
        description: ''
      },
      secondValue: {
        label: 'Current URL - RegEx Url',
        description: 'Optional regular expression to check requested url'
      },
      thirdValue: {
        label: 'Location URL - RegEx Url',
        description:
          'Regular expression to check the url contained in Location header of received redirect'
      },
      fourthValue: {
        label: 'Only for BOTS',
        description: ''
      }
    },
    topic: 'Status Code',
    type: 'COMPLEX-ARRAY-MULTIPLE',
    seojs3: true,
    note: [
      'La selezione dello status code dovrebbe essere un select di valori predefiniti - guarda vecchia interfaccia'
    ]
  },
  {
    id: '30',
    propertyId: 'ERROR_HTML_SELECTORS',
    name: 'Change Status Code By Html Selector',
    nameFile: 'a96c67',
    oldPath: 'General > Site > REQUESTS - RESPONSE CODES - REDIRECTS',
    copy: {
      firstValue: {
        label: 'Selector',
        description: 'Selector on page html'
      },
      secondValue: {
        label: 'Status Code - STATUSCODE4XX',
        description: 'Status code that has to be returned'
      },
      thirdValue: {
        label: 'Only for Kleeck Crawler?',
        description: ''
      }
    },
    description:
      'Define selectors that, when found on a page, will change the status code returned by the page itself',
    topic: 'Status Code',
    type: 'COMPLEX-ARRAY-MULTIPLE',
    seojs3: true,
    note: [
      'La selezione dello status code dovrebbe essere un select di valori predefiniti - guarda vecchia interfaccia'
    ]
  },
  {
    id: '28',
    propertyId: 'CUSTOM_4XX_HTML',
    name: '4XX Custom Html',
    nameFile: 'de1a90',
    copy: {
      statusCode: {
        label: 'Status Code',
        description:
          'Status codes involved: you can insert multiple values separated by commas (eg. 401,402,403,404), or define a range using dashes (eg. 401-499)'
      },
      excludedUrls: {
        label: 'Excluded URLs',
        description:
          'Current HTML is not provided to URLs matching one of these regular expressions and the next instruction is processed'
      },
      includedUrls: {
        label: 'Included URLs',
        description:
          'If set only URLs matching at least one of these rules will receive the custom html'
      }
    },
    description: 'Customized error page for 4xx answers',
    type: 'COMPLEX-OBJECT-PROPERTY-ARRAY',
    oldPath: 'Webmaster > Advanced > 4xx-5xx CUSTOM PAGE',
    topic: 'Status Code',
    seojs3: true,
    note: []
  },
  {
    id: '29',
    propertyId: 'CUSTOM_5XX_HTML',
    name: '5XX Custom Html',
    nameFile: '58e704',
    copy: {
      statusCode: {
        label: 'Status Code',
        description:
          'Status codes involved: you can insert multiple values separated by commas (eg. 501,502,503,504), or define a range using dashes (eg. 501-599)'
      },
      excludedUrls: {
        label: 'Excluded URLs',
        description:
          'Current HTML is not provided to URLs matching one of these regular expressions and the next instruction is processed'
      },
      includedUrls: {
        label: 'Included URLs',
        description:
          'If set only URLs matching at least one of these rules will receive the custom html'
      }
    },
    description: 'Customized error page for 5xx answers',
    oldPath: 'Webmaster > Advanced > 4xx-5xx CUSTOM PAGE',
    topic: 'Status Code',
    type: 'COMPLEX-OBJECT-PROPERTY-ARRAY',
    seojs3: true,
    note: []
  },
  {
    id: '374',
    propertyId: 'CUSTOM_404_HTML',
    name: 'Custom 404 HTML',
    nameFile: '7512cc',
    copy: {
      label: 'HTML',
      description: ''
    },
    description: '',
    type: 'STRINGA',
    oldPath: 'Webmaster > Advanced > 4xx-5xx CUSTOM PAGE',
    topic: 'Status Code'
  },
  {
    id: '298',
    propertyId: 'OPTIMIZE_PAGE',
    name: 'Optimize Pages',
    nameFile: 'b0091d',
    type: 'SPECIAL SERVICE',
    topic: 'Services/Tools',
    note: []
  },
  {
    id: '299',
    propertyId: 'REFRESH_HTML',
    name: 'Refresh Html',
    nameFile: 'ba279d',
    type: 'SPECIAL SERVICE',
    topic: 'Services/Tools',
    note: ['']
  },
  {
    id: '300',
    propertyId: 'REFRESH_CRITICAL_CSS',
    name: 'Refresh Critical CSS',
    nameFile: '12debf',
    type: 'SPECIAL SERVICE',
    topic: 'Services/Tools',
    note: ['']
  },
  {
    id: '301',
    propertyId: 'UPDATE_PAGE_SCORE',
    name: 'Update Page Score',
    nameFile: 'b5e158',
    type: 'SPECIAL SERVICE',
    topic: 'Services/Tools',
    note: []
  },
  {
    id: '302',
    propertyId: 'EMPTY_CACHE',
    name: 'Empty Cache',
    nameFile: '4f7b23',
    type: 'SPECIAL SERVICE',
    topic: 'Services/Tools',
    note: []
  },
  {
    id: '303',
    propertyId: 'CRAWLER_RESULTS',
    name: 'Crawler results',
    nameFile: 'e66198',
    oldPath: 'General > Crawler Results',
    type: 'SPECIAL SERVICE',
    isBigger: true,
    topic: 'Crawler',
    note: ["Problema nella lettura dell'instanceid"]
  },
  {
    id: '304',
    propertyId: 'CHECK_ALL_PAGES',
    name: 'Check All Pages',
    nameFile: '1ce851',
    oldPath: 'General > Check Pages',
    type: 'SPECIAL SERVICE',
    isBigger: true,
    topic: 'Services/Tools',
    note: ['Si basa sul domainID']
  },
  {
    id: '305',
    propertyId: 'REPROCESS_ALL_PAGES',
    name: 'Reprocess All Pages Amp-Htmls',
    nameFile: '3e66ad',
    type: 'SPECIAL SERVICE',
    topic: 'Services/Tools',
    note: []
  },
  {
    id: '306',
    propertyId: 'AMP_CHECK',
    name: 'Amp Check',
    nameFile: '8fd69c',
    type: 'SPECIAL SERVICE',
    topic: 'Services/Tools',
    note: ['Utilizza il domainID e bisogna attaccarlo']
  },
  {
    id: '307',
    propertyId: 'CHECK_RESOURCES',
    name: 'Check Resources',
    nameFile: '20d70e',
    description: 'Refresh stored SeoData from saved HTML',
    isBigger: true,
    type: 'SPECIAL SERVICE',
    topic: 'Services/Tools',
    note: []
  },
  {
    id: '308',
    propertyId: 'REFRESH_SITEMAP',
    name: 'Refresh Sitemaps And Robots',
    nameFile: '6d39c9',
    type: 'SPECIAL SERVICE',
    topic: 'Sitemap',
    note: []
  },
  // {
  //   id: '311',
  //   propertyId: 'TECH_TESTANALYTICS',
  //   name: 'Test Analytics',
  //   nameFile: 'TestAnalytics',
  //   status: 'Fake',
  //   topic: 'Services/Tools',
  //   type: 'SPECIAL SERVICE',
  //   parent1: 'Service',
  //   parent2: 'Service',
  //   note: [
  //     ''
  //   ]
  // },
  // {
  //   id: '312',
  //   propertyId: 'PIXCOMPARE',
  //   name: 'Compare pages',
  //   nameFile: '7ebcdc',
  //   type: 'SPECIAL SERVICE',
  //   topic: 'Services/Tools',
  //   note: ['Da rivedere']
  // },
  // {
  //   id: '313',
  //   propertyId: 'PIXCOMPARE_BATCH',
  //   name: 'Compare pages Batch',
  //   nameFile: 'PixCompareBatch',
  //   type: 'SPECIAL SERVICE',
  //   topic: 'Services/Tools',
  //   parent1: 'Service',
  //   parent2: 'Service',
  //   note: []
  // },
  {
    id: '314',
    propertyId: '--',
    name: 'Calc Css Inline',
    nameFile: '6193a6',
    description: 'Extract CSS Inline for manual configuration',
    type: 'SPECIAL SERVICE',
    topic: 'Services/Tools',
    note: []
  },
  {
    id: '252',
    propertyId: 'CRAWLER_SETTINGS',
    oldPath: 'General > Site > Internal Crawler',
    name: 'Crawler settings',
    nameFile: '599fc8',
    copy: {
      seeds: {
        label: 'Initially crawled URLs',
        description:
          'They will be rescanned periodically and referenced URLs will have an higher priority'
      },
      sfreq: {
        label: 'Seeds frequency',
        description: 'Frequency (in minutes) for seeds periodic rescan'
      },
      nthreads: {
        label: 'Num threads',
        description: ''
      },
      maxpages: {
        label: 'Max pages for thread',
        description: 'Number of pages that will be crawled by each thread (minimum 50)'
      },
      exls: {
        label: 'Excluded URLs Regexps',
        description:
          'List of regular expression to identify url that will be excluded from crawling'
      },
      retpol: {
        label: 'Retain Policy',
        description: 'Amount of previous scans to keep online'
      },
      forcescan: {
        label: 'Force complete rescan',
        description: 'Force a complete rescan after the specified number of days'
      }
    },
    type: 'COMPLEX-ARRAY',
    topic: 'Crawler',
    note: []
  },
  {
    id: '51',
    propertyId: 'CRAWLER_ADDITIONAL_PROFILES',
    name: 'Crawler profiles',
    nameFile: '15ab38',
    copy: {
      profileName: {
        label: 'Profile name',
        description: 'The name used to uniquely identify this crawler profile'
      },
      seeds: {
        label: 'Seeds',
        description:
          'The initially crawled URLs: they will be rescanned periodically and referenced URLs will have an higher priority'
      },
      frequency: {
        label: 'Seeds frequency',
        description: 'Frequency (in minutes) for seeds periodic rescan'
      },
      threads: {
        label: 'Num threads',
        description: 'Crawler threads'
      },
      maxPages: {
        label: 'Max pages for thread',
        description: 'Number of pages that will be crawled by each thread (minimum 50)'
      },
      excludedUrls: {
        label: 'Excluded URLs',
        description:
          'List of regular expression to identify url that will be excluded from crawling'
      },
      retainPolicy: {
        label: 'Retain Policy',
        description: 'Amount of previous scans to keep online'
      },
      forceCompleteScanAfter: {
        label: 'Force complete rescan',
        description: 'Force a complete rescan after the specified number of days'
      }
    },
    oldPath: 'General > Site > Internal Crawler',
    type: 'COMPLEX-OBJECT-PROPERTY-ARRAY',
    topic: 'Crawler',
    note: []
  },
  {
    id: '263',
    propertyId: 'ADMIN_URLS',
    // name: 'Admin urls backend - Exclude Backend Area',
    name: 'Exclude admin URLs',
    nameFile: 'bc6edf',
    oldPath: 'General > Site > Internal crawler',
    description:
      'List of the site admin URLs. Admin URLs are blocked by the tool crawlers, they are set as NOINDEX, NOFOLLOW, and on them the seopanel is not shown',
    type: 'STRINGHE',
    topic: 'Page Type - Advanced',
    note: []
  },
  {
    id: '264',
    propertyId: 'BLOCKED_URLS',
    name: 'Exclude user URLs',
    nameFile: '918fa3',
    oldPath: 'General > Site > Internal crawler',
    description:
      'List of the blocked site URLs. They are similar to admin, with the difference that the seopanel is shown on these (it is usually a frontend page that you do not want to optimize but not even analyze)',
    type: 'STRINGHE',
    topic: 'Page Type - Advanced',
    note: []
  },
  {
    id: '265',
    propertyId: 'EXCLUDED_URLS',
    name: 'Exclude generic URLs',
    nameFile: '192f0e',
    description: 'List of URLs excluded from the site. They are just blocked to tool crawler',
    oldPath: 'General > Site > Internal crawler',
    type: 'STRINGHE',
    topic: 'Page Type - Advanced',
    note: []
  },
  {
    id: '99',
    propertyId: 'MATOMO_SETTINGS',
    name: 'Matomo (ex Piwik)',
    nameFile: '440e46',
    description: 'Matomo API settings',
    oldPath: 'General > API',
    type: 'STRINGA',
    topic: 'Status',
    auth: 'ADMIN',
    note: []
  },
  {
    id: '75',
    propertyId: 'MATOMO_IFRAME_URL',
    name: 'Matomo Dashboard iframe URL',
    nameFile: 'd25555',
    description:
      'URL di integrazione della dashboard di Matomo (nella forma https://matomo.kleecks.com/index.php?module=Login&action=logme&login={username}&password={password md5})',
    oldPath: 'General > API',
    type: 'STRINGA',
    topic: 'Status',
    auth: 'ADMIN',
    note: []
  },
  {
    id: '336',
    propertyId: 'TECH_STATUSCAKE_IFRAME_URL',
    name: 'Statuscake Dashboard iframe URL',
    nameFile: 'bed8a3',
    topic: 'Status',
    type: 'STRINGA',
    auth: 'ADMIN',
    note: []
  },
  {
    id: '8',
    propertyId: 'AUTOBAN_SETTINGS',
    name: 'Auto Ban',
    nameFile: 'd89011',
    copy: {
      au: {
        label: 'RegEx-URL',
        description: 'Regular expression to identify the URLs that needs to be analyzed'
      },
      aw: {
        label: 'Analysis Window Duration',
        description: 'Duration in minutes of the analysis window'
      },
      mr: {
        label: 'Requests',
        description:
          'Maximum number of request from the same IP during the analysis window to a matching URL before URL ban'
      },
      bt: {
        label: 'Ban Duration',
        description: 'Duration in minutes of the ban'
      },
      ba: {
        label: 'Ban every request?',
        description: 'Ban every request from a banned IP and not only analyzed URLs'
      },
      wi: {
        label: 'Whitelisted IP',
        description: ''
      }
    },
    oldPath: 'General > Site > Security',
    type: 'COMPLEX-OBJECT',
    topic: 'Security',
    seojs3: true,
    note: []
  },
  {
    id: '195',
    propertyId: 'BANNED_IPS',
    name: 'Ban Ips',
    nameFile: 'dd8f87',
    copy: {
      label: 'List of IPs to be banned',
      description: ''
    },
    oldPath: 'General > Site > Security',
    type: 'STRINGHE',
    topic: 'Security',
    note: []
  },
  {
    id: '105',
    propertyId: 'BLOCK_SQL_INJECTION',
    name: 'Block Sql Injection Requests',
    nameFile: '03e644',
    oldPath: 'General > Site > SECURITY',
    type: 'KTOGGLE',
    topic: 'Security',
    note: []
  },
  {
    id: '107',
    propertyId: 'DISABLE_EXTERNAL_TARGET_NOOPENER',
    name: 'Disable Rel=Noopener External Links With Target',
    nameFile: 'fefe76',
    description:
      "Disabilita l'aggiunta di rel=noopener per gli anchor verso domini esterni che abbiano valorizzato il target (protezione da tabnabbing inverso)",
    topic: 'Security',
    type: 'KTOGGLE',
    note: []
  },
  {
    id: '108',
    propertyId: 'DISABLE_EXTERNAL_TARGET_NOREFERRER',
    name: 'Disable Rel=Noreferrer External Links With Target',
    nameFile: 'b9a198',
    description:
      "Disabilita l'aggiunta di rel=noreferrer per gli anchor verso domini esterni che abbiano valorizzato il target (protezione da tabnabbing inverso per i browser che non supportano l'indicazione di noopener)",
    topic: 'Security',
    type: 'KTOGGLE',
    note: []
  },
  {
    id: '268',
    propertyId: 'CONFIGURATION_CHANGELOG',
    oldPath: 'General > Site > CHANGELOG',
    name: 'Change Log',
    nameFile: '02f0b5',
    copy: {
      label: 'Configuration changelog: settings',
      description: ''
    },
    topic: 'Kleecks Settings',
    type: 'STRINGA',
    note: []
  },
  {
    id: '227',
    propertyId: 'KEYWORDS_BASKET_PROPERTIES',
    name: 'Rules For Keywords Basket Suggestions',
    nameFile: '1181b6',
    copy: {
      exlPT: {
        label: 'Page Types to exclude',
        description: ''
      },
      excludedDesturlRegexp: {
        label: 'RegEx',
        description: 'Regular expression to exclude matching cms urls'
      },
      excludedUrlRegexp: {
        label: 'RegEx',
        description: 'Regular expression to exclude matching urls'
      },
      maxLevel: {
        label: 'Max Level',
        description: 'Exclude pages with an higher depth level'
      },
      disableBestPageAssociation: {
        label: 'Disable best page search',
        description: ''
      }
    },
    description: 'Regexp to identify keywords for which placement from pages must be analyzed',
    oldPath: 'SEO > Variables > Keywords',
    type: 'COMPLEX-OBJECT',
    topic: 'Kleecks Settings',
    seojs3: true,
    note: ['Bar - Occorre aggiornare il backend per i nuovi page type?']
  },
  {
    id: '266',
    propertyId: 'BRAND_KEYWORD',
    name: 'Branded Keyword Identifier',
    nameFile: '41cca1',
    description:
      'Site mark to use to see if a keyword is branded (may differ from the general one)',
    oldPath: 'SEO > Variables > Keywords',
    type: 'STRINGHE',
    topic: 'Kleecks Settings',
    note: []
  },
  {
    id: '267',
    propertyId: 'SUGGESTIONS_ENGINE',
    name: 'Suggest Source Engine',
    nameFile: '17db30',
    description: 'Engine code (google, ubersuggest) to use for suggestions of search terms',
    oldPath: 'SEO >Variables >Keywords',
    type: 'STRINGA',
    topic: 'Kleecks Settings',
    note: []
  },
  {
    id: '37',
    propertyId: 'MOBILE_SETTINGS',
    name: 'User agent for mobile site',
    nameFile: '1316f7',
    copy: {
      regEx: {
        label: 'RegEx Url',
        description:
          'Expression on cms urls to identify a page belonging to the mobile version of the site'
      },
      userAgent: {
        label: 'User Agent',
        description: 'The user agent that has to be forced when requesting a mobile page'
      },
      forceR: {
        label: 'Force user agent for Kleecks',
        description: ''
      },
      forceUA: {
        label: 'Force redirects',
        description: ''
      },
      tldv: {
        label: 'Tablet like desktop devices',
        description: ''
      }
    },
    description: 'Settings for the mobile version of the site',
    oldPath: 'General > Site > Internal Crawler',
    type: 'COMPLEX-ARRAY-QUIRK-1',
    topic: 'User Agent',
    note: []
  },
  {
    id: '78',
    propertyId: 'MASQUERADING_USER_AGENT',
    name: 'Rename user agent',
    nameFile: 'd7c394',
    description:
      'If setted up it replaces all the user agents inherent to the tool (crawlers, service requests, etc.)',
    oldPath: 'General > Site > Internal Crawler',
    topic: 'User Agent',
    type: 'STRINGA',
    note: []
  },
  {
    id: '383',
    propertyId: 'USER_AGENT_REPLACE_RULES',
    name: 'User Agent replacement rules',
    nameFile: '2ab7f1',
    copy: {
      label: 'Instructions'
    },
    description: '',
    oldPath: '',
    type: 'DOPPIE-STRINGHE',
    topic: 'User Agent',
    note: []
  },
  {
    id: '288',
    propertyId: 'MULTIDOMAIN_CONFIGURATION',
    name: 'Multidomain Configuration',
    nameFile: '37eed4',
    copy: {
      domain: {
        label: 'Domain',
        description:
          'The domain for which you want to define different settings: could be only the host name (eg. www.myotherdomain.com) or the hostname and the locale part (eg. www.mydomain.com/en/)'
      },
      brand: {
        label: 'Brand',
        description: ''
      },
      logo: {
        label: 'Organization Logo',
        description: ''
      },
      defaultSocialImage: {
        label: 'Default Social Image',
        description: ''
      }
    },
    oldPath: 'SEO > Structured Data > Company - Website - Organization',
    type: 'COMPLEX-OBJECT',
    isTested: 'true',
    topic: 'Kleecks Settings',
    seojs3: true,
    note: []
  },
  {
    id: '399',
    propertyId: 'ADVANCED_GRAB_CONFIGURATION',
    name: 'Advanced GRAB Configuration',
    nameFile: 'justObject2',
    copy: {
      defaultCacheValidity: {
        label: 'Default Cache Validity',
        description: 'Default cache validity in minutes'
      },
      useAppend: {
        label: 'Use APPEND',
        description: 'Matching elements will be appended into the action container'
      },
      dontProcessHtml: {
        label: "Don't preprocess HTML",
        description: 'Retrieved HTML will be added as is into the page DOM'
      },
      authorization: {
        label: 'Default Authorization Header',
        description: ''
      }
    },
    description: '',
    oldPath: '',
    type: 'COMPLEX-OBJECT',
    topic: 'Kleecks Settings',
    note: []
  },
  // {
  //   id: '257',
  //   propertyId: 'USER_AGENT_REPLACE_RULES',
  //   name: 'User Agent Replace Rules',
  //   nameFile: 'UserAgentReplaceRules',
  //   oldPath: 'Uncategorized',
  //   type: 'STRINGA',
  //   parent1: 'Extra',
  //   parent2: 'Kleecks general settings',
  //   note: ['Completa', 'Non funziona']
  // },
  // {
  //   id: '289',
  //   propertyId: 'REQUEST_HOST_REPLACE',
  //   name: 'Request Host Replace',
  //   nameFile: 'RequestHostReplace',
  //   oldPath: 'Uncategorized',
  //   type: 'STRINGA',
  //   parent1: 'Extra',
  //   parent2: 'Kleecks general settings',
  //   note: ['Completa']
  // },
  {
    id: '412',
    propertyId: 'IMMEDIATE_PLAIN_RESPONSE',
    name: 'Immediate Plain Response',
    nameFile: '622267',
    copy: {
      name: {
        label: 'Requested URL - RegEx Url',
        description: ''
      },
      value: {
        label: 'Plain text content',
        description: ''
      }
    },
    description:
      'The Url will respond using the static response provided (usually used for challenges)',
    topic: 'Status Code',
    oldPath: 'Uncategorized',
    type: 'COMPLEX-PLAIN',
    note: []
  },
  {
    id: '12',
    propertyId: 'HTTP_HEADERS_SET',
    name: 'HTTP header set rules',
    nameFile: '6c9dd1',
    description: 'Define rules on URL or Content Type to insert HTTP header',
    copy: {
      firstValue: {
        label: 'RegEx-URL - URL condition',
        description: 'Optional regex on requested URL'
      },
      secondValue: {
        label: 'RegEx - Mime Type',
        description: "Optional regular expression on resource's content type"
      },
      thirdValue: {
        label: 'Name',
        description: 'HTTP Header Name'
      },
      fourthValue: {
        label: 'Value',
        description: 'HTTP Header Value'
      }
    },
    type: 'COMPLEX-OBJECT-ARRAY-PARALLEL',
    oldPath: 'General > Site > HTTP HEADERS',
    topic: 'HTTP headers',
    seojs3: true,
    note: []
  },
  {
    id: '41',
    propertyId: 'HTTP_HEADERS_DELETION_RULES',
    name: 'HTTP headers deletion rules',
    nameFile: '0a2224',
    copy: {
      urlCond: {
        label: 'RegEX URL condition',
        description: 'Optional regex on requested URL'
      },
      mimeType: {
        label: 'RegEx Mime Type',
        description: "Optional regular expression on resource's content type"
      },
      headerName: {
        label: 'HTTP Header Name',
        description: ''
      },
      optRegex: {
        label: 'RegEx',
        description:
          "Optional regular expression to be matched against header's value; If nothing is set every header with the specified name will be deleted"
      }
    },
    description:
      'Define rules to delete HTTP header - Permette di definire dei set di regole di eliminazione di un header HTTP sulla base del valore corrente (o sempre quando il valore non viene specificato)',
    oldPath: 'General > Site > HTTP HEADERS',
    type: 'COMPLEX-OBJECT-PROPERTY-ARRAY',
    seojs3: true,
    topic: 'HTTP headers',
    note: []
  },
  {
    id: '396',
    propertyId: 'REQUEST_HTTP_HEADERS_SET_RULES',
    name: 'Request HTTP header set rules',
    nameFile: 'plain7',
    copy: {
      condition: {
        label: 'URL Regex',
        description: 'Regular expression on requested URL'
      },
      name: {
        label: 'Original URL Regex',
        description: 'Regular expression on original CMS URL'
      },
      value: {
        label: 'Marker',
        description: ''
      }
    },
    description: '',
    oldPath: '',
    type: 'COMPLEX-PLAIN',
    topic: 'HTTP headers',
    note: []
  },
  {
    id: '329',
    propertyId: 'REQUEST_HTTP_HEADERS_DELETION_RULES',
    name: 'Request Http Headers Deletion Rules',
    nameFile: 'd669b2',
    copy: {
      condition: {
        label: 'URL condition',
        description: 'Optional regular expression on requested URL'
      },
      name: {
        label: 'Name',
        description: 'HTTP Header Name'
      },
      value: {
        label: 'Value',
        description:
          "Optional regular expression to be matched against header's value. If nothing is set every header with the specified name will be deleted"
      }
    },
    oldPath: 'Uncategorized',
    topic: 'HTTP headers',
    type: 'COMPLEX-PLAIN',
    note: []
  },
  {
    id: '386',
    propertyId: 'CSP_HEADER_REPLACEMENTS',
    name: 'CSP replacement rules',
    nameFile: '2ab7f1',
    copy: {
      label: 'Instructions'
    },
    description: '',
    oldPath: '',
    type: 'DOPPIE-STRINGHE',
    topic: 'HTTP headers',
    note: []
  },
  {
    id: '330',
    propertyId: 'REQUEST_ADD_AUTHORIZATION',
    name: 'Request Add Authorization',
    nameFile: 'ae7c20',
    copy: {
      name: {
        label: 'Requested URL - RegEx Url',
        description: ''
      },
      value: {
        label: 'Authorization header content',
        description: ''
      },
      flag: {
        label: 'Only for Kleecks Crawler',
        description: ''
      }
    },
    oldPath: 'Uncategorized',
    type: 'COMPLEX-PLAIN',
    topic: 'HTTP headers',
    note: []
  },
  {
    id: '179',
    propertyId: 'VARY_ACCEPT_ENCODING',
    name: 'Vary Accept Encoding',
    nameFile: 'abf984',
    description: 'Property to set the vary with accept-encoding when it isnt present',
    oldPath: 'Webmaster > Advanced > Resources',
    type: 'KTOGGLE',
    topic: 'HTTP headers',
    note: []
  },
  {
    id: '228',
    propertyId: 'REFERRER_POLICY_HEADER',
    name: 'Referrer policy header',
    nameFile: '38c257',
    description:
      'The <code>Referrer-Policy</code> HTTP header controls how much referrer information (sent via the Referer header) should be included with requests. Aside from the HTTP header, you can set this policy in HTML',
    oldPath: 'General > Site > HTTP HEADERS',
    type: 'COMPLEX-SINGLE-DATA',
    topic: 'HTTP headers',
    seojs3: true,
    note: []
  },
  {
    id: '114',
    propertyId: 'ADD_LAST_MODIFIED_HEADER',
    name: 'Add Last-Modified HTTP header',
    nameFile: 'f7076b',
    description:
      'Cerca di estrarre la data di ultima modifica della pagina utilizzando lapposito selettore e di utilizzarla come valore dellheader HTTP Last-Modified',
    oldPath: 'Webmaster > PageSpeed Insights > Caching - Miscellaneous',
    type: 'KTOGGLE',
    topic: 'HTTP headers',
    note: []
  },
  {
    id: '216',
    propertyId: 'SELECTORS',
    name: 'Selectors',
    nameFile: '3a2fbe',
    copy: {
      list: {
        label: 'Rules',
        description:
          'Define an entity that can be used as a system variable inside different actions'
      },
      pageType: {
        label: 'Page Type',
        description: ''
      },
      type: {
        label: 'Type',
        description: 'These are entities predefined by Kleecks that can be use as system variables'
      },
      sel: {
        label: 'Extractor selector',
        description:
          'This selector will be use to extract variable content from the page type selected'
      }
    },
    description:
      'Define an entity that can be used as a system variable inside different actions. Use a rule as a selector to grab a unique entity from the source code',
    type: 'COMPLEX-COMPLEX',
    hasPageType: true,
    hasViewer: true,
    perPageType: true,
    topic: 'Site Settings',
    seojs3: true,
    businesses: ['jakala'],
    note: []
  },
  {
    id: '256',
    propertyId: 'SERVICEDATA_EXTRACTORS',
    name: 'Variables',
    nameFile: '058576',
    copy: {
      name: {
        label: 'Label',
        description: 'This label identifies the variable in Kleecks'
      },
      pageType: {
        label: 'Page Type',
        description: ''
      },
      condition: {
        label: 'Condition',
        description: 'Optional'
      },
      extractorSelector: {
        label: 'Extractor selector',
        description:
          'This selector will be use to extract variable content from the page type selected'
      }
    },
    oldPath: 'Webmaster > Advanced > Advanced Data Extraction',
    type: 'COMPLEX-COMPLEX',
    hasPageType: true,
    hasViewer: true,
    perPageType: true,
    topic: 'Site Settings',
    seojs3: true,
    businesses: ['jakala'],
    note: []
  },
  {
    id: '39',
    propertyIdVero: 'KLEECKS_AUTOMATIONS',
    propertyId: 'KLEECKS_AUTOMATIONS', // KLEECKS_AUTOMATIONS_TITLE
    oldPath: 'SEO > Variables > Seo Automations',
    name: 'Title', // (page)
    nameFile: 'cc1808',
    copy: {
      titleExcluded: {
        label: 'Exclude browser titles from automations',
        description: ''
      },
      pageType: {
        label: 'Page Type',
        description: ''
      },
      locale: {
        label: 'Language/Locale',
        description: ''
      },
      expr: {
        label: 'Expression',
        description: ''
      },
      titleMethod: {
        label: 'Title automatic generation method',
        description:
          'Select which method to use for automatic titles generation (default: h1 + opt. keywords + brand; newsKeywordsFirst: 3 keywords + h1 + brand - only for NEWS pages; none: only advanced rules will be processed)'
      },
      neverAddExtractedKeywords: {
        label: 'No extracted keywords',
        description:
          "Don't add automatically the strongest keywords extracted from the content when the h1 itself is too short in default mode"
      }
    },
    type: 'COMPLEX-OBJECT-AUTOMATION',
    hasPageType: true,
    perPageType: true,
    topic: 'Automation',
    seojs3: true,
    note: []
  },
  {
    id: '38',
    propertyIdVero: 'KLEECKS_AUTOMATIONS',
    propertyId: 'KLEECKS_AUTOMATIONS',
    oldPath: 'SEO > Variables > Seo Automations',
    name: 'Descriptions', // (page)
    nameFile: 'b8d430',
    copy: {
      descriptionExcluded: {
        label: 'Exclude descriptions from automations',
        description: ''
      },
      pageType: {
        label: 'Page Type',
        description: ''
      },
      locale: {
        label: 'Language/Locale',
        description: ''
      },
      expr: {
        label: 'Expression',
        description: ''
      },
      descriptionSource: {
        label: 'Description source',
        description:
          "Select the source for descriptions creation. content: from the page's main content; description: simply cleans or reduces the original description; content,description: use the content or the original description when the first one is missing or too short; description,content: same as before but inverted; none: only apply advanced custom expressions"
      },
      descriptionSourceMinLength: {
        label: 'Description source min lengths',
        description: ''
      }
    },
    type: 'COMPLEX-OBJECT-AUTOMATION',
    perPageType: true,
    topic: 'Automation',
    seojs3: true,
    note: []
  },
  {
    id: '40',
    propertyIdVero: 'KLEECKS_AUTOMATIONS',
    propertyId: 'KLEECKS_AUTOMATIONS',
    oldPath: 'SEO > Variables > Seo Automations',
    name: 'Urls', // (page)
    nameFile: '95d4a6',
    copy: {
      urlExcluded: {
        label: 'Exclude URLS from automations',
        description: ''
      },
      urlSource: {
        label: 'Url optimization source',
        description:
          "Select the source for url optimization: H1 = page h1; ORIGINAL_URL = original url; H1_plus_DATEPUBLISHED = concats page's H1 and extracted Date published (when existing)"
      },
      urlReplaceRules: {
        label: 'Replace all rules',
        description:
          'Allows you to define a set of replaceAll rules (based on regex) that will be applied on url source, whatever it is (h1, original url, h1 with concat, custom expression), to generate optimized url'
      },
      pageType: {
        label: 'Page Type',
        description: ''
      },
      locale: {
        label: 'Language/Locale',
        description: ''
      },
      expr: {
        label: 'Expression',
        description: ''
      },
      preservedGetParameters: {
        label: 'Preserved get parameters',
        description:
          'Prevent the defined GET parameters to be removed from the URL despite of the rewrite rule. Add * to preserve always every GET parameter'
      },
      stripAccentsFromUrl: {
        label: 'Remove accented letters from generated URLs',
        description: ''
      },
      urlHierarchyExcluded: {
        label: 'Disable URL hierarchy optimization',
        description: ''
      },
      parentSource: {
        label: "Parent page's source",
        description: 'Select the source for parent page retrieval'
      },
      similarityParentConfigurations: {
        label: 'Configuration for similar parent search',
        description:
          'Limits the search only to pages with an url level less or equal the one provided'
      },
      similarityParentConfigurationsPageType: {
        label: 'Processed page type',
        description: 'Select the source for parent page retrieval'
      },
      similarityParentConfigurationsSearchPageType: {
        label: 'Target page type',
        description: 'Select the source for parent page retrieval'
      },
      similarityParentConfigurationsSearchMaxUrlLevel: {
        label: 'Target max level',
        description: ''
      },
      imagesUrlOptimizationDisabled: {
        label: 'Disable images URLs optimization',
        description: ''
      },
      serviceDataForAlternatesComputation: {
        label: 'Compute alternates using custom extracted data',
        description:
          'The alternate relationship between pages will be computed by matching the value of additional data extracted from the pages themselves (eg. sku, id, ...)'
      },
      useAlternatesFastMethod: {
        label: 'Compute alternates using fast method',
        description:
          "The standard method checks pages alternates reciprocity (if B is an alternate of A then A MUST be an alternate of B). It's safe to be enabled only when the website has a strong alternates mechanism and a huge number of languages/locales"
      },
      disableAlternatesAssociation: {
        label: 'Disable alternates association',
        description:
          'Completely disables alternates association: to be used only for testing purposes'
      },
      disableMetaKeywords: {
        label: 'Disable meta keywords generation',
        description: ''
      }
    },
    type: 'COMPLEX-OBJECT-AUTOMATION',
    hasPageType: true,
    perPageType: true,
    topic: 'Automation',
    seojs3: true,
    note: []
  },
  {
    id: '310',
    propertyIdVero: 'KLEECKS_AUTOMATIONS',
    propertyId: 'KLEECKS_AUTOMATIONS',
    oldPath: 'nuovo',
    name: 'Meta Keywords', // (page)
    nameFile: '308c14',
    copy: {
      disableMetaKeywords: {
        label: 'Disable meta keywords generation',
        description: ''
      }
    },
    type: 'COMPLEX-OBJECT-AUTOMATION',
    topic: 'Automation',
    seojs3: true,
    note: []
  },
  {
    id: '133',
    propertyId: 'DISABLE_ANCHORS_AUTOMATIC_TITLES',
    name: 'Disable Automatic Titles For Anchors',
    description: 'Disable automatic adding of <code>title</code> attribute on anchors',
    nameFile: '4ce9e5',
    oldPath: 'SEO > Variables > Seo Automations',
    type: 'KTOGGLE',
    perPageType: true,
    topic: 'Automation',
    note: []
  },
  {
    id: '14',
    propertyId: 'IMAGES_SEO_AUTOMATIONS',
    name: 'Images Seo Automations',
    nameFile: 'af49a9',
    copy: {
      KT1: {
        label: 'Fill Missing Title From Existing Alt',
        description: ''
      },
      KT2: {
        label: 'Fill Missing Title From Existing Title',
        description: ''
      },
      KT3: {
        label: 'Fill Missing Alt From URL',
        description: ''
      },
      KT4: {
        label: 'Fill Missing Title From URL',
        description: ''
      },
      KT5: {
        label: 'Excluded by CSS selectors',
        description: ''
      }
    },
    oldPath: 'SEO > Variables >Seo Automations',
    type: 'COMPLEX-OBJECT',
    perPageType: true,
    topic: 'Automation',
    seojs3: true,
    note: ['Traduci e aggiungi la descrizione']
  },
  {
    id: '253',
    propertyId: 'BRAND',
    name: 'Brand Name',
    nameFile: 'da55c1',
    oldPath: 'SEO > Structured Data > Company - Website - Organization',
    type: 'STRINGA',
    topic: 'Site Settings',
    note: []
  },
  {
    id: '91',
    propertyId: 'ORGANIZATION_LOGO',
    name: 'Logo',
    nameFile: '8c2857',
    description: 'URL (also relative) of the logo to use for the Microdata Organization',
    oldPath: 'SEO > Structured Data > Company - Website - Organization',
    type: 'STRINGA',
    topic: 'Structured Data',
    propertiesRelated: ['FILE_MANAGER'],
    note: []
  },
  {
    id: '11',
    propertyId: 'COOKIE_PATH_MANUAL_REWRITE',
    name: 'Cookie Path Manual Rewrite',
    nameFile: '8fabe8',
    copy: {
      firstValue: {
        label: 'RegEx-URL',
        description: 'Optional regex on requested URL'
      },
      secondValue: {
        label: 'From RegEx',
        description:
          "it's matched against the actual cookie domain+path before being applied. When a condition matches no further condition is checked and applied"
      },
      thirdValue: {
        label: 'To',
        description: ''
      }
    },
    description: 'Define domain+path sostitution rules for cookies returned by site',
    oldPath: 'General > Site > COOKIES',
    type: 'COMPLEX-OBJECT-ARRAY-PARALLEL',
    topic: 'Cookies',
    seojs3: true,
    note: []
  },
  {
    id: '45',
    propertyId: 'COOKIE_ADDITION_RULES',
    name: 'Cookie Injection Rules',
    nameFile: 'c7d979',
    copy: {
      firstValue: {
        label: 'Cookie name',
        description: ''
      },
      secondValue: {
        label: 'Cookie value',
        description: ''
      },
      thirdValue: {
        label: 'Add to Kleecks Crawler Requests',
        description: ''
      },
      fourthValue: {
        label: 'Add to configured BOTS Requests',
        description: ''
      },
      fifthValue: {
        label: 'Requested User Agent condition - RegEx',
        description:
          'Optional further regexp on requestor user agent. The previous two flags are always valid'
      },
      sixthValue: {
        label: 'Requested Url condition - RegEx-URL',
        description: 'Optional regex on requested URL'
      }
    },
    oldPath: 'General > Site > COOKIES',
    type: 'COMPLEX-OBJECT-ARRAY-PARALLEL',
    topic: 'Cookies',
    seojs3: true,
    note: []
  },
  {
    id: '24',
    propertyId: 'TIMEOUT_SETTINGS',
    name: 'Timeout settings',
    nameFile: '6ec86a',
    oldPath: 'General > Site > TIMEOUTS',
    description:
      "Permette di definire delle regole di timeout specifiche rispetto a regular expression sull'URL. Tali regole sono applicabili anche sugli URL bypassati, sovrascrivendo un eventuale valore del parametro 'BYPASS TIMEOUT'. ATTENZIONE: il valore devessere comunque supportato dal sistema; per valori superiori ai 2 minuti contattare il supporto tecnico",
    type: 'COMPLEX-OBJECT-ARRAY-PARALLEL',
    topic: 'Timeout',
    seojs3: true,
    note: ['Traduci e aggiungi la descrizione']
  },
  {
    id: '94',
    propertyId: 'BYPASSED_TIMEOUT',
    name: 'Bypassed requests timeout',
    nameFile: '5cab83',
    description:
      'Define timeout for every bypassed request. (sia completamente bypassate sia solo processing della risposta). ATTENZIONE: il valore deve essere comunque supportato dal sistema; per valori superiori ai 2 minuti contattare il supporto tecnico',
    oldPath: 'General > Site > TIMEOUTS',
    topic: 'Timeout',
    type: 'STRINGA',
    note: []
  },
  {
    id: '165',
    propertyId: 'SITEMAP_GOOGLEPING',
    name: 'Ping Search Engines',
    nameFile: '1c74bd',
    oldPath: 'SEO > Sitemap > Sitemap',
    description: 'Send the sitemap to Google after updating it (no more than once a day anyway)',
    type: 'KTOGGLE',
    topic: 'Sitemap',
    note: []
  },
  {
    id: '229',
    propertyId: 'DEFAULT_FREQUENCY_CONTENT',
    name: 'Default Frequency Content',
    nameFile: 'e4d862',
    description: 'Change freq Default Sitemap for CONTENT Pages',
    oldPath: 'SEO > Sitemap > Sitemap',
    type: 'COMPLEX-SINGLE-DATA',
    topic: 'Sitemap',
    seojs3: true,
    note: []
  },
  {
    id: '230',
    propertyId: 'DEFAULT_FREQUENCY_HOME',
    name: 'Default Frequency Home',
    nameFile: '93f267',
    description: 'Change freq Default Sitemap for HOME Pages',
    oldPath: 'SEO > Sitemap > Sitemap',
    type: 'COMPLEX-SINGLE-DATA',
    topic: 'Sitemap',
    seojs3: true,
    note: []
  },
  {
    id: '231',
    propertyId: 'DEFAULT_FREQUENCY_LISTING',
    name: 'Default Frequency Listing',
    nameFile: '645242',
    description: 'Change freq Default Sitemap for LISTING Pages',
    oldPath: 'SEO > Sitemap > Sitemap',
    type: 'COMPLEX-SINGLE-DATA',
    topic: 'Sitemap',
    seojs3: true,
    note: []
  },
  {
    id: '232',
    propertyId: 'DEFAULT_FREQUENCY_NEWS',
    name: 'Default Frequency News',
    nameFile: '6b8f42',
    description: 'Change freq Default Sitemap for NEWS Pages',
    oldPath: 'SEO > Sitemap > Sitemap',
    type: 'COMPLEX-SINGLE-DATA',
    topic: 'Sitemap',
    seojs3: true,
    note: []
  },
  {
    id: '233',
    propertyId: 'DEFAULT_FREQUENCY_PRODUCT',
    name: 'Default Frequency Product',
    nameFile: 'cc2379',
    description: 'Change freq Default Sitemap for PRODUCT Pages',
    oldPath: 'SEO > Sitemap > Sitemap',
    type: 'COMPLEX-SINGLE-DATA',
    topic: 'Sitemap',
    seojs3: true,
    note: []
  },
  {
    id: '189',
    propertyId: 'KEPT_CMS_SITEMAPS',
    name: 'Preserved Original Cms Sitemaps',
    nameFile: 'd4a27e',
    description:
      'Le sitemap definite in questa property (tramite URL completo) devono essere servite direttamente dal CMS originale (pur venendo processate per riscriverne gli URL). Può essere utile ad esempio nel caso di sitemap news già corrette ed aggiornate in tempo reale su CMS. Queste sitemaps verranno inserite nella sitemap indice generata da Kleecks',
    oldPath: 'SEO > Sitemap > Sitemap',
    typeOld: 'STRINGHE-URL',
    type: 'STRINGHE',
    topic: 'Sitemap',
    note: []
  },
  {
    id: '404',
    propertyId: 'SITEMAP_CREATION_TYPE',
    name: 'Sitemap creation type',
    nameFile: 'justObject4',
    copy: {
      sitemapCreationType: {
        label: 'Sitemap Creation Type',
        description: ''
      },
      useHfPages: {
        label: 'Use HF pages',
        description: 'Specify whether to use or not HF pages (deprecated)'
      },
      withPageType: {
        label: 'Sitemap with pagetype',
        description: 'Specify whether to use or not pagetype to group sitemap urls'
      }
    },
    description: '',
    oldPath: '',
    type: 'COMPLEX-OBJECT',
    topic: 'Sitemap',
    note: []
  },
  {
    id: '46',
    propertyId: 'ROBOTS_DIRECTIVES',
    name: 'Robots Editor',
    nameFile: '1a3cea',
    oldPath: 'SEO > Sitemap > Robots',
    copy: {
      userAgent: {
        label: 'User Agent',
        description: ''
      },
      allow: {
        label: 'Allow',
        description: 'Optional additional regex check on received Referrer'
      },
      disallow: {
        label: 'Disallow',
        description: 'Optional additional regex check on received Referrer'
      },
      crawlDelay: {
        label: 'Crawl delay',
        description: '(optional) Crawl-delay directive for bots'
      }
    },
    type: 'COMPLEX-ARRAY',
    topic: 'Robots',
    sidebarSection: 'Robots',
    slug: 'robots/robots-editor',
    template: 'RobotsDirectiveTemplate',
    seojs3: true,
    note: []
  },
  {
    id: '104',
    propertyId: 'ROBOTS_IMPORT',
    name: 'Import Robots',
    nameFile: '8648a2',
    copy: {
      label: 'Robot Text',
      description: ''
    },
    description:
      'Import <code>robot.txt</code> rules; WARNING: rules in action ROBOTS EDITOR will be overwritten',
    oldPath: 'SEO > Sitemap > Robots',
    hasQuestion: true,
    type: 'STRINGA',
    topic: 'Robots',
    note: [
      'Nella vecchia interfaccia sembra non funzionare, nella nuova cancellerebbe Robot editor?'
    ]
  },
  {
    id: '168',
    propertyId: 'REMOVE_X_ROBOTS',
    name: 'Remove X-Robots Http Header',
    nameFile: '5844e5',
    description:
      'Se abilitato gli HTTP header X-Robots delle pagine vengono rimossi, per evitare conflitti o duplicazioni rispetto ai META nellHTML',
    oldPath: 'SEO > Variables > Seo Automations',
    type: 'KTOGGLE',
    topic: 'Robots',
    note: []
  },

  {
    id: '279',
    propertyId: 'NOINDEX_URLS_REGEX',
    name: 'Noindex By Urls',
    nameFile: '2b8dd4',
    description: 'Mechanism to identify pages by regex to be set as noindex',
    typeOld: 'STRINGHE-REGEX-URL',
    type: 'STRINGHE',
    copy: 'URLs',
    oldPath: 'SEO > Sitemap >Index Follow',
    perPageType: true,
    topic: 'Robots',
    sidebarSection: 'Indexability',
    slug: 'indexability/noindex-by-urls',
    template: 'ListTemplate',
    templateFile: 'TechComponentTemplate',
    note: []
  },
  {
    id: '205',
    propertyId: 'INDEX_URLS_REGEX',
    name: 'Index By Urls',
    nameFile: '670c87',
    description:
      'Definisce come INDEX le pagine i cui URL matchano almeno una delle condizioni indicate. Le condizioni di INDEX vengono verificate DOPO quelle di NOINDEX',
    oldPath: 'SEO > Sitemap > Index Follow',
    typeOld: 'STRINGHE-REGEX-URL',
    type: 'STRINGHE',
    perPageType: true,
    topic: 'Robots',
    sidebarSection: 'Indexability',
    slug: 'indexability/index-by-urls',
    template: 'ListTemplate',
    templateFile: 'TechComponentTemplate',
    note: []
  },
  {
    id: '210',
    propertyId: 'NOINDEX_SERVER_URLS_REGEX',
    name: 'Noindex By Original Urls',
    nameFile: 'a04b34',
    description: 'Mechanism to identify pages (original) by regex to be set as noindex',
    typeOld: 'STRINGHE-REGEX-URL',
    type: 'STRINGHE',
    oldPath: 'SEO > Sitemap >Index Follow',
    perPageType: true,
    topic: 'Robots',
    sidebarSection: 'Indexability',
    slug: 'indexability/noindex-by-original-urls',
    template: 'ListTemplate',
    templateFile: 'TechComponentTemplate',
    note: []
  },
  {
    id: '342',
    propertyId: 'INDEX_SERVER_URLS_REGEX',
    name: 'Index By Original Urls',
    nameFile: '157a42',
    oldPath: 'SEO > Sitemap >Index Follow',
    topic: 'Robots',
    copy: {
      label: 'List of IPs to be banned',
      itemLabel: 'IPs',
      description: ''
    },
    sidebarSection: 'Indexability',
    slug: 'indexability/index-by-original-urls',
    template: 'ListTemplate',
    templateFile: 'TechComponentTemplate',
    type: 'STRINGHE'
  },
  {
    id: '280',
    propertyId: 'NOFOLLOW_LINK_URL',
    name: 'Rel Nofollow To Links By Url',
    nameFile: 'f440b2',
    description:
      'Elenco di regular expression sugli URL riscritti da Kleecks per definire i link e le action di form che puntino ad essi come NOFOLLOW',
    oldPath: 'SEO > Sitemap >Index Follow',
    type: 'STRINGHE',
    typeOld: 'STRINGHE-REGEX-URL',
    perPageType: true,
    sidebarSection: 'Indexability',
    slug: 'indexability/nofollow-to-links-by-url',
    template: 'ListTemplate',
    templateFile: 'TechComponentTemplate',
    topic: 'Robots',
    note: []
  },
  {
    id: '212',
    propertyId: 'NOFOLLOW_LINK_CMSURL',
    name: 'Rel Nofollow To Links By Original Url',
    nameFile: '0c0adb',
    description:
      'Define rules to target original CMS URLs that set link and action attribute form that point to the URLs itself as NOFOLLOW',
    oldPath: 'SEO > Sitemap > Index Follow',
    perPageType: true,
    topic: 'Robots',
    typeOld: 'STRINGHE-REGEX-URL',
    type: 'STRINGHE',
    sidebarSection: 'Indexability',
    slug: 'indexability/nofollow-to-links-by-original-url',
    template: 'ListTemplate',
    templateFile: 'TechComponentTemplate',
    note: []
  },
  {
    id: '213',
    propertyId: 'NOFOLLOW_BROKEN_LINKS',
    name: 'Rel Nofollow To Recognized Broken Internal Links',
    nameFile: 'd107ea',
    description:
      'Se un link interno ad un URL è identificato dal sistema come broken (response code 40x) e verifica almeno una delle regex definite nella property (per attivarlo su tutti è sufficiente definire .* come regola) allora viene automaticamente settato come NOFOLLOW. Nel momento in cui almeno una delle condizioni (broken o regex) decada, allora il suo stato verrà ripristinato',
    oldPath: 'SEO > Sitemap > Index Follow',
    typeOld: 'STRINGHE-REGEX-URL',
    type: 'STRINGHE',
    topic: 'Robots',
    sidebarSection: 'Indexability',
    slug: 'indexability/no-follow-to-recognized-broken-internal-links',
    template: 'ListTemplate',
    templateFile: 'TechComponentTemplate',
    note: []
  },
  {
    id: '167',
    propertyId: 'NOFOLLOW_ALL_FORMS',
    name: 'Rel Nofollow To All Forms Actions',
    nameFile: '89c18f',
    description:
      'Indipendentemente da quali URL si siano definiti nelle properties precedenti, configura tutte le form che abbiano una action come NOFOLLOW',
    oldPath: 'SEO > Sitemap >Index Follow',
    type: 'KTOGGLE',
    topic: 'Robots',
    sidebarSection: 'Indexability',
    slug: 'indexability/nofollow-all-forms',
    template: 'ToggleTemplate',
    note: []
  },
  {
    id: '138',
    propertyId: 'OMIT_INDEX_FOLLOW',
    name: "Don't Add Index Follow",
    nameFile: '568af8',
    oldPath: 'SEO > Sitemap >Index Follow',
    type: 'KTOGGLE',
    topic: 'Robots',
    note: []
  },
  {
    id: '278',
    name: 'Page Data Import',
    nameFile: 'e92855',
    propertyId: 'PAGEDATA_IMPORT',
    type: 'SPECIAL SERVICE',
    topic: 'Services/Tools',
    note: []
  },
  // {
  //   id: '322',
  //   propertyId: 'GROUP_CACHE_CONTROL_MAXAGE',
  //   name: 'Cache Control Maxage 2',
  //   nameFile: 'Propertyd552cb',
  //   perPageType: true,
  //   topic: 'Performance Cache',
  //   parent1: 'Browser Caching',
  //   parent2: 'Cache',
  //   note: ['SPARITA SPECIALE']
  // },
  {
    id: '98',
    propertyId: 'CACHECONTROL_MAXAGE',
    name: 'Cache-Control max-age',
    nameFile: 'd552cb',
    copy: {
      enabled: {
        label: 'Enabled',
        description: ''
      },
      originalUrlVarName: {
        label: 'Original URL variable name',
        description: 'The name for the attribute containing the original URL of the page'
      },
      modifiedUrlVarName: {
        label: 'Optimized URL variable name',
        description: 'The name for the attribute containing the optimized URL of the page'
      },
      gtmScriptContainsIdentifier: {
        label: 'GTM script identifier',
        description:
          'Optional string used to identify GTM script using a contains function (the mapping script has to be placed before this): if nothing is provided the default //www.googletagmanager.com/gtm.js pattern is used.'
      },
      excludeUrlQueryParameters: {
        label: 'Exclude URL Query Parameters',
        description:
          'Allows you to define a list of query parameter that will be removed from provided URLs'
      }
    },
    description: 'Value (in seconds) of the max-age parameter of http cache-control header',
    oldPath: 'Webmaster > PageSpeed Insights > Caching > Browser Caching',
    type: 'COMPLEX-CUSTOM',
    topic: 'CACHE - Cache-Control',
    propertiesRelated: [],
    note: []
  },
  {
    id: '1',
    propertyId: 'CACHECONTROL_MAXAGE_PAGES',
    name: 'Cache-Control max-age for pages',
    nameFile: '9bda3c',
    description: 'Configure the HTTP max age header',
    type: 'COMPLEX-ARRAY-MULTIPLE',
    copy: {
      pageType: {
        label: 'Page Type',
        description: ''
      },
      value: {
        label: 'Value (seconds)',
        description: ''
      },
      force: {
        label: 'Force?',
        description:
          'Force value set even when the original cache-maxage is lower than this one (but higher than zero)'
      }
    },
    oldPath: 'Webmaster > PageSpeed Insights > Caching > Browser Caching',
    hasPageType: true,
    topic: 'CACHE - Cache-Control',
    propertiesRelated: [],
    note: []
  },
  {
    id: '49',
    propertyId: 'CACHECONTROL_MAXAGE_RESOURCES',
    name: 'Cache-Control max-age for resources',
    nameFile: '66ad12',
    copy: {
      mimeType: {
        label: 'Mime Type',
        description: ''
      },
      value: {
        label: 'Value',
        description: "A regular expression on the resources'URL"
      },
      force: {
        label: 'Force value',
        description:
          'Force value set even when the original cache-maxage is lower than this one (but higher than zero)'
      }
    },
    oldPath: 'Webmaster > PageSpeed Insights > Caching > Browser Caching',
    type: 'COMPLEX-ARRAY',
    topic: 'CACHE - Cache-Control',
    propertiesRelated: [],
    note: []
  },
  {
    id: '48',
    propertyId: 'CACHECONTROL_MAXAGE_HTML',
    name: 'Cache-Control max-age for HTML',
    nameFile: '6904af',
    description: 'Redefinition (optional) of the max-age valid only for HTML content',
    oldPath: 'Webmaster > PageSpeed Insights > Caching > Browser Caching',
    type: 'COMPLEX-SINGLE-DATA',
    topic: 'CACHE - Cache-Control',
    propertiesRelated: [],
    note: []
  },
  {
    id: '44',
    propertyId: 'ADVANCED_CACHECONTROL_MAXAGE',
    oldPath: 'Webmaster > PageSpeed Insights > Caching > Browser Caching',
    name: 'Cache-Control max-age advanced',
    nameFile: 'e44627',
    description:
      "Configurazione avanzata delle modifiche all'attributo max-age dellheader HTTP Cache-Control: permette di definire regole in base allurl, al content type, al pageType (per le pagine html) e le politiche di sovrascrittura di un valore preesistente",
    copy: {
      pageType: {
        label: 'Page Type',
        description: ''
      },
      url: {
        label: 'RegEx-URL',
        description: "A regular expression on the resources'URL"
      },
      contentType: {
        label: 'RegEx - Content type',
        description: "A regular expression on the resources' content type"
      },
      maxAge: {
        label: 'Max-age',
        description:
          'The desired max-age value (in seconds): 1 hour = 3600; 1 day = 86400; 1 week = 604800; 1 month = 2592000'
      },
      overrideLowerValues: {
        label: 'Override lower values',
        description:
          'If checked, the specified max-age will be used also in place of another already defined max-age value lower than this one. It means that when this checkbox is not selected the inserted max-age will only be used to lower existing values'
      },
      overrideMissingValues: {
        label: 'Override missing values',
        description:
          'If checked, the specified max-age will be used also when no max-age directive is defined (or no cache-contro header is present)'
      },
      overrideZeroValues: {
        label: 'Override zero values',
        description:
          'If checked, the specified max-age will also be used when the existing max-age is zero'
      }
    },
    type: 'COMPLEX-ARRAY',
    hasPageType: true,
    topic: 'CACHE - Cache-Control',
    propertiesRelated: [],
    note: []
  },
  {
    id: '328',
    propertyId: 'ADVANCED_CACHECONTROL_SMAXAGE',
    name: 'Cache-Control s-maxage',
    nameFile: 'c68fa8',
    description:
      'Considers only the pages of the specified type, if any. Implies that only html resources are considered, so the content type is ignored. Leave blank to ignore this option, ALL means all page types (but still htmls)',
    type: 'COMPLEX-ARRAY',
    copy: {
      pageType: {
        label: 'Page Type',
        description: ''
      },
      url: {
        label: 'RegEx-URL',
        description: "A regular expression on the resources'URL"
      },
      contentType: {
        label: 'RegEx - Content type',
        description: "A regular expression on the resources' content type"
      },
      maxAge: {
        label: 'Max-age',
        description:
          'The desired max-age value (in seconds): 1 hour = 3600; 1 day = 86400; 1 week = 604800; 1 month = 2592000'
      },
      overrideLowerValues: {
        label: 'Override lower values',
        description:
          'If checked, the specified max-age will be used also in place of another already defined max-age value lower than this one. It means that when this checkbox is not selected the inserted max-age will only be used to lower existing values'
      },
      overrideMissingValues: {
        label: 'Override missing values',
        description:
          'If checked, the specified max-age will be used also when no max-age directive is defined (or no cache-contro header is present)'
      },
      overrideZeroValues: {
        label: 'Override zero values',
        description:
          'If checked, the specified max-age will also be used when the existing max-age is zero'
      }
    },
    hasPageType: true,
    topic: 'CDN',
    propertiesRelated: [],
    note: []
  },
  // {
  //   id: '391',
  //   propertyId: 'NO_CACHE_COOKIES',
  //   name: 'No cache cookies',
  //   nameFile: 'plain5',
  //   description: '',
  //   oldPath: '',
  //   type: 'COMPLEX-PLAIN',
  //   topic: 'CACHE - Cache-Control',
  //   note: []
  // },
  {
    id: '188',
    propertyId: 'FRAGMENT_CACHE',
    name: 'Fragment Cache',
    nameFile: 'df1971',
    oldPath: 'Webmaster > PageSpeed Insights > Caching > Internal Caching',
    typeOld: 'STRINGHE',
    type: 'STRINGHE-URL',
    topic: 'CACHE - Internal Cache',
    note: []
  },
  {
    id: '238',
    propertyId: 'ADVANCED_FRAGMENT_CACHE',
    name: 'Fragment Cache Advanced',
    nameFile: '160916',
    description:
      'Fragment cache evoluta che può essere applicata anche ad elementi che cambiano a seconda dellurl per migliorare le performances dellottimizzazione Kleecks e ridurre i tempi di compressione html delle pagine. E importante verificare che i blocchi definiti cambino solo in funzione dellURL e non anche ogni volta che viene fatta una richiesta oppure questa funzionalità sarà inutile o addirittura dannosa',
    oldPath: 'Webmaster > PageSpeed Insights > Caching > Internal Caching',
    topic: 'CACHE - Internal Cache',
    type: 'STRINGHE',
    note: []
  },
  {
    id: '95',
    propertyId: 'CACHE_MAX_AGE',
    name: 'Internal Http Cache Max Validity',
    nameFile: '6bb52e',
    description:
      'Duration (in seconds) of the local cache before being forcefully upgraded even though the max-age provided by the server is higher (if lower is obviously worth it)',
    oldPath: 'Webmaster > PageSpeed Insights > Caching > Internal Caching',
    type: 'STRINGA',
    topic: 'CACHE - Internal Cache',
    note: []
  },
  {
    id: '182',
    propertyId: 'CACHE_MIMETYPE_BLACKLIST',
    name: 'Exclude By Mimetype From Internal Http Cache',
    nameFile: '11e570',
    copy: {
      label: 'List of mimetypes to exclude',
      description: ''
    },
    oldPath: 'Webmaster > PageSpeed Insights > Caching > Internal Caching',
    topic: 'CACHE - Internal Cache',
    type: 'STRINGHE',
    note: []
  },
  {
    id: '143',
    propertyId: 'CACHE_EXCLUDE_HTML',
    name: 'Exclude Pages From Internal Http Cache',
    nameFile: '331547',
    description: 'Exclude all html from caching',
    oldPath: 'Webmaster > PageSpeed Insights > Caching > Internal Caching',
    topic: 'CACHE - Internal Cache',
    type: 'KTOGGLE',
    note: []
  },
  {
    id: '199',
    propertyId: 'USE_PAGEURLMAP_HTML_URL_REGEX',
    name: 'Enable Enhanced Caching',
    nameFile: '9d17ba',
    description:
      "Per le pagine i cui URL verificano una delle condizioni se può utilizza sempre l'html memorizzato invece di fare la richiesta al CMS",
    perPageType: true,
    topic: 'CACHE - Internal Cache',
    typeOld: 'STRINGHE-REGEX-URL',
    type: 'STRINGHE',
    oldPath: 'Webmaster > PageSpeed Insights > Caching > Internal Caching',
    note: []
  },
  {
    id: '222',
    propertyId: 'PAGEURLMAP_HTML_HEADERS',
    name: 'Http Headers For Enhanced Caching Resources',
    nameFile: '6015b1',
    copy: {
      firstValue: {
        label: 'Header',
        description: ''
      },
      secondValue: {
        label: 'Value',
        description: ''
      }
    },
    description:
      'In caso di risorse provenienti da cache avanzata su DB gli header HTTP originali non vengono preservati: tramite questa property è possibile definire un set base di Headers da restituire agli utenti',
    oldPath: 'Webmaster > PageSpeed Insights > Caching > Internal Caching',
    perPageType: true,
    topic: 'CACHE - Internal Cache',
    type: 'DOPPIE-STRINGHE',
    note: []
  },
  {
    id: '73',
    propertyId: 'JS_REWRITTEN_URLS_CACHE',
    name: 'Js Rewritten Urls Cache',
    nameFile: '157a42',

    oldPath: 'Uncategorized',
    topic: 'System',
    type: 'STRINGA',
    note: []
  },
  {
    id: '237',
    propertyId: 'COOKIELESS_RESOURCES_MIMETYPES',
    name: 'Resources Mimetypes',
    nameFile: '8fdf32',
    copy: {
      mimeType1: {
        label: 'MIME Type',
        description: "This value applied as a 'contains'. Define a MIME Type"
      },
      mimeType2: {
        label: 'MIME Type',
        description: "This value applied as a 'contains'. Choose from the list"
      },
      isShowingCustom: {
        label: 'Show the defined MIME Type list',
        description: 'If the MIME Type that you are looking for is not present'
      }
    },
    oldPath: 'SEO > CDN',
    type: 'COMPLEX-SINGLE-DATA-ARRAY',
    topic: 'CDN',
    seojs3: true,
    note: []
  },
  {
    id: '215',
    propertyId: 'COOKIELESS_RESOURCES_URLS',
    name: 'Resources Urls',
    description: 'List of url to be moved on the cookieless domain if configured (as regex)',
    nameFile: 'd3d431',
    oldPath: 'SEO > CDN',
    typeOld: 'STRINGHE-REGEX-URL',
    type: 'STRINGHE',
    topic: 'CDN',
    note: []
  },
  {
    id: '214',
    propertyId: 'COOKIELESS_RESOURCES_EXCLUDED_URLS',
    name: 'Resources Excluded Urls',
    nameFile: 'e0f43c',
    description:
      'List of excluded urls to be moved to the cookieless domain if configured (as regex)',
    oldPath: 'SEO > CDN',
    typeOld: 'STRINGHE-REGEX-URL',
    type: 'STRINGHE',
    topic: 'CDN',
    note: []
  },
  {
    id: '221',
    propertyId: 'CDN_CACHE_MAX_AGE_BY_TYPE',
    name: 'Max-Age For Cdn Resources By Type',
    nameFile: 'b8e044',
    copy: {
      label1: 'Content Type',
      label2: 'Validity'
    },
    description:
      "Permette di definire il valore in secondi per l'attributo s-maxage dell'HTTP header Cache-Control da settare per le risorse sotto CDN basandosi sul content type",
    oldPath: 'SEO > CDN',
    type: 'DOPPIE-STRINGHE',
    topic: 'CDN',
    note: []
  },
  {
    id: '96',
    propertyId: 'CDN_CACHE_MAX_AGE',
    name: 'Max-Age For Cdn Resources',
    nameFile: 'bc4e3e',
    description: 'Max age for CDN resources',
    oldPath: 'SEO > CDN',
    type: 'STRINGA',
    topic: 'CDN',
    note: []
  },
  {
    id: '293',
    propertyId: 'TECH_UX',
    name: 'User Experience',
    nameFile: 'e07841',
    type: 'SPECIAL',
    hasPageType: true,
    topic: 'Services/Tools',
    note: []
  },
  // {
  //   id: '294',
  //   propertyId: 'ANALYTICS_VIEW_CODE',
  //   name: 'User Experience',
  //   nameFile: 'UX',
  //   type: 'SPECIAL',
  //   hide: true,
  //   parent1: 'On Page Optimisation',
  //   parent2: 'On page optimization',
  //   note: [
  //     'Non ha un file, vien eusato nel TECH_UX'
  //   ]
  // },
  {
    id: '296',
    propertyId: 'STATIC_RESOURCES_PATH',
    name: 'File Manager base path',
    nameFile: '14fa40',
    copy: {
      label: 'Resources Path'
    },
    oldPath: 'Webmaster > Source Editor > File Manager',
    type: 'SPECIAL',
    topic: 'URL - Path',
    propertiesRelated: ['FILE_MANAGER'],
    note: []
  },
  {
    id: '326',
    propertyId: 'FILE_MANAGER',
    name: 'File Manager',
    nameFile: '007513',
    oldPath: 'Webmaster > Source Editor > File Manager',
    type: 'SPECIAL SERVICE',
    topic: 'Services/Tools',
    propertiesRelated: ['STATIC_RESOURCES_PATH'],
    note: []
  },
  {
    id: '277',
    propertyId: 'JSONLD_KEEP_ORIGINAL_ORGANIZATION',
    name: 'Keep Original Organization',
    nameFile: '1e7f26',
    oldPath: 'SEO > Structured Data > Company - Website - Organization',
    type: 'KTOGGLE',
    perPageType: true,
    topic: 'Structured Data',
    note: []
  },
  {
    id: '159',
    propertyId: 'JSONLD_KEEP_ORIGINAL_WEBSITE',
    name: 'Keep Original Website',
    nameFile: 'f617c6',
    description: 'Keep original website',
    oldPath: 'SEO > Structured Data > Company - Website - Organization',
    type: 'KTOGGLE',
    perPageType: true,
    topic: 'Structured Data',
    note: []
  },
  {
    id: '297',
    propertyId: 'SOCIAL',
    name: 'Social',
    nameFile: 'f431e1',
    copy: {
      facebook: {
        label: 'Facebook',
        description: ''
      },
      linkedin: {
        label: 'Linkedin',
        description: ''
      },
      instagram: {
        label: 'Instagram',
        description: ''
      },
      gplus: {
        label: 'Gplus',
        description: ''
      },
      pinterest: {
        label: 'Pinterest',
        description: ''
      },
      twitter: {
        label: 'Twitter',
        description: ''
      },
      youtube: {
        label: 'Youtube',
        description: ''
      }
    },
    description:
      "Links to the customer's social pages (eg {facebook: https: // ..., twitter: https: ..., ...}). They are also used for the sameAs attribute of the Microdata Organization",
    oldPath: 'SEO > Structured Data > Social profile links',
    type: 'SPECIAL',
    perPageType: true,
    topic: 'Structured Data',
    seojs3: true,
    note: []
  },
  {
    id: '97',
    propertyId: 'SEARCH_ACTION_RELATIVE_URL',
    name: 'Search Action Url',
    nameFile: 'fe5f6c',
    description:
      'Allows you to define the URL related to search action that goes into the website jsonld. Must contain the search parameter between braces (eg / search?k={query_term})',
    oldPath: 'SEO > Structured Data > Company - Website - Organization',
    type: 'STRINGA',
    perPageType: true,
    topic: 'Structured Data',
    note: []
  },
  {
    id: '92',
    propertyId: 'SOCIAL_DEFAULT_IMAGE',
    name: 'Social Image',
    nameFile: 'fe77ca',
    description:
      'URL of the default image to use for social metadata when a specific one is missing and is not present or can not be traced back to the main image of the page',
    oldPath: 'SEO > Structured Data > Social profile links',
    type: 'STRINGA',
    perPageType: true,
    topic: 'Structured Data',
    note: []
  },
  {
    id: '284',
    propertyId: 'JSONLD_CUSTOM_MICRODATA',
    name: 'Json Ld - Json-ld advanced generator',
    nameFile: '83c926',
    copy: {
      value: {
        label: 'Value',
        description:
          "(optional) Constant attributes' values should be defined here, instead of providing field selectors"
      },
      selector: {
        label: 'Selector',
        description: 'CSS selector to identify the element containing the information required'
      },
      attribute: {
        label: 'Attribute',
        description:
          "(optional) If set the data will be extracted from provided element's attribute rather than from element's inner text"
      },
      descendantsText: {
        label: 'Descendants Text',
        description:
          '(optional) If true the data will be not just the selected element own text but it will include the text of its subelements'
      },
      dataType: {
        label: 'Data Type',
        description:
          'Data type of selected attribute. Is required whenever its format is different from json convenctions and it needs to be parsed and converted'
      },
      pattern: {
        label: 'Pattern',
        description: '(optional) Required for data types requiring a parse of the original content'
      },
      mandatory: {
        label: 'Mandatory',
        description:
          "Mandatory fields require a value to be extracted from processed pages: if no value is obtained an error is risen and json-ld creation could not be completed. Non-mandatory fields could instead be removed from generated json-ld whether a value couldn't be found"
      },
      multipleValuesSeparator: {
        label: 'Multiple Values Separator',
        description:
          'When selector matches multiple values, this attributes specifies a string to be used for joining them. If this attribute is not set only the first matching value will be used'
      },
      pageType: {
        label: 'Page Type',
        description: ''
      },
      condition: {
        label: 'Condition',
        description:
          '(optional) The microdata is added only when at least one element of a page matches provided css selector'
      },
      label: {
        label: 'Label',
        description: 'A mnemonic name for current ruleset'
      }
    },
    description: 'Set of instructions to operate on the html as a string after being processed',
    type: 'SPECIAL',
    hasPageType: true,
    hasViewer: true,
    perPageType: true,
    topic: 'Structured Data',
    seojs3: true,
    note: []
  },
  {
    id: '21',
    propertyId: 'JSONLD_STATIC_MICRODATA',
    name: 'Json-ld Static Microdata',
    nameFile: '9c2381',
    description: 'Definition of static microdata that will be added if matching the urls',
    copy: {
      firstValue: {
        label: 'URL condition - RegEx-URL',
        description: 'Optional regular expression on Kleecks URL'
      },
      fourthValue: {
        label: 'CMS URL condition - RegEx-URL',
        description: 'Optional regular expression on CMS original URL'
      },
      secondValue: {
        label: 'Name',
        description: 'Optional mnemonic label'
      },
      thirdValue: {
        label: 'Value',
        description: ''
      }
    },
    oldPath: 'SEO > Structured Data > Advanced',
    type: 'COMPLEX-ARRAY',
    perPageType: true,
    topic: 'Structured Data',
    seojs3: true,
    note: ['Aggiungi RegEx Builder', 'Controlla validazione']
  },
  {
    id: '101',
    propertyId: 'JSONLD_CORPORATE_CONTACT_INFO',
    name: 'Json-Ld Corporate Contact Info',
    nameFile: 'cd1148',
    description:
      'Complete JSON-LD of corporate contacts (es. https://developers.google.com/search/docs/data-types/corporate-contacts)',
    oldPath: 'SEO > Structured Data > Advanced',
    perPageType: true,
    topic: 'Structured Data',
    type: 'STRINGA',
    note: []
  },
  {
    id: '100',
    propertyId: 'CONTACT_POINT_JSON',
    name: 'Json-Ld Contact Point',
    nameFile: 'ab3925',
    description:
      'Json about the contact points to add to the organization jsonld (ex. https://developers.google.com/search/docs/data-types/corporate-contacts)',
    oldPath: 'SEO > Structured Data > Advanced',
    type: 'STRINGA',
    perPageType: true,
    topic: 'Structured Data',
    note: []
  },
  {
    id: '5',
    propertyId: 'JSON_LD_CHECKS',
    name: 'Json-Ld Microdata Checks - json-ld validity checks',
    nameFile: 'ed122e',
    description: 'Definition of static microdata that will be added if matching the urls',
    type: 'COMPLEX-ARRAY-MULTIPLE',
    copy: {
      firstValue: {
        label: 'Microdata Type',
        description: ''
      },
      secondValue: {
        label: 'List of mandatory attributes',
        description: "Use the syntax 'parent/child' for nested attributes"
      }
    },
    oldPath: 'Seo > Structured Data > Advanced',
    perPageType: true,
    topic: 'Structured Data',
    seojs3: true,
    note: []
  },
  {
    id: '42',
    propertyId: 'HTML_MICRODATA_REMOVAL_RULES',
    name: 'Html Microdata Removal Rules',
    nameFile: '87f6a8',
    oldPath: 'SEO > Structured Data > Advanced',
    copy: {
      firstValue: {
        label: 'Page Type',
        description: ''
      },
      secondValue: {
        label: 'Condition',
        description: ''
      },
      thirdValue: {
        label: 'ItemType',
        description: ''
      }
    },
    type: 'COMPLEX-ARRAY-MULTIPLE',
    hasPageType: true,
    perPageType: true,
    topic: 'Structured Data',
    seojs3: true,
    note: []
  },
  {
    id: '10',
    propertyId: 'BREADCRUMB_SETTINGS',
    name: 'Breadcrumbs Settings - breadcrumb editor',
    nameFile: 'e73471',
    copy: {
      htmlfrag: {
        label: 'HTML for Home',
        description: "HTML fragment to use instead of home page's title"
      },
      besc: {
        label: 'Breadcrumbs elements separator character',
        description: 'A character or string that will be used as breadcrumb elements separator'
      },
      noSeparator: {
        label: "Don't add separator element",
        description: ''
      },
      usebr: {
        label: 'Use BreadcrumbList',
        description:
          'True to use breadcrumblist microdata instead of a list of breadcumbs for html breadcrumbs. The breadcrumbList usually requires additional css styling'
      },
      nomdhb: {
        label: 'NO microdata in html breadcrumb',
        description:
          'Instruct Kleecks to avoid breadcrumb microdata creation for html breadcrumb. If insertAsJsonldWhenMissing is true the json-ld microdata will be created instead'
      },
      bels: {
        label: 'Breadcrumb elements label source',
        description: "Source field for breadcrumb element' labels (default is h1)"
      },
      imjld: {
        label: 'Insert microdata as Json-Ld',
        description:
          "Force breadcrumb microdata insertion as json-ld when it can't be added as html fragment (no selector, no match, etc) or noHtmlMicrodata is checked"
      },
      isdp: {
        label: 'Include subfolder domain parent',
        description:
          'When processing a page belonging to a domain with a subfolder includes its root page'
      },
      iru: {
        label: 'Ignore Redirect URLs',
        description:
          'If enabled URLs sending a redirect will be considered as virtual URLs (like 40x ones)'
      },
      ivp: {
        label: 'Include virtual parents',
        description:
          'Include in the html breadcrumb the virtual parents, using span without links. Some of these urls can be eventually filtered out with the excluded urls configuration'
      },
      ehfm: {
        label: 'Include virtual parents',
        description:
          "The HOME page won't be included in breadcrumb microdata (either html or json-ld)"
      },
      eu: {
        label: 'Excluded Urls',
        description: 'Matching URLs wont be included in the breadcrumb'
      }
    },
    description:
      'It allows you to edit the breadcrumb settings on the page, such as the ability to use json-ld BreadcrumbList',
    oldPath: 'SEO > Structured Data > Advanced',
    type: 'COMPLEX-OBJECT',
    topic: 'Structured Data',
    seojs3: true,
    note: ['Nella vecchia di chiama breadcrumb editor']
  },
  {
    id: '23',
    propertyId: 'HTML_TEXT_REPLACEMENTS',
    name: 'HTML Text Replacement',
    nameFile: 'a44941',
    description:
      'Allows you to replace a portion of text to correct errors before the HTML parsing',
    copy: {
      rexf: {
        label: 'Find Selector - RegEx',
        description: 'Regular expression with java convenctions'
      },
      rext: {
        label: 'Replace Selector - RegEx',
        description: 'Replacement expression (could contain regex groups references)'
      }
    },
    oldPath: 'Webmaster > source editor > File Manager > Advanced Advanced',
    type: 'COMPLEX-ARRAY',
    perPageType: true,
    topic: 'Structured Data',
    seojs3: true,
    note: []
  },
  {
    id: '22',
    propertyId: 'SCRIPTS_PREPROCESSING_RULES',
    name: 'Scripts Preprocessing Rules',
    nameFile: '65cdd6',
    oldPath: 'Webmaster > source editor > File Manager > Advanced Advanced',
    copy: {
      cu: {
        label: 'Find Selector - RegEx-URL',
        description:
          'Optional regex on container page or resource original URL (the resource that is being processed and containing the script you want to preprocess)'
      },
      rexf: {
        label: 'Find Selector - RegEx',
        description: 'Regular expression with java convenctions'
      },
      rext: {
        label: 'Replace Selector - RegEx',
        description: 'Replacement expression (could contain regex groups references)'
      }
    },
    type: 'COMPLEX-ARRAY',
    perPageType: true,
    topic: 'Structured Data',
    seojs3: true,
    note: []
  },
  // {
  //   id: '26',
  //   propertyId: 'PRERENDER_CONFIGURATION',
  //   name: 'Prerender Configuration',
  //   nameFile: 'PrerenderConfiguration',
  //   oldPath: 'webmaster > Source Editor > File Manager > Advanced - Prerender',
  //   type: 'COMPLEX-OBJECT',
  //   parent1: 'Advanced',
  //   parent2: 'On page optimization',
  //   note: [
  //     'Complesso',
  //     'Correggi text area',
  //     'Controlla validazione',
  //     'Errore Traduzione - Mancano controlli e il formato è diverso'
  //   ]
  // },
  // {
  //   id: '273',
  //   propertyId: '--'
  //   name: 'Amp Custom Templates - Amp Templates',
  //   nameFile: 'AmpCustomTemplates',
  //   oldPath: 'Webmaster > Mobile > AMP',
  //   type: 'SPECIAL',
  //   parent1: 'Amp',
  //   parent2: 'On page optimization',
  //   note: ['Rifare']
  // },
  {
    id: '274',
    propertyId: 'TEMPLATE_AMP_CONTENT',
    name: 'Template Amp Content',
    nameFile: 'c69c22',
    description:
      'AMP template for CONTENT type pages. If present, activate the generation of the AMP for pages of this type',
    oldPath: 'Webmaster > Mobile > AMP',
    type: 'SPECIAL',
    perPageType: true,
    topic: 'Amp',
    seojs3: true,
    note: []
  },
  {
    id: '275',
    propertyId: 'TEMPLATE_AMP_NEWS',
    name: 'Template Amp News',
    nameFile: '303354',
    description:
      'AMP template for NEWS type pages. If present, activate the generation of the AMP for pages of this type',
    oldPath: 'Webmaster > Mobile > AMP',
    type: 'SPECIAL',
    perPageType: true,
    topic: 'Amp',
    seojs3: true,
    note: []
  },
  {
    id: '276',
    propertyId: 'TEMPLATE_AMP_PRODUCT',
    name: 'Template Amp Product',
    nameFile: '1fbc8d',
    description:
      'AMP template for PRODUCT type pages. If present, activate the generation of the AMP for pages of this type',
    oldPath: 'Webmaster > Mobile > AMP',
    type: 'SPECIAL',
    perPageType: true,
    topic: 'Amp',
    seojs3: true,
    note: []
  },
  {
    id: '25',
    propertyId: 'MANIFEST_OPTIONS',
    name: 'Web App Manifest',
    nameFile: '4a5ca5',
    copy: {
      sn: {
        label: 'Short Name',
        description:
          'Provides a short human-readable name for the application. This is intended for use where there is insufficient space to display the full name of the web application'
      },
      n: {
        label: 'Name',
        description:
          'Provides a human-readable name for the application as it is intended to be displayed to the user, for example among a list of other applications or as a label for an icon'
      },
      su: {
        label: 'Start Url',
        description:
          'Specifies the URL that loads when a user launches the application from a device (e.g. when added to home screen), typically the index file. Note that this has to be a relative URL pointing to the index file, relative to the site origin'
      },
      disp: {
        label: 'Display',
        description: ''
      },
      bc: {
        label: 'Background Color',
        description:
          "Defines the expected background color for the web application. This value repeats what is already available in the application stylesheet, but can be used by browsers to draw the background color of a web application when the manifest is available before the style sheet has loaded. This creates a smooth transition between launching the web application and loading the application's content"
      },
      tc: {
        label: 'Theme Color',
        description:
          "Defines the default theme color for an application. This sometimes affects how the application is displayed by the OS (e.g., on Android's task switcher, the theme color surrounds the application)"
      },
      des: {
        label: 'Description',
        description: 'Provides a general description of what the web application does'
      },
      icons: {
        label: 'Icons',
        description:
          "Specifies an array of image objects that can serve as application icons in various contexts. For example, they can be used to represent the web application amongst a list of other applications, or to integrate the web application with an OS's task switcher and/or system preferences"
      },
      iconsSizes: {
        label: 'Sizes',
        description: 'A string containing space-separated image dimensions'
      },
      iconsSources: {
        label: 'Source',
        description:
          'The path to the image file. If src is a relative URL, the base URL will be the URL of the manifest'
      },
      iconsType: {
        label: 'Type',
        description:
          'A hint as to the media type of the image.The purpose of this member is to allow a user agent to quickly ignore images of media types it does not support'
      }
    },
    description: 'Settings for the manifest.json of the site',
    oldPath: 'Webmaster > Mobile > General Settings',
    type: 'COMPLEX-OBJECT',
    perPageType: true,
    topic: 'Amp',
    seojs3: true,
    note: []
  },
  {
    id: '117',
    propertyId: 'AMP_ENABLED',
    name: 'Amp Enabled',
    nameFile: '2ba841',
    description:
      "'true'to enable the generation and management of AMP versions of pages. It is affected anyway by whether or not there is an AMP template on the various page types",
    oldPath: 'Webmaster > Mobile > AMP',
    type: 'KTOGGLE',
    topic: 'Amp',
    seojs3: true,
    note: []
  },
  {
    id: '118',
    propertyId: 'AMP_POSTPROCESS',
    name: 'Amp Post Process',
    nameFile: 'b5258d',
    description: 'Activate the control/optimization of the AMP',
    oldPath: 'Webmaster > Mobile > AMP',
    topic: 'Amp',
    type: 'KTOGGLE',
    note: []
  },
  {
    id: '9',
    propertyId: 'AMP_POSTPROCESS_CONFIGURATION',
    name: 'Amp Post Process Configuration',
    nameFile: 'ee18ee',
    copy: {
      ampge: {
        label: 'Engine',
        description: 'AMP Generation Engine'
      },
      ampebp: {
        label: 'AMP engine base path',
        description: 'The AMP Converter and validity checker to use'
      },
      rui: {
        label: 'Remove Unconverted Images?',
        description:
          "Removes from the html img tags that can't be automatically converted to amp-img because the image is not responding. Works only with Lullabot engine"
      }
    },
    description: 'Overrides the default AMP engine path. Leave it blank to use default values',
    oldPath: 'Webmaster > Mobile > AMP',
    type: 'COMPLEX-OBJECT',
    topic: 'Amp',
    seojs3: true,
    note: []
  },
  {
    id: '171',
    propertyId: 'SERVE_AMP_FROM_GOOGLE_CACHE',
    name: 'Serve Amp From Google Cache',
    nameFile: 'f035f6',
    description: 'Enable Google cache for AMP pages and relative resources',
    oldPath: 'Webmaster > Mobile > AMP',
    type: 'KTOGGLE',
    topic: 'Amp',
    note: []
  },
  {
    id: '112',
    propertyId: 'ABOVETHEFOLD_ENABLED',
    name: 'Above The Fold Enabled',
    nameFile: '2ad077',
    description: 'Flag to enable the filter for the Above The Fold',
    oldPath: 'Webmaster > PageSpeed Insights > Above the fold > Above the fold',
    type: 'KTOGGLE',
    topic: 'Performance HTML',
    note: [
      'Guarda vecchia interfaccia perché dovrebbe far comparire o scomparire gli altri',
      'Non sembra funzionare'
    ]
  },
  {
    id: '47',
    propertyId: 'HTML_COMPRESSOR_OPTIONS',
    name: 'Html Compression Options',
    nameFile: '1eac98',
    copy: {
      enabled: {
        label: 'Use Compression',
        description: "If 'false' all compressions are off"
      },
      compressCss: {
        label: 'Compress inline css',
        description: 'Recommended: true'
      },
      compressJavaScript: {
        label: 'Compress inline javascript',
        description: 'Recommended: true'
      },
      removeComments: {
        label: 'If false keeps HTML comments',
        description: 'Recommended: true'
      },
      removeMultiSpaces: {
        label: 'If false keeps multiple whitespace characters',
        description: 'Recommended: true'
      },
      removeIntertagSpaces: {
        label: 'Removes inter-tag whitespace characters',
        description: 'Recommended: true'
      },
      removeQuotes: {
        label: 'Removes unnecessary tag attribute quotes',
        description: ''
      },
      simpleDoctype: {
        label: 'Simplify existing doctype',
        description: ''
      },
      removeScriptAttributes: {
        label: 'Remove optional attributes from script tags',
        description: ''
      },
      removeStyleAttributes: {
        label: 'Remove optional attributes from style tags',
        description: ''
      },
      removeLinkAttributes: {
        label: 'Remove optional attributes from link tag',
        description: ''
      },
      removeFormAttributes: {
        label: 'Remove optional attributes from form tags',
        description: ''
      },
      removeInputAttributes: {
        label: 'Remove optional attributes from input tags',
        description: ''
      },
      simpleBooleanAttributes: {
        label: 'Remove values from boolean tag attributes',
        description: ''
      },
      removeJavaScriptProtocol: {
        label: "Remove 'javascript:' from inline event handlers",
        description: ''
      },
      removeHttpProtocol: {
        label: "Replace 'http://' with '//' inside tag attributes",
        description: ''
      },
      removeHttpsProtocol: {
        label: "Replace 'https://' with '// inside tag attributes",
        description: ''
      },
      preserveLineBreaks: {
        label: 'Preserves original line breaks',
        description: ''
      },
      removeSurroundingSpaces: {
        label: 'Remove spaces around provided tags',
        description: ''
      }
    },
    oldPath: 'Webmaster > PageSpeed Insights >Resources compression > HTML Compression',
    type: 'COMPLEX-OBJECT',
    topic: 'Performance HTML',
    seojs3: true,
    note: []
  },
  {
    id: '148',
    propertyId: 'DISABLE_MAINCONTENT_HTML_CLEANUP',
    name: 'Disable Html Purification',
    nameFile: 'd9551d',
    description: 'Disable HTML page cleanup of the main content of the page',
    oldPath: 'Webmaster > PageSpeed Insights > Resources compression > HTML Compression',
    type: 'KTOGGLE',
    topic: 'Performance HTML',
    note: []
  },
  {
    id: '116',
    propertyId: 'ENABLE_AGGRESSIVE_PAGESPEED',
    name: 'Enable Aggressive Lighthouse Optimization',
    nameFile: '8cbcce',
    description:
      'Abilita il meccanismo avanzato di ottimizzazione per Lighthouse/Pagespeed. I miglioramenti non sono immediati perchè il sistema deve raccogliere informazioni per funzionare correttamente',
    oldPath: 'Webmaster > PageSpeed Insights > Above the fold > Above the fold',
    type: 'KTOGGLE',
    topic: 'Performance HTML',
    note: []
  },
  {
    id: '281',
    name: 'Disabled Asynchronous Css',
    objectId: 'disabledAsynchronousCss',
    propertyId: 'ABOVETHEFOLD_CSS_DISABLED',
    nameFile: '310556',
    description:
      'true to disable the asynchronous CSS upload (removes much of PS optimization, but on some sites it is imperative to avoid a terrible loading effect)',
    oldPath: 'Webmaster > PageSpeed Insights > Above the fold > Above the fold',
    type: 'KTOGGLE',
    topic: 'Performance CSS',
    note: []
  },
  {
    id: '124',
    propertyId: 'ABOVETHEFOLD_CSS_USE_PRELOAD',
    name: 'Apply preload on deferred Loading',
    objectId: 'applyPreloadOnDeferredLoading',
    nameFile: '8009ae',
    description: 'Enable CSS asynchronous loading with PRELOAD',
    oldPath: 'Webmaster > PageSpeed Insights > Above the fold > Above the fold',
    type: 'KTOGGLE',
    topic: 'Performance CSS',
    note: []
  },
  {
    id: '125',
    propertyId: 'ABOVETHEFOLD_CSS_HIDEBODY',
    name: 'Css deferred Loading Masquerading',
    objectId: 'hideBodyDuringDeferredLoading',
    nameFile: 'e9bbe1',
    description:
      'true to set display:none on the body and remove it via JavaScript when the asynchronous load of css terminates (in some cases improves user experience)',
    oldPath: 'Webmaster > PageSpeed Insights > Above the fold > Above the fold',
    type: 'KTOGGLE',
    topic: 'Performance CSS',
    note: []
  },
  {
    id: '126',
    propertyId: 'CSSCOMPRESSOR_DISABLED',
    name: 'Disable CSS minification',
    nameFile: 'ec3fa3',
    description: 'Disable CSS minification',
    oldPath:
      'Webmaster > PageSpeed Insights >Resources compression > CSS Minification - Aggregation',
    type: 'KTOGGLE',
    topic: 'Performance CSS',
    note: []
  },
  {
    id: '93',
    propertyId: 'CSSCOMPRESSOR_EXCLUSION_PATTERN',
    name: 'Css Minification Excluded By Url',
    nameFile: '53f0f4',
    copy: {
      label: 'Regex',
      description: ''
    },
    description: 'Regex to filter CSS to not compress',
    oldPath:
      'Webmaster > PageSpeed Insights >Resources compression > CSS Minification - Aggregation',
    type: 'STRINGA',
    topic: 'Performance CSS',
    note: []
  },
  {
    id: '127',
    propertyId: 'CSSCOMPRESSOR_FORCE_COMMENTSREMOVAL',
    name: 'Css Minification Force Comments Removal',
    nameFile: '70e25f',
    description: 'Properties to force the removal of comments that should be kept in CSS files',
    oldPath:
      'Webmaster > PageSpeed Insights >Resources compression > CSS Minification - Aggregation',
    type: 'KTOGGLE',
    topic: 'Performance CSS',
    note: []
  },
  {
    id: '235',
    propertyId: 'DAEMON_INCLUSION_CSS_MAXSIZE',
    name: 'Aggregated Css Max Size',
    nameFile: 'c362a5',
    description: 'Maximum size of an aggregated CSS file',
    oldPath:
      'Webmaster > PageSpeed Insights > Resources compression > CSS Minification > AGGREGATED CSS MAX SIZE',
    type: 'COMPLEX-SINGLE-DATA',
    topic: 'Performance CSS',
    note: []
  },
  {
    id: '201',
    propertyId: 'DAEMON_INCLUSION_CSS_DONTAGGREGATEREGEX',
    name: 'Exclude Css From Aggregation By Url',
    nameFile: 'cfcbd9',
    description:
      'Always excludes from the aggregation of the css resources that verify the regular expression defined on the URL',
    oldPath:
      'Webmaster > PageSpeed Insights >Resources compression > CSS Minification - Aggregation',
    type: 'STRINGHE-REGEX-URL',
    topic: 'Performance CSS',
    note: []
  },
  {
    id: '282',
    propertyId: 'DAEMON_INCLUSION_CSS_IGNOREINLINE',
    name: 'Keep Inline Css',
    nameFile: '7ac7de',
    description: 'Prevent inline styles from being outsourced and possibly aggregated',
    oldPath:
      'Webmaster > PageSpeed Insights >Resources compression > CSS Minification - Aggregation',
    type: 'KTOGGLE',
    topic: 'Performance CSS',
    note: []
  },
  {
    id: '186',
    propertyId: 'DAEMON_INCLUSION_CSS_INLINEBLACKLIST',
    name: 'Inline Css Blacklist',
    nameFile: '80eadf',
    copy: {
      label: 'List of strings to be used as blacklists for inline CSS',
      description: ''
    },
    oldPath:
      'Webmaster > PageSpeed Insights >Resources compression > CSS Minification - Aggregation',
    type: 'STRINGHE',
    topic: 'Performance CSS',
    note: []
  },
  {
    id: '198',
    propertyId: 'DAEMON_INCLUSION_CSS_IGNOREURLREGEX',
    name: 'Css Url Blacklist',
    nameFile: '746dd5',
    description: 'CSS URLs specified will not be internazionalized',
    oldPath:
      'Webmaster > PageSpeed Insights >Resources compression > CSS Minification - Aggregation',
    type: 'STRINGHE-REGEX-URL',
    topic: 'Performance CSS',
    note: []
  },
  {
    id: '157',
    propertyId: 'DAEMON_INCLUSION_CSS_IGNOREEXTERNAL',
    name: 'Keep External Css',
    nameFile: '26acfb',
    description: 'It does not internalize css files from other domains',
    oldPath:
      'Webmaster > PageSpeed Insights >Resources compression > CSS Minification - Aggregation',
    type: 'KTOGGLE',
    topic: 'Performance CSS',
    note: []
  },
  {
    id: '203',
    propertyId: 'DAEMON_INCLUSION_CSS_EXTERNAL_WHITELIST',
    name: 'External Css Internalization Whitelist',
    nameFile: '873860',
    description:
      'When external CSS resources internazionalization is disabled define rules to internazionalize specified resources',
    oldPath:
      'Webmaster > PageSpeed Insights >Resources compression > CSS Minification - Aggregation',
    type: 'STRINGHE-REGEX-URL',
    topic: 'Performance CSS',
    note: []
  },
  {
    id: '156',
    propertyId: 'CSS_CUSTOM_ALWAYS_INLINE',
    name: 'Keep Custom Css Inline',
    nameFile: '73a827',
    description:
      'Keep the custom CSS added from the DOM editor page online to not create additional resources',
    oldPath:
      'Webmaster > PageSpeed Insights >Resources compression > CSS Minification - Aggregation',
    type: 'KTOGGLE',
    topic: 'Performance CSS',
    note: []
  },
  {
    id: '174',
    propertyId: 'INLINE_CSS_IMPORT_TO_LINKS',
    name: 'Transform Inline Import To Stylesheet Inclusions',
    nameFile: '887b61',
    description: 'Turn <code>@import</code> found on inline styles into stylesheet links',
    oldPath:
      'Webmaster > PageSpeed Insights >Resources compression > CSS Minification - Aggregation',
    type: 'KTOGGLE',
    topic: 'Performance CSS',
    note: []
  },
  {
    id: '88',
    propertyId: 'DAEMON_INCLUSION_CSS_PREFIX',
    name: 'Custom Css Path',
    nameFile: '4f4334',
    description: 'Prefix for CSS Resource URLs (eg / css)',
    oldPath:
      'Webmaster > PageSpeed Insights >Resources compression > CSS Minification - Aggregation',
    type: 'STRINGA',
    topic: 'Performance CSS',
    note: []
  },
  {
    id: '155',
    propertyId: 'ABOVETHEFOLD_JS_DISABLED',
    name: 'Deferred Js disabled',
    nameFile: '272c8c',
    oldPath: 'Webmaster > PageSpeed Insights > Above the fold > Above the fold',
    description:
      'Completely deactivate the deferred javascripts (they are however moved at the end, but without deferred does not change virtually anything for PS)',
    type: 'KTOGGLE',
    topic: 'Performance JS',
    note: []
  },
  {
    id: '129',
    propertyId: 'JSCOMPRESSOR_DISABLED',
    name: 'Js Minification Disabled',
    nameFile: '7e1513',
    description: '',
    oldPath: 'Webmaster > PageSpeed Insights > JS Minification - Aggregation',
    topic: 'Performance JS',
    type: 'KTOGGLE',
    note: []
  },
  {
    id: '283',
    propertyId: 'JSCOMPRESSOR_EXCLUSION_PATTERN',
    name: 'Js Minification Excluded By Url',
    nameFile: '25980e',
    description: 'Js url patterns that need not be minimized',
    oldPath: 'Webmaster > PageSpeed Insights > JS Minification - Aggregation',
    type: 'STRINGA',
    topic: 'Performance JS',
    note: []
  },
  {
    id: '154',
    propertyId: 'JSCOMPRESSOR_JSON_ENABLED',
    name: 'Js Compressor Json Enabled',
    nameFile: '8b0763',
    description: 'Enable compression of Json',
    oldPath: 'Webmaster > PageSpeed Insights > JS Minification - Aggregation',
    topic: 'Performance JS',
    type: 'KTOGGLE',
    note: []
  },
  {
    id: '152',
    propertyId: 'JSCOMPRESSOR_FORCE_COMMENTSREMOVAL',
    name: 'Js Compressor Force Comments Removal',
    nameFile: '49924d',
    description: 'Force the removal of comments that should be kept in JS files',
    oldPath: 'Webmaster > PageSpeed Insights > JS Minification - Aggregation',
    topic: 'Performance JS',
    type: 'KTOGGLE',
    note: []
  },
  {
    id: '89',
    propertyId: 'DAEMON_INCLUSION_JS_PREFIX',
    name: 'Custom Js Path',
    nameFile: '60ac07',
    description: 'Prefix for javascript resource URLs (eg / js)',
    oldPath: 'Webmaster > PageSpeed Insights > JS Minification - Aggregation',
    topic: 'Performance JS',
    type: 'STRINGA',
    note: []
  },
  {
    id: '236',
    propertyId: 'DAEMON_INCLUSION_JS_MAXSIZE',
    name: 'Aggregated Js Max Size',
    nameFile: '856834',
    oldPath: 'Webmaster > PageSpeed Insights > JS Minification - Aggregation',
    description: 'Maximum size of an aggregated JS file',
    topic: 'Performance JS',
    type: 'COMPLEX-SINGLE-DATA',
    hasWarnings: true,
    seojs3: true,
    note: []
  },
  {
    id: '202',
    propertyId: 'DAEMON_INCLUSION_JS_DONTAGGREGATEREGEX',
    name: 'Exclude Js From Aggregation By Url',
    nameFile: 'e5e31f',
    description:
      'Always excludes from the aggregation of the js resources that verify the regular expression defined on the URL',
    oldPath: 'Webmaster > PageSpeed Insights > JS Minification - Aggregation',
    topic: 'Performance JS',
    typeOld: 'STRINGHE-REGEX-URL',
    type: 'STRINGHE',
    note: []
  },
  {
    id: '136',
    propertyId: 'DAEMON_INCLUSION_JS_IGNOREINLINE',
    name: 'Disable Inline Js Externalization',
    nameFile: '5ccf9f',
    description:
      'Prevent inline javascripts from being outsourced and possibly aggregated (to avoid errors or proliferation of external resources, for example when the script contains session variables or page specifics)',
    oldPath: 'Webmaster > PageSpeed Insights > JS Minification - Aggregation',
    topic: 'Performance JS',
    type: 'KTOGGLE',
    note: []
  },
  {
    id: '187',
    propertyId: 'DAEMON_INCLUSION_JS_INLINEBLACKLIST',
    name: 'Inline Js Tag Blacklist',
    nameFile: 'd3ce36',
    copy: {
      label: 'List of strings to be used as blacklists for inline JS',
      description: ''
    },
    oldPath: 'Webmaster > PageSpeed Insights > JS Minification - Aggregation',
    topic: 'Performance JS',
    type: 'STRINGHE',
    note: []
  },
  {
    id: '158',
    propertyId: 'DAEMON_INCLUSION_JS_IGNOREEXTERNAL',
    name: 'Keep External Js',
    nameFile: 'e26c69',
    description: 'Does not internalize javascript files that are included with other domains',
    oldPath: 'Webmaster > PageSpeed Insights > JS Minification - Aggregation',
    topic: 'Performance JS',
    type: 'KTOGGLE',
    note: []
  },
  {
    id: '183',
    propertyId: 'DAEMON_INCLUSION_JS_EXTERNAL_WHITELIST',
    name: 'External Js Internalization Whitelist',
    nameFile: 'd97448',
    description:
      'Definisci delle regular expression sugli url per internalizzare ugualmente quelle che le verificano quando la internalizzazione delle risorse JS esterne è disattivata',
    oldPath: 'Webmaster > PageSpeed Insights > JS Minification - Aggregation',
    topic: 'Performance JS',
    type: 'STRINGHE',
    note: []
  },
  {
    id: '160',
    propertyId: 'JS_MOVE_TO_BOTTOM',
    name: 'Move Js To Bottom',
    nameFile: '33cf22',
    description: 'Move javascript files to the bottom of the page',
    oldPath: 'Webmaster > PageSpeed Insights > JS Minification - Aggregation',
    topic: 'Performance JS',
    type: 'KTOGGLE',
    note: []
  },
  {
    id: '206',
    propertyId: 'DAEMON_INCLUSION_JS_IGNOREURLREGEX',
    name: 'Js Url Blacklist',
    nameFile: 'f5fd88',
    description:
      'Serie di regular expression sugli url delle risorse per evitare completamente di considerarle nel processo di aggregazione o di internalizzazione. E utile in particolar modo quando ci sono risorse con parametri random o timestamp che variano quindi in continuazione e che determinerebbero comunque limpossibilità che il meccanismo funzioni, per evitare che vengano considerate velocizzando di conseguenza il processing delle pagine e il refresh delle altre risorse',
    oldPath: 'Webmaster > PageSpeed Insights > JS Minification - Aggregation',
    topic: 'Performance JS',
    typeOld: 'STRINGHE-REGEX-URL',
    type: 'STRINGHE',
    note: []
  },
  {
    id: '181',
    propertyId: 'ABOVETHEFOLD_DEFERREDJS_BLACKLIST',
    name: 'Deferred Js Exclusion',
    nameFile: '8ce42b',
    copy: {
      label: 'List of strings to be used as blacklists for inline JS',
      description: ''
    },
    oldPath: 'Webmaster > PageSpeed Insights > Above the fold > Above the fold',
    type: 'STRINGHE',
    topic: 'Performance JS',
    note: []
  },
  {
    id: '430',
    propertyId: 'ABOVETHEFOLD_DEFERREDJS_WHITELIST',
    name: 'Abovethefold Deferredjs Whitelist',
    nameFile: '157a42',
    copy: {
      label: 'List of Items',
      itemLabel: 'Item',
      description: ''
    },
    description: '',
    type: 'STRINGHE',
    topic: 'Performance JS',
    note: []
  },
  {
    id: '433',
    propertyId: 'DEFERRED_INLINE_JS_WHITELIST',
    name: 'Deferred Inline Js Whitelist',
    nameFile: '157a42',
    copy: {
      label: 'List of Items',
      itemLabel: 'Item',
      description: ''
    },
    description: '',
    type: 'STRINGHE',
    topic: 'Performance JS',
    note: []
  },
  {
    id: '134',
    propertyId: 'IMAGES_DISABLE_COMPRESSION',
    name: 'Disable Images Compression',
    nameFile: 'c2a032',
    description: 'Disable lossless compression of images and consequently also scaling',
    oldPath: 'Webmaster >PageSpeed Insights > Resources compression-Images',
    topic: 'Performance Images',
    type: 'KTOGGLE',
    note: []
  },
  {
    id: '407',
    propertyId: 'IMAGES_COMPRESSION_QUALITY',
    name: 'Image Compression Quality',
    nameFile: '7512cc',
    description: '',
    copy: {
      label: 'Quality',
      description: ''
    },
    type: 'STRINGA',
    oldPath: 'Webmaster >PageSpeed Insights > Resources compression-Images',
    topic: 'Performance Images',
    note: []
  },
  {
    id: '185',
    propertyId: 'IMAGES_COMPRESSION_EXCLUSIONS',
    name: 'Images Compression Exclusions',
    nameFile: '5dac74',
    description: 'Disabled compression only on specified images',
    oldPath: 'Webmaster >PageSpeed Insights > Resources compression-Images',
    type: 'STRINGHE',
    topic: 'Performance Images',
    note: []
  },
  {
    id: '121',
    propertyId: 'IMAGES_CHECK_MIMETYPE',
    name: 'Check Images Mimetype',
    nameFile: '77f6c0',
    description:
      'Check the image type by reading it from the data and not relying only on the content type passed in the http headers from cms',
    oldPath: 'Webmaster >PageSpeed Insights > Resources compression-Images',
    type: 'KTOGGLE',
    topic: 'Performance Images',
    note: []
  },
  {
    id: '162',
    propertyId: 'IMAGES_SET_RECOGNIZED_MIMETYPE',
    name: 'Override Images Wrong Mimetype',
    nameFile: '896bdc',
    oldPath: 'Webmaster >PageSpeed Insights > Resources compression-Images',
    type: 'KTOGGLE',
    topic: 'Performance Images',
    note: []
  },
  {
    id: '146',
    propertyId: 'IMAGES_REWRITE_SIZE',
    name: 'Force Img Width',
    nameFile: '6692e3',
    description:
      'Images size (width and height) should be entered / rewritten based on the file size. Must not be activated when images are resized by CSS',
    oldPath: 'Webmaster >PageSpeed Insights > Resources compression-Images',
    type: 'KTOGGLE',
    topic: 'Performance Images',
    note: []
  },
  {
    id: '7',
    propertyId: 'IMAGE_SCALING',
    name: 'Image Scaling By Url',
    nameFile: '64059f',
    copy: {
      firstValue: {
        label: 'RegEx-URL',
        description: 'Regular expression to identify images by URL'
      },
      secondValue: {
        label: 'Max Width',
        description: ''
      },
      thirdValue: {
        label: 'Max Height',
        description: ''
      }
    },
    type: 'COMPLEX-ARRAY-MULTIPLE',
    oldPath: 'Webmaster >PageSpeed Insights > Resources compression-Images',
    topic: 'Performance Images',
    seojs3: true,
    note: []
  },
  {
    id: '141',
    propertyId: 'ENABLE_IMAGES_LAZY_LOADING',
    name: 'Enable Lazy Loading',
    nameFile: 'deba57',
    copy: {
      label: 'Enable Images Lazy Loading'
    },
    oldPath: 'Webmaster >PageSpeed Insights > Resources compression-Images',
    type: 'KTOGGLE',
    topic: 'Performance Images',
    note: []
  },
  {
    id: '15',
    propertyId: 'IMAGES_LAZY_LOADING_SETTINGS',
    name: 'Lazy Loading Settings',
    nameFile: 'dcf675',
    copy: {
      useLoadingAttribute: {
        label: 'Use Loading attribute',
        description: ''
      },
      blattrs: {
        label: 'Blocked attributes',
        description:
          'Lazy loading wont be activated when the img contains one of these additional attributes (data-src, data-srcset, data-lazyload are set by default)'
      },
      notsel: {
        label: 'Advanced Not Selectors',
        description:
          "Allows you to consider additional advanced conditions that will be added as :not() meta selectors (eg. 'a[data-image] img' will not consider images inside anchors with a data-image attribute)"
      },
      selwhite: {
        label: 'Selectors Whitelist',
        description:
          'When set previous settings will be ignored and only the images matching one of this selectors will be lazy loaded'
      },
      plimage: {
        label: 'Placeholder image - URL',
        description: 'Custom URL to use as image placeholder instead of Kleecks default'
      },
      base64Placeholder: {
        label: 'Base64 default placeholder',
        description:
          'Insert the default placeholder in base64 format. If the default placeholder is overridden, this option will be ignored'
      },
      bgsel: {
        label: 'Background Images Selectors Whitelist',
        description:
          'Background images will be lazy loaded only for elements matching one of specified selectors. [style*=background-image] will be automatically added. One selector could be left intentionally blank to select every element with a background-image inline style'
      },
      addnoalt: {
        label: 'Add noscript alternative',
        description: 'Adds a noscript containing the original image for each lazy loaded image'
      },
      addlistchg: {
        label: 'Add listener to dom changes',
        description:
          'Adds a listener on dom changes to manage lazyloaded images added later by script'
      },
      placeholderInPictures: {
        label: 'Keep img element in pictures',
        description:
          "Doesn't remove the img element in picture blocks but sets its source with the placeholder image"
      }
    },
    type: 'COMPLEX-OBJECT',
    oldPath: 'Webmaster > PageSpeed Insights > Resources compression-Images',
    topic: 'Performance Images',
    seojs3: true,
    note: []
  },
  {
    id: '166',
    propertyId: 'MAIN_IMAGES_KEEP_ALT_TITLE',
    name: 'Preserve Original Alt And Title Of Main Images',
    nameFile: '7e7333',
    oldPath: 'SEO > Variables >Images',
    description:
      'Se attivo gli attributi title ed alt delle immagini principali di pagina viene riscritto solo se assente, altrimenti viene tenuto quello originale (lottimizzazione di default prevede che venga forzato lh1 di pagina)',
    type: 'KTOGGLE',
    topic: 'Performance Images',
    note: []
  },
  {
    id: '380',
    propertyId: 'IMAGES_USE_WEBP',
    name: 'Images Use Webp',
    nameFile: 'f0574e',
    oldPath: '',
    description: '',
    label: 'Use Webp',
    type: 'KTOGGLE',
    topic: 'Performance Images',
    note: []
  },
  {
    id: '234',
    propertyId: 'FONT_DISPLAY',
    name: 'Font-display descriptor',
    nameFile: '54c797',
    description:
      'The font-display descriptor determines how a font face is displayed based on whether and when it is downloaded and ready to use',
    oldPath: 'Webmaster > PageSpeed Insights > Resources compression > Fonts',
    type: 'COMPLEX-SINGLE-DATA',
    topic: 'Performance Extra',
    note: []
  },
  {
    id: '211',
    propertyId: 'PRECONNECT_URLS',
    name: 'Preconnect Urls',
    nameFile: 'c80006',
    description: 'Add URLs to HEAD as <code>rel=PRECONNECT</code>',
    oldPath: 'Webmaster > PageSpeed Insights > Resources compression > Resources loading',
    typeOld: 'STRINGHE-REGEX-URL',
    type: 'STRINGHE',
    topic: 'Performance Extra',
    note: []
  },
  {
    id: '19',
    propertyId: 'PRELOAD_RESOURCES',
    name: 'Preload Resources',
    nameFile: 'f16245',
    description: 'Configure URLs with <code>rel=PRELOAD</code>',
    copy: {
      firstValue: {
        label: 'Condition',
        description: ''
      },
      secondValue: {
        label: 'Href - Tipo URL',
        description: ''
      },
      thirdValue: {
        label: 'As',
        description: ''
      },
      fourthValue: {
        label: 'Type',
        description: 'Optional MIME type of the resource the element is pointing to'
      },
      fifthValue: {
        label: 'Cross-Origin',
        description:
          "Optional Crossorigin directive. For font preloading it usually has to be 'anonynmous"
      },
      sixthValue: {
        label: 'Media',
        description: 'Optional Media query directive'
      }
    },
    oldPath: 'Webmaster > PageSpeed Insights > Resources compression > Resources loading',
    type: 'COMPLEX-ARRAY-MULTIPLE',
    topic: 'Performance Extra',
    note: []
  },
  {
    id: '50',
    propertyId: 'PATCH_CACHE',
    name: 'Patch Cache',
    nameFile: '0a1234',
    copy: {
      disabled: {
        label: 'Disable Prediction',
        description: ''
      },
      maxSeconds: {
        label: 'Cache duration (s)',
        description: 'Max seconds before refreshing cached page'
      },
      maxHints: {
        label: 'Cache Hints',
        description: 'Max page hints before refreshing page'
      },
      maxDiffs: {
        label: 'Max Diffs',
        description: 'Max number of differences before full reloading page and disable'
      },
      maxDepth: {
        label: 'Max Depth',
        description: 'Max number of rows searching for differences'
      },
      cacheRefreshValidity: {
        label: 'Refresh Validity',
        description: 'Max seconds interval between hits for refresh (def=86400)'
      },
      cacheThreads: {
        label: 'Num. Cache Threads',
        description: 'Number of threads requesting pages for the cache'
      },
      disableHours: {
        label: 'Disable time (hours)',
        description: 'Duration of the exclusion cookie'
      },
      exeScriptsRegex: {
        label: 'Exe Script Regex regex',
        description: 'If regex is matched, the script will be executed instead of inserted/replaced'
      },
      andWhiteList: {
        label: 'AND White Lists',
        description: 'White Lists conditions should be Anded'
      },
      urlsWhitelist: {
        label: 'Activation Urls (regex)',
        description: ''
      },
      pagetypesWhitelist: {
        label: 'Activation Pagetypes',
        description: ''
      },
      urlsBlacklist: {
        label: 'Blacklist Urls (regex)',
        description: 'Urls that trigger a Disable'
      },
      pagetypesBlacklist: {
        label: 'Blacklist Pagetypes',
        description: 'Pagetypes that trigger a Disable'
      },
      urlsBlacklistLight: {
        label: 'Light Blacklist Urls (regex)',
        description: 'Urls blacklisted without a Disable'
      },
      pagetypesBlacklistLight: {
        label: 'Light Blacklist Pagetypes',
        description: 'Pagetypes blacklisted without a Disable'
      },
      regexBlacklist: {
        label: 'Blacklist regex',
        description: 'Regexs on HTML source that trigger a Disable'
      },
      htmlScriptRemove: {
        label: 'Script remove (NO regex !)',
        description: 'String on HTML source for selective script remove (avoid multiple matches!)'
      },
      cookieRegexBlacklist: {
        label: 'Blacklist cookie regex',
        description: 'regexs on COOKIES (name or value) source that trigger a Disable'
      },
      injCode: {
        label: 'Injected Code',
        description: ''
      }
    },
    description: '',
    oldPath: 'Webmaster > PageSpeed Insights > Prediction',
    type: 'COMPLEX',
    topic: 'Predictions',
    note: []
  },
  {
    id: '52',
    propertyId: 'PATCH_CACHE_TEST_MODE',
    name: 'Patch Cache Test Mode',
    nameFile: '0a1234',
    copy: {
      disabled: {
        label: 'Disable Prediction',
        description: ''
      },
      maxSeconds: {
        label: 'Cache duration (s)',
        description: 'Max seconds before refreshing cached page'
      },
      maxHints: {
        label: 'Cache Hints',
        description: 'Max page hints before refreshing page'
      },
      maxDiffs: {
        label: 'Max Diffs',
        description: 'Max number of differences before full reloading page and disable'
      },
      maxDepth: {
        label: 'Max Depth',
        description: 'Max number of rows searching for differences'
      },
      cacheRefreshValidity: {
        label: 'Refresh Validity',
        description: 'Max seconds interval between hits for refresh (def=86400)'
      },
      cacheThreads: {
        label: 'Num. Cache Threads',
        description: 'Number of threads requesting pages for the cache'
      },
      disableHours: {
        label: 'Disable time (hours)',
        description: 'Duration of the exclusion cookie'
      },
      exeScriptsRegex: {
        label: 'Exe Script Regex regex',
        description: 'If regex is matched, the script will be executed instead of inserted/replaced'
      },
      andWhiteList: {
        label: 'AND White Lists',
        description: 'White Lists conditions should be Anded'
      },
      urlsWhitelist: {
        label: 'Activation Urls (regex)',
        description: ''
      },
      pagetypesWhitelist: {
        label: 'Activation Pagetypes',
        description: ''
      },
      urlsBlacklist: {
        label: 'Blacklist Urls (regex)',
        description: 'Urls that trigger a Disable'
      },
      pagetypesBlacklist: {
        label: 'Blacklist Pagetypes',
        description: 'Pagetypes that trigger a Disable'
      },
      urlsBlacklistLight: {
        label: 'Light Blacklist Urls (regex)',
        description: 'Urls blacklisted without a Disable'
      },
      pagetypesBlacklistLight: {
        label: 'Light Blacklist Pagetypes',
        description: 'Pagetypes blacklisted without a Disable'
      },
      regexBlacklist: {
        label: 'Blacklist regex',
        description: 'Regexs on HTML source that trigger a Disable'
      },
      htmlScriptRemove: {
        label: 'Script remove (NO regex !)',
        description: 'String on HTML source for selective script remove (avoid multiple matches!)'
      },
      cookieRegexBlacklist: {
        label: 'Blacklist cookie regex',
        description: 'regexs on COOKIES (name or value) source that trigger a Disable'
      },
      injCode: {
        label: 'Injected Code',
        description: ''
      }
    },
    description: '',
    oldPath: 'Webmaster > PageSpeed Insights > Prediction',
    type: 'COMPLEX',
    topic: 'Predictions',
    note: []
  },
  // {
  //   id: '217',
  //   propertyId: 'JS_CUSTOM',
  //   name: 'Custom js',
  //   nameFile: 'CustomJs',
  //   type: 'COMPLEX-COMPLEX',
  //   hasPageType: true,
  //   hide: true,
  //   status: 'deprecated',
  //   parent2: 'On page optimization',
  //   note: [
  //     'Si trova negli editors'
  //   ]
  // },
  // {
  //   id: '255',
  //   propertyId: 'DOM_PREPROCESSOR_INSTRUCTIONS',
  //   name: 'Source Editor',
  //   nameFile: 'SourceEditor',
  //   type: 'COMPLEX-COMPLEX',
  //   hasPageType: true,
  //   hide: true,
  //   status: 'deprecated',
  //   parent2: 'On page optimization',
  //   note: [
  //     'Sta nel editors'
  //   ]
  // },
  // {
  //   id: '286',
  //   propertyId: 'CSS_CUSTOM',
  //   name: 'Custom CSS',
  //   nameFile: 'CustomCSS',
  //   type: 'COMPLEX-COMPLEX',
  //   hasPageType: true,
  //   status: 'deprecated',
  //   hide: true,
  //   parent2: 'On page optimization',
  //   note: [
  //     'Si trova negli editors',
  //     'Non caricare l\'html viewr quando l\'url è lo stesso',
  //   ]
  // },
  // {
  //   id: '290',
  //   propertyId: 'EDITORS',
  //   name: 'Editors',
  //   nameFile: 'TheEditors',
  //   hasViewer: true,
  //   type: 'COMPLEX-COMPLEX',
  //   parent2: null,
  //   note: ['Speciale']
  // },
  // {
  //   id: '291',
  //   propertyId: 'TECHWIZ_1',
  //   name: 'Tech Wiz 1',
  //   nameFile: '',
  //   status: 'Deprecated',
  //   type: 'SPECIAL',
  //   parent2: null,
  //   note: []
  // },
  // {
  //   id: '292',
  //   propertyId: 'DOM_PREPROCESSOR_INSTRUCTIONS_UX',
  //   name: 'Source Editor UX',
  //   nameFile: 'SourceEditor',
  //   type: 'COMPLEX-COMPLEX',
  //   hasPageType: true,
  //   status: 'special',
  //   hide: true,
  //   parent2: 'On page optimization',
  //   note: [
  //     'Sta nel editors'
  //   ]
  // },
  {
    id: '43',
    propertyId: 'CRITICAL_CSS_CONFIG',
    name: 'Automatic Critical CSS',
    nameFile: '864c66',
    description:
      'Allows to manage the loading of critical CSS automatically for the different types of pages also setting the reference url. By using this property, all the other critical CSS properties are ignore',
    type: 'COMPLEX-ARRAY-MULTIPLE',
    copy: {
      firstValue: {
        label: 'Page Type',
        description: ''
      },
      secondValue: {
        label: 'Condition',
        description: ''
      },
      thirdValue: {
        label: 'Reference Urls',
        description:
          'A list of URLs to be used to extract critical CSS from. Could be either absolute or relative to default domain (to ease staging->production migration)'
      }
    },
    oldPath: 'Webmaster > PageSpeed Insights > Critical CSS > Critical CSS',
    hasPageType: true,
    seojs3: true,
    topic: 'Performance CSS',
    note: []
  },
  {
    id: '122',
    propertyId: 'DISABLE_CRITICAL_CSS',
    name: 'Disable Critical Css',
    nameFile: 'fb6878',
    oldPath: 'Webmaster >PageSpeed Insights > Critical CSS',
    type: 'KTOGGLE',
    topic: 'Performance CSS',
    note: []
  },
  {
    id: '323',
    propertyId: 'EDITORS',
    name: 'Editors',
    nameFile: '356697',
    perPageType: true,
    topic: 'Source Editors',
    business: ['Fendi'],
    note: []
  },
  {
    id: '331',
    propertyId: 'SOURCE_EDITOR_LABELS',
    name: 'Editor Labels',
    nameFile: 'bfd177',
    description: '',
    type: 'COMPLEX-PLAIN',
    topic: 'Source Editors',
    business: ['Fendi', 'jakala'],
    note: []
  },
  {
    id: '332',
    propertyId: 'SOURCE_EDITOR_LABELS_DEFAULT_LOCALE',
    name: 'Editor Labels Default Locale',
    nameFile: '7512cc',
    copy: {
      label: 'Locale',
      description: ''
    },
    description: '',
    type: 'STRINGA-NEW',
    topic: 'Source Editors',
    business: ['Fendi'],
    note: []
  },
  {
    id: '17',
    propertyId: 'HTML_PREPROCESSING_INSTRUCTIONS',
    name: 'Preprocessing Instructions',
    description: 'Set of instructions to operate on the html as a string before being processed',
    oldPath: 'Webmaster > Source Editor > Advanced',
    nameFile: 'd397d6',
    copy: {
      contentType: {
        label: 'Content Type',
        description: ''
      },
      urlConditionSelector: {
        label: 'URL Condition Selector - RegEx-URL',
        description:
          '(optional) Processes only the resources whose URLs match the regular expression provided'
      },
      serverUrlConditionSelector: {
        label: 'Server URL Condition Selector - RegEx-URL',
        description:
          '(optional) Processes only the resources whose original URLs match the regular expression provided'
      },
      onlyBots: {
        label: 'Apply only on BOTS requests?',
        description: 'Apply the rule only to configured BOTS and Kleecks crawler requests'
      },
      fromSelector: {
        label: 'Replace FROM Selector - RegEx',
        description: 'Replace FROM regular expression. In case of multiline consider the (?s) flag'
      },
      toSelector: {
        label: 'Replace TO Selector - RegEx',
        description:
          'Replace TO instruction: could contain $x to identify groups (in every other circumstance $ letter has to be escaped)'
      },
      notes: {
        label: 'Note',
        description: ''
      }
    },
    type: 'COMPLEX-ARRAY',
    perPageType: true,
    topic: 'Source Editors',
    business: ['Fendi'],
    seojs3: true,
    note: []
  },
  {
    id: '16',
    propertyId: 'HTML_POSTPROCESSING_INSTRUCTIONS',
    name: 'Postprocessing Instructions',
    nameFile: '894a5a',
    description: 'Set of instructions to operate on the html as a string after being processed',
    oldPath: 'Webmaster > Source Editor > Advanced',
    copy: {
      contentType: {
        label: 'Content Type',
        description: ''
      },
      urlConditionSelector: {
        label: 'URL Condition Selector - RegEx-URL',
        description:
          '(optional) Processes only the resources whose URLs match the regular expression provided'
      },
      serverUrlConditionSelector: {
        label: 'Server URL Condition Selector - RegEx-URL',
        description:
          '(optional) Processes only the resources whose original URLs match the regular expression provided'
      },
      onlyBots: {
        label: 'Apply only on BOTS requests?',
        description: 'Apply the rule only to configured BOTS and Kleecks crawler requests'
      },
      fromSelector: {
        label: 'Replace FROM Selector - RegEx',
        description: 'Replace FROM regular expression. In case of multiline consider the (?s) flag'
      },
      toSelector: {
        label: 'Replace TO Selector - RegEx',
        description:
          'Replace TO instruction: could contain $x to identify groups (in every other circumstance $ letter has to be escaped)'
      },
      notes: {
        label: 'Note',
        description: ''
      }
    },
    type: 'COMPLEX-ARRAY',
    perPageType: true,
    topic: 'Source Editors',
    business: ['Fendi'],
    seojs3: true,
    note: []
  },
  {
    id: '403',
    propertyId: 'BODY_MARKER_FROM_URL',
    name: 'Body Classes Markers - Body Marker By Url',
    nameFile: 'plain10',
    copy: {
      condition1: {
        label: 'URL Regex',
        description: 'Regular expression on requested URL'
      },
      condition2: {
        label: 'Original URL Regex',
        description: 'Regular expression on original CMS URL'
      },
      name: {
        label: 'Marker',
        description: ''
      }
    },
    description: '',
    oldPath: '',
    type: 'COMPLEX-PLAIN',
    topic: 'Source Editors',
    note: []
  },
  // {
  //   id: '327',
  //   propertyId: 'TECH_PAGEBUILDER',
  //   name: 'Page Builder',
  //   nameFile: '576090',
  //   topic: 'Services/Tools',
  //   note: []
  // },
  {
    id: '325',
    propertyId: 'SEO_TOOL',
    name: 'SEO Tool',
    route: 'Page Type Manager',
    perPageType: true,
    topic: 'Services/Tools',
    note: []
  },
  {
    id: '334',
    propertyId: 'CRAWL_SENTINELS',
    name: 'Crawl Sentinels',
    nameFile: '975f39',
    type: 'SPECIAL SERVICE',
    topic: 'Services/Tools',
    propertiesRelated: ['CUSTOM_SENTINELS'],
    note: []
  },
  {
    id: '335',
    propertyId: 'CUSTOM_SENTINELS',
    name: 'Custom Sentinels',
    nameFile: 'd0e9f7',
    description: '',
    typeOld: 'STRINGHE-URL',
    type: 'STRINGHE',
    topic: 'Site Settings',
    propertiesRelated: ['CRAWL_SENTINELS'],
    note: []
  },
  {
    id: '423',
    propertyId: 'TECH_ACTIVITIES',
    topic: 'System',
    note: ['Viene usato quando si seleziona un istanza', 'semi-deprecata']
  },
  {
    id: '339',
    propertyId: 'TECH_EDITORS',
    topic: 'System',
    note: ['Non sembrerebbe essere usata da nessuna parte']
  },
  {
    id: '413',
    propertyId: 'TECH_SPEED',
    topic: 'System',
    note: ['SpecialK', 'Deprecated']
  },
  {
    id: '422',
    propertyId: 'TECH_REWRITE',
    topic: 'System',
    note: ['SpecialK', 'Deprecated']
  },
  {
    id: '421',
    propertyId: 'TECH_STRUCTURED',
    topic: 'System',
    note: ['SpecialK', 'Deprecated']
  },
  {
    id: '408',
    propertyId: 'TECH_META_DATA',
    topic: 'System',
    note: ['SpecialK', 'Deprecated']
  },
  {
    id: '420',
    propertyId: 'TECH_IN_EXCLUSION_PARAMS',
    topic: 'System',
    note: ['SpecialK', 'Deprecated']
  },
  {
    id: '409',
    propertyId: 'TECH_FIXES',
    topic: 'System',
    note: ['']
  },
  {
    id: '406',
    propertyId: 'TECH_GUEST',
    topic: 'System',
    note: ['Deprecated']
  },
  {
    id: '419',
    propertyId: 'TECH_ISSUES',
    topic: 'System',
    note: ['']
  },
  {
    id: '411',
    propertyId: 'TECH_LIMITED',
    topic: 'System',
    note: ['Deprecated']
  },
  {
    id: '418',
    propertyId: 'TECH_NEW_INSTANCE',
    topic: 'System',
    note: ['']
  },
  {
    id: '410',
    propertyId: 'TECH_OVERVIEW',
    topic: 'System',
    note: ['Forse è deprecato']
  },
  {
    id: '405',
    propertyId: 'TECH_PROGRESS',
    topic: 'System',
    note: ['Serve per Specialk']
  },
  {
    id: '351',
    propertyId: 'TECH_PROPERTIES_LIST',
    topic: 'System',
    note: ['Prob deprecata']
  },
  {
    id: '417',
    propertyId: 'TECH_PROPERTIES_LIST_2',
    topic: 'System',
    note: ['']
  },
  {
    id: '416',
    propertyId: 'TECH_REWRITE',
    topic: 'System',
    note: ['']
  },
  {
    id: '354',
    propertyId: 'TECH_PIXCOMPARE_BATCH',
    topic: 'System',
    note: ['']
  },
  {
    id: '415',
    propertyId: 'TECH_EDITORS_ACTIONS',
    topic: 'System',
    note: ['']
  },
  {
    id: '424',
    propertyId: 'INSTANCE_STATUS',
    topic: 'System',
    note: ['For Sentinels', 'Has one value STAGE']
  },
  {
    id: '425',
    propertyId: 'APPLY_PROPERTIES',
    name: 'Apply Properties',
    nameFile: '185f40',
    type: 'SPECIAL SERVICE',
    topic: 'Services/Tools',
    propertiesRelated: ['CUSTOM_SENTINELS'],
    note: ['Need INSTANCE_STATUS']
  },
  {
    id: '426',
    propertyId: 'PRETTYPRINT_DISABLE_URL',
    name: 'Prettyprint Disable Url',
    nameFile: '157a42',
    copy: {
      label: 'List of URLs',
      itemLabel: 'URL',
      description: ''
    },
    description: '',
    type: 'STRINGHE',
    topic: 'Performance HTML',
    note: []
  },
  {
    id: '427',
    propertyId: 'PRETTYPRINT_DISABLE_SERVERURL',
    name: 'Prettyprint Disable Server Url',
    nameFile: '157a42',
    copy: {
      label: 'List of URLs',
      itemLabel: 'URL',
      description: ''
    },
    description: '',
    type: 'STRINGHE',
    topic: 'Performance HTML',
    note: []
  },
  {
    id: '428',
    propertyId: 'NOSITEMAP_URLS_REGEX',
    name: 'Nositemap Urls Regex',
    nameFile: '157a42',
    copy: {
      label: 'List of URLs',
      itemLabel: 'URL',
      description: ''
    },
    description: '',
    type: 'STRINGHE',
    topic: 'Sitemap',
    note: []
  },
  {
    id: '429',
    propertyId: 'NOSITEMAP_SERVER_URLS_REGEX',
    name: 'Nositemap Server Urls Regex',
    nameFile: '157a42',
    copy: {
      label: 'List of URLs',
      itemLabel: 'URL',
      description: ''
    },
    description: '',
    type: 'STRINGHE',
    topic: 'Sitemap',
    note: []
  },
  {
    id: '431',
    propertyId: 'ABOVETHEFOLD_DEFERREDCSS_BLACKLIST',
    name: 'Abovethefold Deferredcss Blacklist',
    nameFile: '157a42',
    copy: {
      label: 'List of Items',
      itemLabel: 'Item',
      description: ''
    },
    description: '',
    type: 'STRINGHE',
    topic: 'Performance CSS',
    note: []
  },
  {
    id: '432',
    propertyId: 'ABOVETHEFOLD_DEFERREDCSS_WHITELIST',
    name: 'Abovethefold Deferredcss White List',
    nameFile: '157a42',
    copy: {
      label: 'List of Items',
      itemLabel: 'Item',
      description: ''
    },
    description: '',
    type: 'STRINGHE',
    topic: 'Performance CSS',
    note: []
  }
];
