import React from "react";
import { Link } from "react-router-dom";
import CardView from "./cardView/CardView";
import ListView from "./listView/ListView";
import NewCustomer from "./newCustomer/NewCustomer";
function CustomerManager() {
   const [action, setAction] = React.useState(0);
   
   return (
      <React.Fragment>
         <div className='container'>
            <h2>Customer Information</h2>
            <ul class="nav">
               <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#" onClick={e => { setAction(0)}}> Card View</a>
               </li>
               <li className="nav-item">
                  <a className="nav-link" href="#" onClick={e => { setAction(1) }} > List View</a>
               </li>
               <li className="nav-item">
                  <a className="nav-link" href="#" onClick={e => { setAction(2) }}>New Customer</a>
               </li>
               
            </ul>
           
            <div className='show-option'>
               {action === 0 ? (
                  <CardView />
               ) : action === 1 ? (
                  <ListView />
               ) : (
                  <NewCustomer />
               )}
            </div>
         </div>


      </React.Fragment>
   );
}

export default CustomerManager;
