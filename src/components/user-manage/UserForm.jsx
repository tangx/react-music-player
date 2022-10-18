import React, { forwardRef, useState } from 'react'
import { Form, Input, Select, } from 'antd'

const UserForm = (props, ref) => {

  const { Option } = Select
  const [isRegionDisabled, setIsRegionDisabled] = useState(false)

  const handleRoleChange = (value) => {
    if (value === 1) {
      setIsRegionDisabled(true)

      // ref.current.setFieldValue("region", "全球")
      ref.current.setFieldsValue(
        {
          region: ""
        }
      )

      return
    }

    setIsRegionDisabled(false)
  }

  return (
    <Form
      ref={ref}
      layout="vertical"
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
        label="角色"
        name="roleId"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Select onChange={handleRoleChange}>
          {
            props.rolesData.map((role) => {
              return <Option key={role.id} value={role.id}>{role.roleName}</Option>
            })
          }
        </Select>
      </Form.Item>

      <Form.Item
        label="区域"
        name="region"
        // rules={isSuperAdmin ? [] : [{ required: true, message: 'Please input your username!' }]}
        rules={[{ required: !isRegionDisabled, message: 'Please input your username!' }]}
      >
        <Select disabled={isRegionDisabled}>
          {
            props.regionsData.map((region) => {
              return <Option key={region.id} value={region.value}>{region.value}</Option>
            })
          }
        </Select>
      </Form.Item>

    </Form >
  )
}

export default forwardRef(UserForm) 