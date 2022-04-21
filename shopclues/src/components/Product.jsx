import React,{useState,useEffect} from 'react'

function Product() {

  const [user,setUser]=useState([]);

  const fetchData=()=>
  {
    fetch("http://localhost:3001/data").then((res)=>
    {
      return res;
    }).then((data)=>
    {
      console.log(data);
    });
  }
  useEffect(
    ()=>
    {
      fetchData();
    }
  )
  return (
    <div>
      <h1>Products</h1>
    </div>
  )
}

export {Product} 
