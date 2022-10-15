
import axios from 'axios'
import React, { useEffect, useState } from 'react'


import { Button, Table, Modal, Tree } from 'antd'
import { ExclamationCircleOutlined } from '@ant-design/icons';


export default function RoleList() {

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      render: (id) => <b>{id}</b>
    },
    {
      title: "角色名称",
      dataIndex: "roleName",
      key: "roleName",
    },
    {
      title: "操作",
      render: (item) => {
        return (
          <div>
            <Button danger onClick={() => { handleDelete(item) }}>删除</Button>
            <Button type="primary" onClick={() => handleIsShowRightTree(item)}>编辑</Button>
          </div>
        )
      },
    }
  ]


  useEffect(() => {
    loadRoles()
    loadRightList()
  }, [])


  const [dataSource, setDataSource] = useState([])
  const { confirm } = Modal
  const [isShowRightTree, setIsShowRightTree] = useState(false)
  const [treeData, setTreeData] = useState([])
  const [currentRights, setCurrentRights] = useState([])
  const [currentId, setCurrentId] = useState(0)

  const handleDelete = (item) => {

    console.log(item);

    confirm(
      {
        title: '确定要删除吗?',
        icon: <ExclamationCircleOutlined />,
        content: `确定要删除 ${item.roleName} 吗？`,

        onOk: () => {
          const target = `http://localhost:5001/roles/${item.id}`
          axios.delete(target).then(
            () => {
              loadRoles()
            }
          )
        },
        // onCancel: () => {
        // },
      }
    )
  }

  const loadRoles = () => {
    const target = `http://localhost:5001/roles`
    axios.get(target).then(
      (resp) => {
        setDataSource(resp.data)
      }
    )
  }

  const loadRightList = () => {
    const target = `http://localhost:5001/rights?_embed=children`
    axios.get(target).then(
      (resp) => {
        // console.log(resp.data);
        setTreeData(resp.data)
      }
    )
  }

  const handleIsShowRightTree = (item) => {
    // loadRightList()
    setIsShowRightTree(true)

    // console.log(item);
    setCurrentRights(item.rights)
    setCurrentId(item.id)

  }
  const handleCancelRightTree = () => {
    setIsShowRightTree(false)
  }
  const handleOkRightTree = () => {
    setIsShowRightTree(false)

    const target = `http://localhost:5001/roles/${currentId}`
    axios.patch(target, {
      rights: currentRights,
    }).then(
      () => {
        // loadRightList()
        loadRoles()
      }
    )
  }


  const handleOnChecked = (rights) => {
    // console.log(rights);
    console.log(rights.checked);
    setCurrentRights(rights.checked)
  }

  return (
    <div>
      <Table rowKey="id" columns={columns} dataSource={dataSource} >
      </Table>

      <Modal title="Basic Modal" open={isShowRightTree} onOk={handleOkRightTree} onCancel={handleCancelRightTree}>
        <Tree
          checkable
          // onExpand={onExpand}
          // expandedKeys={expandedKeys}
          // autoExpandParent={autoExpandParent}
          onCheck={handleOnChecked}
          // onSelect={onSelect}
          // selectedKeys={selectedKeys}
          checkStrictly={true}
          checkedKeys={currentRights}
          treeData={treeData}
        />
      </Modal>
    </div>
  )
}
