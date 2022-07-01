import type {MenuItem} from '@/constants/menuConfig'

function menuTransform(menuList: MenuItem[]) {
  let _data = 
}

function menuPlat(menuList: MenuItem[]) {
  return menuList.map(item => {

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



