import { useState } from "react";
import { ProLayout } from '@ant-design/pro-components';
import {Outlet, Link } from 'umi'
import Header from '@/components/Header/Header';
import services from '@/services/common';
import '@/styles/index.less'
import './index.less'

const {queryMenuList} = services.MenuController

export default () => {
  const [collapsed, setCollapsed] = useState(false)
  const [loading, setLoading] = useState(false)


  return <div style={{height:'100vh'}}>
    <ProLayout
      collapsed={collapsed}
      siderWidth={210}
      loading={loading}
      ErrorBoundary={false}
      headerRender={() => <Header />}
      headerContentRender={false}
      menu={{
        locale: false,
        request: async () => {
          setLoading(true)
          const {data } = await queryMenuList()

          setLoading(false)
          return []
          
        }
      }}

      menuItemRender={(itemProps: any) => {
        if (itemProps.single && !collapsed) {
          return null
        }
        if (collapsed) {
          if (itemProps.single) {
            return <Link to={itemProps.path}>{itemProps.name}</Link>
          }
          return <Link to={itemProps.path}>{itemProps.name}</Link>
        }
        return <Link to={itemProps.path}>{itemProps.icon && itemProps.icon}{itemProps.name}</Link>
      }}
      subMenuItemRender={(itemProps: any) => {
        if (itemProps.single) {
          return <Link className="empty" to={itemProps.path}>{itemProps.icon && itemProps.icon}{itemProps.name}</Link>
        }
        if (collapsed) {
          return <Link to={itemProps.routes[0].path}>{itemProps.icon && itemProps.icon}</Link>
        }
        return <div>{itemProps.icon && itemProps.icon}{itemProps.name}</div>
      }}
      collapsedButtonRender={() => <div onClick={() => setCollapsed(!collapsed)}>7878</div>}
     
    >
      <div className="page-wrapper">
        <Outlet />
      </div>
    </ProLayout>
    </div>
}