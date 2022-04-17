import React from 'react'
import "./Customer.css";
import {Link} from "react-router-dom";
import DetailCustomer from './detail/DetailCustomer';
import OrderCustomer from './order/OrderCustomer';
// import DetailCustomer from "./detail/DetailCustomer";
// import OrderCustomer from "./order/OrderCustomer";
import NewCustomer from "../customerManager/newCustomer/NewCustomer"
// import AppRouting from '../AppRouting';
function Customer() {
   const [action, setAction] = React.useState(0);
  return (
    <div className='container'>
            <h2>Customer Information</h2>
            <ul class="nav">
               <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#" onClick={e => { setAction(0)}}> Detail</a>
               </li>
               <li className="nav-item">
                  <a className="nav-link" href="#" onClick={e => { setAction(1) }} > Order</a>
               </li>
               <li className="nav-item">
                  <a className="nav-link" href="#" onClick={e => { setAction(2) }}>New Customer</a>
               </li>
               
            </ul>
           
            <div className='show-option'>
               {action === 0 ? (
                  <DetailCustomer />
               ) : action === 1 ? (
                  <OrderCustomer/>
               ) : (
                  <NewCustomer />
               )}
               </div>
          
         </div>
  )
}

export default Customer