import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { withRouter } from 'react-router-dom';
import {
  UserOutlined,
  DesktopOutlined,
} from '@ant-design/icons';

import './index.css';


const { Header, Sider, Content } = Layout;


const items = [
  getItem('首页', '/home', <DesktopOutlined />),
  getItem('用户管理', '/user-manage', <UserOutlined />, [
    getItem('用户列表', '/user-manage/list'),
  ]),
  getItem('权限管理', '/right-manage', <DesktopOutlined />, [
    getItem('角色列表', '/right-manage/role/list'),
    getItem('权限列表', '/right-manage/right/list'),
  ]),
];

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}


function SideMenu(props) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="logo" >全球新闻发布管理系统</div>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        items={items}
        onClick={(item) => { props.history.push(item.key) }}
      />
    </Sider>
  )
}

export default withRouter(SideMenu)
