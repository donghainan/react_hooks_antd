import React from 'react'
import { Breadcrumb } from 'antd'
const { Item } = Breadcrumb

interface Iprops {
  children: Array<{
    path?: string
    breadcrumbName: string
  }>
}
const JBreadcrumb = (props: Iprops): any => {
  const { children } = props
  return children && children.length ? (
    <div className="global-breadcrumb">
      <Breadcrumb>
        {children.map((item: any) => {
          return item.path ? (
            <Item key={item.breadcrumbName}>
              <a href={item.path}>{item.breadcrumbName}</a>
            </Item>
          ) : (
            <Item key={item.breadcrumbName}>{item.breadcrumbName}</Item>
          )
        })}
      </Breadcrumb>
    </div>
  ) : null
}

export default JBreadcrumb
