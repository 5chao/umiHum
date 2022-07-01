import { useEffect, useState } from "react";
import { PageContainer, ProBreadcrumb, ProLayout } from '@ant-design/pro-components';
import {Outlet, Link } from 'umi'
import '@/styles/index.less'
import './index.less'

export default () => {
  const [collapsed, setCollapsed] = useState(false)
  const [loading, setLoading] = useState(true)

  const LoadMenu = async () => {

  }

  useEffect(() => {
    LoadMenu()
  }, [])

  if (loading) {
    return 'Loading...'
  }

  return <div style={{height:'100vh'}}>
    <ProLayout
      collapsed={collapsed}
      siderWidth={210}
      ErrorBoundary={false}
      headerContentRender={() => <ProBreadcrumb />}
      menu={{
        locale: false,
        request: async () => {
          return [
            {
              key: 'empty-1',
              path: '/',
              name: '首页',
              single: true,
              routes: [
                {
                  key: 11,
                  path: '/',
                  name: '首页',
                  single: true,
                }
              ]
            },
            {
              key: 2,
              path: '/access',
              name: '权限演示',
              icon: 'heart',
              folder: true,
              routes: [
                {
                  key: 21,
                  path: '/access',
                  name: '权限演示2',
                 
                },
                {
                  key: 22,
                  path: '/access',
                  name: '权限演示3',
            
                }
              ]
            }
          ]
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
      <PageContainer content="欢迎使用" breadcrumbRender={false}>
        <Outlet />
      </PageContainer>
    </ProLayout>
    </div>
}