import { Web3Button } from "@thirdweb-dev/react";
import { ethers } from "ethers";

export default function TokenToEthSwap() {
  return (
    <Web3Button
      contractAddress="0xb33EefA42daE0d82F88ba9Df881c1cb33Da9294F"
      action={(contract) => {
        contract.call("tokenToEthSwap", [ethers.utils.parseEther("10"), ethers.utils.parseEther("0.01")])
      }}
    >
      tokenToEthSwap
    </Web3Button>
  )
}