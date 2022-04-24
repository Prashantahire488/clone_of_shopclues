import React,{useState,useEffect} from 'react'

import './style/Men.css';
import {Navbar} from "./Navbar";
import {Footer} from "./footer";



function Men() {

  const [user,setUser]=useState([]);
  const [searchdata,setSearchdata] = useState("")


  const searchd = (ele) =>
  {
      setSearchdata(ele);
      console.log(searchdata)
  }
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


  return (
    <>    
    <Navbar searchd={searchd} /> 
 <div className="sort">
                    <select onchange="" id="sortby">
                        <option value="" disabled selected hidden>Sort By</option>
                        <option>Relevance</option>
                        <option>What's New</option>
                        <option>Price Low to High</option>
                        <option>Price High to Low</option>
                        <option>Discount High to Low</option>
                    </select>           
                </div>
<div id="mainsection">

            <div id="leftsection">
                <h4>Filters</h4>
            <h4>CATEGORY</h4>
            <div>
                <input type="checkbox"  className="checkboxsize"/>
                <label>T-shirt</label>
            </div>
            <div>
                <input type="checkbox" className="checkboxsize"/>
                <label>Jeans</label>
            </div>
            <div>
                <input type="checkbox" className="checkboxsize"/>
                <label>Casual-Shirt</label>
            </div>
            <div>
                <input type="checkbox"  className="checkboxsize"/>
                <label>Formal-Shirt</label>
            </div>
        
            <h4>PRICE RANGE</h4>
            <div>
                <input type="checkbox"  className="checkboxsize"/>
                <label>Rs.200 - 500</label>
            </div>
            <div>
                <input type="checkbox" className="checkboxsize"/>
                <label>Rs.501 - 900</label>
            </div>
            <div>
                <input type="checkbox"  className="checkboxsize"/>
                <label>Rs.900 - 2599</label>
            </div>
            <h4>DISCOUNT</h4>
            <div>
                <input type="checkbox" className="checkboxsize"/>
                <label>0% - 30%</label>
            </div>
            <div>
                <input type="checkbox"  className="checkboxsize"/>
                <label>30% - 60%</label>
            </div>
            <div>
                <input type="checkbox" className="checkboxsize"/>
                <label>60% - 80%</label>
            </div>
            </div>
          
            <div id="rightsection">
    
   
                <h6></h6>
        <div className='item-container1'>
        {user.filter((ele) => {
                if(searchdata == "" || searchdata== undefined)
                {
                    return user;
                }
                else
                {
                    return ele.title.toLowerCase().includes(searchdata.toLowerCase());
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
