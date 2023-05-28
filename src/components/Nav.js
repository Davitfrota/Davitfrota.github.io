
import React,{useState} from 'react';

import {BiHomeAlt,BiUser} from 'react-icons/bi'
import {BsClipboardData,BsBriefcase, BsChatSquareText} from 'react-icons/bs'

import { Link} from 'react-scroll'

import '../nav.css'

const Nav = () => {

  const [showMenu, setShowMenu] = useState(false)

  return (
  <nav className='nav flex items-center justify-center'>
   <div className={`${showMenu ? 'nav_menu show-menu' : ' nav_menu'}`}>

    <div className='nav_list'>
      <div className='nav_item'>
        <Link 
          to='home'
          activeClass='active-nav'
          smooth='true'
          spy='true'
          className={'nav_link'}
          onClick={() => setShowMenu(false)}
          >
          <BiHomeAlt className='nav_icon'/>
          <h3 className='nav_name'>Home</h3>
        </Link>
      </div>
      <div className='nav_item'>
        <Link 
          to='about'
          activeClass='active-nav'
          smooth='true'
          spy='true'
          className='nav_link'
          onClick={() => setShowMenu(false)}
          >
          <BiUser className='nav_icon'/>
          <h3 className='nav_name'>About</h3>
        </Link>
      </div>
      <div className='nav_item'>
        <Link 
          to='services'
          activeClass='active-nav'
          smooth='true'
          spy='true'
          className='nav_link'
          onClick={() => setShowMenu(false)}
          >
          <BsClipboardData className='nav_icon'/>
          <h3 className='nav_name'>Services</h3>
        </Link>
      </div>
      <div className='nav_item'>
        <Link 
          to='work'
          activeClass='active-nav'
          smooth='true'
          spy='true'
          className='nav_link'
          onClick={() => setShowMenu(false)}
          >
          <BsBriefcase className='nav_icon'  />
          <h3 className='nav_name'>Work</h3>
        </Link>
      </div>
      <div className='nav_item'>
        <Link 
          to='contact'
          activeClass='active-nav'
          smooth='true'
          spy='true'
          className='nav_link'
          onClick={() => setShowMenu(false)}
          >
          <BsChatSquareText className='nav_icon'/>
          <h3 className='nav_name'>Contact</h3>
        </Link>
      </div>
    </div>
   </div>

   <div className={`${showMenu ? 'nav_toggle animate-toggle' : 'nav_toggle' }`} onClick={() => setShowMenu(!showMenu)}>

    <span></span>
    <span></span>
    <span></span>

   </div>

  </nav>
  );
};

export default Nav;
