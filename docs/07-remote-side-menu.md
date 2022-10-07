
## 远端获取 menu 值

`Menu` 的标签属性 `items` 的值是一个 `Object` 对象。 具有五个属性, 可以通过 `getItem()` 函数创建

```tsx
 function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}
```

### 获取的数据不一致

由于版本迭代， 从远端获取的数据字段与新版本的 antd 已经不兼容了。

```json5
{
    "id": 2,
    "title": "用户管理", // 在 4.23.0 使用 label 标签
    "key": "/user-manage",
    "pagepermisson": 1,
    "grade": 1,
    "children": [
        {
            "id": 3,
            "title": "添加用户",
            "rightId": 2,
            "key": "/user-manage/add",
            "grade": 2
        }
    ]
}
```

通过 `parseItem` 函数重新组装需要的字段。

```jsx
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
    return getItem(item.title, item.key, "", item.children)
  })
}
```

但是通过 `pagepermission` 过滤的字段结果为 null。 虽然不影响显示结果。 **但遗留并为去除**


### 组件挂载时请求数据

1. 使用 `useEffect()` ， 在组件挂载时请求服务器， 获得列表数据
2. 通过 `axios` 获取远端数据， 并 `useState()` 保存为状态。

```jsx
  useEffect(() => {
    axios.get("http://localhost:5001/rights?_embed=children").then(
      (resp) => {
        let items = parseItem(resp.data)
        setMenus(items)
      }
    )
  }, [])
```