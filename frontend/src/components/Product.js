import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GoBack from './GoBack';


const Product = ({ match, history }) => {
    const [product, setProduct] = useState({});
    const [removed, setRemoved] = useState(false);
    
    useEffect(()=>{
      const fetchProduct = async()=>{
        const res = await axios.get(`/api/products/${match.params.id}`);
        setProduct(res.data);
      }
      fetchProduct();
    }, [match.params.id]);

    const deleteHandler = async()=>{
      await axios.delete(`/api/products/remove/${match.params.id}`);
      setRemoved(true);
    }

    const removedMessage = ()=>{
        if(removed){
            setTimeout(()=>{
            history.push('/');
            }, 1500)
        }
    }
    removedMessage();


    return (
        <div className="my-5">
          <GoBack />
            {product && (
                <div>
                  <h3>{product.name}</h3>
                 <h5>Price$: {product.price}</h5>
                 <h5>Brand: {product.brand}</h5>
                 <button type="button" className="btn btn-danger mt-2" onClick={deleteHandler}>Delete product</button>
             </div>
            )}
            {removed && <h2 className="mt-4">Product has been removed</h2>}
        </div>
    )
}

export default Product
