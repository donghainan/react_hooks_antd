import React, { useEffect } from 'react'
import { JBreadcrumb } from '@/components'
const Dashboard = (): any => {
  const initMap = () => {
    new AMap.Map('dashboard-map', {
      zoom: 11,
      pitch: 50,
      viewMode: '3D',
      city: '全国',
    })
  }
  useEffect(() => {
    initMap()
  }, [])

  const children: Array<{ path?: string; breadcrumbName: string }> = [
    {
      // path: '/tms/order',
      breadcrumbName: '订单管理',
    },
    {
      path: '/tms/waybill',
      breadcrumbName: '运单管理',
    },
  ]

  return (
    <>
      <JBreadcrumb children={children} />
      <div style={{ height: 500, width: 500 }} id="dashboard-map"></div>
    </>
  )
}

export default Dashboard
