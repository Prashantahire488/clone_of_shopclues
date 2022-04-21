import React,{useState,useEffect} from 'react'

function Product() {

  const [user,setUser]=useState([]);

  const fetchData=()=>
  {
    fetch("http://localhost:3001/data").then((res)=>
    {
      return res.json();
    }).then((data)=>
    {

      let data1=data;
      //console.log(data);
      //console.log(data1)
      setUser(data1);
    });
  }
  useEffect( ()=>
    {
      fetchData();
    },[]
  )
  return (
    <div>
      <h1>Products</h1>
    </div>
  )
}

export {Product} 
