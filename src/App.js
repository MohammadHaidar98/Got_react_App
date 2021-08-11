import axios from "axios";
import React,{useState,useEffect} from "react";
import './App.css'
import Header from './component/ui/Header'
import Character from './component/characters/characterGrid'
import Search from './component/ui/Search'

const App = () => {
  const [items,setItems]=useState([])
  const [isLoading,setIsLoadind]=useState(true)
  const [query,setQuery]=useState(0)

  useEffect(()=>{
    const fetchItems=async ()=>{
        const result=await axios(`https://thronesapi.com/api/v2/Characters`)  
        console.log(result.data)
        setItems(result.data)
        setIsLoadind(false)
    }
    fetchItems()
  },[query])
  return (
    <div>
      <Header/>
      <Search getQuery={(e)=>setQuery(e)}/>
      <Character isLoading={isLoading} items={items}/>
    </div>
  )
  /**/
}

export default App
