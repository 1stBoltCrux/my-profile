import React from 'react';
import styles from './projectcard.scss';

export default function ProjectCard(props){
  console.log(props.background);
  return(
    <div className={styles.projectCardWrapper}>
      <div className={styles.cardContent}>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  )
}
