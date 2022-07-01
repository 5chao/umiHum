import type {MenuItem} from '@/constants/menuConfig'

function menuTransform(menuList: MenuItem[]) {
  let _data = menuPlat(menuList);
}

function menuPlat(menuList: MenuItem[]){
  return menuList.map(item => {

    if (item.children) {
       return menuPlat(item.children)
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



