import React from 'react';


const ReviewItem = (props) => {
    const {name,quantity,key,price} = props.order
console.log(key)
    return (
        <div >
           
                    <h6>{name}</h6>
                    <p>Quantity: {quantity}</p>
                    <p>${price}</p>
                 <button onClick={()=>props.removeProduct(key)}>Remove Item</button>
          
          
        </div>
    );
};

export default ReviewItem;