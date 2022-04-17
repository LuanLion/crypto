import React from 'react'
import "./NewCustomer.css"
function NewCustomer() {
  return (
    <div className='container mt-5'>
            <h2 className='text-dark text-center'> New Customer </h2>
            <div className='form'>
                  <label className='text-dark'> First Name </label>
                  <input type='text' className='form-control required' name='fname' id='fname' defaultValue='' />
                  <label className='text-dark'> Last Name </label>
                  <input type='text' className='form-control required' name='lname' id='lname' defaultValue='' />
                  <label className='text-dark'> Address </label>
                  <input type='text' className='form-control required' name='address' id='address' defaultValue='' />
                  <label className='text-dark'> City </label>
                  <input type='text' className='form-control required' name='city' id='city' defaultValue='' />
                  <label className='text-dark'> State </label>
                  <select className='custom-select required' defaultValue='1'>
                     <option defaultValue='1'></option>
                     <option value='1'>One</option>
                     <option value='2'>Two</option>
                     <option value='3'>Three</option>
                  </select>

            </div>
            <div className="btncustomer container mt-5">
            <button type='button' className='btn btn-secondary mt-3'>
                     Cancel
                  </button>
                  <button type='button' className='btn btn-primary mt-3 ml-3'>
                     Insert
                  </button>
            </div>
         </div>
  )
}

export default NewCustomer