import React from 'react';
import BurgerLogo from '../../assets/images/burger-logo (1).png';
import classes from './Logo.css'

const Logo = (props) => (
    <div className={classes.Logo}>
        <img src={BurgerLogo} alt="MyBurger" />
    </div>
)
export default Logo;