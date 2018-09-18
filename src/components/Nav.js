import React, {Component} from 'react';
import styles from './nav.scss';

import { Link } from 'react-router'

console.log(styles);

export default class Nav extends Component {
  constructor(props){
    super(props)
    this.state = {
      windowSize: window.innerWidth,
      navDropdownVisible: false
    }
  }

  componentDidMount(){
    window.addEventListener('resize', this.handleSize)
  }

  componentWillUnmount(){
    window.removeEventListener('resize', this.handleSize)
  }


  handleSize = () => {
    console.log(window.innerWidth);
    this.setState({
      windowSize: window.innerWidth
    })
  }
  render(){

if (this.state.windowSize > 560) {
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

} else {
  return (
    <p>hey there guy</p>
  )
}
}
}
