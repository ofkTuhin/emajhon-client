import React from 'react';
import fakeData from '../../fakeData'

const Inventory = () => {
    const handleAddProduct=()=>{
        fetch('http://localhost:5000/addProducts',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(fakeData)
        })
        

    }
    return (
        <div>
            <h2>
                <button onClick={handleAddProduct}>addproduct</button>
            </h2>
        </div>
    );
};

export default Inventory;