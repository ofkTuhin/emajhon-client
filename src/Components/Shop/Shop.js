import React, { useState,useEffect } from 'react';
import './Shop.css';

import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDatabaseCart,getDatabaseCart } from '../../utilities/databaseManager';
import { Link } from 'react-router-dom';



const Shop = () => {

     const[products,setProducts]=useState([])

    useEffect(() =>{
        fetch('http://localhost:5000/products')
        .then(res=>res.json())
        .then(data =>{setProducts(data)
        
        })
       
    },[products])
  
    const [cart,setcart]=useState([])
    useEffect(() => {
        const saveCart =getDatabaseCart()
        
            const productKeys=Object.keys(saveCart)
           
            
            fetch('http://localhost:5000/productCart',{
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify(productKeys)
            })
            .then(res=>res.json())
            .then(data=>setcart(data))

    },[products])
    const handleAddcart=(product)=>{
        const matchProduct=cart.find(pd=>pd.key===product.key)
        let count=1;
        let newCart;
        if(matchProduct){
            count=matchProduct.quantity+1
            matchProduct.quantity=count
           const otherItem=cart.filter(pd=>pd.key!==product.key)
           newCart=[...otherItem,product]


        }
        else
        {
            product.quantity=1;
            newCart=[...cart,product]
        }

        
       
       setcart(newCart)
      
       
       addToDatabaseCart(product.key,count)

    }
    return (
        <div className="shopContainer">
           <div className="product-container">
           
               {
                   products.map(pdr=><Product 
                    product={pdr}
                    handleAddcart={handleAddcart}
                    showbutton={true}

                    >
        

                    </Product>)
               }
           
           </div>
           <div className="produtCart">
               <Cart cart={cart}><Link to={"/order"}> <button className="main-button">Review Order</button></Link></Cart>
               
           </div>
        </div>
    );
};

export default Shop;