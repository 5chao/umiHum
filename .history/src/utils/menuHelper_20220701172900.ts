import type {MenuItem} from '@/constants/menuConfig'

function menuTransform(menuList: MenuItem[]) {
  let _data = menuPlat(menuList);
  console.log(_data, '|---_data--')
  return _data
}

function menuPlat(menuList: MenuItem[]){
  return menuList.map(item => {
    item.routes = item.children
    if (item.routes) {
      menuPlat(item.routes)
    }

    return {
      //...item,
      key: item.id,
      name: item.resourceName,
      path: '/' + item.resourceCode,
      routes: item.routes
    }
  })
}

export {
  menuTransform
}



