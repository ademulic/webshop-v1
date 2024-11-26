import "./BackToTop.css";

const BackToTop = () => {
    return ( 
        <a href="#body">
            <div className="back-to-top"> 
                <i className="fa-solid fa-chevron-up"></i> 
            </div>
        </a>
     );
}
 
export default BackToTop;