import { PageContainer, ProBreadcrumb, ProLayout } from '@ant-design/pro-components';
import {Outlet} from 'umi'
export default () => (
  <div
    style={{
      height: '100vh',
    }}
  >
    <ProLayout
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
      menu={}
    >
      <PageContainer content="欢迎使用" breadcrumbRender={false}>
        <div>Hello World</div>
        <Outlet />
      </PageContainer>
    </ProLayout>
  </div>
);