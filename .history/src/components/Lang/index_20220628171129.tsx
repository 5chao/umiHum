import { connect } from 'umi';
import { Select } from 'antd';



const mapStateToPops = (state) => {
  return {
    lang: state.lang
  }
}

const Lang = (props: any) => {
  return <Select style={{width: 100}} value={props.lang}>
    <Select.Option value="zh-CN">中文</Select.Option>
    <Select.Option value="en-US">英文</Select.Option>
  </Select>
}

export default connect(mapStateToPops, null)(Lang)