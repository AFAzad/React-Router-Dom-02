import {useParams} from "react-router-dom";
import { Link } from "react-router-dom"

function User (){

  const Params = useParams();
  const {name}= Params;
  console.log(name);
  return(
    <>
    <h1>This is user {name} page</h1>
    <p>Welcome to User Page</p>
    <li><Link to='/'>Go to Home Page</Link></li>
    </>
  )
}



export default User
