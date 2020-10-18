// 路由元信息接口
export interface IFMenuBase {
  key: string // 路由地址 & 唯一标识
  title: string // 菜单名称
  icon?: string // 图标
  component?: string // 组件名称
  query?: string // query查询
  route?: string // 路由地址
  /** 是否登录校验，true不进行校验（访客） */
  login?: boolean // 是否需要登录
  requireAuth?: string // 权限
  target?: string // 页面打开类型， self和_blank 默认self
  hide?: boolean // 是否为隐藏路由
  sort?: number //菜单排序
}

// 路由子集信息
export interface IFMenu extends IFMenuBase {
  subs?: IFMenu[]
}

const menus: {
  menus: IFMenu[]
  [index: string]: any
} = {
  menus: [
    // 菜单相关路由
    {
      key: '/tms/dashboard',
      title: '首页',
      icon: 'HomeOutlined',
      component: 'views/Dashboard',
    },
    {
      key: '/tms/order',
      title: '订单管理',
      icon: 'UnorderedListOutlined',
      subs: [],
    },
    {
      key: '/tms/waybill',
      title: '运单管理',
      icon: 'PicLeftOutlined',
      subs: [],
    },
    {
      key: '/tms/examine',
      title: '审核管理',
      icon: 'CheckSquareOutlined',
      subs: [],
    },
    {
      key: '/tms/partner',
      title: '伙伴管理',
      icon: 'UsergroupAddOutlined',
    },
    {
      key: '/tms/driver',
      title: '司机管理',
      icon: 'IdcardOutlined',
    },
    {
      key: '/tms/vehicle',
      title: '车辆管理',
      icon: 'CarOutlined',
    },
    {
      key: '/tms/contract',
      title: '合同管理',
      icon: 'ContainerOutlined',
    },
    {
      key: '/tms/settle',
      title: '结算管理',
      icon: 'FormOutlined',
    },
    {
      key: '/tms/system',
      title: '系统管理',
      icon: 'SettingOutlined',
      subs: []
    },
    {
      key: '/tms/setting',
      title: '配置中心',
      icon: 'DeploymentUnitOutlined',
      subs: []
    },
    {
      key: '/tms/dataCenter',
      title: '数据中心',
      icon: 'DatabaseOutlined',
    },
  ],
}
export default menus
