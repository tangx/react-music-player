import React, { useEffect, useState } from 'react'
import { Button, Table, Tag } from 'antd'
import axios from 'axios'
import {
  DeleteOutlined,
} from '@ant-design/icons';
export default function RightList() {
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      render: (id) => {
        return <b>{id}</b>
      },

    },
    {
      title: '权限名称',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: '权限路径',
      dataIndex: 'key',
      key: 'key',
      render: (key) => {
        return <Tag color='orange'>{key}</Tag>
      }
    },
    {
      title: '操作',
      // 没有数据对应项目， 可以不用 dataIndex
      // dataIndex: 'address',
      render: () => {
        return (
          <div >
            <Button danger shape="circle" icon={<DeleteOutlined />} />
            <Button type="primary" style={{ margin: "0 10px" }}>编辑</Button>
          </div >
        )
      }
    },
  ];
  const [dataSource, setDataSource] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:5001/rights`)
      .then(
        (resp) => {
          // console.log(resp.data);
          setDataSource(resp.data)
        }
      )
  }, [])

  return (
    <div>
      <Table dataSource={dataSource} columns={columns} />;
    </div>
  )
}
