import { Web3Button } from "@thirdweb-dev/react";
import { ethers } from "ethers";
//swap BNB for Token
export default function SwapF(bnb,token) {
  return (
      <h1>
    <Web3Button
      contractAddress="0xb33EefA42daE0d82F88ba9Df881c1cb33Da9294F"
      action={(contract) => {
        contract.call("ethToTokenSwap", [ethers.utils.parseEther("1000")],{
          gasLimit: 1000000, // override default gas limit
          value: ethers.utils.parseEther("0.1"), // send 0.1 ether with the contract call
        })
      }}

    >
      SwapBnbForToken
    </Web3Button>
      </h1>
        

  );
}