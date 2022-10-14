
import axios from 'axios'
import React, { useEffect, useState } from 'react'


import { Button, Table, Modal } from 'antd'
import { ExclamationCircleOutlined } from '@ant-design/icons';


export default function RoleList() {

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      render: (id) => <b>{id}</b>
    },
    {
      title: "角色名称",
      dataIndex: "roleName",
      key: "roleName",
    },
    {
      title: "操作",
      render: (item) => {
        return (
          <div>
            <Button danger onClick={() => { handleDelete(item) }}>删除</Button>
            <Button type="primary">编辑</Button>
          </div>
        )
      },
    }
  ]


  const [dataSource, setDataSource] = useState([])
  const { confirm } = Modal

  const handleDelete = (item) => {

    console.log(item);

    confirm(
      {
        title: '确定要删除吗?',
        icon: <ExclamationCircleOutlined />,
        content: `确定要删除 ${item.roleName} 吗？`,

        onOk: () => {
          const target = `http://localhost:5001/roles/${item.id}`
          axios.delete(target).then(
            () => {
              loadRoles()
            }
          )
        },
        // onCancel: () => {
        // },
      }
    )



  }

  const loadRoles = () => {
    const target = `http://localhost:5001/roles`
    axios.get(target).then(
      (resp) => {
        setDataSource(resp.data)
      }
    )
  }

  useEffect(() => {
    loadRoles()
  }, [])


  return (
    <div>
      <Table rowKey="id" columns={columns} dataSource={dataSource} >

      </Table>
    </div>
  )
}
