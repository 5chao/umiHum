import React from 'react'
import {Link} from 'umi'
import './Header.less'


const Header = () => {

  return <React.Fragment><div className="page-header">
    <div className='page-crumbs'></div>
    <div className='header-user'>
      <Link to="/">回到首页</Link>
    </div>
  </div>
  <div>Tag list</div>
  </React.Fragment>
}

export default Header