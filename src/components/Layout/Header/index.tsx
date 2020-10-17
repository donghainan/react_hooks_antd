import React, { useState } from 'react'
import { Layout, Badge, Avatar, Popover } from 'antd'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  AlertOutlined,
  UserOutlined,
} from '@ant-design/icons'
import classnames from 'classnames'
const { Header } = Layout

interface IProps {
  collapsed: boolean
  toggle: () => void
}
const GolbalHeader = (props: IProps): any => {
  const [visible, setVisible] = useState<boolean>(false)

  const { collapsed, toggle } = props

  const onVisibleChange = () => {
    setVisible(!visible)
  }
  const onCollapseChange = () => {
    toggle()
  }

  const rightContent = (
    <div>
      <a
        href="#"
        className="message"
        style={{
          width: 56,
          color: '#fff',
          display: 'inline-block',
          textAlign: 'center',
          borderLeft: '1px solid rgba(255, 255, 255, 0.15)',
          borderRight: '1px solid rgba(255, 255, 255, 0.15)',
          marginRight: 16,
        }}
      >
        <Badge dot>
          <AlertOutlined style={{ fontSize: 20 }} />
        </Badge>
      </a>
      <span>
        <Avatar
          size={28}
          style={{ backgroundColor: '#87d068', marginRight: 10 }}
          icon={<UserOutlined />}
        />
      </span>
      <Popover
        placement="bottomRight"
        trigger="click"
        visible={visible}
        onVisibleChange={onVisibleChange}
        content={
          <div>
            <div>用户设置</div>
            <div>退出登录</div>
          </div>
        }
      >
        <span>zhaoyun001</span>
      </Popover>
    </div>
  )

  return (
    <Header
      className={classnames('global-header', {
        collapsed: collapsed,
      })}
    >
      <div className="trigger" onClick={onCollapseChange}>
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </div>
      <div className="rightContainer">{rightContent}</div>
    </Header>
  )
}

export default GolbalHeader
