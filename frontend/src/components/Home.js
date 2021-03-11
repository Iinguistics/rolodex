import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const Home = () => {
  const [products, setProducts] = useState([]);


  useEffect(()=>{
    const fetchProducts = async()=>{
        const res = await axios.get('/api/products');
        setProducts(res.data.products);
     }
    fetchProducts();
  }, []);
   
        const renderProducts = ()=>{
            if(products){
                return products.map((item)=>{
                    return (
                        <div key={item._id}>
                           <Link to={`/product/${item._id}`}><h3>{item.name}</h3></Link> 
                            <h5>Price$: {item.price}</h5>
                            <h5>Brand: {item.brand}</h5>
                        </div>
                    )
                })
            }
        }


    return (
        <div className="my-5">
            <Link to="/create"><input type="submit" value="Create a product" className="btn btn-dark mb-4"/></Link>
            <h1>Products</h1>
            {renderProducts()}
        </div>
    )
}

export default Home
