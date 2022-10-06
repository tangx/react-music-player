import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

// components
import SideMenu from '../../components/sandbox/SideMenu'
import TopHeader from '../../components/sandbox/TopHeader'

// views
import Home from './home/Home'
import UserList from './user-manage/UserList'
import RightList from './right-manage/RightList'
import RoleList from './right-manage/RoleList'
import NoPermission from './nopermission/NoPermission'

// antd
import { Layout, Menu } from 'antd';
import { useState } from 'react';

import "./NewSandBox.css";





const { Header, Sider, Content } = Layout;




export default function NewsSandBox() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout>
      <SideMenu />

      <Layout className="site-layout">
        <TopHeader></TopHeader>

        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          <h3>Content</h3>
          <Switch>
            <Route path="/home" component={Home} exact></Route>
            <Route path="/user-manage/list" component={UserList}></Route>
            <Route path="/right-manage/rightlist" component={RightList}></Route>
            <Route path="/right-manage/role/list" component={RoleList}></Route>

            {/* 首页重定向, 精确匹配*/}
            <Redirect from="/" to="/home" exact />

            {/* 默认路由， 无权限 */}
            <Route path="*" component={NoPermission}></Route>
          </Switch>
        </Content>

      </Layout>
    </Layout>

  )
}
