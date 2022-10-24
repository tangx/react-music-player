import React from 'react'
import { Form, Input, Button, Checkbox, message } from 'antd'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import './Login.css';
import axios from 'axios';
import { stringify } from 'rc-field-form/es/useWatch';


export default function Login(props) {

  const handleOnFinished = (values) => {
    // console.log(values);

    // 用户登录验证并获取对应权限
    axios.get(`http://localhost:5001/users?_expand=role&username=${values.username}&password=${values.password}&roleState=true`).then(
      (resp) => {
        // console.log("login resp", resp);

        if (resp.data.length === 1) {

          // 登录成功， 设置 token
          const currentUser = resp.data[0]
          localStorage.setItem("token", JSON.stringify(currentUser))

          // 页面跳转
          props.history.push("/")
          return
        }

        // 用户验证失败
        message.error("用户名或密码错误")
      }
    ).catch(
      (err) => {
        message.error("登录请求失败", err)
      }
    )
  }

  return (
    <div
      style={{ backgroundColor: "rgb(35,39,65)", height: "100%" }}
    >
      <div className='loginContainer'>
        <div className='loginTitle'>全球发布管理系统</div>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={handleOnFinished}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your Username!',
              },
            ]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
            Or <a href="">register now!</a>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}
