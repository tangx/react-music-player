import React, { useEffect, useState } from 'react'
import { Button, Table, Tag, Modal } from 'antd'
import axios from 'axios'
import {
  DeleteOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons';


export default function RightList() {
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      render: (id) => {
        return <b>{id}</b>
      },

    },
    {
      title: '权限名称',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: '权限路径',
      dataIndex: 'key',
      key: 'key',
      render: (key) => {
        return <Tag color='orange'>{key}</Tag>
      }
    },
    {
      title: '操作',
      // dataIndex: 'id', 

      // 没有 dataIndex 的时候， item 为整个数据。
      // 有 dataIndex 的时候， item 为 dataIndex 对应项目的值
      render: (item) => {
        return (
          <div >
            <Button danger shape="circle" icon={<DeleteOutlined />}
              onClick={() => handleDelete(item)} />
            <Button type="primary" style={{ margin: "0 10px" }}>编辑</Button>
          </div >
        )
      }
    },
  ];
  const [dataSource, setDataSource] = useState([])

  const loadDataSource = () => {
    const target = `http://localhost:5001/rights?_embed=children`
    axios.get(target)
      .then(
        (resp) => {
          // console.log(resp.data);
          const list = resp.data

          // 如果 children 字段长度为0， 则不要
          list.forEach((item) => {
            if (item.children.length === 0) {
              item.children = null
            }
          })

          setDataSource(list)
        }
      )
  }
  useEffect(() => {
    loadDataSource()
  }, [])


  const { confirm } = Modal
  const handleDelete = (item) => {
    confirm({
      title: 'Do you Want to delete these items?',
      icon: <ExclamationCircleOutlined />,
      content: 'Some descriptions',
      onOk() {
        // console.log('OK', item);

        // 默认删除 rights 表数据
        let target = `http://localhost:5001/rights/${item.id}`
        if ("rightId" in item) {
          // 存在 rightId ， 为 children 表
          target = `http://localhost:5001/children/${item.id}`
        }
        axios.delete(target).then(() => {
          loadDataSource()
        })
      },
      onCancel() {
        // console.log('user Cancel', item);
      },
    });
  }

  return (
    <div>
      <Table dataSource={dataSource} columns={columns}
        pagination={{
          pageSize: 5,
        }} />;
    </div>
  )
}
