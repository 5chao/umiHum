import {MenuItem, MENU_ICONS} from '@/constants/menuConfig'

function menuTransform(menuList: MenuItem[]) {
  let _data = menuPlat(menuList);
  console.log(_data, '|---_data--')
  return _data
}

function menuPlat(menuList: MenuItem[]) : any{
  return menuList.map(item => {    
    if (item.children) {
       return {
          key: item.id,
          type: item.resourceType,
          name: item.resourceName,
          path: '/' + item.resourceCode,
          routes: item.children.some($item => $item.resourceType === 2) ? [] : menuPlat(item.children)
       }
    }

    return {
      
      key: item.id,
      name: item.resourceName,
      icon: MENU_ICONS[item.resourceCode] || undefined,
      type: item.resourceType,
      path: '/' + item.resourceCode,
      routes:  item.children
    }
  })
}

export {
  menuTransform
}



