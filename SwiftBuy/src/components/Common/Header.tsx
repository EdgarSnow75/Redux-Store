import React from "react";
import classes from './Header.module.css';


const Header: React.FC = () => {
    return (
        <header className={classes.navbar}>
            <div><text className={classes.logoTxt}>SwiftBuy</text></div>
            <div className={classes.actionContainer}>
                <button className={classes.cartBtn}>My Cart <span className={classes.cartCounter}>0</span></button>
            </div>
        </header>
    )
}

export default Header;