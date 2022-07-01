// 运行时配置

import { useState } from "react";
import { ProBreadcrumb } from '@ant-design/pro-components';

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://next.umijs.org/docs/api/runtime-config#getinitialstate


export async function getInitialState(): Promise<{ name: string }> {
  return { name: '@umijs/max' };
}

export const layout = () => {
  const [collapsed, setCollapsed] = useState(false)
  return {
    logo: '/logo.svg',
    title: "Menu",
    collapsed: collapsed,
    collapsedButtonRender: () => <div onClick={() => setCollapsed(!collapsed)}>7878</div>,
    breadcrumbRender: () => <div style={{borderBottom: '1px solid #000'}}>Header</div>,
    headerContentRender: () => <ProBreadcrumb />，
    rightContentRender: () => null,
    menu: {
      locale: false,
      request: async () => {
        return []
      }
    },
    locale: "zh-CN",
    menuFooterRender: () => null
  };
};
