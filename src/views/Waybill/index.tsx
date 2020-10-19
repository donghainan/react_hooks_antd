import React from 'react'
import { Table } from 'antd'

const WayBill = () => {
  const columns = [
    {
      key: '1',
      title: 'name',
      dataIndex: 'name',
    },
  ]

  const dataSource = [
    {
      name: '小米',
      key: '1',
    },
  ]

  return (
    <Table
      bordered
      columns={columns}
      dataSource={dataSource}
      // rowClassName="even"
      rowClassName="odd"
    />
  )
}

export default WayBill
