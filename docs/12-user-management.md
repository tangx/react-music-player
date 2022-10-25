# 用户管理

## 用户登陆

### 状态保存

## 用户退出

## 左侧菜单功能展示

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
