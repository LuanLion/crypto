import React from 'react'
import "./Setting.css"
function Setting() {
  return (
    <div className='container mt-5 p-5'>
    <h2 className='text-dark text-center'> Setting </h2>
    <div className='form'>
          <label htmlFor='cEmail' className='text-dark'>
             Current Email
          </label>
          <input type='text' value='Le Van B' className='form-control required1' name='current' />
          <label htmlFor='newEmail' className='text-dark'>
             New Email
          </label>
          <input type='text' value='Le Van K' className='form-control required1' name='new' />
          <label htmlFor='newEmail' className='text-dark'>
             Confirm Password
          </label>
          <input type='password' value='leVanA' className='form-control required1' name='psw' />
          <label htmlFor='newEmail' className='text-dark'>
             Number of Page
          </label>
          <select className='custom-select   required1'>
             <option selected value=''>
                10
             </option>
             <option value='1'>1</option>
             <option value='2'>2</option>
             <option value='3'>10</option>
          </select>
         
    </div>
    <div className='setting-button container mt-5'>
    <button type='button' className='btn btn-primary mt-5'>
             Save
          </button>
          <button type='button' className='btn btn-secondary mt-5 ml-3'>
             Cancel
          </button>

    </div>
    
 </div>
  )
}

export default Setting