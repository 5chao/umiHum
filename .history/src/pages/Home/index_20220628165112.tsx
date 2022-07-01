import {FormattedMessage, SelectLang} from 'umi'
import {Select} from 'antd'
import Guide from '@/components/Guide';
import { trim } from '@/utils/format';
import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import styles from './index.less';

const HomePage: React.FC = () => {
  const { name, setName } = useModel('global');
  return (
    <PageContainer ghost>
      <div className={styles.container} onClick={() => setName('Ok!!!')}>
        <Guide name={trim(name)} />
        <FormattedMessage id="welcome" />
        <div>
          <SelectLang />
        </div>
        <div>
          <Select>
            <Select.Option value="zh-CN">中文</Select.Option>
            <Select.Option value="en-US">英文</Select.Option>
          </Select>
        </div>  
      </div>
    </PageContainer>
  );
};

export default HomePage;
