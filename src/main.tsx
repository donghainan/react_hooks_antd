import React from 'react'
import { render } from 'react-dom'
import { ConfigProvider } from 'antd'
import { Provider } from 'react-redux'
import zhCN from 'antd/es/locale/zh_CN'
import moment from 'moment'
import 'moment/locale/zh-cn'
moment.locale('zh-cn')

import Page from './Page'
import store from '@/store'

const Root: React.FC = () => {
  const getPopupContainer = (node: { parentNode: any }) => {
    if (node) {
      return node.parentNode
    }
    return document.body
  }
  return (
    <ConfigProvider getPopupContainer={getPopupContainer} locale={zhCN}>
      <Provider store={store}>
        <Page />
      </Provider>
    </ConfigProvider>
  )
}

render(<Root />, document.getElementById('root'))
