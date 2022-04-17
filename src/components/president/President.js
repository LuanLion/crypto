import React, { useEffect } from 'react'
import "./President.css";
import {  handlePrisedent } from "../../api/apiUser"
function President() {
  const [results, setResult] = React.useState([])
  useEffect(async () => {
    let result = await  handlePrisedent();
    console.log("result: ",result);
    setResult(result);
  }, []);
  let trump3 = 0;
  let biden3 = 0;
  let trump = 0;
  let biden = 0;
  for (let i = 0; i < results.length; i++) {
    for (let j = 0; j < results[i].candidates.length; j++) {
      const c = results[i].candidates[j];
      if (c.lastName == "Trump") {
        trump += c.vote;
      } else {
        biden += c.vote;
      }
    }


  }
  for (let i = 0; i < results.length; i++) {
    const r = results[i];
    if (r.candidates[0].isWinner) {
      if (r.candidates[0].lastName == "Trump") {
        trump3 += r.electoralVotes;
      } else {
        biden3 += r.electoralVotes;
      }
    }
    if (r.candidates[1].isWinner) {
      if (r.candidates[1].lastName == "Trump") {
        trump3 += r.electoralVotes;
      } else {
        biden3 += r.electoralVotes;
      }
    }
  }
  let sum = trump + biden;
  let trump2 = parseFloat(trump / sum * 100).toFixed(2);
  let biden2 = parseFloat(biden / sum * 100).toFixed(2)
  console.log("result: ", results)
  console.log("trump: ", Math.ceil(trump / sum * 100));
  console.log("biden: ", Math.ceil(biden / sum * 100));
  console.log("trump3: ", trump3);
  console.log("biden3: ", biden3);
  var divStyle1 = {
    backgroundColor: 'blue',
    width: `${Math.ceil(biden / sum * 100)*11}px`,
    height: "5px",
  };
  var divStyle2 = {
    backgroundColor: 'red',
    width: `${Math.ceil(trump / sum * 100)*11}px`,
    height: "5px",
  };
  var divStyle = {
    display: "flex",
    margin:"20px"
  };

  return (
    <React.Fragment>
      <div className="president">
        <div className="container-president">
          <div className="row">
            <div className="col">
              <h1>Presidenttial Results</h1>
            </div>
            <div className="update-oclock">
              <a className="nav-link active" aria-current="page" href="#">updated</a>
              <span>Exit Poll +</span>
            </div>
            <div className='col-md-6'>
              <div className='card mt-4'>
                <div className='card-header bg-primary text-white'>Joe Biden</div>
                <ul className='list-group list-group-flush'>
                  <div className='d-flex flex-row mb-3 mt-2'>
                    <img src={"https://imgs.search.brave.com/CjK0HxiYvX6-6W4HFDDXMgMxlWYOZIhzurOYii0w0p8/rs:fit:715:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5R/bmpHWDVYbXlraG43/dEVhM0pWM01RSGFF/NiZwaWQ9QXBp"} alt='' />
                    <div className='c-text ml-4'>
                      <h6> Electronal college  </h6>
                      <h1> {biden3}</h1>
                      <div className='d-flex justify-content-between install mt-3'>
                        <div className='name-vote'>Votes</div>
                        <div className="vote_percent">{biden2}%</div>
                        <label htmlFor="floatingInput" className="name-vote">voted</label>
                        <div className="vote_percent">{biden}</div>
                      </div>
                    </div>
                  </div>
                </ul>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='card mt-4'>
                <div className='card-header bg-danger text-white'>Donald Trump</div>
                <ul className='list-group list-group-flush'>
                  <div className='d-flex flex-row mb-3 mt-2'>
                    <img src={"https://imgs.search.brave.com/IWFJZ6jEA1eA9VI262mdx2CXsHF3mAI0Aj6cSFtIGrk/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC4x/NlpNUFVrV1NUbm13/T1d1czhYb3ZRSGFF/OCZwaWQ9QXBp"} alt='' />
                    <div className='c-text ml-4'>
                      <h6> Electronal college </h6>
                      <h1>{trump3} </h1>
                      <div className='d-flex justify-content-between install mt-3'>
                        <div className='name-vote'>Votes</div>
                        <div className="vote_percent">{trump2}%</div>
                        <label htmlFor="floatingInput" className="name-vote">voted:</label>
                        <div className="vote_percent">{trump}</div>
                      </div>
                    </div>
                  </div>
                </ul>
              </div>
            </div>

          </div>
          <div className="final" style={divStyle}>
            <div className='biden' style={divStyle1}></div>
            <div className='trump' style={divStyle2}></div>

          </div>
          <div className='p-content text-center mt-4'>
            <h6>270 to Win</h6>
          </div>


        </div>



      </div>


    </React.Fragment>
  )
}

export default President