import React, { useState, useEffect } from 'react'
import { Menu } from 'antd'
import { Link, withRouter } from 'react-router-dom'
import menus, { IFMenu, IFMenuBase } from '@/router/config'
import {
  HomeOutlined,
  UnorderedListOutlined,
  PicLeftOutlined,
  CheckSquareOutlined,
  UsergroupAddOutlined,
  IdcardOutlined,
  CarOutlined,
  ContainerOutlined,
  FormOutlined,
  SettingOutlined,
  DeploymentUnitOutlined,
  DatabaseOutlined,
} from '@ant-design/icons'
const { Item, SubMenu } = Menu

// 图标map表
const iconMap: any = {
  HomeOutlined: <HomeOutlined />,
  UnorderedListOutlined: <UnorderedListOutlined />,
  PicLeftOutlined: <PicLeftOutlined />,
  CheckSquareOutlined: <CheckSquareOutlined />,
  UsergroupAddOutlined: <UsergroupAddOutlined />,
  IdcardOutlined: <IdcardOutlined />,
  CarOutlined: <CarOutlined />,
  ContainerOutlined: <ContainerOutlined />,
  SettingOutlined: <SettingOutlined />,
  FormOutlined: <FormOutlined />,
  DeploymentUnitOutlined: <DeploymentUnitOutlined />,
  DatabaseOutlined: <DatabaseOutlined />,
}
// 生成菜单
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

const SiderMenu = (props: any): any => {
  const [openKeys, setOpenKeys] = useState<any>([])
  const [selectedKey, setSelectedKey] = useState('')

  const getOpenAndSelectKeys = (props: any) => {
    const { location } = props
    const { pathname } = location
    return {
      openKeys: recombineOpenKeys(pathname.match(/[/](\w+)/gi) || []),
      selectedKey: pathname,
    }
  }

  const recombineOpenKeys = (openKeys: string[]) => {
    let i = 0
    let strPlus = ''
    const tempKeys: string[] = []
    while (i < openKeys.length) {
      strPlus += openKeys[i]
      tempKeys.push(strPlus)
      i++
    }
    return tempKeys
  }

  const menuClick = (e: any) => {
    setSelectedKey(e.key)
  }
  const openMenu: any = (v: string[]) => {
    setOpenKeys(v)
  }

  useEffect(() => {
    const { openKeys, selectedKey } = getOpenAndSelectKeys(props)
    setOpenKeys(openKeys)
    setSelectedKey(selectedKey)
  }, [props.location.pathname])

  return (
    <Menu
      mode="inline"
      theme="dark"
      openKeys={openKeys}
      onOpenChange={openMenu}
      selectedKeys={[selectedKey]}
      onClick={menuClick}
    >
      {generateMenus(menus.menus)}
    </Menu>
  )
}

export default withRouter(SiderMenu)
