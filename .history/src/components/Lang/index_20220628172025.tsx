import { connect, setLocale } from 'umi';
import { Select } from 'antd';


const mapStateToPops = (state: any) => {
  return {
    lang: state.lang
  }
}

const Lang = (props: any) => {

  function langChangeHandle(value: string) {
    console.log('|---value--', value)
    props.dispatch({
      type: 'lang/setLang',
      payload: {
        lang: value
      }
    })
    setLocale(value)
  }
  console.log(props, '|---props---', props.lang)
  return <Select style={{width: 100}} value={props.lang.lang} onChange={langChangeHandle}>
    <Select.Option value="zh-CN">中文</Select.Option>
    <Select.Option value="en-US">英文</Select.Option>
  </Select>
}

export default connect(mapStateToPops, null)(Lang)