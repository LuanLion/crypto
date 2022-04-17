import React from 'react'
import "./DetailCustomer.css";
import {Link} from "react-router-dom"
function DetailCustomer(props) {
  return (
     <>
    <div className='card mt-4 p-4'>
            <ul className='list-group list-group-flush'>
               <div className='d-flex flex-row mb-3 mt-2'>
                  <img src="https://imgs.search.brave.com/P6pl4_PgpIiUG48S5cuod2v5hljDoE4YXC20H3bltPs/rs:fit:379:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC52/Vmo2QzVnUlY1czhs/VjhPamtUb2l3SGFK/USZwaWQ9QXBp"  alt='' />
                  <div className='c-text ml-4'>
                  <h4> Le Van O </h4>
                  <h6> 123 NVC Noi Dai, Can Tho, VN</h6>
               </div>
               </div>
            </ul>
         </div>
         <div className="linkview">
         <Link to="/">View customer</Link>
         </div>
         </>
  )
}

export default DetailCustomer