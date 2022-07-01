import {MENU_LISTS} from './const'

export default {
  'POST /api/v1/queryMenuList': (req: any, res: any) => {
    res.json({
      success: true,
      data: {
        list: MENU_LISTS
      },
      errorCode: 0
    })
  }
}