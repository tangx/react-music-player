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

    // 有子组件
    if (item.children?.length > 0) {
      item.children = parseItem(item.children)
      return getItem(item.title, item.key, <DesktopOutlined />, item.children)
    }

    // 没有子组件
    return getItem(item.title, item.key, <DesktopOutlined />)
  })
}

function SideMenu(props) {
  const [collapsed, setCollapsed] = useState(false);
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5001/rights?_embed=children").then(
      (resp) => {
        let items = parseItem(resp.data)
        // console.log("!!!!!=>>", items);
        setMenus(items)
      }
    )
  }, [])


  /** 高亮选择栏目， 刷新也存在 */
  // console.log(props.location);
  const selectKeys = [props.location.pathname]
  const defaultOpenKeys = () => {
    const paths = props.location.pathname.split("/")

    let keys = []
    let tmp = ""
    paths.map((path) => {
      if (path !== "") {
        tmp = tmp + "/" + path
        keys.push(tmp)
      }
    })
    return keys
  }

  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      {/* style 实现垂直排列 */}
      <div style={{ display: "flex", height: "100%", "flexDirection": "column" }}>
        <div className="logo" >全球新闻发布管理系统</div>
        {/* style 实现侧边栏的滚动条， 不影响右侧 */}
        <div style={{ flex: 1, "overflow": "auto" }}>
          <Menu
            selectedKeys={selectKeys}
            defaultOpenKeys={defaultOpenKeys()}
            mode="inline"
            theme="dark"
            items={menus}
            onClick={(item) => { props.history.push(item.key) }}
          />
        </div>
      </div>
    </Sider>
  )
}

export default withRouter(SideMenu)
