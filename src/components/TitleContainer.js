import React from 'react';
import styles from './titlecontainer.scss';
import arrow from './assets/arrow.png';
import scratch from './assets/scratchbackground.png'

export default function TitleContainer(props){
  console.log(props);
  if (props.windowSize > 560) {
    return(
      <div className={styles.titleContainerWrapper}>
        <div className={styles.tedArrow}>
          <p>Ted</p>
          <div className={styles.arrow}>
            <img src={arrow} width='100px'/>
          </div>
        </div>
        <div className={styles.tedReading}>
          <img src={scratch} width='200px'/>
        </div>
      </div>
    )
  } else {
    return (
      <div>
        <div className={styles.titleContainerWrapperMobile}>
          <p className={styles.name}>Ted</p>
          <div className={styles.tedReading}>
            <img src={scratch} width='200px'/>
          </div>
        </div>
      </div>

    )

  }
}
