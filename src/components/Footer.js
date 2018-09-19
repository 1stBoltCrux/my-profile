import React from 'react';
import styles from './footer.scss';
import envelope from './assets/envelope.png'
import linkedin from './assets/linkedin.png'

export default function Footer(){
  return(
    <div className={styles.footerWrapper}>
      <h3>Contact</h3>
      <div className={styles.iconContainer}>
        <img src={envelope} alt='email envelope'/>
        <img src={linkedin} alt='linkedin'/>
      </div>
    </div>
  )
}
