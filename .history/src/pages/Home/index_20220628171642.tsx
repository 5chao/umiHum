import {FormattedMessage, SelectLang, setLocale} from 'umi'
import {Select} from 'antd'
import Guide from '@/components/Guide';
import { trim } from '@/utils/format';
import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import Lang from '@/components/Lang'
import styles from './index.less';

const HomePage: React.FC = () => {
  const { name, setName } = useModel('global');

  function langChangeHandle(value: string) {
    
    setLocale(value, false)
  }

  return (
    <PageContainer ghost>
      <div className={styles.container} onClick={() => setName('Ok!!!')}>
        <Guide name={trim(name)} />
        <FormattedMessage id="welcome" />
        <div>
          <SelectLang />
        </div>
        <div>
         <Lang />
        </div>  
      </div>
    </PageContainer>
  );
};

export default HomePage;
