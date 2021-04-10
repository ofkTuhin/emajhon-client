import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData'
import Product from '../Product/Product';
import { useState, useEffect } from 'react';
const Productdetail = () => {
  const { productKey } = useParams()
  const [product, setProduct] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/product/' + productKey)
      .then(res => res.json())
      .then(data =>{setProduct(data) 
      console.log(product)
      })

  }, [ productKey])
 
  // const product = addProduct.find(pd => pd.key = productKey)

  return (
    <div>
      <Product
        product={product}
        shohobutton={false}
      >

      </Product>
    </div>
  );
};

export default Productdetail;