import React,{useState,useEffect} from 'react'
import './style/Product.css';

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
      console.log(data);
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
    <>    
        <h1>Products</h1>
        <div className='item-container'>
            {user.map((product) => (
            <div className='items'>
                <img src={product.img_url} alt='' />
                <h3>{product.Title}</h3>
                <p>{"₹"+product.price}</p>
            </div>          
            ))}
        </div>
    </>
  ) 
}

export {Product} 
