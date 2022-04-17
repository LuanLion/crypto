import React from 'react'
import * as actions from '../../../stores/actions';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { maxOfPagination,pagination } from "../../marth";
function ListView() {
   const [usersData,setUserdata] = React.useState([])
   React.useEffect(async () => {
      await actions.fetchAllUserStart();
    }, []);
    const users = useSelector((state) => state.user.users);
    console.log("userstart: ", users);
    let handlePagination = (start, end)=>{
      setUserdata(pagination(users, parseInt(start), parseInt(end)) )
    }  
   
    const setNumRecord = 10
    const maxPagi = maxOfPagination(users.length, setNumRecord)
    const renderPagination = (max) => {
      let arr = []
      if (max > 0) {
        for (let i = 0; i < max; i++) {
          let start;
          let end;
          if (i === 0) {
            start = 0
            end = (i + 1) * setNumRecord
          } else {
            start = i * setNumRecord;
            end = (i + 1) * setNumRecord
          }
          let element = (<li key={i} className='page-item'>
            <Link to='#' className='page-link' onClick={(e) => handlePagination(start, end)} href='#'>
              {i + 1}
            </Link>
          </li>)
          arr.push(element)
        }
        return arr
      }
    }
  return (
   < div className='container mt-5'>
            <table className='table table-striped'>
               <thead>
                  <tr>
                     <th scope='col'></th>
                     <th scope='col'>First Name</th>
                     <th scope='col'>Last Name</th>
                     <th scope='col'>Address</th>
                     <th scope='col'>City</th>
                     <th scope='col'>Country</th>
                     <th scope='col'>link</th>
                  </tr>
               </thead>
               <tbody>
                  {usersData.map((item, idx) => (
                     <tr key={idx + 1}>
                        <th>
                           <img src={"https://imgs.search.brave.com/P6pl4_PgpIiUG48S5cuod2v5hljDoE4YXC20H3bltPs/rs:fit:379:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC52/Vmo2QzVnUlY1czhs/VjhPamtUb2l3SGFK/USZwaWQ9QXBp"} alt='user' className='profile-photo-lg' />
                        </th>
                        <td>{item.first_name}</td>
                        <td>{item.last_name}</td>
                        <td>{item.address}</td>
                        <td>{item.city}</td>
                        <td>{item.state.name}</td>
                        <td>
                           <Link to={'/customers/details/' + item.id} href='#'>
                              <h5 className='text-primary'>View Order</h5>
                           </Link>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
            <nav aria-label='Page navigation example'>
               <ul className='pagination'>
                  {renderPagination(maxPagi)}
               </ul>
            </nav>

         </div>
  )
}

export default ListView