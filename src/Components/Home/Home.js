import SplashPage from "./Sections/SplashPage/SplashPage";
import NewCollection from "./Sections/NewCollection/NewCollection";
import OurBrands from "./Sections/OurBrands/OurBrands";
import FormalWear from "./Sections/FormalWear/FormalWear";
import FashionExamples from "./Sections/FashionExamples/FashionExamples";
const Home = () => {
    return ( 
        <main style={{paddingBottom: 0}}>
            <SplashPage/> 
            <NewCollection/> 
            <OurBrands/> 
            <FormalWear/> 
            <FashionExamples/>
        </main>
    );
}
 
export default Home;