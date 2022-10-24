import React, { useState } from 'react';
import {
  Layout,
  Dropdown, Space, Menu,
  Avatar,
  Button,
} from 'antd';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  DownOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { withRouter } from 'react-router';



const { Header } = Layout;

function TopHeader(props) {
  const [collapsed, setCollapsed] = useState(false);

  const changeCollapsed = () => {
    setCollapsed(!collapsed)
  }

  const handleLogout = () => {
    localStorage.removeItem("token")
    props.history.replace("/login")
  }

  const menu = (
    <Menu
      items={[
        {
          key: '1',
          label: (
            "超级管理员"
          ),
        },
        {
          key: '2',
          danger: true,
          onClick: handleLogout,
          label: (
            "退出"
          ),
        },
      ]}
    />
  );

  return (
    <Header
      className="site-layout-background"
      style={{ padding: "16px" }}
    >

      {collapsed ? <MenuUnfoldOutlined onClick={changeCollapsed} /> : <MenuFoldOutlined onClick={changeCollapsed} />}

      <div style={{ float: "right" }}>
        <span>欢迎回来: xxx</span>
        <Dropdown overlay={menu}>
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              <Avatar size={32} icon={<UserOutlined />} />
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
      </div>
    </Header>
  )
}



export default withRouter(TopHeader)

