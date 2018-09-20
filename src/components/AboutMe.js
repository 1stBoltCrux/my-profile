import React from 'react';
import styles from './aboutme.scss';

export default function AboutMe() {
  return(
    <div className={styles.aboutMeWrapper}>
      <a name='aboutme'/>
      <h1>About Me :</h1>
      <h3>Hi, I'm Ted. I'm a developer. I like to build things. Here's a few of the tools I like to use: </h3>
      <br/>
      <p>JavaScript / React / Redux / Angular / Node.js / Express/ MongoDB / Firebase / SASS / Sketch </p>
    </div>
  )
}
