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
    {
      key: '/tms/dashboard',
      title: '首页',
      icon: 'PieChartOutlined',
      component: 'views/Dashboard',
    },
    {
      key: '/tms/notfound',
      title: '404',
      icon: 'PieChartOutlined',
      component: 'views/NotFound',
      subs: [
        {
          key: '/tms/login',
          title: '登录页',
          icon: 'PieChartOutlined',
          component: 'views/Login',
        },
      ],
    },
  ],
}
export default menus
