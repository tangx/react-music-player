import { Button, Form, Input, Modal, Select, Switch, Table } from 'antd'
import axios from 'axios'
import React, { useEffect, useState } from 'react'


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
  const [regionsData, setRegionsData] = useState([])
  const [rolesData, setRolesData] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)

  const { Option } = Select

  const loadUsersData = () => {
    const target = `http://localhost:5001/users?_expand=role`
    axios.get(target).then(
      (resp) => {
        setUsersData(resp.data)
      }
    )
  }

  const loadRegions = () => {
    const target = `http://localhost:5001/regions`
    axios.get(target).then(
      (resp) => {
        setRegionsData(resp.data)
      }
    )
  }

  const loadRolesData = () => {
    const target = `http://localhost:5001/roles`
    axios.get(target).then(
      (resp) => {
        setRolesData(resp.data)
      }
    )
  }


  useEffect(() => {
    loadUsersData()
    loadRegions()
    loadRolesData()
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
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          // onFinish={onFinish}
          // onFinishFailed={onFinishFailed}
          autoComplete="off"
        >

          <Form.Item
            label="用户名"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            label="区域"
            name="region"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Select>
              {
                regionsData.map((region) => {
                  return <Option key={region.id} value={region.value}>{region.value}</Option>
                })
              }
            </Select>
          </Form.Item>

          <Form.Item
            label="角色"
            name="role"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Select>
              {
                rolesData.map((role) => {
                  return <Option key={role.id} value={role.roleName}>{role.roleName}</Option>
                })
              }
            </Select>
          </Form.Item>


        </Form>
      </Modal>
    </div>
  )
}

