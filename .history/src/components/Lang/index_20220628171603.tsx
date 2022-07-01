import { connect } from 'umi';
import { Select } from 'antd';


const mapStateToPops = (state: any) => {
  return {
    lang: state.lang
  }
}

const Lang = (props: any) => {

  function langChangeHandle(value: string) {
    props.dispatch({
      type: 'lang/setLang',
      payload: {
        lang: value
      }
      
    })
  }

  return <Select style={{width: 100}} value={props.lang} onChange={langChangeHandle}>
    <Select.Option value="zh-CN">中文</Select.Option>
    <Select.Option value="en-US">英文</Select.Option>
  </Select>
}

export default connect(mapStateToPops, null)(Lang)