import "./OurBrands.css";
import brand1 from "../../../../assets/brands logos/1.webp";
import brand2 from "../../../../assets/brands logos/2.webp";
import brand3 from "../../../../assets/brands logos/3.webp";
import brand4 from "../../../../assets/brands logos/4.webp";
import brand5 from "../../../../assets/brands logos/5.webp";
import brand6 from "../../../../assets/brands logos/6.webp";
import brand7 from "../../../../assets/brands logos/7.webp";
import brand8 from "../../../../assets/brands logos/8.webp";
const OurBrands = () => {

    const brands = [
        brand1,
        brand2,
        brand3,
        brand4,
        brand5,
        brand6,
        brand7,
        brand8,  
    ]

    return (
        <section className="our-brands"> 
            <h1>Featured Brands</h1>
            <div className="brand-logos">
                {
                    brands.map(brand =>(
                        <div className="brand-logo" key={brand}>
                        <a href="#">
                            <img src={brand}/>
                        </a>
                </div>
                    ))
                } 
            </div>
        </section> 
     );
}
 
export default OurBrands;