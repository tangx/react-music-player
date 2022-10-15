import { Button, Input, Modal, Switch, Table } from 'antd'
import axios from 'axios'
import React, { useEffect, useState } from 'react'


// const roleMap = {
//   "1": "超级管理员",
//   "2": "区域管理员",
//   "3": "区域编辑",
// }

export default function UserList() {

  const columns = [
    {
      title: "区域",
      dataIndex: "region",
      key: "region",
      render: (item) => {
        return (
          <b>{item ? item : "全球"}</b>
        )
      }
    },
    {
      title: "角色名称",
      dataIndex: "role",
      render: (role) => {
        // console.log("role==", role);
        return (
          role.roleName
        )
      }
    },
    {
      title: "用户名",
      dataIndex: "username",
    },
    {
      title: "用户状态",
      // dataIndex: "roleState",
      render: (item) => {
        return (
          <Switch checked={item.roleState} disabled={item.default}
            onChange={() => handleOnChange_SwitchState(item)
            } />
        )
      }
    },
    {
      title: "操作",
      render: (item) => {
        return (
          <div>
            <Button danger disabled={item.default}> 删除</Button >
            <Button type="primary" disabled={item.default}>编辑</Button>
          </div >
        )
      }
    }
  ]

  const [usersData, setUsersData] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)

  const loadUsersData = () => {
    const target = `http://localhost:5001/users?_expand=role`
    axios.get(target).then(
      (resp) => {
        setUsersData(resp.data)
      }
    )
  }

  useEffect(() => {
    loadUsersData()
  }, [])


  const handleOnChange_SwitchState = (item) => {
    // console.log("item===>", item);
    const target = `http://localhost:5001/users/${item.id}`
    axios.patch(target, {
      roleState: !item.roleState
    }).then(
      () => {
        loadUsersData()
      }
    )
  }
  const handleOnClick_AddUser = () => {
    setIsModalOpen(true)
  }
  const handleOnCancel_Modal = () => {
    setIsModalOpen(false)
  }
  const handleOnOk_Modal = () => {
    setIsModalOpen(false)
  }

  return (
    <div>
      <Button type="primary" onClick={handleOnClick_AddUser}>添加用户</Button>
      <Table rowKey="id" dataSource={usersData} columns={columns}
        pagination={{ pageSize: 5 }} />

      <Modal open={isModalOpen} onCancel={handleOnCancel_Modal} onOk={handleOnOk_Modal}>
        <Input addonBefore="用户名" />
        <Input addonBefore="密码" />
        <Input addonBefore="区域" />
        <Input addonBefore="角色" />
      </Modal>
    </div>
  )
}

