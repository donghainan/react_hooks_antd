import React, { useEffect } from 'react'
import { Layout } from 'antd'
const { Sider } = Layout
import SiderMenu from '../Menu'

interface IProps {
  collapsed: boolean
}

const SiderBar = (props: IProps): any => {
  useEffect(() => {}, [props])
  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={props.collapsed}
      className="global-sider"
      theme="dark"
    >
      <div className="logo" />
      <SiderMenu />
    </Sider>
  )
}
export default SiderBar
