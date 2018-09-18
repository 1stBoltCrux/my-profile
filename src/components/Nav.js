import React from 'react';
import styles from './nav.scss';
console.log(styles);
export default function  Nav(){
  return(
    <div className={styles.navWrapper}>
      <div className={styles.navLinks}>
        <div className={styles.navLinkList}>
          <a>Home</a>
          <a>About Me</a>
          <a>Work</a>
          <a>Contact</a>
        </div>
      </div>
      <div className={styles.navSocial}></div>

    </div>
  )
}
