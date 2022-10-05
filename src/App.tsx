import React from 'react';
// import './App.css';
// import { Button } from 'antd-mobile'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// 导入 首页 和 程序选择 页面
import Home from './pages/Home';
import CityList from './pages/PageList';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Button>登录</Button> */}

        {/* 配置导航菜单 */}
        <ul>
          <li><Link to="/home">首页</Link></li>
          <li><Link to="/citylist">选择城市</Link></li>
        </ul>



        {/* 配置路由 */}
        <Route path="/home" component={Home}></Route>
        <Route path="/citylist" component={CityList}></Route>
      </div>
    </Router>
  );
}

export default App;
