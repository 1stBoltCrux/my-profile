import React from 'react';
import styles from './nav.scss';
console.log(styles);
export default function  Nav(){
  return(
    <div className={styles.navWrapper}>
      <div className={styles.navLinks}>
        <ul className={styles.navLinkList}>
          <li><a>Home</a></li>
          <li><a>About Me</a></li>
          <li><a>Work</a></li>
          <li><a>Contact</a></li>
        </ul>
      </div>
      <div className={styles.navSocial}></div>

    </div>
  )
}
