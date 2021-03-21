import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const totalBudget = cart.reduce((total, players) => total + players.salary, 0);
    const names = cart.reduce((name, addedName) => name + addedName.name + " + " , "");
    return (
        <div>
            <h4>Team Summary</h4>
            <p>Players Added: {cart.length}</p>
            <h3>Total Budget: ${totalBudget}</h3>
            <p>Players Names: {names}</p>
        </div>
    );
};

export default Cart;