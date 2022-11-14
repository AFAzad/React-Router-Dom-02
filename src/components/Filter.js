import {Link,useSearchParams} from "react-router-dom"
function Filter(){
    const [searchParams, setSearchParams]= useSearchParams();

    const age = searchParams.get('age');

    const city = searchParams.get('city');
    return(
        <div>
            <h1>Filter Page</h1>
            <h3>Age is {age}</h3>
            <h3>City is {city}</h3>
            <button onClick={()=>setSearchParams({age:20})}>Set age is Query Params</button>
            <input type="text" name="" id="" onChange={(e)=>setSearchParams({text:e.target.value,age:25})} placeholder="Set text Query Params"/> <br />
            <p><Link to="/">Go to Home </Link></p>
        </div>
    )
}
export default Filter