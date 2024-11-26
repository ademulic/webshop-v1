import "./Footer.css";

const Footer = () => {

    
    return ( 
        <footer>
            <div className="row">
                <div className="col">
                    <h1>LOGO</h1> 
                </div>

                <div className="col">
                    <h3>Company</h3>
                    <a href="#">About us</a>
                    <a href="#">Terms and services</a>
                    <a href="#">Cookies</a>
                    <a href="#">Become one of us</a>
                </div>

                <div className="col">
                    <h3>Customer service</h3>
                    <a href="#">Contact</a>
                    <a href="#">Sizes</a>
                    <a href="#">My Account</a> 
                </div>

                <div className="col">
                    <h3>Connect with us on our Socials</h3>
                    <div className="social">
                        <a href="#"><i className="fa-brands fa-square-facebook"></i></a>
                        <a href="#"><i className="fa-brands fa-square-x-twitter"></i></a>
                        <a href="#"><i className="fa-brands fa-square-pinterest"></i></a>
                        <a href="#"><i className="fa-brands fa-square-instagram"></i></a>
                        <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                    </div>
                </div>
            </div> 
            <p>Created by <a href="https://www.linkedin.com/in/adem-mulic-289864253/">Adem Mulic</a></p>
        </footer>
     );
}
 
export default Footer;