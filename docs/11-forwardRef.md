# 使用 `forwardRef()` 传递 ref

拆分 `UserForm` 表单到 `/src/components/user-manage/UserForm.jsx`

## 定义函数式组件

1. 定义函数式组件 UserForm， 接受两个参数 `props` 和 `ref` ， 其中 `ref` 就是父组件 **定义并传递** 的 ref 组件。
2. 使用 `forwardRef(UserForm)` hook 导出 UserForm 以接收 ref 参数

```jsx
const UserForm = (props, ref) => {
    return (
        <div>UserForm</div>
    )
}

export default forwardRef(UserForm) 
```

3. 在父组件中， 传递 ref

`/src/views/sandbox/user-manage/UserList.jsx` 

```jsx
import UserForm from '../../../components/user-manage/UserForm'
export default function UserList() {

// 使用 useRef 创建 ref
  const refAddForm = useRef(null)

  return (
    <div>
        <UserForm regionsData={regionsData}
          rolesData={rolesData}
          // 向子组件传递 ref
          ref={refAddForm} /> 
    </div>
  )
}
```

## 使用 Ref

### 在 `父组件` 中使用 ref

由于 ref 在父组件中定义， 因此可以直接使用

```jsx
  const refAddForm = useRef(null)

  const handleOnOk_Modal = () => {
    setIsModalOpen(false)
    console.log("add==>", refAddForm);
    refAddForm.current.validateFields().then(
      (value) => {
        console.log(value);
    }
  }
```


### 在 `子组件` 中使用 ref

子组件由于通过形参接收了 ref， 因此也可以在 子组件 中使用。

```jsx

// 修改 form 表单的 region item 的值

const UserForm = (props, ref) => {
  const handleRoleChange = (value) => {
    if (value === 1) {
      setIsRegionDisabled(true)

      // ref.current.setFieldValue("region", "全球")
      ref.current.setFieldsValue(
        {
          region: ""
        }
      )
      return
    }
  }

    return (
        <div>UserForm</div>
    )
}


```