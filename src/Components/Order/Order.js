import React, { useEffect, useState } from 'react';
import { getDatabaseCart,removeFromDatabaseCart,processOrder } from '../../utilities/databaseManager';
import fakeData from '../../fakeData'
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import Thanks from '../../images/giphy.gif'
import { useHistory } from 'react-router';

const Order = () => {
    const [order,setOrder] = useState([])
    const [orderPlaced,setOrderPlaced]=useState(false)
    const history=useHistory()
    const handleProceedCheckOut=()=>{
      history.push('/shipment')
    }

   const removeProduct=(productkey)=>{
    //    console.log(productkey)
       const remove=order.filter(ord=>ord.key !== productkey)
       setOrder(remove)
       removeFromDatabaseCart(productkey)

   }
    useEffect(() => {
        const showOrder =getDatabaseCart()
            const orderKeys=Object.keys(showOrder)
            fetch('http://localhost:5000/productCart',{
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify(orderKeys)
            })
            .then(res=>res.json())
            .then(data=>setOrder(data))
       

    },[])
    let thanks;
    if (orderPlaced){
        thanks=<img src={Thanks}></img>
    }
    return (
     <div className="shopContainer">
     <div className="product-container">
     <h1>order item {order.length}</h1>
      {order.map(pd=> <ReviewItem order={pd}
      removeProduct={removeProduct}
      ></ReviewItem>)}

      {thanks}
     </div>

<div className="produtCart">
         <Cart cart={order}> <button className="main-button" onClick={handleProceedCheckOut}>Proceed checkout</button></Cart>
          </div>
     </div>
    );
};

export default Order;