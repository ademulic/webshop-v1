
import { useEffect, useState } from "react";
const NewCollection = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{

        fetch('https://dummyjson.com/products?limit=4')
        .then(res=>res.json())
        .then(data=>setProducts(data.products));
      }, [])

         
     
      console.log(products)
    return ( 
        <section className="new-collection">
            <h1>Some of our newest items</h1>
            <div className="cards-container"> 

                {products && products.map((product)=>(
                    <div className="card" key={product.id}>
                        <div className="card-thumbnail">
                            <img src={product.thumbnail} alt="some text" />
                        </div>
                        <div className="card-body">
                            <h3>{product.title}</h3>
                            <p>{product.price}</p>
                        </div>
                        
                        <button>Add to cart</button>
                    </div>
                ))} 
            </div> 
        </section>
     );
}
 
export default NewCollection;