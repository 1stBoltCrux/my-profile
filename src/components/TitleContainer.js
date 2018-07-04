import React from 'react';
import styles from './titlecontainer.scss';
import arrow from './assets/arrow.png';
import scratch from './assets/scratchbackground.png'

export default function TitleContainer(){
  return(
    <div className={styles.titleContainerWrapper}>
      <p>Ted</p>
      <div className={styles.arrow}>
        <img src={arrow} width='100px'/>
      </div>
      <div className={styles.tedReading}>
        <img src={scratch} width='200px'/>
      </div>


    </div>
  )
}
