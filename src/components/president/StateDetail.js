import React from 'react'
import { Link } from "react-router-dom";
import { maxOfPagination,pagination } from "../marth";
import {  handlePrisedent } from "../../api/apiUser"
function StateDetail() {
  const [users, setUsers] = React.useState([]);
  const [results, setResults] = React.useState([]);
  const [isLoading, setIsloading] = React.useState(true);
 React.useEffect(async () => {
    setUsers( await  handlePrisedent());
    setIsloading(false);
  }, []);
  console.log("userstart: ", users);
  let handlePagination = (start, end)=>{
    setResults(pagination(users, parseInt(start), parseInt(end)) )
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
  const checkColor = (v) => {
    let color = '';
    if (v.candidates[0].lastName === 'Trump') {
       if (v.candidates[0].isWinner === true) {
          color = 'trump';
       } else {
          color = 'biden';
       }
    } else {
       if (v.candidates[0].isWinner === true) {
          color = 'biden';
       } else {
          color = 'trump';
       }
    }
    return color;
 };

 const renderCard = (data) => {
    return data.map((v, i) => (
       <div className='col-md-6 mt-4 mb-3' key={i + 1}>
          <h3 className='mt-2'>{v.stateName}</h3>
          <h5 className='mt-2'>
             <span className='text-danger '> Updated: 22H ago</span> <span className='ml-3'>{`${v.pctIn}%`} </span>
          </h5>
          <div className='card mt-4'>
             <div className={'card-header '+v.candidates[0].isWinner && v.candidates[0].party== 'REP'? "bg-danger":"bg-primary"} id={checkColor(v)}>
                {v.candidates[0].isWinner ? v.candidates[0].fullName : v.candidates[1].fullName}
                <span className='ml-4'>
                   {v.candidates[0].isWinner === true ? v.candidates[0].vote : v.candidates[1].vote}
                </span>
                <span className='ml-3'>
                   {v.candidates[0].isWinner  ? parseFloat(100*v.candidates[0].vote/( v.candidates[0].vote+ v.candidates[1].vote)).toFixed(2): parseFloat( 100*v.candidates[1].vote/( v.candidates[0].vote+ v.candidates[1].vote)).toFixed(2) }%
                </span>
             </div>
             <div className='card-header '>
                {v.candidates[0].isWinner   ? v.candidates[1].fullName : v.candidates[0].fullName}
                <span className='ml-4'>
                   {v.candidates[0].isWinner === false ? v.candidates[0].vote : v.candidates[1].vote}
                </span>
                <span className='ml-3'>
                   {v.candidates[0].isWinner ===false ? parseFloat( 100*v.candidates[0].vote/( v.candidates[0].vote+ v.candidates[1].vote)).toFixed(2):parseFloat(100*v.candidates[1].vote/( v.candidates[0].vote+ v.candidates[1].vote)).toFixed(2)}%
                </span>
             </div>
             <ul className='list-group list-group-flush '>
                <div className='d-flex flex-row mb-3 mt-2'>
                   <div className='c-text ml-4'>
                      <span>State Results + </span>
                      <span>Country Results + </span>
                      <span>Exit Poll </span>
                   </div>
                </div>
             </ul>
          </div>
       </div>
    ));
 };
  
  
    return (
      <React.Fragment>
        <div>
            <div className='container mt-5' id='card-items'>
               <h2 className='text-center'> State Details </h2>
               <div className='row'>
                  {isLoading === true ? 'LOADING DATA' : renderCard(results)}
               </div>
            </div>
         </div>
          <nav aria-label='Page navigation example' className='mt-4'>
            <ul className='pagination'>
              {renderPagination(maxPagi)}
            </ul>
          </nav>
          </React.Fragment>
        )
}

 export default StateDetail;