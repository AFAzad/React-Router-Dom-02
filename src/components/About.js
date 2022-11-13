import { Link } from "react-router-dom"
function About(){
    return(
        <div>
            <h1>This is my About page</h1>
            <p>Welcome to About Page</p>
            <li><Link to="/">Go to Home Page</Link></li>
        </div>
    )
 }

 export default About