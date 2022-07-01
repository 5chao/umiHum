import type {MenuItem} from '@/constants/menuConfig'

function menuTransform(menuList: MenuItem[]) {
  let _data = menuPlat(menuList);
  console.log(_data, '|---_data--')
  return _data
}

function menuPlat(menuList: MenuItem[]){
  return menuList.map(item => {    
    if (item.children) {
       return {
          key: item.id,
          name: item.resourceName,
          path: '/' + item.resourceCode,
          routes: menuPlat(item.children)
       }
    }
    return {
      //...item,
      key: item.id,
      name: item.resourceName,
      path: '/' + item.resourceCode,
      routes: item.children
    }
  })
}

export {
  menuTransform
}



