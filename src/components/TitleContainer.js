import React from 'react';
import './titlecontainer.css';
import arrow from './assets/arrow.png';
import ted from './assets/tedreading.jpg'

export default function TitleContainer(){
  return(
    <div className='title-container-wrapper'>
      <p>Ted</p>
      <div className='arrow'>
        <img src={arrow} width='100px'/>
      </div>
      <div className='ted-reading'>
        <img src={ted} width='200px'/>
      </div>


    </div>
  )
}
