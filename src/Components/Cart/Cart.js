import React from 'react';

import './cart.css';

const Cart = (props) => {
    const cart=props.cart
    // console.log(cart)
    let total=0
    for(let i=0; i<cart.length;i++)
    {
        
        const product=cart[i]
         total=total+product.price;
    }
    let shipping=0
    if(total>50 ){
    shipping=4.5
    }
    else if(total>25){
        shipping=2
    }
    else{
        shipping=0
    }
    const tax=(total*10)/100
    const Total=total+shipping+tax
    const format=num=>{
        const Prisios=num.toFixed(2)
        return Number(Prisios)
    }
    return (
        <div>
            <h2>Order summary</h2>
            <h4>itme add: {cart.length}</h4>
            <p>total item price: ${format(total)}</p>
            <p>Shipping & Handling: ${format(shipping)}</p>
            <p>Total before tax: ${format(tax)}</p>
            <span></span>
            <p className="total">Order Total: ${format(Total)}</p>
            <br></br>
           { props.children}
          

        </div>
    );
};

export default Cart;


