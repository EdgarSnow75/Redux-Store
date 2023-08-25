import React from 'react';
import classes from './CartButton.module.css'

const CartButton: React.FC = () => {
    return (
        <div className={classes.actionContainer}>
            <button className={classes.cartBtn}><span className={classes.cartTxt}>My Cart</span> <span className={classes.badge}><span className={classes.badgeNum}>0</span></span></button>
        </div>
    )
}

export default CartButton;