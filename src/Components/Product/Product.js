import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Product = (props) => {
    // console.log(props.product)
 
  const {img,name, seller,price,stock,key}=props.product
  
    return (
        <div className="Products">
            <div className="productImg"><img src={img} alt=""/></div>
           <div className="productDetils"> <h6><Link to={"/product/"+key}>{name}</Link></h6> 
           <p><small>by:{seller}</small></p>
           <p><small>${price}</small></p>
           <p><small>only {stock} left in stock - order soon</small></p>
           
           {props.showbutton && <button onClick={()=>props.handleAddcart(props.product)}><FontAwesomeIcon icon={faShoppingCart} />Add to chart</button>}
           </div>
           
        </div>
    );
};

export default Product;