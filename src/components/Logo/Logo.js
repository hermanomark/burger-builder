import React from 'react';
import classes from './Logo.css'

import burgerLogo from '../../assets/images/burger_logo'

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
      <img src={burgerLogo} alt="My Buger" />

    </div>
  );

export default logo;