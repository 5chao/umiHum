import { connect } from 'umi';
import { Select } from 'antd';

const mapStateToPops = () => {

}

const Lang = () => {
  return <Select style={{width: 100}}>
    <Select.Option value="zh-CN">中文</Select.Option>
    <Select.Option value="en-US">英文</Select.Option>
  </Select>
}

export default connect(mapStateToPops, null)(Lang)