import "./FashionExamples.css";
const FashionExamples = () => {
    return ( 
        <section id="fashion-examples-section">
            <h1>Need Ideas? Check out our premade outfits</h1>
            <div id="fashion-examples">
                <a href="women.html">
                    <div className="fashion-example fashion-example-female">
                        <h1>Women</h1>                     
                    </div>
                </a>
                <a href="children.html">
                    <div className="fashion-example fashion-example-children">
                        <h1>Children</h1>
                        
                    </div>
                </a>
                
                <a href="men.html">
                    <div className="fashion-example fashion-example-men">
                        <h1>Men</h1> 
                    </div>
                </a>
            </div>
        </section>
     );
}
 
export default FashionExamples;