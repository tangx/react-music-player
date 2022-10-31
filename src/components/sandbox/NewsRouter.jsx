import React from 'react'

import { Redirect, Route, Switch } from 'react-router-dom'

// views
import Home from '../../views/sandbox/home/Home'
import UserList from '../../views/sandbox/user-manage/UserList'
import RightList from '../../views/sandbox/right-manage/RightList'
import RoleList from '../../views/sandbox/right-manage/RoleList'
import NoPermission from '../../views/sandbox/nopermission/NoPermission'
import NewsAdd from '../../views/sandbox/news-manage/NewsAdd'
import NewsDraft from '../../views/sandbox/news-manage/NewsDraft'
import NewsCategory from '../../views/sandbox/news-manage/NewsCategory'
import Audit from '../../views/sandbox/audit-manage/Audit'
import AuditList from '../../views/sandbox/audit-manage/AuditList'
import Published from '../../views/sandbox/publish-manage/Published'
import Unpublished from '../../views/sandbox/publish-manage/Unpublished'
import Sunset from '../../views/sandbox/publish-manage/Sunset'

const LocalRouterMap = {
  "/home": Home,
  "/user-manage/list": UserList,
  "/right-manage/right/list": RightList,
  "/right-manage/role/list": RoleList,
  "/news-manage/add": NewsAdd,
  "/news-manage/draft": NewsDraft,
  "/news-manage/category": NewsCategory,
  "/audit-manage/audit": Audit,
  "/audit-manage/list": AuditList,
  "/publish-manage/puhlished": Published,
  "/publish-manage/unpublished": Unpublished,
  "/publish-manage/sunset": Sunset,
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
