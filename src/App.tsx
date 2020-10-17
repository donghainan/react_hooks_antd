import React, { useState } from 'react'
import { Layout } from 'antd'
import '@/assets/styles/app.less'
import Routes from '@/router'
import { Header, SiderBar } from '@/components'
const { Content } = Layout

const App = (): any => {
  const [collapsed, setCollapsed] = useState<boolean>(false)
  const toggle = () => {
    setCollapsed(!collapsed)
  }

  return (
    <>
      <Layout className="global-layout">
        <SiderBar collapsed={collapsed}></SiderBar>
        <Layout className="global-layout-right">
          <Header collapsed={collapsed} toggle={toggle} />

          <Content className="global-content">
            <Routes />
          </Content>
        </Layout>
      </Layout>
    </>
  )
}

export default App
