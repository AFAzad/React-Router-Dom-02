import { Link , useNavigate } from "react-router-dom"
function Home(){
    const navigate = useNavigate();

    const navToPage = (url)=>{
        navigate(url);

    }

    return(
        <div>
            <h1>Welcome to Home page</h1>
            <h4>We are Providing the services of build the website and make your work smartly. Expolre your businees world wide</h4>
            <Link to="/contact">Contact me</Link> <br />
            <div>
                <button onClick={()=>navToPage('/services')}>Our Services Page</button> <br />
                <button onClick={()=>navToPage('/filter')}>Go to Filter</button>
            </div>
        </div>
    )   
}

export default Home;