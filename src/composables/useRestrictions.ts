import { ref } from 'vue';
export default function useRestrictions(options: any = {}) {
  const oldRoles = [
    'seoaudit_editor',
    'settings_ro',
    'admin',
    'copy',
    'keywords_admin',
    'keywords_editor',
    'base',
    'seo_specialist',
    'seo_specialist_limited',
    'backlinks_editor'
  ];
  const kleecksOldRoles = [
    'superuser',
    'seoaudit_editor',
    'settings_ro',
    'admin',
    'copy',
    'keywords_admin',
    'keywords_editor',
    'base',
    'seo_specialist',
    'seo_specialist_limited',
    'users_admin',
    'backlinks_editor',
    'ai_enabled',
    'demo_no_save'
  ];
  const restrictionsDescription = [
    {
      id: 'handleProjects',
      label: 'Create Project',
      description: 'Occhio - Per ora non dare a nessuno questo permesso',
      default: false,
      type: 'hide'
    },
    {
      id: 'handleCrawls',
      label: 'Run Audit',
      description: 'Business can run at most 5 audits every month for every project',
      default: false,
      headerFilter: true,
      type: 'checkbox',
      onChange: options.handleCrawlsOnChange
        ? options.handleCrawlsOnChange
        : (value: any) => {
            value ? (restrictions.value.numOfCrawls = 5) : (restrictions.value.numOfCrawls = 0);
          }
    },
    {
      id: 'competitors',
      label: 'Competitors Compare',
      description: '',
      headerFilter: true,
      default: false,
      type: 'hide'
    },
    {
      id: 'accessibility',
      label: 'Accessibility',
      description:
        'This will allow the user to see the accessibility report in the Audit, provided the Audit has been configured to run the accessibility check',
      headerFilter: true,
      default: false,
      type: 'checkbox'
    },
    {
      id: 'onlyStrategy',
      label: 'Only Strategy',
      description:
        'È un permesso particolare creato per i clienti di Jakala che avevano la necessità di vedere solo alcune voci dei rapporti strategy',
      headerFilter: true,
      default: false,
      type: 'checkbox'
    },
    {
      id: 'JakalaMSC',
      label: 'Jakala MSC',
      description: 'È un permesso particolare creato per Jakala MSC',
      headerFilter: true,
      default: false,
      type: 'checkbox'
    },
    {
      id: 'contentGeneration',
      label: 'Content Generation',
      description:
        'This allows the users to access the content generation tool in the Strategy. An Instance is required.',
      headerFilter: true,
      default: false,
      type: 'checkbox'
    },
    {
      id: 'aiKeywordResearch',
      label: 'AI Keyword Research',
      description:
        'This allows the users to access the AI Keyword Research tool in the Strategy. An Instance is required.',
      headerFilter: true,
      default: false,
      type: 'checkbox'
    },
    {
      id: 'writeSeotool',
      label: 'Access Seo Tool',
      headerFilter: true,
      description: 'This allows the users to access the SEO Tool. An Instance is required.',
      default: false,
      type: 'checkbox'
    },
    {
      id: 'setInstances',
      default: false,
      type: 'deprecated'
    },
    {
      id: 'numOfInstances',
      default: 0,
      type: 'deprecated'
    },
    {
      id: 'numOfProjects',
      default: 0,
      type: 'hide'
    },
    {
      id: 'numOfCrawls',
      default: 0,
      type: 'hide'
    },
    {
      id: 'numOfKeywords',
      default: 500,
      type: 'hide'
    },
    // TODO: Controlla, questo viene mai usato?
    {
      id: 'numOfBacklinks',
      default: 500,
      type: 'deprecated'
    },
    {
      id: 'publishFromTimeline',
      default: false,
      type: 'deprecated'
    },
    {
      id: 'writeTitlesAudit',
      default: false,
      type: 'deprecated'
    },
    {
      id: 'writeDescriptionsAudit',
      default: false,
      type: 'deprecated'
    },
    {
      id: 'writeTreeMan',
      default: false,
      type: 'deprecated'
    },
    {
      id: 'writeTreeStructRep',
      default: false,
      type: 'deprecated'
    },
    {
      id: 'writeStrategy',
      default: false,
      type: 'deprecated'
    },
    {
      id: 'writeBacklinks',
      default: false,
      type: 'deprecated'
    },
    {
      id: 'guestView',
      default: false,
      type: 'deprecated'
    },
    {
      // Enable to set Widget restrictions
      id: 'writeSeotech',
      label: 'Access Seo Tech',
      description:
        'This allows the users to access the SEO Tech. An Instance is required. You have to define also the properties allowed in the tab above.',
      category: 'advanced',
      headerFilter: true,
      default: false,
      type: 'checkbox',
      onChange: options.writeSeotechOnChange
        ? options.writeSeotechOnChange
        : () => {
            // restrictions.value['writeSeotech'] =
            //   !restrictions.value['writeSeotech'];
            if (restrictions.value['writeSeotech'] === false) {
              restrictionsDescription.forEach((item: any) => {
                if (item.category === 'advanced' && item.id !== 'writeSeotech') {
                  restrictions.value[item.id] = false;
                }
              });
            }
          }
    }
  ];
  const restrictions = ref(
    restrictionsDescription.reduce((acc: any, curr: any) => {
      acc[curr.id] = curr.default;
      return acc;
    }, {})
  );

  const dxHeaderFilterRestrictionsDataSource = restrictionsDescription.reduce(
    (acc: any, _restriction: any) => {
      if (!_restriction.headerFilter) return acc;
      acc.push({
        text: _restriction.label,
        value: _restriction.id
      });
      return acc;
    },
    []
  );
  return {
    oldRoles,
    kleecksOldRoles,
    restrictions,
    restrictionsDescription,
    dxHeaderFilterRestrictionsDataSource
  };
}
