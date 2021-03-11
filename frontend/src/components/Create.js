import React, { useState } from 'react';
import axios from 'axios';
import GoBack from './GoBack';

const Create = ({ history }) => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [brand, setBrand] = useState("");


  const submitHandler = async (e)=>{
     e.preventDefault();
     await axios.post('/api/products', {
          name,
          price,
          brand
      });
     history.push('/');
  }

  
    return (
        <div className="my-5">
            <GoBack />
            <h1>Create a new product</h1>
              <form onSubmit={submitHandler}>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control"  
                     value={name} 
                     onChange={(e)=> setName(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Price</label>
                    <input type="text" className="form-control"  
                     value={price} 
                     onChange={(e)=> setPrice(e.target.value)}/>
                </div>
                <div classNameName="mb-3">
                    <label className="form-label">Brand</label>
                    <input type="text" className="form-control"  
                     value={brand} 
                     onChange={(e)=> setBrand(e.target.value)}/>
                </div>
                <button type="submit" className="btn btn-primary mt-3">Submit</button>
                </form>
        </div>
    )
}

export default Create
