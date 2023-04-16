import React from "react";
import { Web3Button } from "@thirdweb-dev/react";

export default function Stake() {
    const _tokenIds = ["0"]
    const _amount = 1000
    return(
    <div className = "">
        <div className="container grid grid-cols-2  m-3">
            <div className="grid grid-cols-1 gap-3">
            <h1 className="text-center text-blue-800 font-bold text-2xl">Stake NFT</h1>
    <Web3Button
    
      contractAddress="0x524DA2d357Fb9822667A236204714294e2c68FA6"
      action={(contract) => {

        contract.call("stake", [_tokenIds])
      }}
    >
      stake
    </Web3Button>
    
    <Web3Button
      contractAddress="0x524DA2d357Fb9822667A236204714294e2c68FA6"
      action={(contract) => {
        contract.call("withdraw", [_tokenIds])
      }}
    >
      withdraw
    </Web3Button>
      
    <Web3Button
      contractAddress="0x524DA2d357Fb9822667A236204714294e2c68FA6"
      action={(contract) => {
        contract.call("claimRewards")
      }}
    >
      claimRewards
    </Web3Button>
            </div>
            
            <div className="container grid grid-cols-2 m-3">
                <div className="grid grid-cols-1 gap-3">
                    <h1 className="text-center text-blue-800 font-bold text-2xl">Stake token</h1>
                <Web3Button
                contractAddress="0xa9930F79A45D8f94FBf5D33808d379607141abdE"
                action={(contract) => {
                    contract.call("stake", [_amount])
      }}
    >
      stake
    </Web3Button>
    <Web3Button
      contractAddress="0xa9930F79A45D8f94FBf5D33808d379607141abdE"
      action={(contract) => {
        contract.call("withdraw", [_amount])
      }}
    >
      withdraw
    </Web3Button>
    <Web3Button
      contractAddress="0xa9930F79A45D8f94FBf5D33808d379607141abdE"
      action={(contract) => {
        contract.call("claimRewards")
      }}
    >
      claimRewards
    </Web3Button>
                </div>
            </div>

            

        </div>
        </div>
    )
    
};
