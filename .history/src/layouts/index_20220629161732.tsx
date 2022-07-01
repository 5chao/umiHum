import { useState } from "react";
import { PageContainer, ProBreadcrumb, ProLayout } from '@ant-design/pro-components';
import {Outlet} from 'umi'
export default () => {
  const [collapsed, setCollapsed] = useState(false)
  return <div
    style={{
      height: '100vh',
    }}
  >
    <ProLayout
      collapsed={collapsed}
      location={{
        pathname: '/admin/process/edit/123',
      }}
      ErrorBoundary={false}
      headerContentRender={() => <ProBreadcrumb />}
      breadcrumbRender={(routers = []) => [
        {
          path: '/',
          breadcrumbName: '主页',
        },
        {
          path: '/',
          breadcrumbName: '测试页',
        },
        ...routers,
      ]}
      menu={{
        locale: false,
        request: async () => {
          return [
            {
            path: '/',
            name: '首页'
            },
            {
              path: '/access',
              name: '权限演示'
            }
          ]
        }
      }}
      collapsedButtonRender={() => <div onClick={() => setCollapsed(!collapsed)}>7878</div>}
    >
      <PageContainer content="欢迎使用" breadcrumbRender={false}>
        <div>Hello World</div>
        <Outlet />
      </PageContainer>
    </ProLayout>
  </div>
}