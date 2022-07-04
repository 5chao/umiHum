import { useState } from "react";
import { ProLayout } from '@ant-design/pro-components';
import {Outlet, Link } from 'umi'
import {menuTransform} from '@/utils/menuHelper'
import Header from '@/components/Header/Header';
import services from '@/services/common';
import '@/styles/index.less'
import './index.less'

const {queryMenuList} = services.MenuController

export default () => {
  const [collapsed, setCollapsed] = useState(false)
  const [loading, setLoading] = useState(false)
  const [selectedKeys, setSelectedKeys] = useState([] as any)

  const onSelectHandle = ({item, selectedKeys} : any) => {
    //console.log(item, selectedKeys)
    setSelectedKeys(selectedKeys)
  }

  const menuClickHandle = (itemProps: any) => {
    setSelectedKeys([itemProps.key])
  }


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
          let _data = menuTransform(data.list)
          setSelectedKeys([_data[0].key])
          return _data
          
        }
      }}

      menuItemRender={(itemProps: any) => {
        if (itemProps.single && !collapsed) {
          return null
        }
        if (collapsed) {
          if (itemProps.single) {
            return <Link to={itemProps.path}><span className={`udianfont ${itemProps.icon}`} />{itemProps.name}</Link>
          }
          if (itemProps.subTitle) {
            return <div><span className={`udianfont ${itemProps.icon}`} />{itemProps.name}</div>
          }
          return <Link to={itemProps.path}>{itemProps.name}</Link>
        }
       
        return <Link to={itemProps.path}>{itemProps.name}</Link>
      }}
      subMenuItemRender={(itemProps: any) => {
        if (itemProps.single) {
          return <Link className="empty" onClick={() => menuClickHandle(itemProps)} to={itemProps.path}><span className={`udianfont ${itemProps.icon}`} />{collapsed ? '' : itemProps.name}</Link>
        }
        if (collapsed) {
          return <Link to={itemProps.routes[0].path}>{itemProps.icon && <span className={`udianfont ${itemProps.icon}`} />}</Link>
        }
        return <div><span className={`udianfont ${itemProps.icon}`} />{itemProps.name}</div>
      }}
      collapsedButtonRender={() => <div onClick={() => setCollapsed(!collapsed)}>
        {collapsed ? <span className="udianfont udian-shou1"></span> : <span className="udianfont udian-shen"></span>}

      </div>}
      menuProps={{
        selectedKeys,
        onSelect: onSelectHandle
      }}
      
    >
      <div className="page-wrapper">
        <Outlet />
      </div>
    </ProLayout>
    </div>
}