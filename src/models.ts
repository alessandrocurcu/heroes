export interface BaseResource {
  id: string;
  label?: string;
  slug?: string;
}

export interface ChartDataSource {
  argument: string;
  value?: number;
  value1?: number;
  value2?: number;
  color?: string;
}
export interface ChartProps {
  dataSource: ChartDataSource[];
  series?: any;
  isLoading?: boolean;
  error?: any;
  options?: any;
}

export interface Crawl extends BaseResource {
  date: string;
  dateUI: any;
  settings?: any;
}

type ProjectStatus = 0 | 1 | 3 | 5 | 7 | 9;

export interface Project extends BaseResource {
  instanceId: string;
  domainId: number;
  businessesIds: string[];
  seedUrl: string;
  domainData?: {
    id: string;
    root: string;
    langUi: string;
    domainListed: string;
    serverNode?: string;
  };
  crawlsTotal: number;
  crawls: Record<string, Crawl>;
  status: ProjectStatus;
  lastCrawlDate: string;
}

export interface ProjectStore {
  projects: Project[] | null;
  isLoadingProjects: boolean;
  selectedProject: Project | undefined;
  selectedCrawl: Crawl | undefined;
  isSettingProject: boolean;
  issuesOfAllCrawlsByProject: any;
  issuesOfAllCrawlsByProjectWithNoZero: any;
  strategy: any;
  strategyIsLoading: boolean;
}

export interface ProjectSite {
  id: string;
  label: string;
  instanceId: string;
  domainId: number;
  client: string;
}
export interface ProjectApi {
  site: ProjectSite;
  scans: any[];
  seeds: string[];
  runInfo: {
    status: ProjectStatus;
  };
}

export interface User extends BaseResource {
  instances: InstanceApi[];
  business: string;
  menu: string[];
  userOldApi: UserApi;
  permissions: any;
}

export interface UserStore {
  users: User[] | null;
  isLoadingUsers: boolean;
  selectedUser: User | undefined;
  userToEdit: User | undefined;
  selectedUserBusiness: Business | undefined;
  adminUsers: string[];
}

export interface UserApi {
  admin: boolean;
  cognome: string;
  instances: InstanceApi[];
  kclient: string;
  login: string;
  menu: string[];
  nome: string;
  permissions: string;
  settings: any;
}

export interface Domain {
  id: number;
  domain: string;
  lang: string;
  country: string;
  subfolder: string;
  is_default: boolean;
  server_baseurl: string;
  ssl: boolean;
  explicit_url_lang: boolean;
  server_langurl: string;
  server_ip: string;
  forceNoWww: boolean;
  root: string;
  langUi: string;
  domainListed: string;
}
// FIXME: Nell'interfaccia sotto "id" scende sempre vuoto
export interface InstanceApi {
  id: string;
  instanceId: string;
  roles: string[];
  serverUrl: string | null;
}
export interface Instance extends BaseResource {
  instanceId: string;
  node?: string;
  apikbase?: string;
  isEnabled?: boolean;
  roles?: string[];
  serverUrl?: string | null;
  projects?: number;
  projectsDetail?: any[];
  businessesIds?: any[];
  domains?: any[];
  seoToolsToken?: string;
  seoTechStatus: any;
}

export interface InstanceStore {
  instances: Instance[] | undefined;
  isLoadingInstances: boolean;
  isSettingInstance: boolean;
  selectedInstance: Instance | undefined;
  selectedDomain: Domain | undefined;
  isInizializingApplication: boolean;
}

export interface BusinessApi {
  fulladdress: string;
  instances: InstanceApi[];
  isDisabled: boolean | null;
  label: string;
  menu: string[];
  permissions: string;
  piva: string;
  ragsoc: string;
}

export interface Business extends BaseResource {
  instances: InstanceApi[];
  isDisabled: boolean;
  users: User[];
  businessOldApi: BusinessApi;
  permissions: any;
  techRestrictions: string[];
}
export interface BusinessStore {
  businesses: Business[] | null;
  isLoadingBusinesses: boolean;
  selectedBusiness: Business | undefined;
  businessToEdit: Business | undefined;
}
export interface Issue extends BaseResource {
  level?: number | string;
  shortDescription?: string;
  howtofix?: string;
  activities?: Activity[];
  category?: string;
  schema?: string[];
  type: number | string;
  md?: string;
}
export interface IssueStore {
  issues: any[];
  isLoadingIssues: boolean;
}
export interface IssueApi {
  coderr: string;
  descr: string;
  howtofix: string;
  id: string;
  level: number | string;
  category: string[];
  name: string;
  activities: any[];
  schema: string[];
}

export interface Task extends BaseResource {
  owner: number;
  status: string;
  description: string;
  instanceId: string;
  propertiesSaved: number;
  propertiesPublished: number;
}

export interface Entity {
  url: string;
  cas: string;
  data: PropertyStringa | any;
  hideInTimeline: string;
  when: string;
  publish: string;
  who: string;
}
export interface PropertyStringa {
  testo: string;
}

export interface Fix extends BaseResource {
  urls: { url: string; pageType: string; status: string }[];
  status: string;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
  projectId: string;
  instanceId: string;
  issueId: string;
}
export interface Property extends BaseResource {
  nameFile: string;
  description: string;
}
export interface PropertyGroup extends BaseResource {
  properties: Property[];
}
export interface Activity extends BaseResource {
  items?: (Property | PropertyGroup)[];
}
