import React, { useEffect, useState } from 'react';
import { Layout, Menu } from 'antd';
import { withRouter } from 'react-router-dom';
import {
  UserOutlined,
  DesktopOutlined,
} from '@ant-design/icons';

import './index.css';
import axios from 'axios';


const { Header, Sider, Content } = Layout;


// 根据数据构造 Menu 组件属性
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

// 解析数据， 构造组件。 将数据的 title 转换为 label
function parseItem(items) {
  return items.map((item) => {
    // 如果非页面组件， 则跳过
    if (item.pagepermisson !== 1) {
      return null
    }

    if (item.children) {
      item.children = parseItem(item.children)
    }
    return getItem(item.title, item.key, <DesktopOutlined />, item.children)
  })
}

function SideMenu(props) {
  const [collapsed, setCollapsed] = useState(false);
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5001/rights?_embed=children").then(
      (resp) => {
        let items = parseItem(resp.data)
        setMenus(items)
      }
    )
  }, [])

  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="logo" >全球新闻发布管理系统</div>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        items={menus}
        onClick={(item) => { props.history.push(item.key) }}
      />
    </Sider>
  )
}

export default withRouter(SideMenu)
