import React from 'react';
import styles from './footer.scss';
import envelope from './assets/envelope.png';
import github from './assets/github.png';
import linkedin from './assets/linkedin.png';

export default function Footer(){
  return(
    <div className={styles.footerWrapper}>
      <h3>Contact</h3>
      <a name='contact'/>
      <div className={styles.iconContainer}>
        <img src={envelope} alt='email'/>
        <img src={linkedin} alt='linkedin'/>
        <img src={github} alt='github'/>
      </div>
    </div>
  )
}
