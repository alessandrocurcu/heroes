export const issuesList = [
  {
    descr: 'The page does not have a meta description',
    level: 0,
    activities: ['c28955cd-2028-4907-9dbf-76f6cf93cdb6'],
    coderr: 'META_DESCR_NOTPRESENT',
    name: 'Missing Meta Description',
    id: 'META_DESCR_NOTPRESENT',
    howtofix:
      'Search engines will show either the meta description found or, if missing, the first sentence they found on the page when showing search results to users. To encourage clicks by users and avoid less meaningful information to them you should take care of the meta description. - All web pages should have meta description to ensure higher ctr.',
    schema: ['A1', 'A3', 'A5', 'B', 'C1']
  },
  {
    descr: 'The page has an empty meta description',
    level: 0,
    activities: ['e9e7fff1-f172-416f-b3cc-1a7aef49da0e', '04951d3c-fba1-4547-b9be-501d0720f59a'],
    coderr: 'META_DESCR_VOID',
    name: 'Meta Description Empty',
    id: 'META_DESCR_VOID',
    howtofix: null,
    schema: ['A1', 'A3', 'A5', 'B', 'C1']
  },
  {
    descr: 'The page has more than one meta description',
    level: 0,
    activities: [],
    coderr: 'META_DESCR_MULTIPLE',
    name: 'Multiple Meta Description',
    id: 'META_DESCR_MULTIPLE',
    howtofix:
      'The same <meta description> shown in search results appears in multiple pages generating confusion in both users and search engines, but also missing the opportunity to exploit other keywords. - Each web page should have its own meta description.',
    schema: ['A1', 'B']
  },
  {
    descr: 'This page has duplicated meta descriptions',
    level: 1,
    activities: [],
    coderr: 'METADUP_DUPLICATE',
    name: 'Duplicated Meta Description',
    howtofix2:
      'Indexable pages that are not part of a pagination sequence or hreflang group should have a unique meta description',
    id: 'METADUP_DUPLICATE',
    category: ['content', 'duplicates'],
    howtofix: 'This page has duplicated meta descriptions',
    schema: ['A1', 'A3', 'A5', 'B', 'C1']
  },
  {
    descr: 'The page has a meta description longer than 230 chars',
    level: 1,
    activities: [],
    coderr: 'META_DESCR_TOOLONG',
    name: 'Meta Description Too Long',
    id: 'META_DESCR_TOOLONG',
    howtofix: null,
    schema: ['A1', 'A3', 'A5', 'B', 'C1']
  },
  {
    descr: 'The page has a meta description shorter than 110 chars',
    level: 1,
    activities: [],
    coderr: 'META_DESCR_TOOSHORT',
    name: 'Meta Description Too Short',
    id: 'META_DESCR_TOOSHORT',
    howtofix: null,
    schema: ['A1', 'A3', 'A5', 'B', 'C1']
  },
  {
    descr: 'Page with duplicate meta description, but with his canonical',
    level: 9,
    activities: [],
    coderr: 'METADUP_DUPLICATE_CANONICAL',
    name: 'Meta Description Duplicate Canonical',
    id: 'METADUP_DUPLICATE_CANONICAL',
    howtofix: null,
    schema: []
  },
  {
    descr: '(PM) Description Multiple',
    level: 0,
    activities: [],
    coderr: 'PM_DESCRIPTION_MULTIPLE',
    name: '(PM) Description Multiple',
    id: 'PM_DESCRIPTION_MULTIPLE',
    howtofix: null,
    schema: []
  },
  {
    descr: '(PM) Description Empty',
    level: 0,
    activities: [],
    coderr: 'PM_DESCRIPTION_EMPTY',
    name: '(PM) Description Empty',
    id: 'PM_DESCRIPTION_EMPTY',
    howtofix: null,
    schema: []
  },
  {
    descr: '(PM) Description Missing',
    level: 0,
    activities: [],
    coderr: 'PM_DESCRIPTION_MISSING',
    name: '(PM) Description Missing',
    id: 'PM_DESCRIPTION_MISSING',
    howtofix: null,
    schema: []
  },
  {
    descr: '(PM) Description Length',
    level: 1,
    activities: [],
    coderr: 'PM_DESCRIPTION_LENGTH',
    name: '(PM) Description Length',
    id: 'PM_DESCRIPTION_LENGTH',
    howtofix: null,
    schema: []
  },
  {
    descr: 'This page has flash content inside',
    level: 0,
    activities: [],
    coderr: 'PAGE_FLASHCONTENT',
    name: 'Flash Content',
    id: 'PAGE_FLASHCONTENT',
    howtofix:
      'Flash content should be avoided because does not display correctly on mobile devices, it cannot be indexed properly and affects performances. - Avoid Flash content.',
    schema: ['B']
  },
  {
    descr: 'Image protocol different to home protocolo',
    level: 0,
    activities: [],
    coderr: 'IMG_DIFFERENTPROTOCOL',
    name: 'Image Protocol Different To Home',
    id: 'IMG_DIFFERENTPROTOCOL',
    howtofix: null,
    schema: ['B']
  },
  {
    descr: '(PM) Homepage',
    level: 0,
    activities: [],
    coderr: 'PM_HOMEPAGE',
    name: '(PM) Homepage',
    id: 'PM_HOMEPAGE',
    howtofix: null,
    schema: []
  },
  {
    descr: 'Title all',
    level: 10,
    activities: [],
    coderr: 'TITLE_ALL',
    name: 'Title All',
    id: 'TITLE_ALL',
    howtofix: null,
    schema: []
  },
  {
    descr: 'This page does no tdeclare doctype',
    level: 1,
    activities: [],
    coderr: 'PAGE_MISSING_DOCTYPE',
    name: 'Missing Doctype',
    id: 'PAGE_MISSING_DOCTYPE',
    howtofix: null,
    schema: ['B']
  },
  {
    descr: 'Page has a js resource src that causes a 4xx error',
    level: 0,
    activities: [],
    coderr: 'JS_LINK_HTTP_4XX',
    name: 'Js Resource Src Causes 4xx',
    id: 'JS_LINK_HTTP_4XX',
    howtofix: null,
    schema: ['B']
  },
  {
    descr: 'Hreflang causes a 3xx error',
    level: 0,
    activities: [],
    coderr: 'HREFLANG_LINK_REDIRECT',
    name: 'Hreflang Causes 3xx',
    id: 'HREFLANG_LINK_REDIRECT',
    howtofix:
      'hreflang attribute (rel="alternate" hreflang="x") needs to be implemented correctly to instruct the search engines on which is the best language for the current user. An issue is shown if country code is not in the ISO_3166-1_alpha-2 format and/or language code is not in the ISO 639-1 format. - You should check wether the hreflang attributes are set correctly.',
    schema: ['B']
  },
  {
    descr: 'The page has a too many links (>10)',
    level: 1,
    activities: [],
    coderr: 'PAGELINK_TOOMANYLINKS',
    name: 'Too Many Links',
    id: 'PAGELINK_TOOMANYLINKS',
    howtofix:
      'Crawlers do not go beyond 3,000 links in a web page or ignore links beyond the first 3,000. The result is a bad user experience and the page can be considered even as spammer. Stay well below 3,000 links per webpage.',
    schema: ['B']
  },
  {
    descr: 'The page has broken internal links',
    level: 0,
    activities: [],
    coderr: 'PAGELINK_INTLINKBROKEN',
    name: 'Internal Link Broken',
    id: 'PAGELINK_INTLINKBROKEN',
    howtofix:
      'An error status is returned by a webpage because the page linked does not exist, the URL contains errors or similar. This results in a negative user experience as well as affecting the indexing process leading to a downgrade of the website. A link to which access is blocked to crawlers can be seen as broken by crawlers too. (e.g. DDos protection in force, “disallow” entries in robots.txt, bad server configuration). - You should remove broken link bringing to web pages that issue an error or replace them. You should contact your IT support team in case it is a working link and the access is denied to crawlers or consider introducing the directive “crawl-delay” in your robots.txt file to be crawled less often.',
    schema: ['B']
  },
  {
    descr: 'This resource responded with 404 http code',
    level: 0,
    activities: ['df36e876-e29a-4f64-89ee-f6572cef4f04'],
    coderr: 'HTTP_404',
    name: '404 Response',
    id: 'HTTP_404',
    howtofix: null,
    schema: ['B', 'C1']
  },
  {
    descr: '(PM) Robots Facebook',
    level: 0,
    activities: [],
    coderr: 'PM_ROBOTS_FACEBOOK',
    name: '(PM) Robots Facebook',
    id: 'PM_ROBOTS_FACEBOOK',
    howtofix: null,
    schema: []
  },
  {
    descr: 'This page has an invalid url',
    level: 1,
    activities: [],
    coderr: 'PAGE_URL_MALFORMED',
    name: 'Page Url Malformed',
    id: 'PAGE_URL_MALFORMED',
    howtofix:
      'Spelling mistakes, invalid syntax of the URL can cause this error and the crawler cannot access the page. - Check the URL for typos, unnecessary characters, mistakes and other.',
    schema: ['A4', 'B']
  },
  {
    descr: 'The page has noydir directive',
    level: 2,
    activities: [],
    coderr: 'META_DIRECTIVES_NOYDIR',
    name: 'Noydir Directive',
    id: 'META_DIRECTIVES_NOYDIR',
    howtofix: null,
    schema: ['A1', 'A5', 'B']
  },
  {
    descr: 'Page has an image src that causes a redirect chain',
    level: 2,
    activities: [],
    coderr: 'IMG_LINK_REDIRECTCHAIN',
    name: 'Image Src Causes Redirect Chain',
    id: 'IMG_LINK_REDIRECTCHAIN',
    howtofix:
      'Ranking, user experience as well as SEO are all badly affected by loops or chains of redirections because they make it difficult to web crawlers to navigate the site and offer a bad user experience to final users of the website It can happen that this issue is reported by crawlers and not by browsers, which does not mean that the problem does not exist. - Redirects in a chain should be limited.',
    schema: ['A8', 'B']
  },
  {
    descr: 'This page has multiple different canonical links',
    level: 0,
    activities: [],
    coderr: 'CANONLINK_MULTIPLE_DIFFERENT',
    name: 'Multiple, Mismatched Canonical Tags',
    id: 'CANONLINK_MULTIPLE_DIFFERENT',
    howtofix:
      'Multiple tags rel=“canonical” per page should be avoided because they confuse search engines which will end up without understanding which is the right one or choose a wrong one. - There should be only one rel=“canonical” per page.',
    schema: ['B', 'C1', 'AUTO']
  },
  {
    descr: 'The page has a low text ratio',
    level: 1,
    activities: [],
    coderr: 'PAGE_LOWTEXTRATIO',
    name: 'Low Text Ratio',
    id: 'PAGE_LOWTEXTRATIO',
    howtofix:
      'Search engines give value to the text content of a web page which should stay above 10% of the ratio between the amount of content text of a web page and the amount of HTML code of the same page. Less code also helps crawlers and load time. - You can remove embedded scripts and styles and generally reduce the code of the HTML page comparing its amount with the amount of text.',
    schema: ['A1', 'A5', 'B', 'C1']
  },
  {
    descr: 'The page does not have keywords',
    level: 2,
    activities: [],
    coderr: 'META_KEYWORDS_NOTPRESENT',
    name: 'Missing Keywords',
    id: 'META_KEYWORDS_NOTPRESENT',
    howtofix: null,
    schema: ['A1', 'A5', 'B']
  },
  {
    descr: 'Hreflang url has not been crawled',
    level: 2,
    activities: ['0196e211-93b1-41ae-8447-d67e60b4289a'],
    coderr: 'HREFLANG_URLNOTPRESENT',
    name: 'Hreflang Url Not Present',
    id: 'HREFLANG_URLNOTPRESENT',
    howtofix: null,
    schema: ['B']
  },
  {
    descr: 'Page links to a hreflang that causes a 4xx error',
    level: 0,
    activities: [],
    coderr: 'HREFLANG_LINK_HTTP_4XX_RESPONSE',
    name: 'Hreflang Link Causes 4xx',
    id: 'HREFLANG_LINK_HTTP_4XX_RESPONSE',
    howtofix:
      'The web page is not accessibile and an error 4XX is returned. User experience as well as search engines crawlers are negatively affected. This is due to broken links or working links to which access is blocked to crawlers (e.g. DDos protection in force, “disallow” entries in robots.txt, bad server configuration). - You should remove links with errors or replace them with other pages. You should contact your IT support team in case it is a working link and the access is denied to crawlers or consider introducing the directive “crawl-delay” in your robots.txt file to be crawled less often.',
    schema: ['B', 'C2']
  },
  {
    descr: 'Http home page does not redir to https',
    level: 0,
    activities: [],
    coderr: 'SITE_NOHTTPSREDIR',
    name: 'No Https Redir',
    id: 'SITE_NOHTTPSREDIR',
    howtofix: null,
    schema: ['B']
  },
  {
    descr: '(PM) Alias Error',
    level: 0,
    activities: [],
    coderr: 'PM_ALIAS_ERROR',
    name: '(PM) Alias Error',
    id: 'PM_ALIAS_ERROR',
    howtofix: null,
    schema: []
  },
  {
    descr: 'Image causes a redirect chain',
    level: 1,
    activities: [],
    coderr: 'IMG_URL_REDIRECTCHAIN',
    name: 'Image Causes Redirect Chain',
    id: 'IMG_URL_REDIRECTCHAIN',
    howtofix:
      'Ranking, user experience as well as SEO are all badly affected by loops or chains of redirections because they make it difficult to web crawlers to navigate the site and offer a bad user experience to final users of the website It can happen that this issue is reported by crawlers and not by browsers, which does not mean that the problem does not exist. - Redirects in a chain should be limited to three. To avoid 404 errors instead of deleting existing URLs in chains, you should point each URL in the chain to the final destination page to fix the problem.',
    schema: ['B']
  },
  {
    descr: 'The page has link with redirect',
    level: 1,
    activities: [],
    coderr: 'PAGELINK_URL_HOP',
    name: 'Redirected Links',
    id: 'PAGELINK_URL_HOP',
    howtofix: null,
    schema: ['B']
  },
  {
    descr: 'Indexable yes',
    level: 10,
    activities: [],
    coderr: 'INDEXABLE_YES',
    name: 'Indexable Yes',
    id: 'INDEXABLE_YES',
    howtofix: null,
    schema: []
  },
  {
    descr: 'This page has both noindex and follow directives',
    level: 2,
    activities: [],
    coderr: 'PAGE_NOINDEXBUTFOLLOW',
    name: 'Noindex But Follow',
    id: 'PAGE_NOINDEXBUTFOLLOW',
    category: ['crawlability'],
    howtofix: null,
    schema: ['A1', 'A5', 'B']
  },
  {
    descr: 'Questa url dichiara un contenuto mime diverso da html/css/js/image/pdf',
    level: 9,
    activities: [],
    coderr: 'MIME_OTHER',
    name: 'Mime Other',
    id: 'MIME_OTHER',
    howtofix: null,
    schema: []
  },
  {
    descr: 'Indexable all',
    level: 10,
    activities: [],
    coderr: 'INDEXABLE_ALL',
    name: 'Indexable All',
    id: 'INDEXABLE_ALL',
    howtofix: null,
    schema: []
  },
  {
    descr: 'This page canonical causes a redirect loop',
    level: 0,
    activities: [],
    coderr: 'CANONLINK_REDIRLOOP',
    name: 'Canonical Redirect Loop',
    id: 'CANONLINK_REDIRLOOP',
    howtofix:
      'Ranking, user experience as well as SEO are all badly affected by loops or chains of redirections because they make it difficult to web crawlers to navigate the site and offer a bad user experience to final users of the website It can happen that this issue is reported by crawlers and not by browsers, which does not mean that the problem does not exist. - Redirects in a chain should be limited.',
    schema: ['A1', 'B']
  },
  {
    descr: 'This resource responded with 301 http code',
    level: 2,
    activities: [],
    coderr: 'HTTP_301',
    name: '301 Response',
    id: 'HTTP_301',
    category: ['crawlability'],
    howtofix: null,
    schema: ['B']
  },
  {
    descr: 'The page has noodp directive',
    level: 9,
    activities: [],
    coderr: 'META_DIRECTIVES_NOODP',
    name: 'Noodp Directive',
    id: 'META_DIRECTIVES_NOODP',
    howtofix: null,
    schema: []
  },
  {
    descr: 'Page indexing blocked by html directive',
    level: 9,
    activities: [],
    coderr: 'INDEXABLE_NOHTML',
    name: 'Not Indexable By Html',
    id: 'INDEXABLE_NOHTML',
    category: ['crawlability'],
    howtofix: null,
    schema: []
  },
  {
    descr: 'Resource negated by robots',
    level: 9,
    activities: ['77245bf4-10d2-4b85-a874-cb43945d3de0'],
    coderr: 'ROBOTS_NO',
    name: 'Robots No',
    id: 'ROBOTS_NO',
    category: ['crawlability'],
    howtofix: null,
    schema: []
  },
  {
    descr: 'This resource responded with 406 http code',
    level: 0,
    activities: [],
    coderr: 'HTTP_406',
    name: '406 Response',
    id: 'HTTP_406',
    howtofix: null,
    schema: ['B']
  },
  {
    descr: 'Int res',
    level: 10,
    activities: [],
    coderr: 'INT_RES',
    name: 'Int Res',
    id: 'INT_RES',
    howtofix: null,
    schema: []
  },
  {
    descr: 'Site wrongroot',
    level: 10,
    activities: [],
    coderr: 'SITE_WRONGROOT',
    name: 'Site Wrongroot',
    id: 'SITE_WRONGROOT',
    howtofix: null,
    schema: []
  },
  {
    descr: 'Headers specify nofollow, but meta says follow',
    level: 0,
    activities: [],
    coderr: 'PAGELINK_HEADERNOFOLLOW_METAFOLLOW',
    name: 'Header-meta Follow/nofollow',
    id: 'PAGELINK_HEADERNOFOLLOW_METAFOLLOW',
    category: ['crawlability'],
    howtofix: null,
    schema: ['B']
  },
  {
    descr: 'Questo link utilizza il protocollo http',
    level: 1,
    activities: [],
    coderr: 'PROTO_HTTP',
    name: 'Protocollo Http',
    id: 'PROTO_HTTP',
    howtofix: null,
    schema: ['B']
  },
  {
    descr: 'H2 all',
    level: 10,
    activities: [],
    coderr: 'H2_ALL',
    name: 'H2 All',
    id: 'H2_ALL',
    howtofix: null,
    schema: []
  },
  {
    descr: 'Hreflang with invalid language code',
    level: 1,
    activities: [],
    coderr: 'HREFLANG_ERRORLANGUAGE',
    name: 'Hreflang Language Error',
    id: 'HREFLANG_ERRORLANGUAGE',
    howtofix: null,
    schema: ['B']
  },
  {
    descr: 'Page links to a hreflang that causes a 3xx error',
    level: 0,
    activities: [],
    coderr: 'HREFLANG_LINK_HTTP_3XX_RESPONSE',
    name: 'Hreflang Link Causes Redirect',
    id: 'HREFLANG_LINK_HTTP_3XX_RESPONSE',
    howtofix: null,
    schema: ['B']
  },
  {
    descr: 'Home page does not handle https protocol',
    level: 0,
    activities: [],
    coderr: 'SITE_NOHTTPS',
    name: 'No Https',
    id: 'SITE_NOHTTPS',
    howtofix:
      'Security of a website is a ranking factor and not supporting HTTPS will result in worst ranking. - You should switch to HTTPS.',
    schema: ['B']
  },
  {
    descr: 'Site noslash',
    level: 10,
    activities: [],
    coderr: 'SITE_NOSLASH',
    name: 'Site Noslash',
    id: 'SITE_NOSLASH',
    howtofix: null,
    schema: []
  },
  {
    descr: 'This page has multiple title',
    level: 0,
    activities: [],
    coderr: 'TITLE_MULTIPLE',
    name: 'Multiple Title',
    id: 'TITLE_MULTIPLE',
    howtofix:
      'Duplicate title tags within web pages confuse users and do not tell search engines which is the right one for the current query with a lower chance to be indexed or the risk to be banned. - Titles should be unique and contain relevant keywords.',
    schema: ['B', 'AUTO']
  },
  {
    descr: '(PM) Robots Msnbot',
    level: 0,
    activities: [],
    coderr: 'PM_ROBOTS_MSNBOT',
    name: '(PM) Robots Msnbot',
    id: 'PM_ROBOTS_MSNBOT',
    howtofix: null,
    schema: []
  },
  {
    descr: 'This resource responded with 304 http code',
    level: 2,
    activities: [],
    coderr: 'HTTP_304',
    name: '304 Response',
    id: 'HTTP_304',
    howtofix: null,
    schema: ['B']
  },
  {
    descr: 'The page has links that redirect to home page',
    level: 1,
    activities: [],
    coderr: 'PAGELINK_URL_REDIRHOME',
    name: 'Home Redirected Links',
    id: 'PAGELINK_URL_REDIRHOME',
    howtofix: null,
    schema: ['B']
  },
  {
    descr: 'There are almost identical h1',
    level: 0,
    activities: [],
    coderr: 'H1DUP_SIMILAR',
    name: 'Similar H1',
    id: 'H1DUP_SIMILAR',
    howtofix:
      '<title> and <h1> tags should not have the same content in first-level header, missing the opportunity to use more keywords for that page. - Ensure <title> and >h1> have different content.',
    schema: ['A1', 'A4', 'A5', 'B']
  },
  {
    descr: 'The page has disallowed link with 4xx error',
    level: 1,
    activities: [],
    coderr: 'PAGELINK_URL_HTTP_4XX_DISALLOW',
    name: '4xx Disallowed Links',
    id: 'PAGELINK_URL_HTTP_4XX_DISALLOW',
    howtofix:
      'The web page is not accessibile and an error 4XX is returned. User experience as well as search engines crawlers are negatively affected. This is due to broken links or working links to which access is blocked to crawlers (e.g. DDos protection in force, “disallow” entries in robots.txt, bad server configuration). You should remove links with errors or replace them with other pages. You should contact your IT support team in case it is a working link and the access is denied to crawlers or consider introducing the directive “crawl-delay” in your robots.txt file to be crawled less often.',
    schema: ['B']
  },
  {
    descr: 'The page has noimageindex directive',
    level: 2,
    activities: [],
    coderr: 'META_DIRECTIVES_NOIMAGEINDEX',
    name: 'Noimageindex Directive',
    id: 'META_DIRECTIVES_NOIMAGEINDEX',
    howtofix: null,
    schema: ['A1', 'A5', 'B']
  },
  {
    descr: 'The page has broken iexernal links',
    level: 0,
    activities: [],
    coderr: 'PAGELINK_EXTLINKBROKEN',
    name: 'External Link Broken',
    id: 'PAGELINK_EXTLINKBROKEN',
    howtofix:
      'An error status is returned by a webpage because the page linked does not exist, the URL contains errors or similar. This results in a negative user experience as well as affecting the indexing process leading to a downgrade of the website. A link to which access is blocked to crawlers can be seen as broken by crawlers too. (e.g. DDos protection in force, “disallow” entries in robots.txt, bad server configuration). - You should remove broken links bringing to web pages that issue an error or replace them. You should contact your IT support team in case it is a working link and the access is denied to crawlers or consider introducing the directive “crawl-delay” in your robots.txt file to be crawled less often.',
    schema: ['B']
  },
  {
    descr: 'This resource has no-cache directive',
    level: 9,
    activities: [],
    coderr: 'RES_UNCACHED',
    name: 'Res Uncached',
    id: 'RES_UNCACHED',
    howtofix: null,
    schema: []
  },
  {
    descr: 'Css resource causes a 302 error',
    level: 1,
    activities: [],
    coderr: 'CSS_HTTP_302',
    name: 'Css Resource Causes 302',
    id: 'CSS_HTTP_302',
    howtofix: null,
    schema: ['B']
  },
  {
    descr: 'Canonlink selfurl in pagurl',
    level: 10,
    activities: [],
    coderr: 'CANONLINK_SELFURL_IN_PAGURL',
    name: 'Canonlink Selfurl In Pagurl',
    id: 'CANONLINK_SELFURL_IN_PAGURL',
    howtofix: null,
    schema: []
  },
  {
    descr: 'This paginated page links to a different canonical url',
    level: 9,
    activities: [],
    coderr: 'CANONLINK_CANURL_DIFFURL',
    name: 'Canonical To Different Url',
    id: 'CANONLINK_CANURL_DIFFURL',
    howtofix: null,
    schema: []
  },
  {
    descr: 'This resource responded with 405 http code',
    level: 0,
    activities: [],
    coderr: 'HTTP_405',
    name: '405 Response',
    id: 'HTTP_405',
    howtofix: null,
    schema: ['B']
  },
  {
    descr: 'This resource responded with http wrong code (like 999)',
    level: 2,
    activities: [],
    coderr: 'HTTP_XXX',
    name: 'Xxx Response',
    id: 'HTTP_XXX',
    howtofix: null,
    schema: ['D']
  },
  {
    descr: 'Url all',
    level: 10,
    activities: [],
    coderr: 'URL_ALL',
    name: 'Url All',
    id: 'URL_ALL',
    howtofix: null,
    schema: []
  },
  {
    descr: 'H2dup all',
    level: 10,
    activities: [],
    coderr: 'H2DUP_ALL',
    name: 'H2dup All',
    id: 'H2DUP_ALL',
    howtofix: '',
    schema: []
  },
  {
    descr: "This page doesn't have an h1",
    level: 1,
    activities: [],
    coderr: 'H1_NOTPRESENT',
    name: 'Missing H1',
    id: 'H1_NOTPRESENT',
    howtofix:
      'H1 headings gives search engines the information on the topic of the page and if missing the result can be a lower ranking for that page than expected. - Provide H1 heading for any page.',
    schema: ['B']
  },
  {
    descr: 'Pagedup all',
    level: 10,
    activities: [],
    coderr: 'PAGEDUP_ALL',
    name: 'Pagedup All',
    id: 'PAGEDUP_ALL',
    howtofix: null,
    schema: []
  },
  {
    descr: '(PM) Canonical Multiple',
    level: 0,
    activities: [],
    coderr: 'PM_CANONICAL_MULTIPLE',
    name: '(PM) Canonical Multiple',
    id: 'PM_CANONICAL_MULTIPLE',
    howtofix: null,
    schema: []
  },
  {
    descr: 'Meta keywords all',
    level: 10,
    activities: [],
    coderr: 'META_KEYWORDS_ALL',
    name: 'Meta Keywords All',
    id: 'META_KEYWORDS_ALL',
    howtofix: null,
    schema: []
  },
  {
    descr: 'The page has an empty list of keywords',
    level: 2,
    activities: [],
    coderr: 'META_KEYWORDS_VOID',
    name: 'Empty Keywords',
    id: 'META_KEYWORDS_VOID',
    howtofix: null,
    schema: ['A1', 'A5', 'B']
  },
  {
    descr: 'This page is missing almost one of the requested snippets',
    level: 1,
    activities: [],
    coderr: 'PAGE_MISSING_SNIPPET',
    name: 'Missing Snippet',
    id: 'PAGE_MISSING_SNIPPET',
    howtofix: null,
    schema: []
  },
  {
    descr: 'Page link to multiple favicon',
    level: 2,
    activities: [],
    coderr: 'PAGE_FAVICON_MULTIPLE',
    name: 'Multiple Favicon',
    id: 'PAGE_FAVICON_MULTIPLE',
    howtofix: null,
    schema: ['B']
  },
  {
    descr: 'There are duplicate h2',
    level: 1,
    activities: [],
    coderr: 'H2DUP_DUPLICATE',
    name: 'Duplicate H2',
    id: 'H2DUP_DUPLICATE',
    howtofix: '',
    schema: ['NOT AN ERROR']
  },
  {
    descr: 'H2 is longer than 70 characters',
    level: 1,
    activities: [],
    coderr: 'H2_OVER70',
    name: 'H2 Over 70',
    id: 'H2_OVER70',
    howtofix: null,
    schema: ['NOT AN ERROR']
  },
  {
    descr: '(PM) Title Multiple',
    level: 0,
    activities: [],
    coderr: 'PM_TITLE_MULTIPLE',
    name: '(PM) Title Multiple',
    id: 'PM_TITLE_MULTIPLE',
    howtofix: null,
    schema: []
  },
  {
    descr: '(PM) Robots Bing',
    level: 0,
    activities: [],
    coderr: 'PM_ROBOTS_BING',
    name: '(PM) Robots Bing',
    id: 'PM_ROBOTS_BING',
    howtofix: null,
    schema: []
  },
  {
    descr: "This page doesn't have an h2",
    level: 2,
    activities: ['01e43d4e-1f39-457c-8c96-ddb06ae9c704'],
    coderr: 'H2_NOTPRESENT',
    name: 'Missing H2',
    id: 'H2_NOTPRESENT',
    howtofix: null,
    schema: ['B']
  },
  {
    descr: 'Js resource causes a 4xx error',
    level: 0,
    activities: [],
    coderr: 'JS_HTTP_4XX',
    name: 'Js Resource Causes 4xx',
    id: 'JS_HTTP_4XX',
    howtofix: null,
    schema: ['B']
  },
  {
    descr: 'This page has an image with malformed src',
    level: 1,
    activities: [],
    coderr: 'IMG_MALFORMEDURL',
    name: 'Image With Malformed Src',
    id: 'IMG_MALFORMEDURL',
    howtofix: null,
    schema: ['A8', 'B']
  },
  {
    descr: 'This image alternate text is emptyl',
    level: 1,
    activities: ['345c55f3-4d0a-4778-8d7c-b3ce245cc61c'],
    coderr: 'IMG_EMPTY_ALT',
    name: 'Image Alt Empty',
    id: 'IMG_EMPTY_ALT',
    howtofix:
      'Alt attributes for images <img> help visually impaired users and give search engines information on your images so that they will appear in better positions in image search results. - <img> tag should have a meaningful alternative attribute for any image of the website.',
    schema: ['B']
  },
  {
    descr: 'The page has multiple metarobots tags',
    level: 1,
    activities: [],
    coderr: 'PAGELINK_METAROBOTSMULTIPLE',
    name: 'Multiple Meta Robots Tags',
    id: 'PAGELINK_METAROBOTSMULTIPLE',
    category: ['crawlability'],
    howtofix: null,
    schema: ['B', 'AUTO']
  },
  {
    descr: 'Js resource causes a 5xx error',
    level: 0,
    activities: [],
    coderr: 'JS_HTTP_5XX',
    name: 'Js Resource Causes 5xx',
    id: 'JS_HTTP_5XX',
    howtofix:
      'Users as well as search engines can not access pages of the web site resulting in a drop in organic traffic to the site. You should fix these issues.',
    schema: ['B']
  },
  {
    descr: 'Page has a js resource src that causes a redirect',
    level: 2,
    activities: [],
    coderr: 'JS_LINK_HOP',
    name: 'Js Resource Src Causes Redirect',
    id: 'JS_LINK_HOP',
    howtofix: null,
    schema: ['B']
  },
  {
    descr: 'The page has notranslate directive',
    level: 9,
    activities: [],
    coderr: 'META_DIRECTIVES_NOTRANSLATE',
    name: 'Notranslate Directive',
    id: 'META_DIRECTIVES_NOTRANSLATE',
    howtofix: null,
    schema: []
  },
  {
    descr: 'This resource responded with 415 http code',
    level: 0,
    activities: [],
    coderr: 'HTTP_415',
    name: '415 Response',
    id: 'HTTP_415',
    howtofix: null,
    schema: ['B']
  },
  {
    descr: 'H1 ok',
    level: 10,
    activities: [],
    coderr: 'H1_OK',
    name: 'H1 Ok',
    id: 'H1_OK',
    howtofix: null,
    schema: []
  },
  {
    descr: '(PM) Title Missing',
    level: 0,
    activities: [],
    coderr: 'PM_TITLE_MISSING',
    name: '(PM) Title Missing',
    id: 'PM_TITLE_MISSING',
    howtofix: null,
    schema: []
  },
  {
    descr: 'Js causes a redirect chain',
    level: 2,
    activities: [],
    coderr: 'JS_REDIRCHAIN',
    name: 'Js Causes Redirect Chain',
    id: 'JS_REDIRCHAIN',
    howtofix: null,
    schema: ['B']
  },
  {
    descr: 'The page has disallowed broken internal links',
    level: 1,
    activities: [],
    coderr: 'PAGELINK_INTLINKBROKEN_DISALLOW',
    name: 'Disallowed Internal Link Broken',
    id: 'PAGELINK_INTLINKBROKEN_DISALLOW',
    howtofix: null,
    schema: ['B']
  },
  {
    descr: 'Page indexing blocked by headers directive',
    level: 9,
    activities: [],
    coderr: 'INDEXABLE_NOHEADERS',
    name: 'Not Indexable By Headers',
    id: 'INDEXABLE_NOHEADERS',
    howtofix:
      'x-robots-tag is used as HTTP header to tell search engines if a page can be crawled and indexed. The tag supports the same directives as a regular meta robots tag and can be used to control the crawling of non-HTML files. A page blocked from crawling with x-robots-tag will not appear in results. - Be sure not to have valuable pages blocked from crawling by mistake.',
    schema: []
  },
  {
    descr: 'Css resource causes a 403 error',
    level: 0,
    activities: [],
    coderr: 'CSS_HTTP_403',
    name: 'Css Resource Causes 403',
    id: 'CSS_HTTP_403',
    howtofix: null,
    schema: ['A6', 'B']
  },
  {
    descr: 'Page next links to broken url',
    level: 0,
    activities: [],
    coderr: 'URLPAG_NEXTBROKEN',
    name: 'Next Broken',
    id: 'URLPAG_NEXTBROKEN',
    howtofix:
      'An error status is returned by a webpage because the page linked does not exist, the URL contains errors or similar. This results in a negative user experience as well as affecting the indexing process leading to a downgrade of the website. A link to which access is blocked to crawlers can be seen as broken by crawlers too. (e.g. DDos protection in force, “disallow” entries in robots.txt, bad server configuration). - You should remove broken links bringing to web pages that issue an error or replace them. You should contact your IT support team in case it is a working link and the access is denied to crawlers or consider introducing the directive “crawl-delay” in your robots.txt file to be crawled less often.',
    schema: ['B']
  },
  {
    descr: 'The page does not have noindex directive',
    level: 9,
    activities: [],
    coderr: 'META_DIRECTIVES_INDEX',
    name: 'Index Directive',
    id: 'META_DIRECTIVES_INDEX',
    category: ['crawlability'],
    howtofix: null,
    schema: []
  },
  {
    descr: 'Css resource causes a 5xx error',
    level: 0,
    activities: [],
    coderr: 'CSS_HTTP_5xx',
    name: 'Css Resource Causes 5xx',
    id: 'CSS_HTTP_5xx',
    howtofix:
      'Users as well as search engines can not access pages of the website resulting in a drop in organic traffic to the site. - You should fix these issues.',
    schema: ['A6', 'B']
  },
  {
    descr: 'Site nohttp',
    level: 10,
    activities: [],
    coderr: 'SITE_NOHTTP',
    name: 'Site Nohttp',
    id: 'SITE_NOHTTP',
    howtofix: null,
    schema: []
  },
  {
    descr: 'Google analytics not present,',
    level: 9,
    activities: [],
    coderr: 'PAGE_MISSING_GOOGLEANALYTICS',
    name: 'Missing Google Analytics',
    id: 'PAGE_MISSING_GOOGLEANALYTICS',
    howtofix: null,
    schema: []
  },
  {
    descr: 'The page has disallowed links that do a redirect loop',
    level: 1,
    activities: [],
    coderr: 'PAGELINK_URL_REDIRLOOP_DISALLOW',
    name: 'Disallowed Redirected Loop Links',
    id: 'PAGELINK_URL_REDIRLOOP_DISALLOW',
    howtofix:
      'Ranking, user experience as well as SEO are all badly affected by loops or chains of redirections because they make it difficult to web crawlers to navigate the site and offer a bad user experience to final users of the website It can happen that this issue is reported by crawlers and not by browsers, which does not mean that the problem does not exist. - Redirects in a chain should be limited.',
    schema: ['B']
  },
  {
    descr: 'Urls should not contain uppercase characters',
    level: 1,
    activities: [],
    coderr: 'URL_WITH_UPPERCASE',
    name: 'Url With Uppercase',
    id: 'URL_WITH_UPPERCASE',
    howtofix: null,
    schema: ['A1', 'A4', 'A5', 'B']
  },
  {
    descr: 'This page calls more than 6 css',
    level: 1,
    activities: [],
    coderr: 'CSS_TOOMANY',
    name: 'Too Many Css',
    id: 'CSS_TOOMANY',
    howtofix: null,
    schema: ['B']
  },
  {
    descr: 'Page takes too long to load',
    level: 0,
    activities: ['69c51dfd-5fca-4f08-aecb-bcd66b9a5e5d'],
    coderr: 'PAGE_SLOW',
    name: 'Page Slow',
    id: 'PAGE_SLOW',
    howtofix: null,
    schema: ['B', 'C1']
  },
  {
    descr: 'The page has links that do a redirect loop',
    level: 0,
    activities: [],
    coderr: 'PAGELINK_URL_REDIRLOOP',
    name: 'Redirected Loop Links',
    id: 'PAGELINK_URL_REDIRLOOP',
    howtofix:
      'Ranking, user experience as well as SEO are all badly affected by loops or chains of redirections because they make it difficult to web crawlers to navigate the site and offer a bad user experience to final users of the website It can happen that this issue is reported by crawlers and not by browsers, which does not mean that the problem does not exist. - Redirects in a chain should be limited.',
    schema: ['B']
  },
  {
    descr: 'Resource present in sitemap',
    level: 9,
    activities: [],
    coderr: 'INSITEMAP_YES',
    name: 'Resource In Sitemap',
    id: 'INSITEMAP_YES',
    category: ['crawlability'],
    howtofix: null,
    schema: []
  },
  {
    descr: 'This resource responded with 1xx http code',
    level: 2,
    activities: [],
    coderr: 'HTTP_1XX',
    name: '1xx Response',
    id: 'HTTP_1XX',
    howtofix: null,
    schema: ['D']
  },
  {
    descr: 'This resource responded with 500 http code',
    level: 0,
    activities: [],
    coderr: 'HTTP_500',
    name: '500 Response',
    id: 'HTTP_500',
    howtofix: null,
    schema: ['B']
  },
  {
    descr: '(PM) Alias Duplicate',
    level: 0,
    activities: [],
    coderr: 'PM_ALIAS_DUPLICATE',
    name: '(PM) Alias Duplicate',
    id: 'PM_ALIAS_DUPLICATE',
    howtofix: null,
    schema: []
  },
  {
    descr: 'Css resource causes a 301 error',
    level: 2,
    activities: [],
    coderr: 'CSS_HTTP_301',
    name: 'Css Resource Causes 301',
    id: 'CSS_HTTP_301',
    howtofix: null,
    schema: ['B']
  },
  {
    descr: 'This page has multiple hreflang with same link',
    level: 1,
    activities: [],
    coderr: 'HREFLANG_MULTIPLEURL',
    name: 'Hreflang Duplicated Link',
    id: 'HREFLANG_MULTIPLEURL',
    howtofix: null,
    schema: ['B']
  },
  {
    descr: 'There are duplicate h1',
    level: 0,
    activities: [],
    coderr: 'H1DUP_DUPLICATE',
    name: 'Duplicate H1',
    id: 'H1DUP_DUPLICATE',
    howtofix:
      '<title> and <h1> tags should not have the same content in first-level header, missing the opportunity to use more keywords for that page. - Ensure <title> and >h1> have different content.',
    schema: ['B']
  },
  {
    descr: 'Page has a js resource src that causes a 3xx redirect loop',
    level: 0,
    activities: [],
    coderr: 'JS_LINK_REDIRLOOP',
    name: 'Js Resource Src Causes Redirect Loop',
    id: 'JS_LINK_REDIRLOOP',
    howtofix:
      'Ranking, user experience as well as SEO are all badly affected by loops or chains of redirections because they make it difficult to web crawlers to navigate the site and offer a bad user experience to final users of the website It can happen that this issue is reported by crawlers and not by browsers, which does not mean that the problem does not exist. - Redirects in a chain should be limited.',
    schema: ['B']
  },
  {
    descr: '(PM) Amp Warn',
    level: 1,
    activities: ['b4dc414f-214a-448b-a590-790fe1d0a157'],
    coderr: 'PM_AMP_WARN',
    name: '(PM) Amp Warn',
    id: 'PM_AMP_WARN',
    howtofix: null,
    schema: []
  },
  {
    descr: 'This resource responded with 403 http code',
    level: 0,
    activities: [],
    coderr: 'HTTP_403',
    name: '403 Response',
    id: 'HTTP_403',
    howtofix: null,
    schema: ['B']
  },
  {
    descr: 'The page has noarchive directive',
    level: 9,
    activities: [],
    coderr: 'META_DIRECTIVES_NOARCHIVE',
    name: 'Noarchive Directive',
    id: 'META_DIRECTIVES_NOARCHIVE',
    howtofix: null,
    schema: []
  },
  {
    descr: 'Am pog',
    level: 10,
    activities: [],
    coderr: 'AM_POG',
    name: 'Am Pog',
    id: 'AM_POG',
    howtofix: null,
    schema: []
  },
  {
    descr: 'This page is paginated',
    level: 9,
    activities: [],
    coderr: 'URLPAG_PRESENT',
    name: 'Page Present',
    id: 'URLPAG_PRESENT',
    howtofix: null,
    schema: []
  },
  {
    descr: 'Pagelink all',
    level: 10,
    activities: [],
    coderr: 'PAGELINK_ALL',
    name: 'Pagelink All',
    id: 'PAGELINK_ALL',
    howtofix: null,
    schema: []
  },
  {
    descr: "Page doesn't link to favicon",
    level: 2,
    activities: [],
    coderr: 'PAGE_FAVICON_MISSING',
    name: 'Missing Favicon',
    id: 'PAGE_FAVICON_MISSING',
    howtofix: null,
    schema: ['B']
  },
  {
    descr: 'This url is longer than 115 chars',
    level: 1,
    activities: [],
    coderr: 'URL_OVER_115_CHARS',
    name: 'Url Over 115 Chars',
    id: 'URL_OVER_115_CHARS',
    howtofix: null,
    schema: ['A1', 'A4', 'A5', 'B']
  },
  {
    descr: 'The page has empty links',
    level: 0,
    activities: [],
    coderr: 'PAGELINK_LINK_VOID',
    name: 'Link Empty',
    id: 'PAGELINK_LINK_VOID',
    howtofix: null,
    schema: ['B']
  },
  {
    descr: 'Questo link utilizza un protocollo diverso da http(s)',
    level: 2,
    activities: [],
    coderr: 'PROTO_OTHER',
    name: 'Protocollo Non Http(s)',
    id: 'PROTO_OTHER',
    howtofix: null,
    schema: ['B']
  },
  {
    descr: 'This page canonical links to home',
    level: 0,
    activities: [],
    coderr: 'CANONLINK_SELFCANONICAL',
    name: 'Canonical Links To Home',
    id: 'CANONLINK_SELFCANONICAL',
    howtofix: null,
    schema: ['NOT AN ERROR']
  },
  {
    descr: 'Am pso',
    level: 10,
    activities: [],
    coderr: 'AM_PSO',
    name: 'Am Pso',
    id: 'AM_PSO',
    howtofix: null,
    schema: []
  },
  {
    descr: 'This css resource causes a redirect to home',
    level: 0,
    activities: [],
    coderr: 'CSS_REDIRECTHOME',
    name: 'Css Resource Causes Redirect To Home',
    id: 'CSS_REDIRECTHOME',
    howtofix: null,
    schema: ['B']
  },
  {
    descr: 'The page has unavailableafter directive',
    level: 2,
    activities: [],
    coderr: 'META_DIRECTIVES_UNAVAILABLEAFTER',
    name: 'Unavailableafter Directive',
    id: 'META_DIRECTIVES_UNAVAILABLEAFTER',
    howtofix: null,
    schema: ['A1', 'A5', 'B']
  },
  {
    descr: 'Meta descr ok',
    level: 10,
    activities: [],
    coderr: 'META_DESCR_OK',
    name: 'Meta Descr Ok',
    id: 'META_DESCR_OK',
    howtofix: null,
    schema: []
  },
  {
    descr: 'Am mnp',
    level: 10,
    activities: [],
    coderr: 'AM_MNP',
    name: 'Am Mnp',
    id: 'AM_MNP',
    howtofix: 'No need to Fix',
    schema: []
  },
  {
    descr: 'This page has an image with empty src',
    level: 1,
    activities: [],
    coderr: 'IMG_LINKVOID',
    name: 'Image With Empty Src',
    id: 'IMG_LINKVOID',
    howtofix: null,
    schema: ['B']
  },
  {
    descr: 'Questa url dichiara un contenuto mime application/pdf',
    level: 9,
    activities: [],
    coderr: 'MIME_PDF',
    name: 'Mime Pdf',
    id: 'MIME_PDF',
    howtofix: null,
    schema: []
  },
  {
    descr: 'Img all',
    level: 10,
    activities: [],
    coderr: 'IMG_ALL',
    name: 'Img All',
    id: 'IMG_ALL',
    howtofix: null,
    schema: []
  },
  {
    descr: 'Viewport tag not present,',
    level: 1,
    activities: [],
    coderr: 'PAGE_MISSING_VIEPORT_TAG',
    name: 'Missing Viewport Tag',
    id: 'PAGE_MISSING_VIEPORT_TAG',
    howtofix: null,
    schema: ['B']
  },
  {
    descr: 'Css resources causes a link error',
    level: 0,
    activities: [],
    coderr: 'CSS_LINKBROKEN',
    name: 'Css Resource Causes A Link Error',
    id: 'CSS_LINKBROKEN',
    howtofix:
      'Users as well as search engines can not access pages of the web site resulting in a drop in organic traffic to the site. - You should fix these issues.',
    schema: ['A6', 'B']
  },
  {
    descr: 'Meta keywords ok',
    level: 10,
    activities: [],
    coderr: 'META_KEYWORDS_OK',
    name: 'Meta Keywords Ok',
    id: 'META_KEYWORDS_OK',
    howtofix: null,
    schema: []
  },
  {
    descr: 'The page has link with 5xx errors',
    level: 0,
    activities: [],
    coderr: 'PAGELINK_URL_HTTP_5XX',
    name: '5xx Links',
    id: 'PAGELINK_URL_HTTP_5XX',
    howtofix:
      'Users as well as search engines can not access pages of the web site resulting in a drop in organic traffic to the site. - You should fix these issues.',
    schema: ['B']
  },
  {
    descr: '(PM) Sitemap Format',
    level: 0,
    activities: [],
    coderr: 'PM_SITEMAP_FORMAT',
    name: '(PM) Sitemap Format',
    id: 'PM_SITEMAP_FORMAT',
    howtofix: null,
    schema: []
  },
  {
    descr: 'This resource is not served with gzip/deflate/... option',
    level: 1,
    activities: [],
    coderr: 'RES_NOTCOMPRESSED',
    name: 'Resource Not Compressed',
    id: 'RES_NOTCOMPRESSED',
    howtofix: null,
    schema: ['B']
  },
  {
    descr: 'Image causes a redirect to home',
    level: 0,
    activities: [],
    coderr: 'IMG_URL_REDIRECTHOME',
    name: 'Image Causes Redirect To Home',
    id: 'IMG_URL_REDIRECTHOME',
    howtofix: null,
    schema: ['B']
  },
  {
    descr: 'Title is empty',
    level: 0,
    activities: [],
    coderr: 'TITLE_VOID',
    name: 'Title Empty',
    id: 'TITLE_VOID',
    howtofix:
      'Title tags improve user experience appearing in search results pages but also help search engines know the content of the web page and are extremely relevant to SEO. - A title with the most relevant keywords and not too long is the best way to reach a higher rank in results pages.',
    schema: ['A1', 'A2', 'A5', 'B']
  },
  {
    descr: 'This page canonical causes a 4xx error',
    level: 0,
    activities: [],
    coderr: 'CANONLINK_URL_HTTP_4XX',
    name: 'Canonical 4xx Error',
    id: 'CANONLINK_URL_HTTP_4XX',
    howtofix:
      'The use of rel=âcanonicalâ should avoid to point to non-existent pages. The use of this tag is useful to indicate to crawlers which version of the page you want to appear in search results. - Check all pages with broken rel=âcanonicalâ tag and ensure all point to existing pages.',
    schema: ['A1', 'A8', 'B']
  },
  {
    descr: 'Page links to a css resource that causes a redirect loop',
    level: 0,
    activities: [],
    coderr: 'CSS_LINK_RL',
    name: 'Css Resource Link Causes Redirect Loop',
    id: 'CSS_LINK_RL',
    howtofix:
      'Ranking, user experience as well as SEO are all badly affected by loops or chains of redirections because they make it difficult to web crawlers to navigate the site and offer a bad user experience to final users of the website It can happen that this issue is reported by crawlers and not by browsers, which does not mean that the problem does not exist. - Redirects in a chain should be limited.',
    schema: ['A8', 'B']
  },
  {
    descr: 'This page canonical has an empty url',
    level: 1,
    activities: [],
    coderr: 'CANONLINK_VOID',
    name: 'Canonical With Empty Url',
    id: 'CANONLINK_VOID',
    howtofix: null,
    schema: ['B']
  },
  {
    descr: 'Page links to a css resource that causes a 3xx error',
    level: 2,
    activities: [],
    coderr: 'CSS_LINK_R',
    name: 'Css Resource Link Causes Redirect',
    id: 'CSS_LINK_R',
    howtofix: null,
    schema: ['A8', 'B']
  },
  {
    descr: 'This resource responded with 3xx http code',
    level: 2,
    activities: [],
    coderr: 'HTTP_3XX',
    name: '3xx Response',
    id: 'HTTP_3XX',
    howtofix: null,
    schema: ['B']
  },
  {
    descr: 'Css resource causes a 503 error',
    level: 1,
    activities: [],
    coderr: 'CSS_HTTP_503',
    name: 'Css Resource Causes 503',
    id: 'CSS_HTTP_503',
    howtofix:
      'Broken JavaScript or CSS affects how the site is rendered and indexed because search engines will not know what to do. This also affects user experience as well. You should fix broken JavaScript or CSS issues.',
    schema: ['A6', 'B']
  },
  {
    descr: 'Page has a js src that causes a redirect',
    level: 2,
    activities: [],
    coderr: 'JS_REDIRECT',
    name: 'Js Src Causes Redirect',
    id: 'JS_REDIRECT',
    howtofix: null,
    schema: ['A8', 'B']
  },
  {
    descr: '(PM) Title Location',
    level: 0,
    activities: [],
    coderr: 'PM_TITLE_LOCATION',
    name: '(PM) Title Location',
    id: 'PM_TITLE_LOCATION',
    howtofix: null,
    schema: []
  },
  {
    descr: 'Page 1 should not have page number parameter',
    level: 1,
    activities: [],
    coderr: 'URLPAG_ERROR',
    name: 'Pagination Error',
    id: 'URLPAG_ERROR',
    howtofix: null,
    schema: ['B']
  },
  {
    descr: "This page's h1 is different from url",
    level: 2,
    activities: [],
    coderr: 'H1_NOT_EQUAL_URL',
    name: 'H1 Not Equal Url',
    id: 'H1_NOT_EQUAL_URL',
    howtofix: null,
    schema: ['A1', 'A4', 'A5', 'B']
  },
  {
    descr: 'Questa url dichiara un contenuto mime js',
    level: 9,
    activities: [],
    coderr: 'MIME_JS',
    name: 'Mime Js',
    id: 'MIME_JS',
    howtofix: null,
    schema: []
  },
  {
    descr: 'The page has noindex directive',
    level: 9,
    activities: [],
    coderr: 'META_DIRECTIVES_NOINDEX',
    name: 'Noindex Directive',
    id: 'META_DIRECTIVES_NOINDEX',
    category: ['crawlability'],
    howtofix: null,
    schema: []
  },
  {
    descr: '(PM) Title Empty',
    level: 0,
    activities: [],
    coderr: 'PM_TITLE_EMPTY',
    name: '(PM) Title Empty',
    id: 'PM_TITLE_EMPTY',
    howtofix: null,
    schema: []
  },
  {
    descr: 'This page canonical causes a redirect chain',
    level: 0,
    activities: [],
    coderr: 'CANONLINK_REDIRCHAIN',
    name: 'Canonical Redirect Chain',
    id: 'CANONLINK_REDIRCHAIN',
    howtofix:
      'Ranking, user experience as well as SEO are all badly affected by loops or chains of redirections because they make it difficult to web crawlers to navigate the site and offer a bad user experience to final users of the website It can happen that this issue is reported by crawlers and not by browsers, which does not mean that the problem does not exist. - Redirects in a chain should be limited. To avoid 404 errors instead of deleting existing URLs in chains you should point each URL in the chain to the final destination page to fix the problem.',
    schema: ['A1', 'B']
  },
  {
    descr: 'This page is an amp resource',
    level: 9,
    activities: [],
    coderr: 'PAGE_ISAMP',
    name: 'Is Amp',
    id: 'PAGE_ISAMP',
    howtofix: null,
    schema: []
  },
  {
    descr: 'Missing hreflang',
    level: 2,
    activities: [],
    coderr: 'HREFLANG_NOTPRESENT',
    name: 'Missing Hreflang',
    id: 'HREFLANG_NOTPRESENT',
    howtofix:
      'Missing lang and hreflang attributes for multilingual websites does not tell search engines which pages should be shown to users based on their location and missing lang attribute does not declare the language of the pages that could not appear in search results or be badly displayed. - You should add lang attribute to <html> tag and hreflang attribute to page’s <head> tag.',
    schema: ['B']
  },
  {
    descr: 'Page links to a iframe that causes a 4xx error',
    level: 0,
    activities: [],
    coderr: 'IFRAME_LINK_HTTP_5xx',
    name: 'Iframe Link Causes 5xx',
    id: 'IFRAME_LINK_HTTP_5xx',
    howtofix:
      'Users as well as search engines can not access pages of the web site resulting in a drop in organic traffic to the site. - You should fix these issues.',
    schema: ['B']
  },
  {
    descr: '(PM) Title Length',
    level: 1,
    activities: [],
    coderr: 'PM_TITLE_LENGTH',
    name: '(PM) Title Length',
    id: 'PM_TITLE_LENGTH',
    howtofix: null,
    schema: []
  },
  {
    descr: 'This page canonical causes a 5xx error',
    level: 0,
    activities: [],
    coderr: 'CANONLINK_URL_HTTP_5XX',
    name: 'Canonical 5xx Error',
    id: 'CANONLINK_URL_HTTP_5XX',
    howtofix:
      'Users as well as search engines can not access pages of the web site resulting in a drop in organic traffic to the site. You should fix these issues.',
    schema: ['A1', 'B']
  },
  {
    descr: '(PM) Robots Msnbotmedia',
    level: 0,
    activities: [],
    coderr: 'PM_ROBOTS_MSNBOTMEDIA',
    name: '(PM) Robots Msnbotmedia',
    id: 'PM_ROBOTS_MSNBOTMEDIA',
    howtofix: null,
    schema: []
  },
  {
    descr: 'This resources has no response. It might be due to a server error or a security block.',
    level: 0,
    activities: [],
    coderr: 'HTTP_NO',
    name: 'No Response',
    id: 'HTTP_NO',
    howtofix: null,
    schema: ['B']
  },
  {
    descr: 'Css resource causes a 502 error',
    level: 0,
    activities: [],
    coderr: 'CSS_HTTP_502',
    name: 'Css Resource Causes 502',
    id: 'CSS_HTTP_502',
    howtofix:
      'This kind of error refers to the server being unable to respond to a client request. Whatever the reason, this will result in a loss of traffic and poor user experience. - You should fix this issue.',
    schema: ['A6', 'B']
  },
  {
    descr: 'Hreflang causes a link error',
    level: 0,
    activities: [],
    coderr: 'HREFLANG_LINKBROKEN',
    name: 'Hreflang Causes A Link Error',
    id: 'HREFLANG_LINKBROKEN',
    howtofix: null,
    schema: ['B']
  },
  {
    descr: 'Page all',
    level: 10,
    activities: [],
    coderr: 'PAGE_ALL',
    name: 'Page All',
    id: 'PAGE_ALL',
    howtofix: null,
    schema: []
  },
  {
    descr: 'This page has an iframe with empty url',
    level: 1,
    activities: [],
    coderr: 'IFRAME_V',
    name: 'Iframe With Empty Url',
    id: 'IFRAME_V',
    howtofix: null,
    schema: ['B']
  },
  {
    descr: '(PM) Amp Error',
    level: 0,
    activities: ['faf54772-36ce-450d-8260-a9dd44410e54'],
    coderr: 'PM_AMP_ERROR',
    name: '(PM) Amp Error',
    id: 'PM_AMP_ERROR',
    howtofix: null,
    schema: []
  },
  {
    descr: 'This page has an image with src link broken',
    level: 1,
    activities: [],
    coderr: 'IMG_LINK_BROKEN',
    name: 'Image With Broken Src',
    id: 'IMG_LINK_BROKEN',
    howtofix:
      'An image that cannot be displayed generates a bad user experience as well as telling search engines that it is a poor quality web page. Reasons for this can vary from a missing image to an error in the path or similar. - You should correct broken images.',
    schema: ['A6', 'B']
  },
  {
    descr: 'Site notwwwredir',
    level: 10,
    activities: [],
    coderr: 'SITE_NOTWWWREDIR',
    name: 'Site Notwwwredir',
    id: 'SITE_NOTWWWREDIR',
    howtofix: null,
    schema: []
  },
  {
    descr: 'Canonlink all',
    level: 10,
    activities: [],
    coderr: 'CANONLINK_ALL',
    name: 'Canonlink All',
    id: 'CANONLINK_ALL',
    howtofix: null,
    schema: []
  },
  {
    descr: 'The page has disallowed link with redirect',
    level: 9,
    activities: [],
    coderr: 'PAGELINK_URL_HOP_DISALLOW',
    name: 'Redirected Disallowed Links',
    id: 'PAGELINK_URL_HOP_DISALLOW',
    howtofix: null,
    schema: []
  },
  {
    descr: 'This page duplicates his canonical',
    level: 0,
    activities: [],
    coderr: 'PAGEDUP_DUPLICATE_CANONICAL',
    name: 'Duplicate Canonical',
    id: 'PAGEDUP_DUPLICATE_CANONICAL',
    howtofix: null,
    schema: ['B']
  },
  {
    descr: 'Image causes a redirect loop',
    level: 0,
    activities: [],
    coderr: 'IMG_URL_REDIRECTLOOP',
    name: 'Image Causes Redirect Loop',
    id: 'IMG_URL_REDIRECTLOOP',
    howtofix:
      'Ranking, user experience as well as SEO are all badly affected by loops or chains of redirections because they make it difficult to web crawlers to navigate the site and offer a bad user experience to final users of the website It can happen that this issue is reported by crawlers and not by browsers, which does not mean that the problem does not exist. - Redirects in a chain should be limited.',
    schema: ['B']
  },
  {
    descr: 'This page has duplicated',
    level: 0,
    activities: [],
    coderr: 'PAGEDUP_DUPLICATE',
    name: 'Duplicate Page',
    id: 'PAGEDUP_DUPLICATE',
    howtofix: null,
    schema: ['B']
  },
  {
    descr: '(PM) Robots Yahoo',
    level: 0,
    activities: [],
    coderr: 'PM_ROBOTS_YAHOO',
    name: '(PM) Robots Yahoo',
    id: 'PM_ROBOTS_YAHOO',
    howtofix: null,
    schema: []
  },
  {
    descr: 'This resource responded with 303 http code',
    level: 2,
    activities: [],
    coderr: 'HTTP_303',
    name: '303 Response',
    id: 'HTTP_303',
    howtofix: null,
    schema: ['B']
  },
  {
    descr: 'This page has multiple identical canonical links',
    level: 2,
    activities: [],
    coderr: 'CANONLINK_MULTIPLE_SAME',
    name: 'Multiple Identical Canonical',
    id: 'CANONLINK_MULTIPLE_SAME',
    howtofix:
      'Multiple tags rel=“canonical” per page should be avoided because they confuse search engines which will end up without understanding which is the right one or choose a wrong one. - There should be only one rel=“canonical” per page',
    schema: ['B', 'C1', 'AUTO']
  },
  {
    descr: 'Page with duplicate h2, but with his canonical',
    level: 9,
    activities: [],
    coderr: 'H2DUP_DUPLICATE_CANONICAL',
    name: 'H2 Duplicate Canonical',
    id: 'H2DUP_DUPLICATE_CANONICAL',
    howtofix: '',
    schema: []
  },
  {
    descr: 'H1 is empty',
    level: 0,
    activities: [],
    coderr: 'H1_VOID',
    name: 'H1 Empty',
    id: 'H1_VOID',
    howtofix:
      'H1 headings give search engines the information on the topic of the page and if missing the result can be a lower ranking for that page than expected. - Provide H1 heading for any page.',
    schema: ['A1', 'A4', 'A5', 'B']
  },
  {
    descr: 'Page has a js resource src that causes a 5xx error',
    level: 0,
    activities: [],
    coderr: 'JS_LINK_HTTP_5XX',
    name: 'Js Resource Src Causes 5xx',
    id: 'JS_LINK_HTTP_5XX',
    howtofix:
      'Users as well as search engines can not access pages of the web site resulting in a drop in organic traffic to the site. - You should fix these issues.',
    schema: ['B']
  },
  {
    descr: '(PM) Alias Connect',
    level: 2,
    activities: [],
    coderr: 'PM_ALIAS_CONNECT',
    name: '(PM) Alias Connect',
    id: 'PM_ALIAS_CONNECT',
    howtofix: null,
    schema: []
  },
  {
    descr: '(PM) Duplicate Error',
    level: 0,
    activities: [],
    coderr: 'PM_DUPLICATE_ERROR',
    name: '(PM) Duplicate Error',
    id: 'PM_DUPLICATE_ERROR',
    howtofix: null,
    schema: []
  },
  {
    descr: 'Questa url dichiara un contenuto mime css',
    level: 9,
    activities: [],
    coderr: 'MIME_CSS',
    name: 'Mime Css',
    id: 'MIME_CSS',
    howtofix: null,
    schema: []
  },
  {
    descr: 'Resource permitted by robots',
    level: 9,
    activities: [],
    coderr: 'ROBOTS_YES',
    name: 'Robots Yes',
    id: 'ROBOTS_YES',
    category: ['crawlability'],
    howtofix: null,
    schema: []
  },
  {
    descr: 'The page has multiple keywords',
    level: 2,
    activities: [],
    coderr: 'META_KEYWORDS_MULTIPLE',
    name: 'Multiple Keywords',
    id: 'META_KEYWORDS_MULTIPLE',
    howtofix: null,
    schema: ['B', 'AUTO']
  },
  {
    descr: '(PM) Duplicate',
    level: 0,
    activities: [],
    coderr: 'PM_DUPLICATE',
    name: '(PM) Duplicate',
    id: 'PM_DUPLICATE',
    howtofix: null,
    schema: []
  },
  {
    descr: 'Pagelink extlinkbroken disallow',
    level: 10,
    activities: [],
    coderr: 'PAGELINK_EXTLINKBROKEN_DISALLOW',
    name: 'Pagelink Extlinkbroken Disallow',
    id: 'PAGELINK_EXTLINKBROKEN_DISALLOW',
    howtofix: null,
    schema: []
  },
  {
    descr: 'This resource responded with 412 http code',
    level: 0,
    activities: [],
    coderr: 'HTTP_412',
    name: '412 Response',
    id: 'HTTP_412',
    howtofix: null,
    schema: ['B']
  },
  {
    descr: 'Page has an image src that causes a 3xx redirect loop',
    level: 0,
    activities: [],
    coderr: 'IMG_LINK_REDIRECTLOOP',
    name: 'Image Src Causes Redirect Loop',
    id: 'IMG_LINK_REDIRECTLOOP',
    howtofix:
      'Ranking, user experience as well as SEO are all badly affected by loops or chains of redirections because they make it difficult to web crawlers to navigate the site and offer a bad user experience to final users of the website It can happen that this issue is reported by crawlers and not by browsers, which does not mean that the problem does not exist. - Redirects in a chain should be limited.',
    schema: ['A8', 'B']
  },
  {
    descr: 'This page has an image without src',
    level: 1,
    activities: [],
    coderr: 'IMG_LINK_SRC_NOTPRESENT',
    name: 'Image With Missing Src',
    id: 'IMG_LINK_SRC_NOTPRESENT',
    howtofix:
      'An image that cannot be displayed generates a bad user experience as well as telling search engines that it is a poor quality web page. Reasons for this can vary from a missing image to an error in the path or similar. - You should correct broken images.',
    schema: ['B']
  },
  {
    descr: 'This paginated page and his canonical has page 1 parameter',
    level: 1,
    activities: [],
    coderr: 'CANONLINK_PAG_ERROR',
    name: 'Canonical To Page 1',
    id: 'CANONLINK_PAG_ERROR',
    howtofix: null,
    schema: ['B']
  },
  {
    descr: 'Page links to a css resource that causes a redirect chain',
    level: 2,
    activities: [],
    coderr: 'CSS_LINK_RC',
    name: 'Css Resource Link Causes Redirect Chain',
    id: 'CSS_LINK_RC',
    howtofix:
      'Ranking, user experience as well as SEO are all badly affected by loops or chains of redirections because they make it difficult to web crawlers to navigate the site and offer a bad user experience to final users of the website It can happen that this issue is reported by crawlers and not by browsers, which does not mean that the problem does not exist. - Redirects in a chain should be limited to three. To avoid 404 errors instead of deleting existing URLs in chains you should point each URL in the chain to the final destination page to fix the problem.',
    schema: ['A8', 'B']
  },
  {
    descr: 'Page links to a iframe that causes a 4xx error',
    level: 0,
    activities: [],
    coderr: 'IFRAME_LINK_HTTP_4xx',
    name: 'Iframe Link Causes 4xx',
    id: 'IFRAME_LINK_HTTP_4xx',
    howtofix:
      'Users as well as search engines can not access pages of the web site resulting in a drop in organic traffic to the site. - You should fix these issues.',
    schema: ['B']
  },
  {
    descr: "This page canonical doesn't have an url",
    level: 0,
    activities: [],
    coderr: 'CANONLINK_URLMISSING',
    name: 'Canonical Without Url',
    id: 'CANONLINK_URLMISSING',
    howtofix: null,
    schema: ['B']
  },
  {
    descr: 'This page has multiple hreflang with same language',
    level: 1,
    activities: [],
    coderr: 'HREFLANG_MULTIPLEMETHOD',
    name: 'Hreflang Duplicated',
    id: 'HREFLANG_MULTIPLEMETHOD',
    howtofix:
      'hreflang attribute in a page should match the language of the page that is determined through semantic analysis otherwise search engines can get confused and wrongly interpret the hreflang. - Fix these issues wherever are present. Too little content can anyway generate a mismatch issue on the page even if hreflang is correct.',
    schema: ['B']
  },
  {
    descr: 'The page has a title longer than 65 chars',
    level: 1,
    activities: [],
    coderr: 'TITLE_TOOLONG',
    name: 'Title Too Long',
    id: 'TITLE_TOOLONG',
    howtofix:
      'More that 65 chars in titles can be truncated by search engines resulting in a less meaningful title for users. - Keep titles under 65 chars.',
    schema: ['A1', 'A2', 'A5', 'B']
  },
  {
    descr: 'Mime all',
    level: 10,
    activities: [],
    coderr: 'MIME_ALL',
    name: 'Mime All',
    id: 'MIME_ALL',
    howtofix: null,
    schema: []
  },
  {
    descr: 'This resource responded with http code less than 100',
    level: 2,
    activities: [],
    coderr: 'HTTP_NORESP',
    name: '0xx Response',
    id: 'HTTP_NORESP',
    howtofix: null,
    schema: ['D']
  },
  {
    descr: 'This page has a js with src link broken',
    level: 1,
    activities: [],
    coderr: 'JS_NOTREACHABLE',
    name: 'Js With Broken Src',
    id: 'JS_NOTREACHABLE',
    howtofix:
      'An error status is returned by a webpage because the page linked does not exist, the URL contains errors or similar. This results in a negative user experience as well as affecting the indexing process leading to a downgrade of the website. A link to which access is blocked to crawlers can be seen as broken by crawlers too. (e.g. DDos protection in force, “disallow” entries in robots.txt, bad server configuration). - You should remove broken links bringing to web pages that issue an error or replace them. You should contact your IT support team in case it is a working link and the access is denied to crawlers or consider introducing the directive “crawl-delay” in your robots.txt file to be crawled less often.',
    schema: ['A8', 'B']
  },
  {
    descr: 'Am pjld',
    level: 10,
    activities: [],
    coderr: 'AM_PJLD',
    name: 'Am Pjld',
    id: 'AM_PJLD',
    howtofix: 'No need to Fix',
    schema: []
  },
  {
    descr: 'Page indexing blocked',
    level: 9,
    activities: [],
    coderr: 'INDEXABLE_NO',
    name: 'Not Indexable',
    id: 'INDEXABLE_NO',
    category: ['crawlability'],
    howtofix:
      'Resources blocked through a “Disallow” directive in robots.txt cannot be accessed and crawled leading to poor rankings. Such resources are JavaScript, image files and others. - Update your robots.txt file.',
    schema: []
  },
  {
    descr: 'Page favicon link is empty',
    level: 2,
    activities: [],
    coderr: 'PAGE_FAVICON_VOID',
    name: 'Empty Favicon',
    id: 'PAGE_FAVICON_VOID',
    howtofix: null,
    schema: ['B']
  },
  {
    descr: 'Site redir',
    level: 10,
    activities: [],
    coderr: 'SITE_REDIR',
    name: 'Site Redir',
    id: 'SITE_REDIR',
    howtofix: null,
    schema: []
  },
  {
    descr: 'Page indexing blocked by robots.txt',
    level: 9,
    activities: ['254274b2-2c2b-4885-8fdb-6d67f595d401'],
    coderr: 'INDEXABLE_NOROBOTS',
    name: 'Not Indexable By Robots',
    id: 'INDEXABLE_NOROBOTS',
    category: ['crawlability'],
    howtofix:
      'Resources blocked through a “Disallow” directive in robots.txt cannot be accessed and crawled leading to poor rankings. Such resources are JavaScript, image files and others. - Update your robots.txt file.',
    schema: []
  },
  {
    descr: 'Page links to a hreflang that causes a 4xx error',
    level: 0,
    activities: [],
    coderr: 'HREFLANG_LINK_HTTP_5XX_RESPONSE',
    name: 'Hreflang Link Causes 5xx',
    id: 'HREFLANG_LINK_HTTP_5XX_RESPONSE',
    howtofix: null,
    schema: ['B']
  },
  {
    descr: 'Css resource causes a 404 error',
    level: 0,
    activities: [],
    coderr: 'CSS_HTTP_404',
    name: 'Css Resource Causes 404',
    id: 'CSS_HTTP_404',
    howtofix: null,
    schema: ['A6', 'B']
  },
  {
    descr: 'This url is not valid',
    level: 1,
    activities: [],
    coderr: 'URL_NOTVALID',
    name: 'Url Not Valid',
    id: 'URL_NOTVALID',
    howtofix:
      'The URL is misspelled, the syntax is invalid or similar problems that prevent search engines to access the page. Check the URL for typos, unnecessary characters, mistakes and other.',
    schema: ['B', 'AUTO']
  },
  {
    descr: 'Questa url dichiara un contenuto mime html',
    level: 9,
    activities: [],
    coderr: 'MIME_HTML',
    name: 'Mime Html',
    id: 'MIME_HTML',
    howtofix: null,
    schema: []
  },
  {
    descr: '(PM) Sitemap Schema',
    level: 0,
    activities: [],
    coderr: 'PM_SITEMAP_SCHEMA',
    name: '(PM) Sitemap Schema',
    id: 'PM_SITEMAP_SCHEMA',
    howtofix: null,
    schema: []
  },
  {
    descr: 'This resource is a fake url (i.e. 404, error,...)',
    level: 2,
    activities: [],
    coderr: 'PAGE_FAKE_URL',
    name: 'Fake Url',
    id: 'PAGE_FAKE_URL',
    howtofix:
      'The web page is not accessibile and an error 4XX is returned. User experience as well as search engines crawlers are negatively affected. This is due to broken links or working links to which access is blocked to crawlers (e.g. DDos protection in force, “disallow” entries in robots.txt, bad server configuration). - You should remove links with errors or replace them with other pages. You should contact your IT support team in case it is a working link and the access is denied to crawlers or consider introducing the directive “crawl-delay” in your robots.txt file to be crawled less often.',
    schema: ['B']
  },
  {
    descr: 'Page links to a css resource that causes a 4xx error',
    level: 0,
    activities: [],
    coderr: 'CSS_LINK_HTTP_4xx',
    name: 'Css Resource Link Causes 4xx',
    id: 'CSS_LINK_HTTP_4xx',
    howtofix:
      'Broken JavaScript and CSS files on external sites negatively affect both rankings and user experience because search engines will not be able to index and render your pages. - You should contact the external site administrator to fix them.',
    schema: ['A6', 'A8', 'B']
  },
  {
    descr: 'This resource responded with http wrong code (like 999)',
    level: 2,
    activities: [],
    coderr: 'JS_LINK_R999',
    name: 'Xxx Response',
    id: 'JS_LINK_R999',
    howtofix: null,
    schema: ['B']
  },
  {
    descr: 'This resource responded with 400 http code',
    level: 0,
    activities: [],
    coderr: 'HTTP_400',
    name: '400 Response',
    id: 'HTTP_400',
    howtofix: null,
    schema: ['B']
  },
  {
    descr: 'Hreflang default not present',
    level: 2,
    activities: [],
    coderr: 'HREFLANG_DEFAULTNOTPRES',
    name: 'Hreflang Default Not Present',
    id: 'HREFLANG_DEFAULTNOTPRES',
    howtofix: null,
    schema: ['B']
  },
  {
    descr: 'This page has multiple h2',
    level: 2,
    activities: [],
    coderr: 'H2_MULTIPLE',
    name: 'Multiple H2',
    id: 'H2_MULTIPLE',
    howtofix: null,
    schema: ['B']
  },
  {
    descr: 'Js resource causes a 301 error',
    level: 2,
    activities: [],
    coderr: 'JS_HTTP_301',
    name: 'Js Resource Causes 301',
    id: 'JS_HTTP_301',
    howtofix: null,
    schema: ['B']
  },
  {
    descr: 'Missing iframe',
    level: 9,
    activities: [],
    coderr: 'IFRAME_NOTPRESENT',
    name: 'Missing Iframe',
    id: 'IFRAME_NOTPRESENT',
    howtofix: null,
    schema: []
  },
  {
    descr: 'Am ptc',
    level: 10,
    activities: [],
    coderr: 'AM_PTC',
    name: 'Am Ptc',
    id: 'AM_PTC',
    howtofix: null,
    schema: []
  },
  {
    descr: 'Css not minified',
    level: 1,
    activities: [],
    coderr: 'CSS_UNMINIFIED',
    name: 'Css Not Minified',
    id: 'CSS_UNMINIFIED',
    howtofix:
      'Minified JavaScript and CSS files load faster because they are smaller since unnecessary lines or white spaces have been removed. This improves user experience and rankings. - You should minify your JavaScript and CSS files or ask an external websites to do so for those files hosted somewhere else.',
    schema: ['B', 'C1']
  },
  {
    descr: 'This page contains invalid chars',
    level: 2,
    activities: [],
    coderr: 'URL_NOTVALID_CHARS',
    name: 'Not Valid Chars In Url',
    id: 'URL_NOTVALID_CHARS',
    howtofix:
      'Spelling mistakes, invalid syntax of the URL can cause this error and the crawler cannot access the page. - Check the URL for typos, unnecessary characters, mistakes and other.',
    schema: ['B', 'AUTO']
  },
  {
    descr: '(PM) Canonical Location',
    level: 0,
    activities: [],
    coderr: 'PM_CANONICAL_LOCATION',
    name: '(PM) Canonical Location',
    id: 'PM_CANONICAL_LOCATION',
    howtofix: null,
    schema: []
  },
  {
    descr: 'Css resource causes a 4xx error',
    level: 0,
    activities: [],
    coderr: 'CSS_HTTP_4xx',
    name: 'Css Resource Causes 4xx',
    id: 'CSS_HTTP_4xx',
    howtofix:
      'Users as well as search engines can not access pages of the web site resulting in a drop in organic traffic to the site. - You should fix these issues.',
    schema: ['A6', 'B']
  },
  {
    descr: 'This hreflang causes a redirect chain',
    level: 1,
    activities: [],
    coderr: 'HREFLANG_LINK_REDIRECTCHAIN',
    name: 'Hreflang Causes Redirect Chain',
    id: 'HREFLANG_LINK_REDIRECTCHAIN',
    howtofix: null,
    schema: ['B']
  },
  {
    descr: 'This link has alternates',
    level: 9,
    activities: [],
    coderr: 'ALTERNATE_HAS',
    name: 'Has Alternates',
    id: 'ALTERNATE_HAS',
    howtofix: null,
    schema: []
  },
  {
    descr: 'Thhis page has an amp resource',
    level: 9,
    activities: [],
    coderr: 'PAGE_HASAMP',
    name: 'Has Amp',
    id: 'PAGE_HASAMP',
    howtofix: null,
    schema: []
  },
  {
    descr: 'Image size exceed 100k',
    level: 2,
    activities: [],
    coderr: 'IMG_OVER100K',
    name: 'Image Over 100k',
    id: 'IMG_OVER100K',
    howtofix: null,
    schema: ['B']
  },
  {
    descr: 'Meta directives all',
    level: 10,
    activities: [],
    coderr: 'META_DIRECTIVES_ALL',
    name: 'Meta Directives All',
    id: 'META_DIRECTIVES_ALL',
    howtofix: null,
    schema: []
  },
  {
    descr: 'The page has link with 4xx errors',
    level: 0,
    activities: [],
    coderr: 'PAGELINK_URL_HTTP_4XX',
    name: '4xx Links',
    id: 'PAGELINK_URL_HTTP_4XX',
    howtofix: null,
    schema: ['B']
  },
  {
    descr: 'The page has nofollow directive',
    level: 9,
    activities: [],
    coderr: 'META_DIRECTIVES_NOFOLLOW',
    name: 'Nofollow Directive',
    id: 'META_DIRECTIVES_NOFOLLOW',
    category: ['crawlability'],
    howtofix: null,
    schema: []
  },
  {
    descr: 'This page is too many level deep from home',
    level: 1,
    activities: [],
    coderr: 'URL_TOOMANYLEVS',
    name: 'Too Many Levels',
    id: 'URL_TOOMANYLEVS',
    howtofix: null,
    schema: ['B']
  },
  {
    descr: '(PM) Duplicate Connect',
    level: 2,
    activities: [],
    coderr: 'PM_DUPLICATE_CONNECT',
    name: '(PM) Duplicate Connect',
    id: 'PM_DUPLICATE_CONNECT',
    howtofix: null,
    schema: []
  },
  {
    descr: 'Page not present in sitemap',
    level: 0,
    activities: [],
    coderr: 'INDEXABLE_NOSITEMAP',
    name: 'Not In Sitemap',
    id: 'INDEXABLE_NOSITEMAP',
    category: ['crawlability'],
    howtofix: null,
    schema: ['B', 'C1', 'AUTO']
  },
  {
    descr: 'Page prev links to broken url',
    level: 0,
    activities: [],
    coderr: 'URLPAG_PREVBROKEN',
    name: 'Prev Broken',
    id: 'URLPAG_PREVBROKEN',
    howtofix:
      'Broken internal links result in a bad user experience and negatively influence the overall ranking presenting crawlers a website that looks poorly maintained. - Ensure all links work as expected and in case a link works when accessed directly and not from the website consult the other site owner.',
    schema: ['B']
  },
  {
    descr: "This page doesn't have a title",
    level: 0,
    activities: [],
    coderr: 'TITLE_NOTPRESENT',
    name: 'Missing Title',
    id: 'TITLE_NOTPRESENT',
    howtofix:
      'Title tags improve user experience appearing in search results pages but also help search engines know the content of the web page and are extremely relevant to SEO. - A title with the most relevant keywords and not too long is the best way to reach a higher rank in results pages.',
    schema: ['A1', 'A2', 'A5', 'B']
  },
  {
    descr: 'Js not minified',
    level: 1,
    activities: [],
    coderr: 'JS_NOTMINIFIED',
    name: 'Js Not Minified',
    id: 'JS_NOTMINIFIED',
    howtofix: null,
    schema: ['B', 'C1']
  },
  {
    descr: 'Am pmd',
    level: 10,
    activities: [],
    coderr: 'AM_PMD',
    name: 'Am Pmd',
    id: 'AM_PMD',
    howtofix: null,
    schema: []
  },
  {
    descr: 'This paginated page has both noindex and follow directives',
    level: 9,
    activities: [],
    coderr: 'URLPAGE_NOINDEXBUTFOLLOW',
    name: 'Paginated Noindex But Follow',
    id: 'URLPAGE_NOINDEXBUTFOLLOW',
    category: ['crawlability'],
    howtofix: null,
    schema: []
  },
  {
    descr: 'H2 ok',
    level: 10,
    activities: [],
    coderr: 'H2_OK',
    name: 'H2 Ok',
    id: 'H2_OK',
    howtofix: null,
    schema: []
  },
  {
    descr: 'Questo link utilizza il protocollo https',
    level: 9,
    activities: [],
    coderr: 'PROTO_HTTPS',
    name: 'Protocollo Https',
    id: 'PROTO_HTTPS',
    howtofix: null,
    schema: []
  },
  {
    descr: 'This paginated page does not have next or prev',
    level: 1,
    activities: [],
    coderr: 'URLPAG_MISSINGNEXTPREV',
    name: 'Missing Next/prev',
    id: 'URLPAG_MISSINGNEXTPREV',
    howtofix: null,
    schema: ['B']
  },
  {
    descr: 'This page calls more than 6 js',
    level: 1,
    activities: [],
    coderr: 'JS_TOOMANY',
    name: 'Too Many Js',
    id: 'JS_TOOMANY',
    howtofix: null,
    schema: ['B']
  },
  {
    descr: '(PM) Robots Bingpreview',
    level: 0,
    activities: [],
    coderr: 'PM_ROBOTS_BINGPREVIEW',
    name: '(PM) Robots Bingpreview',
    id: 'PM_ROBOTS_BINGPREVIEW',
    howtofix: null,
    schema: []
  },
  {
    descr: 'This page has a js resource with src link broken',
    level: 0,
    activities: [],
    coderr: 'JS_LINKBROKEN',
    name: 'Js Resource With Broken Src',
    id: 'JS_LINKBROKEN',
    howtofix:
      'An error status is returned by a webpage because the page linked does not exist, the URL contains errors or similar. This results in a negative user experience as well as affecting the indexing process leading to a downgrade of the website. A link to which access is blocked to crawlers can be seen as broken by crawlers too. (e.g. DDos protection in force, “disallow” entries in robots.txt, bad server configuration). - You should remove broken link bringing to web pages that issue an error or replace them. You should contact your IT support team in case it is a working link and the access is denied to crawlers or consider introducing the directive “crawl-delay” in your robots.txt file to be crawled less often.',
    schema: ['B']
  },
  {
    descr: 'This page has similar titles',
    level: 1,
    activities: [],
    coderr: 'TITLEDUP_SIMILAR',
    name: 'Similar Title',
    id: 'TITLEDUP_SIMILAR',
    howtofix:
      'Duplicate title tags within web pages confuse users and do not tell search engines which is the right one for the current query and a lower chance to be indexed or the risk to be banned. - Titles should be unique and contain relevant keywords.',
    schema: ['A1', 'A2', 'A5', 'B']
  },
  {
    descr: 'H1 all',
    level: 10,
    activities: [],
    coderr: 'H1_ALL',
    name: 'H1 All',
    id: 'H1_ALL',
    howtofix: null,
    schema: []
  },
  {
    descr: 'This resource responded with 4xx http code',
    level: 0,
    activities: [],
    coderr: 'HTTP_4XX',
    name: '4xx Response',
    id: 'HTTP_4XX',
    howtofix:
      'Users as well as search engines can not access pages of the web site resulting in a drop in organic traffic to the site. - You should fix these issues.',
    schema: ['B']
  },
  {
    descr: 'Page has a js src that causes a 3xx redirect loop',
    level: 0,
    activities: [],
    coderr: 'JS_REDIRLOOP',
    name: 'Js Src Causes Redirect Loop',
    id: 'JS_REDIRLOOP',
    howtofix:
      'Ranking, user experience as well as SEO are all badly affected by loops or chains of redirections because they make it difficult to web crawlers to navigate the site and offer a bad user experience to final users of the website It can happen that this issue is reported by crawlers and not by browsers, which does not mean that the problem does not exist. - Redirects in a chain should be limited to three.',
    schema: ['B']
  },
  {
    descr: 'This resource has been found by crawler',
    level: 9,
    activities: [],
    coderr: 'CRAWLED_YES',
    name: 'Resource Crawled',
    id: 'CRAWLED_YES',
    howtofix: null,
    schema: []
  },
  {
    descr: 'This resource responded with 2xx http code',
    level: 9,
    activities: [],
    coderr: 'HTTP_2XX',
    name: '2xx Response',
    id: 'HTTP_2XX',
    howtofix: null,
    schema: []
  },
  {
    descr: 'Titledup all',
    level: 10,
    activities: [],
    coderr: 'TITLEDUP_ALL',
    name: 'Titledup All',
    id: 'TITLEDUP_ALL',
    howtofix: null,
    schema: []
  },
  {
    descr: 'Page with duplicate h1, but with his canonical',
    level: 9,
    activities: [],
    coderr: 'H1DUP_DUPLICATE_CANONICAL',
    name: 'H1 Duplicate Canonical',
    id: 'H1DUP_DUPLICATE_CANONICAL',
    howtofix:
      '<title> and <h1> tags should not have the same content in first-level header, missing the opportunity to use more keywords for that page. - Ensure <title> and >h1> have different content.',
    schema: []
  },
  {
    descr: 'H1 is longer than 70 characters',
    level: 1,
    activities: [],
    coderr: 'H1_OVER70',
    name: 'H1 Over 70',
    id: 'H1_OVER70',
    howtofix: null,
    schema: ['A1', 'A4', 'A5', 'B']
  },
  {
    descr: 'This page contains special chars',
    level: 1,
    activities: [],
    coderr: 'URL_WITH_SPECIALCHARS',
    name: 'Special Chars In Url',
    id: 'URL_WITH_SPECIALCHARS',
    howtofix:
      'The URL is misspelled, the syntax is invalid or similar problems that prevent search engines to access the page. - Check the URL for typos or syntax and correct it.',
    schema: ['A1', 'A4', 'A5', 'B', 'D']
  },
  {
    descr: 'Page AMP is OK',
    level: 10,
    activities: [],
    coderr: 'PM_AMP_OK',
    name: 'Page AMP is OK',
    id: 'PM_AMP_OK',
    howtofix: '',
    schema: []
  },
  {
    descr: 'This page does not have flash content inside',
    level: 9,
    activities: [],
    coderr: 'PAGE_NOFLASHCONTENT',
    name: 'No Flash Content',
    id: 'PAGE_NOFLASHCONTENT',
    howtofix: null,
    schema: []
  },
  {
    descr: 'This resource responded with 307 http code',
    level: 9,
    activities: [],
    coderr: 'HTTP_307',
    name: '307 Response',
    id: 'HTTP_307',
    howtofix: null,
    schema: []
  },
  {
    descr: 'Http all',
    level: 10,
    activities: [],
    coderr: 'HTTP_ALL',
    name: 'Http All',
    id: 'HTTP_ALL',
    howtofix: null,
    schema: []
  },
  {
    descr: 'This page calls more than 6 iframes',
    level: 1,
    activities: [],
    coderr: 'IFRAME_TM',
    name: 'Too Many Iframes',
    id: 'IFRAME_TM',
    howtofix: null,
    schema: ['B']
  },
  {
    descr: 'Proto all',
    level: 10,
    activities: [],
    coderr: 'PROTO_ALL',
    name: 'Proto All',
    id: 'PROTO_ALL',
    howtofix: null,
    schema: []
  },
  {
    descr: 'Site all',
    level: 10,
    activities: [],
    coderr: 'SITE_ALL',
    name: 'Site All',
    id: 'SITE_ALL',
    howtofix: null,
    schema: []
  },
  {
    descr: 'This page has too many parameters in url',
    level: 1,
    activities: [],
    coderr: 'URL_TOOMANYPARS',
    name: 'Too Many Params',
    id: 'URL_TOOMANYPARS',
    howtofix:
      'Too many parameters in the URL of a web page can cause search engines not to index the page and affect user experience as well. - Four can be a right number of parameters per URL.',
    schema: ['B', 'D']
  },
  {
    descr: '(PM) Robots',
    level: 0,
    activities: [],
    coderr: 'PM_ROBOTS',
    name: '(PM) Robots',
    id: 'PM_ROBOTS',
    howtofix: null,
    schema: []
  },
  {
    descr: 'This resource responded with 5xx http code',
    level: 0,
    activities: [],
    coderr: 'HTTP_5XX',
    name: '5xx Response',
    id: 'HTTP_5XX',
    howtofix:
      'Users as well as search engines can not access pages of the web site resulting in a drop in organic traffic to the site.',
    schema: ['B']
  },
  {
    descr: 'Not reciprocal hreflang link',
    level: 0,
    activities: [],
    coderr: 'HREFLANG_NONRECIPROCALHREFLANGLINK',
    name: 'Not Reciprocal Hreflang Link',
    id: 'HREFLANG_NONRECIPROCALHREFLANGLINK',
    howtofix: null,
    schema: ['B']
  },
  {
    descr: "This page's h2 is different from url",
    level: 2,
    activities: [],
    coderr: 'H2_NOT_EQUAL_URL',
    name: 'H2 Not Equal Url',
    id: 'H2_NOT_EQUAL_URL',
    howtofix: null,
    schema: ['NOT AN ERROR']
  },
  {
    descr: 'This image alternate text is too long',
    level: 2,
    activities: [],
    coderr: 'IMG_ALT_TOOLONG',
    name: 'Image Alt Too Long',
    id: 'IMG_ALT_TOOLONG',
    howtofix: null,
    schema: ['B']
  },
  {
    descr: 'Iframe causes a link error',
    level: 1,
    activities: [],
    coderr: 'IFRAME_LB',
    name: 'Iframe Causes A Link Error',
    id: 'IFRAME_LB',
    howtofix: null,
    schema: ['B']
  },
  {
    descr: 'H1dup all',
    level: 10,
    activities: [],
    coderr: 'H1DUP_ALL',
    name: 'H1dup All',
    id: 'H1DUP_ALL',
    howtofix: null,
    schema: []
  },
  {
    descr: 'Title ok',
    level: 10,
    activities: [],
    coderr: 'TITLE_OK',
    name: 'Title Ok',
    id: 'TITLE_OK',
    howtofix: null,
    schema: []
  },
  {
    descr: 'Page link to favicon is broken',
    level: 1,
    activities: [],
    coderr: 'PAGE_FAVICON_LINKBROKEN',
    name: 'Favicon Link Broken',
    id: 'PAGE_FAVICON_LINKBROKEN',
    howtofix: null,
    schema: ['A7', 'B']
  },
  {
    descr: '(PM) Noindex',
    level: 0,
    activities: [],
    coderr: 'PM_NOINDEX',
    name: '(PM) Noindex',
    id: 'PM_NOINDEX',
    howtofix: null,
    schema: []
  },
  {
    descr: 'The page has disallowed link with 5xx error',
    level: 0,
    activities: [],
    coderr: 'PAGELINK_URL_HTTP_5XX_DISALLOW',
    name: '5xx Disallowed Links',
    id: 'PAGELINK_URL_HTTP_5XX_DISALLOW',
    howtofix: null,
    schema: ['B']
  },
  {
    descr: 'This page is very similar to other(s)',
    level: 0,
    activities: [],
    coderr: 'PAGEDUP_SIMILAR',
    name: 'Similar Page',
    id: 'PAGEDUP_SIMILAR',
    howtofix:
      'Duplicate contents that spam across pages of the web site do not give search engines the information on which page is the right one to be indexed and this can result in a loss of placement in search results pages and a ban of the page. - You can insert rel=“canonical” link in only one of the duplicate pages that will be shown in results pages or avoid duplicate content at all.',
    schema: ['A1', 'A5', 'B']
  },
  {
    descr: 'This resource has not been found by crawler',
    level: 2,
    activities: [],
    coderr: 'CRAWLED_NO',
    name: 'Resource Not Crawled',
    id: 'CRAWLED_NO',
    howtofix: null,
    schema: []
  },
  {
    descr: 'Resource not in sitemap',
    level: 1,
    activities: [],
    coderr: 'INSITEMAP_NO',
    name: 'No Sitemap',
    id: 'INSITEMAP_NO',
    category: ['crawlability'],
    howtofix: null,
    schema: []
  },
  {
    descr: '(PM) Robots Googlefeature',
    level: 0,
    activities: [],
    coderr: 'PM_ROBOTS_GOOGLEFEATURE',
    name: '(PM) Robots Googlefeature',
    id: 'PM_ROBOTS_GOOGLEFEATURE',
    howtofix: null,
    schema: []
  },
  {
    descr: 'The page has too many keywords',
    level: 2,
    activities: [],
    coderr: 'META_KEYWORDS_TOOLONG',
    name: 'Too Many Keywords',
    id: 'META_KEYWORDS_TOOLONG',
    howtofix: null,
    schema: ['A1', 'A5', 'B']
  },
  {
    descr: 'The page has links that cause unspecified code errors (like 999)',
    level: 1,
    activities: [],
    coderr: 'PAGELINK_URL_RESPCODE999',
    name: 'Code 999 Links',
    id: 'PAGELINK_URL_RESPCODE999',
    howtofix: null,
    schema: ['B']
  },
  {
    descr: 'Page links to a css resource that causes a 4xx error',
    level: 0,
    activities: [],
    coderr: 'CSS_LINK_HTTP_5xx',
    name: 'Css Resource Link Causes 5xx',
    id: 'CSS_LINK_HTTP_5xx',
    howtofix:
      'The web page is not accessibile and an error 4XX is returned. User experience as well as search engines crawlers are negatively affected. This is due to broken links or working links to which access is blocked to crawlers (e.g. DDos protection in force, “disallow” entries in robots.txt, bad server configuration). - You should remove links with errors or replace them with other pages. You should contact your IT support team in case it is a working link and the access is denied to crawlers or consider introducing the directive “crawl-delay” in your robots.txt file to be crawled less often.',
    schema: ['A6', 'A8', 'B']
  },
  {
    descr: 'The page has disallowed links that cause unspecified code errors (like 999)',
    level: 9,
    activities: [],
    coderr: 'PAGELINK_URL_RESPCODE999_DISALLOW',
    name: 'Disallowed Code 999 Links',
    id: 'PAGELINK_URL_RESPCODE999_DISALLOW',
    howtofix: null,
    schema: []
  },
  {
    descr: 'Site ok',
    level: 10,
    activities: [],
    coderr: 'SITE_OK',
    name: 'Site Ok',
    id: 'SITE_OK',
    howtofix: null,
    schema: []
  },
  {
    descr: 'This canonical url points the home',
    level: 2,
    activities: [],
    coderr: 'CANONLINK_TOHOME',
    name: 'This canonical url points the home',
    id: 'CANONLINK_TOHOME',
    howtofix: null,
    schema: ['A1', 'B']
  },
  {
    descr: 'The page has nosnippet directive',
    level: 2,
    activities: [],
    coderr: 'META_DIRECTIVES_NOSNIPPET',
    name: 'Nosnippet Directive',
    id: 'META_DIRECTIVES_NOSNIPPET',
    howtofix: null,
    schema: ['A1', 'A5', 'B']
  },
  {
    descr: 'Headers specify follow, but meta says nofollow',
    level: 0,
    activities: [],
    coderr: 'PAGELINK_HEADERFOLLOW_METANOFOLLOW',
    name: 'Header-meta Follow/nofollow',
    id: 'PAGELINK_HEADERFOLLOW_METANOFOLLOW',
    howtofix: null,
    schema: ['B']
  },
  {
    descr: 'Css resource causes a 3xx error',
    level: 2,
    activities: [],
    coderr: 'CSS_REDIRECT',
    name: 'Css Resource Causes 3xx',
    id: 'CSS_REDIRECT',
    howtofix: null,
    schema: ['B']
  },
  {
    descr: 'Page present in sitemap but no treachable by crawler',
    level: 0,
    activities: [],
    coderr: 'INDEXABLE_ORPHAN',
    name: 'Orphan Page',
    id: 'INDEXABLE_ORPHAN',
    category: ['crawlability'],
    howtofix: null,
    schema: ['B']
  },
  {
    descr: 'Page has an image src that causes a redirect',
    level: 2,
    activities: [],
    coderr: 'IMG_LINK_REDIRECT',
    name: 'Image Src Causes Redirect',
    id: 'IMG_LINK_REDIRECT',
    howtofix: null,
    schema: ['A8', 'B']
  },
  {
    descr: 'This page has duplicated titles',
    level: 0,
    activities: [],
    coderr: 'TITLEDUP_DUPLICATE',
    name: 'Duplicated Title',
    id: 'TITLEDUP_DUPLICATE',
    howtofix:
      '<title> and <h1> tags should not have the same content in first-level header, missing the opportunity to use more keywords for that page. - Ensure <title> and >h1> have different content.',
    schema: ['A1', 'A2', 'A5', 'B']
  },
  {
    descr: 'This css resource causes a redirect loop',
    level: 0,
    activities: [],
    coderr: 'CSS_REDIRECTLOOP',
    name: 'Css Resource Causes Redirect Loop',
    id: 'CSS_REDIRECTLOOP',
    howtofix: null,
    schema: ['B']
  },
  {
    descr: 'This page canonical causes a redirect to home',
    level: 0,
    activities: [],
    coderr: 'CANONLINK_REDIRHOME',
    name: 'Canonical Redirect To Home',
    id: 'CANONLINK_REDIRHOME',
    howtofix: null,
    schema: ['A1', 'B']
  },
  {
    descr: 'This page does not have a canonical',
    level: 1,
    activities: [],
    coderr: 'CANONLINK_MISSING',
    name: 'Missing Canonical',
    id: 'CANONLINK_MISSING',
    howtofix: null,
    schema: ['A1', 'B']
  },
  {
    descr: 'Metadup all',
    level: 10,
    activities: [],
    coderr: 'METADUP_ALL',
    name: 'Metadup All',
    id: 'METADUP_ALL',
    howtofix: null,
    schema: []
  },
  {
    descr: 'The page has too few keywords',
    level: 2,
    activities: [],
    coderr: 'META_KEYWORDS_TOOSHORT',
    name: 'Too Few Keywords',
    id: 'META_KEYWORDS_TOOSHORT',
    howtofix: null,
    schema: ['A1', 'A5', 'B']
  },
  {
    descr: 'This page canonical causes a redirect',
    level: 0,
    activities: [],
    coderr: 'CANONLINK_REDIRECT',
    name: 'Canonical Redirect',
    id: 'CANONLINK_REDIRECT',
    howtofix: null,
    schema: ['A1', 'B']
  },
  {
    descr: 'The page has a title shorter than 30 chars',
    level: 1,
    activities: [],
    coderr: 'TITLE_TOOSHORT',
    name: 'Title Too Short',
    id: 'TITLE_TOOSHORT',
    howtofix:
      'Less than 10 chars for the title of a web page does not tell what the site is about to search engines and compromises its appearance in result pages. - Add more text to the title, keeping it limited anyway and no too long.',
    schema: ['A1', 'A2', 'A5', 'B']
  },
  {
    descr: '(PM) Robots Adidxbot',
    level: 0,
    activities: [],
    coderr: 'PM_ROBOTS_ADIDXBOT',
    name: '(PM) Robots Adidxbot',
    id: 'PM_ROBOTS_ADIDXBOT',
    howtofix: null,
    schema: []
  },
  {
    descr: 'The page has links with metarobots nofollow but link follow',
    level: 2,
    activities: [],
    coderr: 'PAGELINK_METAROBOTSNOFOLLOW_LINKFOLLOW',
    name: 'Metarobots/link Follow/nofollow',
    id: 'PAGELINK_METAROBOTSNOFOLLOW_LINKFOLLOW',
    howtofix:
      'Nofollow attribute in a <a> tag inserted by mistake tells crawlers not to follow that page and this may have an impact on ranking. Be sure not to have nofollow not wanted.',
    schema: ['B']
  },
  {
    descr: 'Url with non ascii characters',
    level: 2,
    activities: [],
    coderr: 'URL_NOT_ASCII',
    name: 'Url Not Ascii',
    id: 'URL_NOT_ASCII',
    howtofix:
      'The URL is misspelled, the syntax is invalid or similar problems that prevent search engines to access the page. - Check the URL for typos or syntax and correct it.',
    schema: ['A1', 'A4', 'A5', 'B']
  },
  {
    descr: 'Hreflang all',
    level: 10,
    activities: [],
    coderr: 'HREFLANG_ALL',
    name: 'Hreflang All',
    id: 'HREFLANG_ALL',
    howtofix: null,
    schema: []
  },
  {
    descr: 'Amp psu',
    level: 10,
    activities: [],
    coderr: 'AMP_PSU',
    name: 'Amp Psu',
    id: 'AMP_PSU',
    howtofix: null,
    schema: []
  },
  {
    descr: 'FavIcon URL is void',
    level: 2,
    activities: [],
    coderr: 'FAVICON_VOID',
    name: 'FavIcon URL is void',
    id: 'FAVICON_VOID',
    howtofix: '',
    schema: ['B']
  },
  {
    descr: 'Page has an image src that causes a redirect to home',
    level: 0,
    activities: [],
    coderr: 'IMG_LINK_REDIRECTHOME',
    name: 'Image Src Causes Redirect To Home',
    id: 'IMG_LINK_REDIRECTHOME',
    howtofix: null,
    schema: ['B']
  },
  {
    descr: 'This resource responded with 501 http code',
    level: 0,
    activities: [],
    coderr: 'HTTP_501',
    name: '501 Response',
    id: 'HTTP_501',
    howtofix: null,
    schema: ['B']
  },
  {
    descr: 'Home page url does not start with www',
    level: 2,
    activities: [],
    coderr: 'SITE_NOTWWW',
    name: 'No Www',
    id: 'SITE_NOTWWW',
    howtofix: null,
    schema: ['B']
  },
  {
    descr: 'Amp all',
    level: 10,
    activities: [],
    coderr: 'PM_AMP_ALL',
    name: 'Amp all',
    id: 'PM_AMP_ALL',
    howtofix: '',
    schema: []
  },
  {
    descr: 'This resource responded with 401 http code',
    level: 0,
    activities: [],
    coderr: 'HTTP_401',
    name: '401 Response',
    id: 'HTTP_401',
    howtofix: null,
    schema: ['B']
  },
  {
    descr: 'Js resource causes a 302 error',
    level: 1,
    activities: [],
    coderr: 'JS_HTTP_302',
    name: 'Js Resource Causes 302',
    id: 'JS_HTTP_302',
    howtofix: null,
    schema: ['B']
  },
  {
    descr: 'Image causes a redirect',
    level: 2,
    activities: [],
    coderr: 'IMG_URL_REDIRECT',
    name: 'Image Causes Redirect',
    id: 'IMG_URL_REDIRECT',
    howtofix: null,
    schema: ['B']
  },
  {
    descr: 'H2 is empty',
    level: 2,
    activities: [],
    coderr: 'H2_VOID',
    name: 'H2 Empty',
    id: 'H2_VOID',
    howtofix: null,
    schema: ['NOT AN ERROR']
  },
  {
    descr: "This page's size is too big",
    level: 1,
    activities: [],
    coderr: 'PAGE_TOOBIG',
    name: 'Page Too Big',
    id: 'PAGE_TOOBIG',
    howtofix:
      'If a web page is more than 2MB in size it affects loading time and results in poor ranking as well as bad user experience. - You can remove scripts and styles from the page and optimise the code.',
    schema: ['B']
  },
  {
    descr: 'Urls should not contain underscores',
    level: 2,
    activities: [],
    coderr: 'URL_WITH_UNDERSCORE',
    name: 'Url With Underscore',
    id: 'URL_WITH_UNDERSCORE',
    howtofix: null,
    schema: ['A1', 'A4', 'A5', 'B']
  },
  {
    descr: 'This css resource causes a redirect chain',
    level: 1,
    activities: [],
    coderr: 'CSS_REDIRECTCHAIN',
    name: 'Css Resource Causes Redirect Chain',
    id: 'CSS_REDIRECTCHAIN',
    howtofix:
      'Ranking, user experience as well as SEO are all badly affected by loops or chains of redirections because they make it difficult to web crawlers to navigate the site and offer a bad user experience to final users of the website It can happen that this issue is reported by crawlers and not by browsers, which does not mean that the problem does not exist. - Redirects in a chain should be limited.',
    schema: ['B']
  },
  {
    descr: 'This image url causes a 5xx error',
    level: 0,
    activities: [],
    coderr: 'IMG_HTTP_5XX',
    name: 'Image Causes 5xx',
    id: 'IMG_HTTP_5XX',
    howtofix: null,
    schema: ['B']
  },
  {
    descr: 'Content type for this resource is null',
    level: 1,
    activities: [],
    coderr: 'PAGE_NULLCONTENTTYPE',
    name: 'Null Content Type',
    id: 'PAGE_NULLCONTENTTYPE',
    howtofix: null,
    schema: ['B']
  },
  {
    descr: 'Site nocert',
    level: 10,
    activities: [],
    coderr: 'SITE_NOCERT',
    name: 'Site Nocert',
    id: 'SITE_NOCERT',
    howtofix: null,
    schema: []
  },
  {
    descr: 'Site noproto',
    level: 10,
    activities: [],
    coderr: 'SITE_NOPROTO',
    name: 'Site Noproto',
    id: 'SITE_NOPROTO',
    howtofix: null,
    schema: []
  },
  {
    descr: 'Questa url dichiara un contenuto mime image',
    level: 9,
    activities: [],
    coderr: 'MIME_IMAGE',
    name: 'Mime Image',
    id: 'MIME_IMAGE',
    howtofix: null,
    schema: []
  },
  {
    descr: 'There are almost identical h2',
    level: 2,
    activities: [],
    coderr: 'H2DUP_SIMILAR',
    name: 'Similar H2',
    id: 'H2DUP_SIMILAR',
    howtofix: '',
    schema: ['NOT AN ERROR']
  },
  {
    descr: 'This hreflang causes a redirect loop',
    level: 0,
    activities: [],
    coderr: 'HREFLANG_LINK_REDIRECTLOOP',
    name: 'Hreflang Causes Redirect Loop',
    id: 'HREFLANG_LINK_REDIRECTLOOP',
    howtofix: null,
    schema: ['B']
  },
  {
    descr: 'Ext res',
    level: 10,
    activities: [],
    coderr: 'EXT_RES',
    name: 'Ext Res',
    id: 'EXT_RES',
    howtofix: null,
    schema: []
  },
  {
    descr: 'Page links to a iframe that causes a 3xx redirect',
    level: 1,
    activities: [],
    coderr: 'IFRAME_LINK_R',
    name: 'Iframe Link Causes Redirect',
    id: 'IFRAME_LINK_R',
    howtofix:
      'Ranking, user experience as well as SEO are all badly affected by loops or chains of redirections because they make it difficult to web crawlers to navigate the site and offer a bad user experience to final users of the website It can happen that this issue is reported by crawlers and not by browsers, which does not mean that the problem does not exist. - Redirects in a chain should be limited.',
    schema: ['B']
  },
  {
    descr: 'The page does not have nofollow directive',
    level: 9,
    activities: [],
    coderr: 'META_DIRECTIVES_FOLLOW',
    name: 'Follow Directive',
    id: 'META_DIRECTIVES_FOLLOW',
    category: ['crawlability'],
    howtofix: null,
    schema: []
  },
  {
    descr: 'This resource responded with 302 http code',
    level: 2,
    activities: [],
    coderr: 'HTTP_302',
    name: '302 Response',
    id: 'HTTP_302',
    howtofix: null,
    schema: ['B']
  },
  {
    descr: 'This iframe causes a redirect chain',
    level: 1,
    activities: [],
    coderr: 'IFRAME_LINK_RC',
    name: 'Iframe Causes Redirect Chain',
    id: 'IFRAME_LINK_RC',
    howtofix: null,
    schema: ['B']
  },
  {
    descr: 'Page with duplicate title, but with his canonical',
    level: 9,
    activities: [],
    coderr: 'TITLEDUP_DUPLICATE_CANONICAL',
    name: 'Title Duplicate Canonical',
    id: 'TITLEDUP_DUPLICATE_CANONICAL',
    howtofix:
      'Duplicate title tags within web pages confuse users and do not tell search engines which is the right one for the current query it a lower chance to be indexed or the risk to be banned. Titles should be unique and contain relevant keywords.',
    schema: []
  },
  {
    descr: 'This page has multiple h1',
    level: 1,
    activities: [],
    coderr: 'H1_MULTIPLE',
    name: 'Multiple H1',
    id: 'H1_MULTIPLE',
    howtofix:
      'More than one <h1> tag is allowed in HTML5, but it is recommended to limit the tag to one so not to confuse users. You can use also <h2>. <h3>, ….',
    schema: ['B']
  },
  {
    descr: 'This url is not friendly',
    level: 1,
    activities: [],
    coderr: 'URL_NOT_FRIENDLY',
    name: 'Url Not Friendly',
    id: 'URL_NOT_FRIENDLY',
    howtofix: null,
    schema: ['A1', 'A4', 'A5', 'B']
  },
  {
    descr: 'Js all',
    level: 10,
    activities: [],
    coderr: 'JS_ALL',
    name: 'Js All',
    id: 'JS_ALL',
    howtofix: null,
    schema: []
  },
  {
    descr: 'This image alternate text is missing',
    level: 1,
    activities: [],
    coderr: 'IMG_MISSING_ALT',
    name: 'Image Alt Missing',
    id: 'IMG_MISSING_ALT',
    howtofix:
      'Alt attributes for images <img> help visually impaired users and give search engines information on your images so that they will appear in better positions in image search results. - <img> tag should have a meaningful alternative attribute for any image of the web site.',
    schema: ['B']
  },
  {
    descr: 'Page has a js src that causes a redirect to home',
    level: 0,
    activities: [],
    coderr: 'JS_REDIRECTHOME',
    name: 'Js Src Causes Redirect To Home',
    id: 'JS_REDIRECTHOME',
    howtofix: null,
    schema: ['B']
  },
  {
    descr: 'This image url causes a 4xx error',
    level: 0,
    activities: [],
    coderr: 'IMG_HTTP_4XX',
    name: 'Image Causes 4xx',
    id: 'IMG_HTTP_4XX',
    howtofix:
      'Users as well as search engines can not access pages of the web site resulting in a drop in organic traffic to the site. - You should fix these issues.',
    schema: ['B']
  },
  {
    descr: 'Meta descr all',
    level: 10,
    activities: [],
    coderr: 'META_DESCR_ALL',
    name: 'Meta Descr All',
    id: 'META_DESCR_ALL',
    howtofix: null,
    schema: []
  },
  {
    descr: 'This uurl has blank character(s)',
    level: 2,
    activities: [],
    coderr: 'URL_WITH_BLANKS',
    name: 'Url With Blanks',
    id: 'URL_WITH_BLANKS',
    howtofix: null,
    schema: ['A1', 'A4', 'A5', 'B', 'D']
  },
  {
    descr: 'Urlpag all',
    level: 10,
    activities: [],
    coderr: 'URLPAG_ALL',
    name: 'Urlpag All',
    id: 'URLPAG_ALL',
    howtofix: null,
    schema: []
  },
  {
    descr: 'This iframe causes a redirect loop',
    level: 0,
    activities: [],
    coderr: 'IFRAME_LINK_RL',
    name: 'Iframe Causes Redirect Loop',
    id: 'IFRAME_LINK_RL',
    howtofix:
      'Ranking, user experience as well as SEO are all badly affected by loops or chains of redirections because they make it difficult to web crawlers to navigate the site and offer a bad user experience to final users of the website It can happen that this issue is reported by crawlers and not by browsers, which does not mean that the problem does not exist. - Redirects in a chain should be limited.',
    schema: ['B']
  },
  {
    coderr: 'ACC_AREA_ALT',
    id: 'ACC_AREA_ALT',
    name: 'Active <area> elements must have alternate text',
    descr: 'Ensures <area> elements of image maps have alternate text',
    level: 4,
    schema: ['B'],
    activities: [],
    howtofix: null
  },
  {
    coderr: 'ACC_ARIA_ALLOWED_ATTR',
    id: 'ACC_ARIA_ALLOWED_ATTR',
    name: 'Elements must only use allowed ARIA attributes',
    descr: "Ensures ARIA attributes are allowed for an element's role",
    level: 4,
    schema: ['B'],
    activities: [],
    howtofix: null
  },
  {
    coderr: 'ACC_ARIA_COMMAND_NAME',
    id: 'ACC_ARIA_COMMAND_NAME',
    name: 'ARIA commands must have an accessible name',
    descr: 'Ensures every ARIA button, link and menuitem has an accessible name',
    level: 5,
    schema: ['B'],
    activities: [],
    howtofix: null
  },
  {
    coderr: 'ACC_ARIA_HIDDEN_BODY',
    id: 'ACC_ARIA_HIDDEN_BODY',
    name: "aria-hidden='true' must not be present on the document body",
    descr: "Ensures aria-hidden='true' is not present on the document body.",
    level: 4,
    schema: ['B'],
    activities: [],
    howtofix: null
  },
  {
    coderr: 'ACC_ARIA_HIDDEN_FOCUS',
    id: 'ACC_ARIA_HIDDEN_FOCUS',
    name: 'ARIA hidden element must not be focusable or contain focusable elements',
    descr: 'Ensures aria-hidden elements are not focusable nor contain focusable elements',
    level: 5,
    schema: ['B'],
    activities: [],
    howtofix: null
  },
  {
    coderr: 'ACC_ARIA_INPUT_FIELD_NAME',
    id: 'ACC_ARIA_INPUT_FIELD_NAME',
    name: 'ARIA input fields must have an accessible name',
    descr: 'Ensures every ARIA input field has an accessible name',
    level: 5,
    schema: ['B'],
    activities: [],
    howtofix: null
  },
  {
    coderr: 'ACC_ARIA_METER_NAME',
    id: 'ACC_ARIA_METER_NAME',
    name: 'ARIA meter nodes must have an accessible name',
    descr: 'Ensures every ARIA meter node has an accessible name',
    level: 5,
    schema: ['B'],
    activities: [],
    howtofix: null
  },
  {
    coderr: 'ACC_ARIA_PROGRESSBAR_NAME',
    id: 'ACC_ARIA_PROGRESSBAR_NAME',
    name: 'ARIA progressbar nodes must have an accessible name',
    descr: 'Ensures every ARIA progressbar node has an accessible name',
    level: 5,
    schema: ['B'],
    activities: [],
    howtofix: null
  },
  {
    coderr: 'ACC_ARIA_REQUIRED_ATTR',
    id: 'ACC_ARIA_REQUIRED_ATTR',
    name: 'Required ARIA attributes must be provided',
    descr: 'Ensures elements with ARIA roles have all required ARIA attributes',
    level: 4,
    schema: ['B'],
    activities: [],
    howtofix: null
  },
  {
    coderr: 'ACC_ARIA_REQUIRED_CHILDREN',
    id: 'ACC_ARIA_REQUIRED_CHILDREN',
    name: 'Certain ARIA roles must contain particular children',
    descr: 'Ensures elements with an ARIA role that require child roles contain them',
    level: 4,
    schema: ['B'],
    activities: [],
    howtofix: null
  },
  {
    coderr: 'ACC_ARIA_REQUIRED_PARENT',
    id: 'ACC_ARIA_REQUIRED_PARENT',
    name: 'Certain ARIA roles must be contained by particular parents',
    descr: 'Ensures elements with an ARIA role that require parent roles are contained by them',
    level: 4,
    schema: ['B'],
    activities: [],
    howtofix: null
  },
  {
    coderr: 'ACC_ARIA_ROLEDESCRIPTION',
    id: 'ACC_ARIA_ROLEDESCRIPTION',
    name: 'aria-roledescription must be on elements with a semantic role',
    descr: 'Ensure aria-roledescription is only used on elements with an implicit or explicit role',
    level: 5,
    schema: ['B'],
    activities: [],
    howtofix: null
  },
  {
    coderr: 'ACC_ARIA_ROLES',
    id: 'ACC_ARIA_ROLES',
    name: 'ARIA roles used must conform to valid values',
    descr: 'Ensures all elements with a role attribute use a valid value',
    level: 4,
    schema: ['B'],
    activities: [],
    howtofix: null
  },
  {
    coderr: 'ACC_ARIA_TOGGLE_FIELD_NAME',
    id: 'ACC_ARIA_TOGGLE_FIELD_NAME',
    name: 'ARIA toggle fields must have an accessible name',
    descr: 'Ensures every ARIA toggle field has an accessible name',
    level: 5,
    schema: ['B'],
    activities: [],
    howtofix: null
  },
  {
    coderr: 'ACC_ARIA_TOOLTIP_NAME',
    id: 'ACC_ARIA_TOOLTIP_NAME',
    name: 'ARIA tooltip nodes must have an accessible name',
    descr: 'Ensures every ARIA tooltip node has an accessible name',
    level: 5,
    schema: ['B'],
    activities: [],
    howtofix: null
  },
  {
    coderr: 'ACC_ARIA_VALID_ATTR_VALUE',
    id: 'ACC_ARIA_VALID_ATTR_VALUE',
    name: 'ARIA attributes must conform to valid values',
    descr: 'Ensures all ARIA attributes have valid values',
    level: 4,
    schema: ['B'],
    activities: [],
    howtofix: null
  },
  {
    coderr: 'ACC_ARIA_VALID_ATTR',
    id: 'ACC_ARIA_VALID_ATTR',
    name: 'ARIA attributes must conform to valid names',
    descr: 'Ensures attributes that begin with aria- are valid ARIA attributes',
    level: 4,
    schema: ['B'],
    activities: [],
    howtofix: null
  },
  {
    coderr: 'ACC_AUDIO_CAPTION',
    id: 'ACC_AUDIO_CAPTION',
    name: '<audio> elements must have a captions track',
    descr: 'Ensures <audio> elements have captions',
    level: 4,
    schema: ['B'],
    activities: [],
    howtofix: null
  },
  {
    coderr: 'ACC_BLINK',
    id: 'ACC_BLINK',
    name: '<blink> elements are deprecated and must not be used',
    descr: 'Ensures <blink> elements are not used',
    level: 5,
    schema: ['B'],
    activities: [],
    howtofix: null
  },
  {
    coderr: 'ACC_BUTTON_NAME',
    id: 'ACC_BUTTON_NAME',
    name: 'Buttons must have discernible text',
    descr: 'Ensures buttons have discernible text',
    level: 4,
    schema: ['B'],
    activities: [],
    howtofix: null
  },
  {
    coderr: 'ACC_BYPASS',
    id: 'ACC_BYPASS',
    name: 'Page must have means to bypass repeated blocks',
    descr:
      'Ensures each page has at least one mechanism for a user to bypass navigation and jump straight to the content',
    level: 5,
    schema: ['B'],
    activities: [],
    howtofix: null
  },
  {
    coderr: 'ACC_COLOR_CONTRAST',
    id: 'ACC_COLOR_CONTRAST',
    name: 'Elements must have sufficient color contrast',
    descr:
      'Ensures the contrast between foreground and background colors meets WCAG 2 AA contrast ratio thresholds',
    level: 5,
    schema: ['B'],
    activities: [],
    howtofix: null
  },
  {
    coderr: 'ACC_DEFINITION_LIST',
    id: 'ACC_DEFINITION_LIST',
    name: '<dl> elements must only directly contain properly-ordered <dt> and <dd> groups, <script>, <template> or <div> elements',
    descr: 'Ensures <dl> elements are structured correctly',
    level: 5,
    schema: ['B'],
    activities: [],
    howtofix: null
  },
  {
    coderr: 'ACC_DLITEM',
    id: 'ACC_DLITEM',
    name: '<dt> and <dd> elements must be contained by a <dl>',
    descr: 'Ensures <dt> and <dd> elements are contained by a <dl>',
    level: 5,
    schema: ['B'],
    activities: [],
    howtofix: null
  },
  {
    coderr: 'ACC_DOCUMENT_TITLE',
    id: 'ACC_DOCUMENT_TITLE',
    name: 'Documents must have <title> element to aid in navigation',
    descr: 'Ensures each HTML document contains a non-empty <title> element',
    level: 5,
    schema: ['B'],
    activities: [],
    howtofix: null
  },
  {
    coderr: 'ACC_DUPLICATE_ID_ACTIVE',
    id: 'ACC_DUPLICATE_ID_ACTIVE',
    name: 'IDs of active elements must be unique',
    descr: 'Ensures every id attribute value of active elements is unique',
    level: 5,
    schema: ['B'],
    activities: [],
    howtofix: null
  },
  {
    coderr: 'ACC_DUPLICATE_ID_ARIA',
    id: 'ACC_DUPLICATE_ID_ARIA',
    name: 'IDs used in ARIA and labels must be unique',
    descr: 'Ensures every id attribute value used in ARIA and in labels is unique',
    level: 4,
    schema: ['B'],
    activities: [],
    howtofix: null
  },
  {
    coderr: 'ACC_DUPLICATE_ID',
    id: 'ACC_DUPLICATE_ID',
    name: 'id attribute value must be unique',
    descr: 'Ensures every id attribute value is unique',
    level: 7,
    activities: [],
    howtofix: null
  },
  {
    coderr: 'ACC_FORM_FIELD_MULTIPLE_LABELS',
    id: 'ACC_FORM_FIELD_MULTIPLE_LABELS',
    name: 'Form field must not have multiple label elements',
    descr: 'Ensures form field does not have multiple label elements',
    level: 6,
    activities: [],
    howtofix: null
  },
  {
    coderr: 'ACC_FRAME_FOCUSABLE_CONTENT',
    id: 'ACC_FRAME_FOCUSABLE_CONTENT',
    name: 'Frames with focusable content must not have tabindex=-1',
    descr: 'Ensures <frame> and <iframe> elements with focusable content do not have tabindex=-1',
    level: 5,
    schema: ['B'],
    activities: [],
    howtofix: null
  },
  {
    coderr: 'ACC_FRAME_TITLE_UNIQUE',
    id: 'ACC_FRAME_TITLE_UNIQUE',
    name: 'Frames must have a unique title attribute',
    descr: 'Ensures <iframe> and <frame> elements contain a unique title attribute',
    level: 5,
    schema: ['B'],
    activities: [],
    howtofix: null
  },
  {
    coderr: 'ACC_FRAME_TITLE',
    id: 'ACC_FRAME_TITLE',
    name: 'Frames must have an accessible name',
    descr: 'Ensures <iframe> and <frame> elements have an accessible name',
    level: 5,
    schema: ['B'],
    activities: [],
    howtofix: null
  },
  {
    coderr: 'ACC_HTML_HAS_LANG',
    id: 'ACC_HTML_HAS_LANG',
    name: '<html> element must have a lang attribute',
    descr: 'Ensures every HTML document has a lang attribute',
    level: 5,
    schema: ['B'],
    activities: [],
    howtofix: null
  },
  {
    coderr: 'ACC_HTML_LANG_VALID',
    id: 'ACC_HTML_LANG_VALID',
    name: '<html> element must have a valid value for the lang attribute',
    descr: 'Ensures the lang attribute of the <html> element has a valid value',
    level: 5,
    schema: ['B'],
    activities: [],
    howtofix: null
  },
  {
    coderr: 'ACC_HTML_XML_LANG_MISMATCH',
    id: 'ACC_HTML_XML_LANG_MISMATCH',
    name: 'HTML elements with lang and xml:lang must have the same base language',
    descr:
      'Ensure that HTML elements with both valid lang and xml:lang attributes agree on the base language of the page',
    level: 6,
    activities: [],
    howtofix: null
  },
  {
    coderr: 'ACC_IMAGE_ALT',
    id: 'ACC_IMAGE_ALT',
    name: 'Images must have alternate text',
    descr: 'Ensures <img> elements have alternate text or a role of none or presentation',
    level: 4,
    schema: ['B'],
    activities: [],
    howtofix: null
  },
  {
    coderr: 'ACC_INPUT_BUTTON_NAME',
    id: 'ACC_INPUT_BUTTON_NAME',
    name: 'Input buttons must have discernible text',
    descr: 'Ensures input buttons have discernible text',
    level: 4,
    schema: ['B'],
    activities: [],
    howtofix: null
  },
  {
    coderr: 'ACC_INPUT_IMAGE_ALT',
    id: 'ACC_INPUT_IMAGE_ALT',
    name: 'Image buttons must have alternate text',
    descr: 'Ensures <input type="image"> elements have alternate text',
    level: 4,
    schema: ['B'],
    activities: [],
    howtofix: null
  },
  {
    coderr: 'ACC_LABEL',
    id: 'ACC_LABEL',
    name: 'Form elements must have labels',
    descr: 'Ensures every form element has a label',
    level: 4,
    schema: ['B'],
    activities: [],
    howtofix: null
  },
  {
    coderr: 'ACC_LINK_IN_TEXT_BLOCK',
    id: 'ACC_LINK_IN_TEXT_BLOCK',
    name: 'Links must be distinguishable without relying on color',
    descr:
      'Ensure links are distinguished from surrounding text in a way that does not rely on color',
    level: 5,
    schema: ['B'],
    activities: [],
    howtofix: null
  },
  {
    coderr: 'ACC_LINK_NAME',
    id: 'ACC_LINK_NAME',
    name: 'Links must have discernible text',
    descr: 'Ensures links have discernible text',
    level: 5,
    schema: ['B'],
    activities: [],
    howtofix: null
  },
  {
    coderr: 'ACC_LIST',
    id: 'ACC_LIST',
    name: '<ul> and <ol> must only directly contain <li>, <script> or <template> elements',
    descr: 'Ensures that lists are structured correctly',
    level: 5,
    schema: ['B'],
    activities: [],
    howtofix: null
  },
  {
    coderr: 'ACC_LISTITEM',
    id: 'ACC_LISTITEM',
    name: '<li> elements must be contained in a <ul> or <ol>',
    descr: 'Ensures <li> elements are used semantically',
    level: 5,
    schema: ['B'],
    activities: [],
    howtofix: null
  },
  {
    coderr: 'ACC_MARQUEE',
    id: 'ACC_MARQUEE',
    name: '<marquee> elements are deprecated and must not be used',
    descr: 'Ensures <marquee> elements are not used',
    level: 5,
    schema: ['B'],
    activities: [],
    howtofix: null
  },
  {
    coderr: 'ACC_META_REFRESH',
    id: 'ACC_META_REFRESH',
    name: 'Delayed refresh under 20 hours must not be used',
    descr: 'Ensures <meta http-equiv="refresh"> is not used for delayed refresh',
    level: 4,
    schema: ['B'],
    activities: [],
    howtofix: null
  },
  {
    coderr: 'ACC_META_VIEWPORT',
    id: 'ACC_META_VIEWPORT',
    name: 'Zooming and scaling must not be disabled',
    descr: 'Ensures <meta name="viewport"> does not disable text scaling and zooming',
    level: 4,
    schema: ['B'],
    activities: [],
    howtofix: null
  },
  {
    coderr: 'ACC_NESTED_INTERACTIVE',
    id: 'ACC_NESTED_INTERACTIVE',
    name: 'Interactive controls must not be nested',
    descr:
      'Ensures interactive controls are not nested as they are not always announced by screen readers or can cause focus problems for assistive technologies',
    level: 5,
    schema: ['B'],
    activities: [],
    howtofix: null
  },
  {
    coderr: 'ACC_NO_AUTOPLAY_AUDIO',
    id: 'ACC_NO_AUTOPLAY_AUDIO',
    name: '<video> or <audio> elements must not play automatically',
    descr:
      'Ensures <video> or <audio> elements do not autoplay audio for more than 3 seconds without a control mechanism to stop or mute the audio',
    level: 6,
    activities: [],
    howtofix: null
  },
  {
    coderr: 'ACC_OBJECT_ALT',
    id: 'ACC_OBJECT_ALT',
    name: '<object> elements must have alternate text',
    descr: 'Ensures <object> elements have alternate text',
    level: 5,
    schema: ['B'],
    activities: [],
    howtofix: null
  },
  {
    coderr: 'ACC_ROLE_IMG_ALT',
    id: 'ACC_ROLE_IMG_ALT',
    name: "[role='img'] elements must have an alternative text",
    descr: "Ensures [role='img'] elements have alternate text",
    level: 5,
    schema: ['B'],
    activities: [],
    howtofix: null
  },
  {
    coderr: 'ACC_SCROLLABLE_REGION_FOCUSABLE',
    id: 'ACC_SCROLLABLE_REGION_FOCUSABLE',
    name: 'Scrollable region must have keyboard access',
    descr: 'Ensure elements that have scrollable content are accessible by keyboard',
    level: 6,
    activities: [],
    howtofix: null
  },
  {
    coderr: 'ACC_SELECT_NAME',
    id: 'ACC_SELECT_NAME',
    name: 'Select element must have an accessible name',
    descr: 'Ensures select element has an accessible name',
    level: 4,
    schema: ['B'],
    activities: [],
    howtofix: null
  },
  {
    coderr: 'ACC_SERVER_SIDE_IMAGE_MAP',
    id: 'ACC_SERVER_SIDE_IMAGE_MAP',
    name: 'Server-side image maps must not be used',
    descr: 'Ensures that server-side image maps are not used',
    level: 7,
    activities: [],
    howtofix: null
  },
  {
    coderr: 'ACC_SVG_IMG_ALT',
    id: 'ACC_SVG_IMG_ALT',
    name: '<svg> elements with an img role must have an alternative text',
    descr:
      'Ensures <svg> elements with an img, graphics-document or graphics-symbol role have an accessible text',
    level: 5,
    schema: ['B'],
    activities: [],
    howtofix: null
  },
  {
    coderr: 'ACC_TD_HEADERS_ATTR',
    id: 'ACC_TD_HEADERS_ATTR',
    name: 'Table cells that use the headers attribute must only refer to cells in the same table',
    descr:
      'Ensure that each cell in a table that uses the headers attribute refers only to other cells in that table',
    level: 5,
    schema: ['B'],
    activities: [],
    howtofix: null
  },
  {
    coderr: 'ACC_TH_HAS_DATA_CELLS',
    id: 'ACC_TH_HAS_DATA_CELLS',
    name: 'Table headers in a data table must refer to data cells',
    descr:
      'Ensure that <th> elements and elements with role=columnheader/rowheader have data cells they describe',
    level: 5,
    schema: ['B'],
    activities: [],
    howtofix: null
  },
  {
    coderr: 'ACC_VALID_LANG',
    id: 'ACC_VALID_LANG',
    name: 'lang attribute must have a valid value',
    descr: 'Ensures lang attributes have valid values',
    level: 5,
    schema: ['B'],
    activities: [],
    howtofix: null
  },
  {
    coderr: 'ACC_VIDEO_CAPTION',
    id: 'ACC_VIDEO_CAPTION',
    name: '<video> elements must have captions',
    descr: 'Ensures <video> elements have captions',
    level: 4,
    schema: ['B'],
    activities: [],
    howtofix: null
  },
  {
    coderr: 'ACC_AUTOCOMPLETE_VALID',
    id: 'ACC_AUTOCOMPLETE_VALID',
    name: 'autocomplete attribute must be used correctly',
    descr: 'Ensure the autocomplete attribute is correct and suitable for the form field',
    level: 5,
    schema: ['B'],
    activities: [],
    howtofix: null
  },
  {
    coderr: 'ACC_AVOID_INLINE_SPACING',
    id: 'ACC_AVOID_INLINE_SPACING',
    name: 'Inline text spacing must be adjustable with custom stylesheets',
    descr:
      'Ensure that text spacing set through style attributes can be adjusted with custom stylesheets',
    level: 5,
    schema: ['B'],
    activities: [],
    howtofix: null
  },
  {
    coderr: 'ACC_TARGET_SIZE',
    id: 'ACC_TARGET_SIZE',
    name: 'All touch targets must be 24px large, or leave sufficient space',
    descr: 'Ensure touch target have sufficient size and space',
    level: 5,
    schema: ['B'],
    activities: [],
    howtofix: null
  },
  {
    coderr: 'ACC_ACCESSKEYS',
    id: 'ACC_ACCESSKEYS',
    name: 'accesskey attribute value should be unique',
    descr: 'Ensures every accesskey attribute value is unique',
    level: 5,
    schema: ['B'],
    activities: [],
    howtofix: null
  },
  {
    coderr: 'ACC_ARIA_ALLOWED_ROLE',
    id: 'ACC_ARIA_ALLOWED_ROLE',
    name: 'ARIA role should be appropriate for the element',
    descr: 'Ensures role attribute has an appropriate value for the element',
    level: 7,
    activities: [],
    howtofix: null
  },
  {
    coderr: 'ACC_ARIA_DIALOG_NAME',
    id: 'ACC_ARIA_DIALOG_NAME',
    name: 'ARIA dialog and alertdialog nodes should have an accessible name',
    descr: 'Ensures every ARIA dialog and alertdialog node has an accessible name',
    level: 5,
    schema: ['B'],
    activities: [],
    howtofix: null
  },
  {
    coderr: 'ACC_ARIA_TEXT',
    id: 'ACC_ARIA_TEXT',
    name: '"role=text" should have no focusable descendants',
    descr: 'Ensures "role=text" is used on elements with no focusable descendants',
    level: 5,
    schema: ['B'],
    activities: [],
    howtofix: null
  },
  {
    coderr: 'ACC_ARIA_TREEITEM_NAME',
    id: 'ACC_ARIA_TREEITEM_NAME',
    name: 'ARIA treeitem nodes should have an accessible name',
    descr: 'Ensures every ARIA treeitem node has an accessible name',
    level: 5,
    schema: ['B'],
    activities: [],
    howtofix: null
  },
  {
    coderr: 'ACC_EMPTY_HEADING',
    id: 'ACC_EMPTY_HEADING',
    name: 'Headings should not be empty',
    descr: 'Ensures headings have discernible text',
    level: 7,
    activities: [],
    howtofix: null
  },
  {
    coderr: 'ACC_EMPTY_TABLE_HEADER',
    id: 'ACC_EMPTY_TABLE_HEADER',
    name: 'Table header text should not be empty',
    descr: 'Ensures table headers have discernible text',
    level: 7,
    activities: [],
    howtofix: null
  },
  {
    coderr: 'ACC_FRAME_TESTED',
    id: 'ACC_FRAME_TESTED',
    name: 'Frames should be tested with axe-core',
    descr: 'Ensures <iframe> and <frame> elements contain the axe-core script',
    level: 4,
    schema: ['B'],
    activities: [],
    howtofix: null
  },
  {
    coderr: 'ACC_HEADING_ORDER',
    id: 'ACC_HEADING_ORDER',
    name: 'Heading levels should only increase by one',
    descr: 'Ensures the order of headings is semantically correct',
    level: 6,
    activities: [],
    howtofix: null
  },
  {
    coderr: 'ACC_IMAGE_REDUNDANT_ALT',
    id: 'ACC_IMAGE_REDUNDANT_ALT',
    name: 'Alternative text of images should not be repeated as text',
    descr: 'Ensure image alternative is not repeated as text',
    level: 7,
    activities: [],
    howtofix: null
  },
  {
    coderr: 'ACC_LABEL_TITLE_ONLY',
    id: 'ACC_LABEL_TITLE_ONLY',
    name: 'Form elements should have a visible label',
    descr:
      'Ensures that every form element has a visible label and is not solely labeled using hidden labels, or the title or aria-describedby attributes',
    level: 5,
    schema: ['B'],
    activities: [],
    howtofix: null
  },
  {
    coderr: 'ACC_LANDMARK_BANNER_IS_TOP_LEVEL',
    id: 'ACC_LANDMARK_BANNER_IS_TOP_LEVEL',
    name: 'Banner landmark should not be contained in another landmark',
    descr: 'Ensures the banner landmark is at top level',
    level: 6,
    activities: [],
    howtofix: null
  },
  {
    coderr: 'ACC_LANDMARK_COMPLEMENTARY_IS_TOP_LEVEL',
    id: 'ACC_LANDMARK_COMPLEMENTARY_IS_TOP_LEVEL',
    name: 'Aside should not be contained in another landmark',
    descr: 'Ensures the complementary landmark or aside is at top level',
    level: 6,
    activities: [],
    howtofix: null
  },
  {
    coderr: 'ACC_LANDMARK_CONTENTINFO_IS_TOP_LEVEL',
    id: 'ACC_LANDMARK_CONTENTINFO_IS_TOP_LEVEL',
    name: 'Contentinfo landmark should not be contained in another landmark',
    descr: 'Ensures the contentinfo landmark is at top level',
    level: 6,
    activities: [],
    howtofix: null
  },
  {
    coderr: 'ACC_LANDMARK_MAIN_IS_TOP_LEVEL',
    id: 'ACC_LANDMARK_MAIN_IS_TOP_LEVEL',
    name: 'Main landmark should not be contained in another landmark',
    descr: 'Ensures the main landmark is at top level',
    level: 6,
    activities: [],
    howtofix: null
  },
  {
    coderr: 'ACC_LANDMARK_NO_DUPLICATE_BANNER',
    id: 'ACC_LANDMARK_NO_DUPLICATE_BANNER',
    name: 'Document should not have more than one banner landmark',
    descr: 'Ensures the document has at most one banner landmark',
    level: 6,
    activities: [],
    howtofix: null
  },
  {
    coderr: 'ACC_LANDMARK_NO_DUPLICATE_CONTENTINFO',
    id: 'ACC_LANDMARK_NO_DUPLICATE_CONTENTINFO',
    name: 'Document should not have more than one contentinfo landmark',
    descr: 'Ensures the document has at most one contentinfo landmark',
    level: 6,
    activities: [],
    howtofix: null
  },
  {
    coderr: 'ACC_LANDMARK_NO_DUPLICATE_MAIN',
    id: 'ACC_LANDMARK_NO_DUPLICATE_MAIN',
    name: 'Document should not have more than one main landmark',
    descr: 'Ensures the document has at most one main landmark',
    level: 6,
    activities: [],
    howtofix: null
  },
  {
    coderr: 'ACC_LANDMARK_ONE_MAIN',
    id: 'ACC_LANDMARK_ONE_MAIN',
    name: 'Document should have one main landmark',
    descr: 'Ensures the document has a main landmark',
    level: 6,
    activities: [],
    howtofix: null
  },
  {
    coderr: 'ACC_LANDMARK_UNIQUE',
    id: 'ACC_LANDMARK_UNIQUE',
    name: 'Ensures landmarks are unique',
    descr:
      'Landmarks should have a unique role or role/label/title (i.e. accessible name) combination',
    level: 6,
    activities: [],
    howtofix: null
  },
  {
    coderr: 'ACC_META_VIEWPORT_LARGE',
    id: 'ACC_META_VIEWPORT_LARGE',
    name: 'Users should be able to zoom and scale the text up to 500%',
    descr: 'Ensures <meta name="viewport"> can scale a significant amount',
    level: 7,
    activities: [],
    howtofix: null
  },
  {
    coderr: 'ACC_PAGE_HAS_HEADING_ONE',
    id: 'ACC_PAGE_HAS_HEADING_ONE',
    name: 'Page should contain a level-one heading',
    descr: 'Ensure that the page, or at least one of its frames contains a level-one heading',
    level: 6,
    activities: [],
    howtofix: null
  },
  {
    coderr: 'ACC_PRESENTATION_ROLE_CONFLICT',
    id: 'ACC_PRESENTATION_ROLE_CONFLICT',
    name: 'Ensure elements marked as presentational are consistently ignored',
    descr:
      'Elements marked as presentational should not have global ARIA or tabindex to ensure all screen readers ignore them',
    level: 7,
    activities: [],
    howtofix: null
  },
  {
    coderr: 'ACC_REGION',
    id: 'ACC_REGION',
    name: 'All page content should be contained by landmarks',
    descr: 'Ensures all page content is contained by landmarks',
    level: 6,
    activities: [],
    howtofix: null
  },
  {
    coderr: 'ACC_SCOPE_ATTR_VALID',
    id: 'ACC_SCOPE_ATTR_VALID',
    name: 'scope attribute should be used correctly',
    descr: 'Ensures the scope attribute is used correctly on tables',
    level: 4,
    schema: ['B'],
    activities: [],
    howtofix: null
  },
  {
    coderr: 'ACC_SKIP_LINK',
    id: 'ACC_SKIP_LINK',
    name: 'The skip-link target should exist and be focusable',
    descr: 'Ensure all skip links have a focusable target',
    level: 6,
    activities: [],
    howtofix: null
  },
  {
    coderr: 'ACC_TABINDEX',
    id: 'ACC_TABINDEX',
    name: 'Elements should not have tabindex greater than zero',
    descr: 'Ensures tabindex attribute values are not greater than 0',
    level: 5,
    schema: ['B'],
    activities: [],
    howtofix: null
  },
  {
    coderr: 'ACC_TABLE_DUPLICATE_NAME',
    id: 'ACC_TABLE_DUPLICATE_NAME',
    name: 'tables should not have the same summary and caption',
    descr: 'Ensure the <caption> element does not contain the same text as the summary attribute',
    level: 7,
    activities: [],
    howtofix: null
  },
  {
    coderr: 'ACC_COLOR_CONTRAST_ENHANCED',
    id: 'ACC_COLOR_CONTRAST_ENHANCED',
    name: 'Elements must have sufficient color contrast',
    descr:
      'Ensures the contrast between foreground and background colors meets WCAG 2 AAA contrast ratio thresholds',
    level: 5,
    schema: ['B'],
    activities: [],
    howtofix: null
  },
  {
    coderr: 'ACC_IDENTICAL_LINKS_SAME_PURPOSE',
    id: 'ACC_IDENTICAL_LINKS_SAME_PURPOSE',
    name: 'Links with the same name must have a similar purpose',
    descr: 'Ensure that links with the same accessible name serve a similar purpose',
    level: 7,
    activities: [],
    howtofix: null
  },
  {
    coderr: 'ACC_META_REFRESH_NO_EXCEPTIONS',
    id: 'ACC_META_REFRESH_NO_EXCEPTIONS',
    name: 'Delayed refresh must not be used',
    descr: 'Ensures <meta http-equiv="refresh"> is not used for delayed refresh',
    level: 7,
    activities: [],
    howtofix: null
  },
  {
    coderr: 'ACC_CSS_ORIENTATION_LOCK',
    id: 'ACC_CSS_ORIENTATION_LOCK',
    name: 'CSS Media queries must not lock display orientation',
    descr:
      'Ensures content is not locked to any specific display orientation, and the content is operable in all display orientations',
    level: 5,
    schema: ['B'],
    activities: [],
    howtofix: null
  },
  {
    coderr: 'ACC_FOCUS_ORDER_SEMANTICS',
    id: 'ACC_FOCUS_ORDER_SEMANTICS',
    name: 'Elements in the focus order should have an appropriate role',
    descr: 'Ensures elements in the focus order have a role appropriate for interactive content',
    level: 7,
    activities: [],
    howtofix: null
  },
  {
    coderr: 'ACC_HIDDEN_CONTENT',
    id: 'ACC_HIDDEN_CONTENT',
    name: 'Hidden content on the page should be analyzed',
    descr: 'Informs users about hidden content.',
    level: 7,
    activities: [],
    howtofix: null
  },
  {
    coderr: 'ACC_LABEL_CONTENT_NAME_MISMATCH',
    id: 'ACC_LABEL_CONTENT_NAME_MISMATCH',
    name: 'Elements must have their visible text as part of their accessible name',
    descr:
      'Ensures that elements labelled through their content must have their visible text as part of their accessible name',
    level: 5,
    schema: ['B'],
    activities: [],
    howtofix: null
  },
  {
    coderr: 'ACC_P_AS_HEADING',
    id: 'ACC_P_AS_HEADING',
    name: 'Styled <p> elements must not be used as headings',
    descr: 'Ensure bold, italic text and font-size is not used to style <p> elements as a heading',
    level: 5,
    schema: ['B'],
    activities: [],
    howtofix: null
  },
  {
    coderr: 'ACC_TABLE_FAKE_CAPTION',
    id: 'ACC_TABLE_FAKE_CAPTION',
    name: 'Data or header cells must not be used to give caption to a data table.',
    descr: 'Ensure that tables with a caption use the <caption> element.',
    level: 5,
    schema: ['B'],
    activities: [],
    howtofix: null
  },
  {
    coderr: 'ACC_TD_HAS_HEADER',
    id: 'ACC_TD_HAS_HEADER',
    name: 'Non-empty <td> elements in larger <table> must have an associated table header',
    descr:
      'Ensure that each non-empty data cell in a <table> larger than 3 by 3 has one or more table headers',
    level: 4,
    schema: ['B'],
    activities: [],
    howtofix: null
  }
];
