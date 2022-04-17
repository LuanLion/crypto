import React from 'react'
import "./State.css";
import {  handlePrisedent } from "../../api/apiUser";
import { Modal, Button } from 'react-bootstrap';
function State() {
  const [isLoading, setIsloading] = React.useState(true);
  const [results, setResult] = React.useState([])
  React.useEffect(async () => {
    let result = await  handlePrisedent();
    setResult(result);
    setIsloading(false)
  }, []);

  // const checkColor = (party) => {
  //   if (party == "REP") {
  //     return "btn-danger"
  //   } else return "btn-primary"
  // }
  const [show, setShow] = React.useState(false);
  const [showUser, setShowUser] = React.useState({});
  const handleClose = () => {
    setShow(false);

  }
  const handleShow = (users) => {
    setShow(true);
    setShowUser(users);

  }

  const arrayStatecode = {};
  for (let i = 0; i < results.length; i++) {
    const r = results[i];
    if (r.candidates[0].isWinner) {
      arrayStatecode[r.stateCode] = r.candidates[0].party
    }
    if (r.candidates[1].isWinner) {
      arrayStatecode[r.stateCode] = r.candidates[1].party
    }
  }


  console.log("arrayStatecode", arrayStatecode)
  // const arr = [
  //   ["AK", "", "", "", "", "", "", "", "", "", "ME"],
  //   ["", "", "", "", "", "", "", "", "", "VT", "NH"],
  //   ["WA", "ID", "MT", "ND", "MN", "", "", "OH", "NY", "CT", "MA"],
  //   ["OR", "UT", "WY", "SD", "IA", "WI", "MI", "WV", "PA", "NJ", "RI"],
  //   ["CA", "NV", "CO", "NE", "MO", "IL", "IN", "NC", "MD", "DE", ""],
  //   ["", "AZ", "NM", "KS", "AR", "TN", "KY", "SC", "VA", "DC", ""],
  //   ["", "", "", "OK", "LA", "MS", "AL", "GA", "", "", ""],
  //   ["HI", "", "", "TX", "", "", "", "FL", "", "", ""]

  // ]



  // const renderCard = (data) => {
  //   console.log("datat: ", data)
  //   let result = `<div>`
  //   for (let i = 0; i < 8; i++) {
  //     let row = `<div className="row">`
  //     for (let j = 0; j < 11; j++) {
  //       if (data[i][j] !== "") {
  //         const party = arrayStatecode[data[i][j]]
  //         row += `<div className="col"><button type="button" className=" btn btnparty ${checkColor(party)}" >${data[i][j]}</button></div>`
  //       } else {

  //         row += `<div className="col"></div>`
  //       }
  //     }
  //     row += `</div>`;
  //     result += row;
  //   }
  //   result += `</div>`
  //   return result;
  // }
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

  const renderCandidates = (v) => {
    console.log("v: ", v)
    return (
      <div className='col-md-12 mt-4 mb-3'>
        <h3 className='mt-2'>{v.stateName}</h3>
        <h5 className='mt-2'>
          <span className='text-danger '> Updated: 22H ago</span> <span className='ml-3'>{`${v.pctIn}%`} </span>
        </h5>
        <div className='card mt-4'>
          <div className={'card-header ' + v.candidates[0].isWinner && v.candidates[0].party == 'REP' ? "bg-danger" : "bg-primary"} id={checkColor(v)}>
            {v.candidates[0].isWinner == true ? v.candidates[0].fullName : v.candidates[1].fullName}
            <span className='ml-4'>
              {v.candidates[0].isWinner === true ? v.candidates[0].vote : v.candidates[1].vote}
            </span>
            <span className='ml-3'>
              {v.candidates[0].isWinner ? parseFloat(100 * v.candidates[0].vote / (v.candidates[0].vote + v.candidates[1].vote)).toFixed(2) : parseFloat(100 * v.candidates[1].vote / (v.candidates[0].vote + v.candidates[1].vote)).toFixed(2)}%
            </span>
          </div>
          <div className='card-header '>
            {v.candidates[0].isWinner === true ? v.candidates[1].fullName : v.candidates[0].fullName}
            <span className='ml-4'>
              {v.candidates[0].isWinner === false ? v.candidates[0].vote : v.candidates[1].vote}
            </span>
            <span className='ml-3'>
              {v.candidates[0].isWinner === false ? parseFloat(100 * v.candidates[0].vote / (v.candidates[0].vote + v.candidates[1].vote)).toFixed(2) : parseFloat(100 * v.candidates[1].vote / (v.candidates[0].vote + v.candidates[1].vote)).toFixed(2)}%
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
    );
  };
  console.log("array : ", arrayStatecode)
  return (
    <React.Fragment>

      <div>
        <div className='container mt-5' id='card-items'>
          <h2 className='text-center'> State party USA </h2>
          {isLoading === true ? 'LOADING DATA' :
            // <div dangerouslySetInnerHTML={{ __html: renderCard(arr) }} />
            <div>
              <div className="row">
                <div className="col"> <button type="button" className=" btn btnparty btn-danger" onClick={() => handleShow(results[1])}> AK</button></div>
                <div className="col"></div>
                <div className="col"></div>
                <div className="col"></div>
                <div className="col"></div>
                <div className="col"></div>
                <div className="col"></div>
                <div className="col"></div>
                <div className="col"></div>
                <div className="col"></div>
                <div className="col"> <button type="button" className=" btn btnparty btn-primary" onClick={() => handleShow(results[19])} >ME</button></div>
              </div>
              <div className="row">
                <div className="col"></div>
                <div className="col"></div>
                <div className="col"></div>
                <div className="col"></div>
                <div className="col"></div>
                <div className="col"></div>
                <div className="col"></div>
                <div className="col"></div>
                <div className="col"></div>
                <div className="col"> <button type="button" className=" btn btnparty btn-primary" onClick={() => handleShow(results[45])} >VT</button></div>
                <div className="col"> <button type="button" className=" btn btnparty btn-primary" onClick={() => handleShow(results[29])} >NH</button></div>
              </div>
              <div className="row">
                <div className="col"> <button type="button" className=" btn btnparty btn-primary" onClick={() => handleShow(results[47])} >WA</button></div>
                <div className="col"> <button type="button" className=" btn btnparty btn-danger" onClick={() => handleShow(results[12])}> ID</button></div>
                <div className="col"> <button type="button" className=" btn btnparty btn-danger" onClick={() => handleShow(results[26])}> MT</button></div>
                <div className="col"> <button type="button" className=" btn btnparty btn-danger" onClick={() => handleShow(results[34])}> ND</button></div>
                <div className="col"> <button type="button" className=" btn btnparty btn-primary" onClick={() => handleShow(results[23])} >MN</button></div>
                <div className="col"></div>
                <div className="col"></div>
                <div className="col"> <button type="button" className=" btn btnparty btn-danger" onClick={() => handleShow(results[35])}> OH</button></div>
                <div className="col"> <button type="button" className=" btn btnparty btn-primary" onClick={() => handleShow(results[32])} >NY</button></div>
                <div className="col"> <button type="button" className=" btn btnparty btn-primary" onClick={() => handleShow(results[6])} >CT</button></div>
                <div className="col"> <button type="button" className=" btn btnparty btn-primary" onClick={() => handleShow(results[21])} >MA</button></div>
              </div>
              <div className="row">
                <div className="col"> <button type="button" className=" btn btnparty btn-primary" onClick={() => handleShow(results[37])} >OR</button></div>
                <div className="col"> <button type="button" className=" btn btnparty btn-danger" onClick={() => handleShow(results[44])}> UT</button></div>
                <div className="col"> <button type="button" className=" btn btnparty btn-danger" onClick={() => handleShow(results[50])}> WY</button></div>
                <div className="col"> <button type="button" className=" btn btnparty btn-danger" onClick={() => handleShow(results[41])}> SD</button></div>
                <div className="col"> <button type="button" className=" btn btnparty btn-danger" onClick={() => handleShow(results[15])}> IA</button></div>
                <div className="col"> <button type="button" className=" btn btnparty btn-primary" onClick={() => handleShow(results[49])} >WI</button></div>
                <div className="col"> <button type="button" className=" btn btnparty btn-primary" onClick={() => handleShow(results[22])} >MI</button></div>
                <div className="col"> <button type="button" className=" btn btnparty btn-danger" onClick={() => handleShow(results[48])}> WV</button></div>
                <div className="col"> <button type="button" className=" btn btnparty btn-primary" onClick={() => handleShow(results[38])} >PA</button></div>
                <div className="col"> <button type="button" className=" btn btnparty btn-primary" onClick={() => handleShow(results[30])} >NJ</button></div>
                <div className="col"> <button type="button" className=" btn btnparty btn-primary" onClick={() => handleShow(results[39])} >RI</button></div>
              </div>
              <div className="row">
                <div className="col"> <button type="button" className=" btn btnparty btn-primary" onClick={() => handleShow(results[4])} >CA</button></div>
                <div className="col"> <button type="button" className=" btn btnparty btn-primary" onClick={() => handleShow(results[28])} >NV</button></div>
                <div className="col"> <button type="button" className=" btn btnparty btn-primary" onClick={() => handleShow(results[5])} >CO</button></div>
                <div className="col"> <button type="button" className=" btn btnparty btn-danger" onClick={() => handleShow(results[27])}> NE</button></div>
                <div className="col"> <button type="button" className=" btn btnparty btn-danger" onClick={() => handleShow(results[25])}> MO</button></div>
                <div className="col"> <button type="button" className=" btn btnparty btn-primary" onClick={() => handleShow(results[13])} >IL</button></div>
                <div className="col"> <button type="button" className=" btn btnparty btn-danger" onClick={() => handleShow(results[14])}> IN</button></div>
                <div className="col"> <button type="button" className=" btn btnparty btn-danger" onClick={() => handleShow(results[33])}> NC</button></div>
                <div className="col"> <button type="button" className=" btn btnparty btn-primary" onClick={() => handleShow(results[20])} >MD</button></div>
                <div className="col"> <button type="button" className=" btn btnparty btn-primary" onClick={() => handleShow(results[7])} >DE</button></div>
                <div className="col"></div>
              </div>
              <div className="row">
                <div className="col"></div>
                <div className="col"> <button type="button" className=" btn btnparty btn-primary" onClick={() => handleShow(results[2])} >AZ</button></div>
                <div className="col"> <button type="button" className=" btn btnparty btn-primary" onClick={() => handleShow(results[31])} >NM</button></div>
                <div className="col"> <button type="button" className=" btn btnparty btn-danger" onClick={() => handleShow(results[16])}> KS</button></div>
                <div className="col"> <button type="button" className=" btn btnparty btn-danger" onClick={() => handleShow(results[3])}> AR</button></div>
                <div className="col"> <button type="button" className=" btn btnparty btn-danger" onClick={() => handleShow(results[42])}> TN</button></div>
                <div className="col"> <button type="button" className=" btn btnparty btn-danger" onClick={() => handleShow(results[17])}> KY</button></div>
                <div className="col"> <button type="button" className=" btn btnparty btn-danger" onClick={() => handleShow(results[40])}> SC</button></div>
                <div className="col"> <button type="button" className=" btn btnparty btn-primary" onClick={() => handleShow(results[46])} >VA</button></div>
                <div className="col"> <button type="button" className=" btn btnparty btn-primary" onClick={() => handleShow(results[8])} >DC</button></div>
                <div className="col"></div>
              </div>
              <div className="row">
                <div className="col"></div>
                <div className="col"></div>
                <div className="col"></div>
                <div className="col"> <button type="button" className=" btn btnparty btn-danger" onClick={() => handleShow(results[36])}> OK</button></div>
                <div className="col"> <button type="button" className=" btn btnparty btn-danger" onClick={() => handleShow(results[18])}> LA</button></div>
                <div className="col"> <button type="button" className=" btn btnparty btn-danger" onClick={() => handleShow(results[24])}> MS</button></div>
                <div className="col"> <button type="button" className=" btn btnparty btn-danger" onClick={() => handleShow(results[0])}> AL</button></div>
                <div className="col"> <button type="button" className=" btn btnparty btn-primary" onClick={() => handleShow(results[10])} >GA</button></div>
                <div className="col"></div>
                <div className="col"></div>
                <div className="col"></div>
              </div>
              <div className="row">
                <div className="col"> <button type="button" className=" btn btnparty btn-primary" onClick={() => handleShow(results[11])} >HI</button></div>
                <div className="col"></div>
                <div className="col"></div>
                <div className="col"> <button type="button" className=" btn btnparty btn-danger" onClick={() => handleShow(results[43])}> TX</button></div>
                <div className="col"></div>
                <div className="col"></div>
                <div className="col"></div>
                <div className="col"> <button type="button" className=" btn btnparty btn-danger" onClick={() => handleShow(results[9])}> FL</button></div>
                <div className="col"></div>
                <div className="col"></div>
                <div className="col"></div>
              </div>
            </div>
          }
        </div>
      </div >
      {/* modal */}

      <Modal show={show} onHide={handleClose}>
       
        <Modal.Body>{show == true && renderCandidates(showUser)}</Modal.Body>
        
      </Modal>

      {/* modal */}



    </React.Fragment>
  )
}


export default State