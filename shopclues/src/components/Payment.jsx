import React from 'react'
import { Navbar } from './Navbar'
import './style/Payment.css';

const Payment = () => {
  return (
      <>
      <Navbar/>
      <div>
        <img id ="payment" src="" alt=""/>
    <div id = "main">
        <div id = "left">
          
            <div id = "enter_email"> </div>
            <div><input type="text" placeholder="CARD NUMBER" id = "input1" onclick = ""/></div>
           
                info
            
            <div id = "validation1"></div>
            <div>&nbsp;</div>
           
            <div id = "enter_password"> </div>
            <div><input type="text" placeholder="CARD HOLDER" id = "input2" onclick = ""/></div>
            <div id = "validation2"></div>
        </div>



        <div id = "left">
            <div id = "enter_email"> </div>
            <select name="state" class="state-select" >
                <option value="">Month</option> 
                <option value="">01</option> 
                <option value="">02</option>
                <option value="">03</option> 
                <option value="">04</option> 
                <option value="">05</option> 
                <option value="">06</option> 
                <option value="">07</option> 
                <option value="">08</option> 
                <option value="">09</option> 
                <option value="">10</option> 
                <option value="">11</option> 
                <option value="">12</option> 
            </select>
            <div id = "validation1"></div>
            <div>&nbsp;</div>
            <div id = "enter_password"> </div>
            <div><input type="text" placeholder="CVV" id = "input2" onclick = ""/></div>
            <div id = "validation2"></div>
        </div>




        <div id = "left">
            <div id = "enter_email"> </div>
            <select name="state" class="state-select" >
                <option value="">Year</option> 
                <option value="">2021</option> 
                <option value="">2022</option>
                <option value="">2023</option> 
                <option value="">2024</option> 
                <option value="">2025</option> 
                <option value="">2026</option> 
                <option value="">2027</option> 
                <option value="">2028</option> 
                <option value="">2029</option> 
                <option value="">2030</option> 
                <option value="">2031</option> 
                <option value="">2032</option> 
            </select>
           
            <div id = "validation1"></div>
            
           
        </div>
    </div>
    <div id = "fixed">
        <div id="sum">
            <div><p style="font-family: Neue-Helvetica,Helvetica, Arial, sans-serif; color: #616161; font-size: 12px;">Total: ₹</p></div>
            <div><p id = "total"></p></div> 
        </div>
        <div class="d9">
            <a class="btn_continue" style="text-decoration: none;" onclick="">CONTINUE</a>
        </div>
    </div>
</div>
   
    </>
  )
}

export {Payment};
