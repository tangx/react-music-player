# 用户管理

## 用户登陆

### 状态保存

在 `src/views/login/Login.jsx` 中， 使用 `localStorage.setItem` 用户当前信息到 token 中。

```jsx

    // 用户登录验证并获取对应权限
    axios.get(`http://localhost:5001/users?_expand=role&username=${values.username}&password=${values.password}&roleState=true`).then(
        (resp) => {
        // console.log("login resp", resp);

        if (resp.data.length === 1) {

            // 登录成功， 设置 token
            const currentUser = resp.data[0]
            localStorage.setItem("token", JSON.stringify(currentUser))

            // 页面跳转
            props.history.push("/")
            return
        }

        // 用户验证失败
        message.error("用户名或密码错误")
        }
    )
```

这里需要注意的是，`currentUser` 是一个 `Object` 对象， 在保存到 token 中， 需要使用 `JSON.stringify()` 进行 **序列化**。

同样，在需要使用 token 时， 需要使用 `JSON.parse()` 进行 **反序列化**。

```jsx
    const currentLoginUser = JSON.parse(localStorage.getItem("token"))
    const { region, roleId } = currentLoginUser
```

当然， 在这个案例中， 使用 localStorage 保存时不合理的。 
1. 用户权限存在本地， 容易被篡改。 而应该在服务端进行权限校验。
2. 其它地方多次使用到 currentUser, 如果必须放在本地，应该在 `redux` 中实现多组件共享。

## 用户退出

在 `src/components/sandbox/TopHeader.jsx` 中， 清楚用户 token

```jsx
  const handleLogout = () => {
    localStorage.removeItem("token")
    props.history.replace("/login")
  }
```

## 左侧菜单功能展示

在 `/src/components/sandbox/SideMenu.jsx` 中， 通过增加用户权限对比， 实现左侧菜单栏所展示的数据管理。

```jsx
// 解析数据， 构造组件。 将数据的 title 转换为 label
function parseItem(items) {
  return items.map((item) => {
    // ... 省略

    // 获取当前用户， 判断用户是否具有列表权限
    const currentLoginUser = JSON.parse(localStorage.getItem("token"))
    if (!currentLoginUser.role.rights.includes(item.key)) {
      // console.log("Current User don't includes ", item.key);
      return null
    }

    // ... 省略
  })
}
```
## 用户管理之用户列表管理

在 `/src/views/sandbox/user-manage/UserList.jsx` 中， 

通过滤用户权限， 显示页面效果

```jsx
  const loadUsersData = () => {
    const target = `http://localhost:5001/users?_expand=role`

    const currentLoginUser = JSON.parse(localStorage.getItem("token"))
    const { region, roleId } = currentLoginUser
    // console.log(currentLoginUser)

    axios.get(target).then(
      (resp) => {

        // 过滤用户
        const users = resp.data.filter(
          (user) => {
            // console.log(user)
            if (roleId === 1) {
              // 如果是超级管理员, 所有用户都可以管理
              return true
            }
            // 如果为普通管理员， 只能管理 **同区域** 的 **下属职能**
            return region === user.region && user.roleId >= roleId
          }
        )

        setUsersData(users)
      }
    )
  }
```
