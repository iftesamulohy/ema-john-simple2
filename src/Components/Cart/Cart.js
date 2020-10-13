import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const totalPrice = cart.reduce((total, prd) => total + prd.price, 0);
    let shippingCost = 0;
    if (totalPrice > 15) {
        shippingCost = 4.99;
    }
   else if (totalPrice > 0) {
        shippingCost = 8.99;
    }
    const total = totalPrice+shippingCost;
    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items Ordered {cart.length}</p>
            <p>Product Price {totalPrice}</p>
            <p><small>Shippin cost is {shippingCost}</small></p>
            <p>Total {total.toFixed(2)}</p>
        </div>
    );
};

export default Cart;