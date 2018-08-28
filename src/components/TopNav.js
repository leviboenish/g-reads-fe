import React from 'react';

import logo from '../assets/g-logo.png'

const TopNav = () => {
    return (
      <nav>
        <ul>
          <li className='nav-item'>
            <img className='nav-img' src='https://via.placeholder.com/50x50'/>
            <h3 className='nav-title'>Authors</h3>
          </li>
          <li className='nav-item'>
            <img className='nav-img' src='https://via.placeholder.com/50x50'/>
            <h3 className='nav-title'>Books</h3>
          </li>
        </ul>
      </nav>
      );
    }

export default TopNav;
