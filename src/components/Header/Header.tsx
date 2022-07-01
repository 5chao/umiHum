import {Link} from 'umi'
import './Header.less'


const Header = () => {

  return <div className="page-header">
    <div className='page-crumbs'></div>
    <div className='header-user'>
      <Link to="/">回到首页</Link>
    </div>
  </div>
}

export default Header