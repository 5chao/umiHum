import { useIntl, getLocale } from 'umi'
import Guide from '@/components/Guide';
import { trim } from '@/utils/format';
import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import Lang from '@/components/Lang'
import styles from './index.less';

const HomePage: React.FC = () => {
  const { name, setName } = useModel('global');
  const intl = useIntl();
  const msg = intl.formatMessage({id: 'welcome'})
  
  console.log(getLocale())

  return <div className={styles.container}>
        <Guide name={trim(name)} />
        {msg}
        <div>
         <Lang />
        </div>  
      </div>
};

export default HomePage;
