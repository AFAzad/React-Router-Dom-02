import { NavLink } from "react-router-dom"

function Navbar(){
    return(
        <div className="main-navbar">
            <ul className="navbar">
                <li><NavLink to="/" className="navbar-link"
                style={({isActive})=>{return{color: isActive?'lightgreen':''}}}
                >Home</NavLink></li>
                <li> <NavLink to='About'className="navbar-link"
                style={({isActive})=>{return{color: isActive?'lightgreen':''}}}
                >About</NavLink> </li>
                <li> <NavLink to='Blogs'className="navbar-link"
                style={({isActive})=>{return{color: isActive?'lightgreen':''}}}
                >Blogs</NavLink> </li>
                <li> <NavLink to='Services'className="navbar-link" 
                style={({isActive})=>{return{color: isActive?'lightgreen':''}}}
                >Services</NavLink> </li>
                <li> <NavLink to='Contact'className="navbar-link"
                style={({isActive})=>{return{color: isActive?'lightgreen':''}}}
                >Contact</NavLink> </li>
                <li><NavLink to='filter' className='navbar-link'
                style={({isActive})=>{return{color:isActive?'lightgreen':''}}}
                >Filter</NavLink></li>
                
                
            </ul>
        </div>
    )
 }

 export default Navbar