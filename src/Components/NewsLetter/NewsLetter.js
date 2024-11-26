import "./NewsLetter.css";

const NewsLetter = () => {
    return ( 
        <div className="news-letter"> 
            <h1>Stay in the loop</h1> 
            <form className="news-letter-form">
                <div className="news-letter-email-input">
                    <input type="email" name="" id="" placeholder="Your Email..."/>
                    <button type="submit">Submit</button>
                </div>
                <div className="agreement">
                    <input type="checkbox" name="" id="news-letter-checkbox"/>
                    <label htmlFor="news-letter-checkbox" style={{display: "block"}}> I agree with the terms and services </label>               
                </div> 
            </form>
        </div>
     );
}
 
export default NewsLetter;