import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import SideMenu from '../../components/sandbox/SideMenu'
import TopHeader from '../../components/sandbox/TopHeader'

import Home from './home/Home'
import UserList from './user-manage/UserList'
import RightList from './right-manage/RightList'
import RoleList from './right-manage/RoleList'
import NoPermission from './nopermission/NoPermission'

export default function NewsSandBox() {
  return (
    <div>
      <h3>sandbox</h3>

      <SideMenu />
      <TopHeader />

      <h3>content</h3>
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
    </div>
  )
}
