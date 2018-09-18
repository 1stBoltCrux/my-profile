import React, {Component} from 'react';
import styles from './nav.scss';
import NavDropdown from './NavDropdown';

import { Link } from 'react-router'

console.log(styles);

export default class Nav extends Component {
  constructor(props){
    super(props)
    this.state = {
      windowSize: window.innerWidth,
      navDropdownVisible: false,
      showChild: false
    }
  }

  componentDidMount(){
    window.addEventListener('resize', this.handleSize)
  }

  componentWillUnmount(){
    window.removeEventListener('resize', this.handleSize)
}

  buttonClick = () => {
    this.setState({
      showChild: !this.state.showChild
    })
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
    <div className={styles.navWrapper}>
      <div className={styles.navLinks}>
        <div className={styles.navLinkList}>
          <div onClick={this.buttonClick} className={styles.hamburger}>
            <div className={styles.burgerLine}></div>
            <div className={styles.burgerLine}></div>
            <div className={styles.burgerLine}></div>
          </div>
          <NavDropdown
             onTransitionEnd={this.transitionEnd} mounted={this.state.showChild}/>
        </div>
      </div>
      <div className={styles.navSocial}></div>

    </div>
  )
}
}
}
