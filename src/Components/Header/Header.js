import { NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
    return ( 
        <header>
        <div className="menu">
            <label htmlFor="check" className="burger-menu">
                <i className="fa-solid fa-bars"></i>
            </label>
            <h1 className="logo">Logo</h1>
            <div className="search">
                <input type="text" name="" placeholder="Search..."/>
                <button><i className="fa-solid fa-magnifying-glass"></i></button>
            </div>
        </div>
        <input type="checkbox" name="check" id="check" unchecked="true"/>
        <div className="menu-icons">
            <a href="#"><i className="fa-solid fa-heart"></i></a> 
            <a href=""><i className="fa-solid fa-cart-shopping"></i></a> 
            <button><i className="fa-solid fa-magnifying-glass"></i></button>
        </div>
        <nav>
            <label htmlFor="check" className="close-menu">
                <i className="fa-solid fa-xmark"></i>
            </label>
            <div className="nav-menu">
                <NavLink to="/">home</NavLink>
                <NavLink to="/Collection">Collection</NavLink>
                <NavLink to="./men.html">Men</NavLink>
                <NavLink to="./women.html">Women</NavLink>
                <NavLink to="./children.html">children</NavLink> 
                <NavLink to="#">Brands</NavLink> 
                <NavLink to="#" className="favorites"><i className="fa-solid fa-heart"></i> Favorites</NavLink>
                <div className="dropdown cart">
                    <a to=""><i className="fa-solid fa-cart-shopping"></i></a>
                    <div className="shopping-cart">
                        <p>No items currently</p>
                        <button className="btn">Go to Checkout</button> 
                    </div>
                </div>
                <div className="dropdown ">
                    <NavLink to=""><i className="fa-solid fa-user"></i></NavLink>
                    <div className="user">
                        <NavLink to="#">Adem Mulic</NavLink>
                        <NavLink to="#">logout</NavLink>
                    </div>
                </div>
            </div> 
            <div></div>
        </nav>
    
        
    </header>

     );
}
 
export default Header;