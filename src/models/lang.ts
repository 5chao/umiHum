export default {
  namespace: "lang",
  state: {
    lang: 'zh-CN'
  },
  reducers: {
    setLang: (state: any, {payload}: any) => {
      return {...state, ...payload}
    }
  }
}