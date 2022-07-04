import {MenuItem, MENU_ICONS} from '@/constants/menuConfig'

function menuTransform(menuList: MenuItem[]) {
  let _data = menuPlat(menuList);
  //console.log(_data, '|---_data--')
  _data.map((item: any) => {
    if (item.routes.length <= 0) {
      item.routes = [{
        key: item.key + '_1',
        single: true,
        name: item.name,
        icon: item.icon,
        path: item.path,
        routes:  []
      }]
      item.key = 'empty_' + item.key;
      item.single = true
    } else {
      item.routes.unshift({
        key: item.key + '_sub-menu',
        subTitle: true,
        name: item.name,
        icon: item.icon,
        path: '/'
      })
    }
    return item
  })
  return _data
}

function menuPlat(menuList: MenuItem[]) : any{
  return menuList.map(item => {    
    if (item.children) {
       return {
          key: item.id,
          type: item.resourceType,
          name: item.resourceName,
          icon: MENU_ICONS[item.resourceCode],
          path: '/' + item.resourceCode,
          routes: item.children.some($item => $item.resourceType === 2) ? [] : menuPlat(item.children)
       }
    }

    return {
      key: item.id,
      name: item.resourceName,
      icon: MENU_ICONS[item.resourceCode],
      type: item.resourceType,
      path: '/' + item.resourceCode,
      routes:  item.children
    }
  })
}

export {
  menuTransform
}



