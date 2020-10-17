import React from 'react'
import { Menu } from 'antd'
import { Link } from 'react-router-dom'
import menus, { IFMenu, IFMenuBase } from '@/router/config'
import { PieChartOutlined } from '@ant-design/icons'
const { Item, SubMenu } = Menu

const iconMap: any = {
  PieChartOutlined: <PieChartOutlined />,
}

const generateMenus = (menus: IFMenuBase[]) => {
  return menus.map((item: IFMenu) => {
    if (item.subs && item.subs?.length) {
      return (
        <SubMenu
          key={item.key}
          title={
            <>
              {item.icon && iconMap[item.icon]}
              <span>{item.title}</span>
            </>
          }
        >
          {generateMenus(item.subs)}
        </SubMenu>
      )
    }
    return (
      !item.hide && (
        <Item key={item.key}>
          <Link
            to={(item.route || item.key) + '?' + (item.query || '')}
            target={item.target || '_self'}
          >
            {item.icon && iconMap[item.icon]}
            <span>{item.title}</span>
          </Link>
        </Item>
      )
    )
  })
}
const SiderMenu = (): any => {
  return <Menu mode="inline">{generateMenus(menus.menus)}</Menu>
}

export default SiderMenu
