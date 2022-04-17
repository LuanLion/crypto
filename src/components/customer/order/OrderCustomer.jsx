import React from 'react'
import "./OrderCustomer.css"
function OrderCustomer() {
  return (
    <div className='card mt-4 p-4'>
            <h4 className='text-dark'>Orders for Le Van A</h4>
            <div className='row'>
               <div className='col-md-12'>
                  <div className='panel panel-default'>
                     <div className='panel-body'>
                        <div className='table-responsive'>
                           <table className='table table-condensed'>
                              <tbody>
                                 <tr>
                                    <td className='text-center'>Basketball</td>
                                    <td className='text-center'>$10</td>
                                 </tr>
                                 <tr>
                                    <td className='text-center'>Shoes</td>
                                    <td className='text-center'>$20</td>
                                 </tr>
                                 <tr>
                                    <td className='no-line'></td>
                                    <td className='no-line text-center'>
                                       <strong>$30</strong>
                                    </td>
                                 </tr>
                              </tbody>
                           </table>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
  )
}

export default OrderCustomer