import React from 'react'
import Login from "./login/Login";
import { Route, Routes } from "react-router-dom";
import CustomerManager from "./customerManager/CustomerManager";
import Customer from "./customer/Customer";
import ListView from "./customerManager/listView/ListView";
import CardView from "./customerManager/cardView/CardView";
import Newcustomer from "./customerManager/newCustomer/NewCustomer";
import DetailCustomer from './customer/detail/DetailCustomer';
import OrderCustomer from './customer/order/OrderCustomer';
import Setting from './setting/Setting';
import Home from './home/Home';
import President from "./president/President";
import State from "./president/State";
import StateDetail from "./president/StateDetail"
function AppRouting() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/customerManager" element={<CustomerManager />} />
        <Route path="/cardview" element={<CardView />} />
        <Route path="/listview" element={<ListView />} />
        <Route path="/newcustomer" element={<Newcustomer />} />

        <Route path="/customer" element={<Customer />} />
        <Route path="/customer/detail_customer" element={<DetailCustomer />} />
        <Route path="/customer/order-customer" element={<OrderCustomer />} />

        <Route path="/setting" element={<Setting />} />
        <Route path="/prisedent" element={<President />} />
        <Route path="/state" element={<State />} />
        <Route path="/state_detail" element={< StateDetail />} />
      </Routes>

    </React.Fragment>)
}

export default AppRouting