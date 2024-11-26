import { useState,useEffect } from "react";
import './Store.css';
import Pagination from "../Pagination/Pagination"
import axios from "axios";
import { Link } from "react-router-dom";
const Store = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(12);
    
    const fetchProducts = async () =>{
        try {
            const {data} = await axios.get('https://dummyjson.com/products');
            const products = await data.products;
            setProducts(products);
            setError(null);
            setLoading(false); 
        } catch (error) {
            console.error("error while fetching data", error);
            setLoading(false);
            setError(error);
            setProducts([]);
        }
        
    }

    useEffect(()=>{  
        fetchProducts();
    }, []) 

    const lastProductsIndex = currentPage * productsPerPage;
    const firstProductsIndex = lastProductsIndex - productsPerPage;    
    const currentProducts = products.slice(firstProductsIndex, lastProductsIndex);
 
    return (   
            <main className="products-main" id="main">
                <label style={{display: "block"}} htmlFor="Cat-checklist"><h3 className="mobile-categories"><i className="fa-solid fa-list-check"></i> Filters </h3> </label>
                <input type="checkbox" id="Cat-checklist"></input>
                <aside className="filter-products">
                    <label htmlFor="Cat-checklist"><i  id="Cat-checklist-close" className="fa-solid fa-xmark"></i></label>
                    <h3>Categories</h3> 
                    <div className="Categories-list">
                    <label htmlFor="Clothes-check">Clothes <span><i className="fa-solid fa-chevron-down"></i></span></label>
                        <input type="checkbox" name="" id="Clothes-check" />
                        <div className="Categories-checklist" id="Clothes">
                            <ul>                        
                                <li><input type="checkbox" name="" id=""/>All</li>
                                
                                <li><input type="checkbox" name="" id=""/>Jackets</li>
                                
                                <li><input type="checkbox" name="" id=""/>Sweatshirts</li>
                                
                                <li><input type="checkbox" name="" id=""/>T-Shirts</li>
                                
                                <li><input type="checkbox" name="" id=""/>Underwear</li>
                                
                                <li><input type="checkbox" name="" id=""/>Socks</li>
                                
                                <li><input type="checkbox" name="" id=""/>Jeans</li>
                                
                                <li><input type="checkbox" name="" id=""/>Sweaters</li>
                                
                                <li><input type="checkbox" name="" id=""/>Blazers</li>
                                
                                <li><input type="checkbox" name="" id=""/>Shorts</li>
                                
                                <li><input type="checkbox" name="" id=""/>Men swimsuits</li>
                            </ul>
                        </div>
                    </div>
                </aside>
                <section className="product-catalog-section"> 
                    <div className="sort-bar">
                        <span><a href="index.html"><i className="fa-solid fa-house"></i></a> Men</span>
                        <select>
                            <option value="Price-descending">Price descending</option>
                            <option value="Price-ascending">Price Ascending</option>
                            <option value="Newest-products">Newest Products</option>
                        </select>
                    </div>
                    <div className="product-catalog">
                        {loading && <p>Loading...</p>}
                        {error && <p>Whoops, Something went wrong</p>}
                        {
                            currentProducts.map(product=>
                                <Link to={`/Products/${product.id}`} key={product.id}>
                                    <div className="card" >
                                        <div className="card-thumbnail">
                                            <a href="#">
                                                <img src={product.thumbnail} alt="picture"/>
                                            </a>
                                        </div>
                                        <div className="card-body">
                                            <a href=""><h3>{product.title}</h3></a>
                                            <p>{product.price}</p>
                                        </div>                     
                                    </div>
                                </Link>
                            )
                        }  
                    </div>
                    <Pagination  
                        totalProducts = {products.length} 
                        productsPerPage={productsPerPage}
                        setCurrentPage={setCurrentPage}  
                        currentPage = {currentPage}  
                    />
                </section>
            </main> 
    );
}
 
export default Store;