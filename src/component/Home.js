import axios from 'axios';
import React,{useState,useEffect} from 'react';


const Home=()=>{
    const [names,setNames]=useState([]);
   

    useEffect(()=>{
        axios.get("https://thronesapi.com/api/v2/Characters")
        .then(res=>{
            setNames(res.data)
        })
    },[])
    return(
        <div>
        <h1>Home page</h1>
        <div>   
            {names.map(it=><div>{it.firstName}</div>)}
        </div>
        </div>
    )
}
export default Home;