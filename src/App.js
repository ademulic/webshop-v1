import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import BackToTop from "./Components/BackToTop/BackToTop";
import Home from "./Components/Home/Home";
import NewsLetter from "./Components/NewsLetter/NewsLetter";
import { Routes, Route } from "react-router-dom";
import Store from "./Components/Store/Store";

function App() {
 
 
  return ( 
    
      <div id="body" className="App">
          <BackToTop/>
          <Header/> 
          <Routes>
            <Route path="/" element={<Home/>}/>  
            <Route path="/Collection"  element={<Store/>}/>  
          </Routes>
          <NewsLetter/>
          <Footer/>
      </div>  
  );
}

export default App;
