# 动态SideMenu

使用 antd menu 组件创建: https://ant.design/components/menu-cn/

```jsx
import { withRouter } from 'react-router-dom';

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
```

在使用使用 `props.history.push(xxx)` 的时候， 需要使用 `withRouter` 为功能组件传递 `history` 信息。

1. 定义功能组件 `SideMenu`
2. 使用 `withRouter` 包裹 SideMenu， 并默认导出。

在 antd 4.21 级以后的版本， 已经默认提供了代码块生成 **Menu树** 的功能。 可以通过 `onClick` 等方法为 **子Menu** 传递方法。

```jsx
onClick={(item) => { props.history.push(item.key) }}
```

**技巧**： 在 `menu item` 中， 可以使用 **URI 路径** 作为 key 的值。 这样既保证了 key 的唯一性， 也可以在 onClick 等回调函数中作为 **值** 使用。 
