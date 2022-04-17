import React, { useState, useEffect } from 'react'
// import * as actions from '../../../stores/actions';
// import { useSelector } from "react-redux";
import detectEthereumProvider from '@metamask/detect-provider';
import Web3 from "web3";
function CardView() {
  const [web3Api, setWeb3Api] = useState({
    provider: "",
    web3: ""
  });
  // const [account, setAccount] = useState();
  useEffect(() => {
    const loadProvider = async () => {
      const provider = await detectEthereumProvider();
      console.log('Ethereum successfully detected!')
      if (provider) {
        await provider.request({
          method: 'eth_requestAccounts'
        })
        setWeb3Api({
      //  web: new Web3(provider),
          provider: provider
        })
      } else {
        console.error("please, Install Metamask", web3Api)
      }

    }
    loadProvider();
  }, []);
  const connectWalletHandler = () => {

    console.log("web3Api", web3Api)
  }



  return (
    <>
      <button className="btn btn-primary" onClick={connectWalletHandler}>connect</button>
    </>

  )
}

export default CardView;