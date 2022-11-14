import { Link } from "react-router-dom"

function Services(){
    return(
        <>
        <div>
            <h1>This is my Services page</h1>
            <p>Welcome to Services Page</p>
        </div>
        <div>
            <ul>
                <li><Link to='/user/Raaz'>Raaz</Link></li>
                <li><Link to='/user/Rahul'>Rahul</Link></li>
            </ul>
            <ul>
                <li><Link to='/'>Go to home pages</Link></li>
            </ul>
        </div>
        </>
    )
 }

 export default Services