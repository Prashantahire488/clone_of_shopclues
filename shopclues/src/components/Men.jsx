import React,{useState,useEffect} from 'react';
//import { useSelector, useDispatch } from 'react-redux';
import './style/Men.css';
import {Navbar} from "./Navbar";
import {Footer} from "./footer";

// import {addCart} from '../redux/Cart/action';


 

const Men=()=> {

   const [user,setUser]=useState([]);
  const [value,setValue] = useState([]);
   const [val,setVal] = useState("");
 //const dispatch = useDispatch();

  const fetchData=()=>
  {
    fetch("https://shopcluesdb.herokuapp.com/Men").then((res)=>
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

 

  const lowToHigh=()=>{
    Men.sort((a,b)=>a.price-b.price)
  }
  const highToLow=()=>{
    Men.sort((a,b)=>b.price-a.price)
  }
  
let cart=[];
  if(localStorage.getItem("cart")===null)
  {
    localStorage.setItem("cart",JSON.stringify([]));
  }
  console.log(localStorage.getItem("cart")===null);

  const updateCart=(Men)=>
  {
    let cartData=JSON.parse(localStorage.getItem("cart"));
    cart=[...cartData,Men];
    console.log(cart)

    localStorage.setItem("cart",JSON.stringify(cart))
    alert("Product Added into the cart")
  }

  const sortBylow =(x) => {
    if(x==="l"){
     let res = user.sort((a,b) => a.price - b.price)
     setValue([...res])
    }else if( x==="h"){
      let res = user.sort((a,b) => b.price - a.price)
      setValue([...res])
    }
    
    }

  return (
    <>    
    
    <Navbar/>
<div id="mainsection">
    
            <div id="leftsection">

            <h4>FILTER</h4>
            <button onClick= {() => {sortBylow("l")} }>Low To High</button>
            <button onClick= {() => {sortBylow("h")} } >High To Low</button>
                <h4>CATEGORY</h4>
            <button onClick={() => {setVal("T-shirt")}}>T-Shirt</button>
            <button onClick={() => {setVal("Jeans")}}>Jeans</button>
            <button onClick={() => {setVal("Casual-shirt")}}>Casual Shirt</button>
            <button onClick={() => {setVal("Formal-shirt")}}>Formal Shirt</button>
          
        
           
            </div>
          
            <div id="rightsection">
    
   
                <h6></h6>
        <div className='item-container1'>
        {user.filter((el) => {

                if(el.category === val)
                {
                  return el.category ===val
                }
                else if(val === "")
                {
                    return el
                }
    
              })
           .map((Men) => (
            <div className='items'>
                <img src={Men.img_url} alt='' />
                <p>{Men.Title}</p>
                <h3 className='price'>{"₹"+Men.price}</h3>
                <p className='priceoff'>{Men.priceoff}</p>
                <p className='discount'>{Men.discount+"%"+" OFF"}</p>
                <br/>
                 <button className='btn_shop'onClick={() => updateCart(Men)}>Add To Cart</button>
            </div>          
            ))}
        </div>
        </div>
     </div>
       <Footer/>

    </>
  ) 
}

export {Men} 
