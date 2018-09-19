import React from 'react';
import styles from './aboutme.scss';

export default function AboutMe() {
  return(
    <div className={styles.aboutMeWrapper}>
      <a name='aboutme'/>
      <h1>About Me :</h1>
      <h3>Hi, my name is Ted. I am a front-end developer. I like to draw and I like to code.</h3>
    </div>
  )
}
