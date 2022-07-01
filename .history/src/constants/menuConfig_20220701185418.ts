
interface MenuItem {
  id: string;
  resourceName: string;
  resourceCode: string;
  parentId: string | null;
  systemId: string;
  resourceType: number;
  memos: string;
  sortIndex: number;
  isEnable: number;
  tenantId: string;
  createUserId: string;
  createTime: number;
  updateUserId: string;
  updateTime: number;
  businessId: string;
  available: number;
  obligate1: string;
  obligate2: string;
  obligate3: string;
  obligate4: string
  obligate5: string;
  path: string;
  icon?: any;
  children: MenuItem[];
  routes?: MenuItem[];
}

const MENU_ICONS = {
  codeManage: 'udian-code',
  codeManageOn: 'udian-codebeifen',
  violates: 'udian-a-getoutofline1',
  violatesOn: 'udian-a-getoutoflinebeifen',
  lineSafety: 'udian-safety1',
  lineSafetyOn: 'udian-safetybeifen',
  driverManage: 'udian-a-earlywarning',
  driverManageOn: 'udian-a-earlywarningbeifen',
  accidentManage: 'udian-img-icon udian-a-accident',
  accidentManageOn: 'udian-img-icon-on udian-a-accident-on',
}


export {
  MenuItem,
  MENU_ICONS
}