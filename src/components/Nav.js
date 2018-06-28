import React from 'react';
import './nav.css';
export default function  Nav(){
  return(
    <div className='nav-wrapper'>
      <div className='nav-links'>
        <ul className='nav-link-list'>
          <li><a>Home</a></li>
          <li><a>About Me</a></li>
          <li><a>Work</a></li>
        </ul>
      </div>
      <div className='nav-social'></div>

    </div>
  )
}
