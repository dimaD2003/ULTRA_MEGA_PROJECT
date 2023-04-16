import { ConnectWallet } from "@thirdweb-dev/react";
import { Web3Button } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import headMenu from "../components/menu";

export default function Home() {
  return (
    
<div className={styles.container}>
      <main className={styles.main}>
      <div className="table-header-group">
      
    

    <Web3Button
      contractAddress="0xb33EefA42daE0d82F88ba9Df881c1cb33Da9294F"
      action={async (contract) => contract.call("mint",["0x411991C04d88F6A0A483614bb9B678CA4eE2E21E",100000000000000000000000])}
      onSuccess={(result) => alert("Success!")}
      onError={(error) => alert("Something went wrong!")}
      className=""
    >
      Mint Scam NFT_didnt work
    </Web3Button>
    <Web3Button
      contractAddress="0xF3B21d51D6dC6221fd7576Fc4cFEfC0b1019Df7e"
      action={async (contract) => contract.erc20.mint(1000000)}
      onSuccess={(result) => alert("Success!")}
      onError={(error) => alert("Something went wrong!")}
      className="item"
    >
      Stake Scam NFT
    </Web3Button>
        </div>
      <div className={styles.mint}>
    <Web3Button
      contractAddress="0xF3B21d51D6dC6221fd7576Fc4cFEfC0b1019Df7e"
      action={async (contract) => contract.erc20.mint(1000000)}
      onSuccess={(result) => alert("Success!")}
      onError={(error) => alert("Something went wrong!")}
      className="item"
    >
      Mint Scam Token
    </Web3Button>
        </div>

        <div className={styles.stake}>
    <Web3Button
      contractAddress="0x5A174C9bf24Be0B0886204F90d0F63557CdFC0DF"
      action={async (contract) => contract.call("stake",[100])}
      onSuccess={(result) => alert("Success!")}
      onError={(error) => alert("Something went wrong!")}
      className="item"
    >
      Stake Scam Token
    </Web3Button>
    <Web3Button
      contractAddress="0x5A174C9bf24Be0B0886204F90d0F63557CdFC0DF"
      action={async (contract) => contract.call("withdraw",[100])}
      onSuccess={(result) => alert("Success!")}
      onError={(error) => alert("Something went wrong!")}
      className="item"
    >
      Withdraw
    </Web3Button>
        </div>
        <div className={styles.connect}>

        </div>

      <div>
       

      </div>
      </main>
    </div>
  );
}