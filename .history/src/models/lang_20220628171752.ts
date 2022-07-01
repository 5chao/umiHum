export default {
  namespace: "lang",
  state: {
    lang: 'zh-CN'
  },
  reducers: {
    setLang: (state: any, {payload}: any) => {
      console.log(payload, '|--payload---')
      return {...state, ...payload}
    }
  }
}