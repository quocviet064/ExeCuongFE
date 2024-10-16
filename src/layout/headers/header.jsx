import React, { useState } from 'react';
import logo from '@assets/img/images/logo.png';
import search_icon from '@assets/img/images/search_icon.png';
import Image from 'next/image';

const Header = () => {
  return (
    <header>
      <div className='header'>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section'>
              <div className='full'>
                <div className='center-desk'>
                  <div className='logo'>
                    {' '}
                    <a href='index.html'>
                      {/* <img src={logo} alt='#' /> */}
                      <Image src={logo} alt='logo' priority />
                    </a>{' '}
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xl-9 col-lg-9 col-md-9 col-sm-9'>
              <div className='menu-area'>
                <div className='limit-box'>
                  <nav className='main-menu'>
                    <ul className='menu-area-main'>
                      <li className='active'>
                        {' '}
                        <a href='#'>Home</a>{' '}
                      </li>
                      <li>
                        {' '}
                        <a href='#about'>About</a>{' '}
                      </li>
                      <li>
                        <a href='#plant'>Plant</a>
                      </li>
                      <li>
                        <a href='#gallery'>Gallery</a>
                      </li>
                      <li>
                        <a href='#contact'>Contact Us</a>
                      </li>
                      <li className='last'>
                        <a href='#'>
                          <Image src={search_icon} alt='search_icon' />
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
