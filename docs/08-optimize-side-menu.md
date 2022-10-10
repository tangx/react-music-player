# 优化 side menu

在 `/src/components/sandbox/SideMenu.jsx` 文件中。

## 优化左侧滚动条


新建 div 设置 style 保证只有左侧 sidemenu 会滚动

```jsx

    <Sider trigger={null} collapsible collapsed={collapsed}>
      {/* style 实现垂直排列 */}
      <div style={{ display: "flex", height: "100%", "flexDirection": "column" }}>
        <div className="logo" >全球新闻发布管理系统</div>
        {/* style 实现侧边栏的滚动条， 不影响右侧 */}
        <div style={{ flex: 1, "overflow": "auto" }}>
          <Menu
            selectedKeys={selectKeys}
            defaultOpenKeys={openKeys()}
            mode="inline"
            theme="dark"
            items={menus}
            onClick={(item) => { props.history.push(item.key) }}
          />
        </div>
      </div>
    </Sider>

```


## 优化页面刷新 menu 展开效果

使用 selectedkeys 和 defaultOpenKeys 保证页面刷新后， 已经选中的选项卡继续高亮。

```jsx

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

```

其中使用 `props.location.pathname` (react-router-5.x) 获取当前路径地址。

```jsx
  const selectKeys = [props.location.pathname]
```