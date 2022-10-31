import React from 'react'

import { Redirect, Route, Switch } from 'react-router-dom'

// views
import Home from '../../views/sandbox/home/Home'
import UserList from '../../views/sandbox/user-manage/UserList'
import RightList from '../../views/sandbox/right-manage/RightList'
import RoleList from '../../views/sandbox/right-manage/RoleList'
import NoPermission from '../../views/sandbox/nopermission/NoPermission'


const LocalRouterMap = {
  "/home": Home,
  "/user-manage/list": UserList,
  "/right-manage/right/list": RightList,
  "/right-manage/role/list": RoleList,
}

export default function NewsRouter() {
  return (
    <Switch>
      <Route path="/home" component={Home} exact></Route>
      <Route path="/user-manage/list" component={UserList}></Route>
      <Route path="/right-manage/right/list" component={RightList}></Route>
      <Route path="/right-manage/role/list" component={RoleList}></Route>

      {/* 首页重定向, 精确匹配*/}
      <Redirect from="/" to="/home" exact />

      {/* 默认路由， 无权限 */}
      <Route path="*" component={NoPermission}></Route>
    </Switch>
  )
}
