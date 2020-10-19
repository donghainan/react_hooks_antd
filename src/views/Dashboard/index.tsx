import React from 'react'
import { Map } from 'react-amap'
import { AMAP_KEY, VERSION } from '@/utils'
import { JBreadcrumb } from '@/components'

const Dashboard = (): any => {

  const children = [{
    path: '/tms/order',
    breadcrumbName: '订单管理'
  }]

  const toolEvents = {
    created: () => {},
    click: () => {
      console.log('click')
    },
    dblclick: () => {
      console.log('dblclick')
    },
  }
  return (
    <>
     <JBreadcrumb children={children}/>
      <div style={{ height: 500, width: 500 }}>
        <Map
          amapkey={AMAP_KEY}
          version={VERSION}
          zoom={11}
          events={toolEvents}
          plugins={['ToolBar', 'Scale']}
        ></Map>
      </div>
    </>
  )
}

export default Dashboard
