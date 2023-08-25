import React from "react";
import classes from './Header.module.css';
import CartButton from "../../Cart/CartButton";


const Header: React.FC = () => {
    return (
        <header className={classes.navbar}>
            <div><text className={classes.logoTxt}>SwiftBuy</text></div>
            <CartButton />
        </header>
    )
}

export default Header;