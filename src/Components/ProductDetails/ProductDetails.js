import { useParams } from 'react-router-dom';
import './ProductDetails.css';
import { useEffect, useState } from 'react';
import axios from 'axios';


const ProductDetails = () => {

    const {id} = useParams();
    const [product, setProduct] = useState({});
    const fetchData = async () =>{
        try {
            const {data} = await axios.get(`https://dummyjson.com/products/${id}`);

            const product = await data;

           setProduct(product);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(()=>{
        fetchData();
    },[id])

    return ( 
        <div className="product-details">
            <div className="product-images">
                <img src={product.thumbnail} alt="neki Product" />
            </div>
            <div className="product-body">
                <h1 className="product-name">{product.title}</h1>
                <p>{product.description}</p>
                <p>${product.price}</p>
                <input type="number" min="0" placeholder='0' />
                <button>Buy</button>
            </div>
        </div>
     );
}
 
export default ProductDetails;