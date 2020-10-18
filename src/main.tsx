import React from 'react'
import { render } from 'react-dom'
import { ConfigProvider } from 'antd'
import { StoreContext } from 'redux-react-hook'
import zhCN from 'antd/es/locale/zh_CN'
// import moment from 'moment'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
dayjs.locale('zh-cn')
import Page from './Page'
import store from '@/store'
import http from '@/utils/service/http'
window.http = http
const Root: React.FC = () => {
  const getPopupContainer = (node: { parentNode: any }) => {
    if (node) {
      return node.parentNode
    }
    return document.body
  }
  return (
    <ConfigProvider getPopupContainer={getPopupContainer} locale={zhCN}>
      <StoreContext.Provider value={store}>
        <Page />
      </StoreContext.Provider>
    </ConfigProvider>
  )
}

render(<Root />, document.getElementById('root'))
