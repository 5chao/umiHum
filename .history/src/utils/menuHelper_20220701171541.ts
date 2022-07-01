import type {MenuItem} from '@/constants/menuConfig'

function menuTransform(menuList: MenuItem[]) {
  let _data = menuPlat(menuList);
  console.log(_data, '|---_data--')
  return _data
}

function menuPlat(menuList: MenuItem[]){
  return menuList.map(item => {

    if (item.children) {
      menuPlat(item.children)
    }

    return {
      ...item,
      key: item.id,
      path: '/' + item.resourceCode,
    }
  })
}

export {
  menuTransform
}



