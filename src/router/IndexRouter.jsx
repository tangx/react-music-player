import React from 'react'
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom' // # 的页面
import Login from '../views/login/Login'
import NewsSandBox from '../views/sandbox/NewSandBox'

export default function IndexRouter() {
  return (
    <HashRouter>
      {/* Switch 保证了只匹配一个路由， router v6 的已经用其它名字替换 */}

      <Switch>
        <Route path="/login" component={Login}></Route>

        {/* 判断是否存在 token（是否登陆）， 不存在则跳转到 /login 页面 */}
        <Route path="/" render={() =>
          // 三元表达式
          localStorage.getItem("token") ?
            <NewsSandBox></NewsSandBox> :
            <Redirect to="/login" />
        } />

      </Switch>
    </HashRouter >
  )
}
