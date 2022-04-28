import React from 'react'
import {Navbar}  from "./Navbar";
import {Footer}  from "./footer";
import './style/Cart.css';

export const Cart=()=>
{
    let cartData=JSON.parse(localStorage.getItem("cart"));
    console.log(cartData);

    return (
    <>
    <div>
        <Navbar/>
    <div className="hline"></div>

    <div className="cart-mid-top">
        
        <div className="cursor"><h3>MY BAG</h3> </div>
        <p className="hline-mid">
        </p>
        <div><p className="txt-lightwt">ORDER SUMMARY </p> </div>
        <p className="hline-mid"></p>
        <div><p className="txt-lightwt">PAYMENT</p> </div>
    </div>
     <div className="heading-mid">
        
     </div>
     <div>
         <h1>ITEMS DETAIL</h1>
         <div id="products">
          {cartData.map((p)=>
          {    
                  <div>
                      <div>
                          <img src={p.img_url} alt="p"/>
                          </div>
                          <div>
                              <p>{p.Title}</p>
                              <p>{p.price}</p>
                              <p>{p.category}</p>
                              </div>
                      </div>
         
          })
        }  
              
         </div>
            
     </div>
  
   
</div>

            
    <div><Footer/></div>


 </>
 )}
