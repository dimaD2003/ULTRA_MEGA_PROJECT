import React, { useState } from 'react';
//import state from "../state";
import SwapF from '../components/swap.js';
import TokenToEthSwap from '../components/swaptoken.js';


export default function Component() {

  return (
    <div className='container  grid grid-cols-2 m-96 gap-10 contant-center  w-3/4  flex items-stretch  text-black' >
    <div>
      <h1>BNB</h1>
      <input value="0.1"></input>
      <h1>Token</h1>
      <input value="100"></input>
      <div className='m-7'>
      <SwapF/>
      </div>
    </div>

    <div className=''>
      <h1>Token</h1>
      <input value="100"></input>
      <h1>BNB</h1>
      <input value="0.01"></input>
      <div className='m-7'>
      <TokenToEthSwap/>
      </div>
    </div>
    </div>
  )
}