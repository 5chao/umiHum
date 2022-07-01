import {Select} from 'antd';

const Lang = () => {
  return <Select>
    <Select.Option value="zh-CN">中文</Select.Option>
    <Select.Option value="en-US">英文</Select.Option>
  </Select>
}

export default Lang