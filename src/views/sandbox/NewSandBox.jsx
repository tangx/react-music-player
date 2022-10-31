import React from 'react'
// components
import SideMenu from '../../components/sandbox/SideMenu'
import TopHeader from '../../components/sandbox/TopHeader'

// antd
import { Layout } from 'antd';
import { useState } from 'react';

import "./NewSandBox.css";
import NewsRouter from '../../components/sandbox/NewsRouter';

const { Content } = Layout;


export default function NewsSandBox() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout>
      <SideMenu />

      <Layout className="site-layout">
        <TopHeader></TopHeader>

        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            overflow: "auto",
          }}
        >
          <h3>Content</h3>

          <NewsRouter />
        </Content>

      </Layout>
    </Layout>

  )
}
