import React, { useState } from 'react';


const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
  <div class="page">
  <header className='header' tabindex="0">Header</header>

  <div >
  <div className='navItems'>
    <ul className='navlist'> 
        {props.logOutPage &&  <li className='navs'><a href="/">Home</a></li>}
        {props.logOutPage && <li className='navs'><a href="/service">Services</a></li>}
        {props.logOutPage && <li className='navs'><a href="/blog">Blog</a></li>}
        {props.logOutPage &&  <li className='navs'><a href="/about">About</a></li>}
        {props.logOutPage && <li className='navs'><a href="/contact">Contact</a></li>}
        {/* <li class="small"><a href="#0">Facebook</a><a href="#0">Instagram</a></li> */}
        {props.logOutPage && <button className='log logger' onClick={props.logOut}>logout</button>}
      </ul>
    </div>

  <div id="nav-container">
    <div class="bg"></div>
    <div class="button" tabindex="0">
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
    </div>
    <div id="nav-content" tabindex="0">
      <ul className='nav-lists'>
      {props.logOutPage &&   <li><a href="/">Home</a></li>}
      {props.logOutPage &&   <li><a href="/service">Services</a></li>}
      {props.logOutPage &&   <li><a href="/blog">Blog</a></li>}
      {props.logOutPage &&   <li><a href="/about">About</a></li>}
      {props.logOutPage &&   <li><a href="/contact">Contact</a></li>}
      {/* {props.logOutPage &&   <li class="small"><a href="#0">Facebook</a><a href="#0">Instagram</a></li>} */}

      {props.logOutPage &&   <button className='log'onClick={props.logOut}>logout</button>}
      </ul>
    </div>
  
  </div>
  </div>
</div>
  );
};


export default Navbar;
