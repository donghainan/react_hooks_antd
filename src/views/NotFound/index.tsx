import React from 'react'
import { Empty, Button } from 'antd'
const NotFound = (): any => {
  return (
    <div>
      <Empty description={false} />
      <Button type="primary">返回首页</Button>
    </div>
  )
}

export default NotFound
