import {FormattedMessage, useIntl} from 'umi'
import Guide from '@/components/Guide';
import { trim } from '@/utils/format';
import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import Lang from '@/components/Lang'
import styles from './index.less';

const HomePage: React.FC = () => {
  const { name, setName } = useModel('global');

  const msg = useIntl.formatMessage({id: 'welcome'})

  return (
    <PageContainer ghost>
      <div className={styles.container} onClick={() => setName('Ok!!!')}>
        <Guide name={trim(name)} />
        {msg}
        <div>
         <Lang />
        </div>  
      </div>
    </PageContainer>
  );
};

export default HomePage;
