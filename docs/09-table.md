# 使用 Table 组件展示权限列表

> https://ant-design.gitee.io/components/table-cn/#header

## 使用 Table 组件展示权限列表

```jsx
const dataSource = [
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
  }
]

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  },
];

<Table dataSource={dataSource} columns={columns} />;
```

1. 其中 dataSource 表示数据， columns 表示列标题。
2. 在 cloumns 中: https://ant-design.gitee.io/components/table-cn/#Column
    1. title 字段： 列展示名字
    2. dataIndex 字段: 匹配的 dataSource 中的字段值。 例如 name 匹配 name， age 匹配 age
    3. key: 使用 **受控组件时，必要， 对属性进行筛选和排序控制**。 搜索文档
    4. render: 生成复杂数据的 **渲染函数**，参数分别为**当前行的值，当前行数据，行索引**。

## 优化 Table 输出

### render 属性

render: 生成复杂数据的 **渲染函数**，参数分别为**当前行的值，当前行数据，行索引**。

```jsx
function(text, record, index) {}	
```

使用 render 自定义， 可以默认覆盖原来的输出。 

```jsx
const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      render: (id) => {
        return <b>{id}</b> // 加粗字体
      },
    },
    {
      title: '权限路径',
      dataIndex: 'key',
      key: 'key',
      render: (key) => {
        return <Tag color='orange'>{key}</Tag> // 使用 antd 的 Tag 组件展示
      }
    },
    {
      title: '操作',
      render: () => {
        return ( // 无数据对应， 但自定义渲染按钮
          <div >
            <Button danger shape="circle" icon={<DeleteOutlined />} />
            <Button type="primary" style={{ margin: "0 10px" }}>编辑</Button>
          </div >
        )
      }
    },
  ];
```

可以认为， 在省略 render 时， render 的默认值为 

```jsx
render: (text)=>{return {text}}
```
