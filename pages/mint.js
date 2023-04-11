import { ConnectWallet } from "@thirdweb-dev/react";
import { Web3Button } from "@thirdweb-dev/react";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
      <div className={styles.nft}>
    <Web3Button
      contractAddress="0x4526f5492d3F06dD8068393ED97366AbbE913922"
      action={async (contract) => contract.call("mint")}
      onSuccess={(result) => alert("Success!")}
      onError={(error) => alert("Something went wrong!")}
      theme="dark"
    >
      Mint Scam NFT
    </Web3Button>
    <Web3Button
      contractAddress="0xF3B21d51D6dC6221fd7576Fc4cFEfC0b1019Df7e"
      action={async (contract) => contract.erc20.mint(1000000)}
      onSuccess={(result) => alert("Success!")}
      onError={(error) => alert("Something went wrong!")}
      theme="dark"
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
      theme="dark"
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
      theme="dark"
    >
      Stake Scam Token
    </Web3Button>
    <Web3Button
      contractAddress="0x5A174C9bf24Be0B0886204F90d0F63557CdFC0DF"
      action={async (contract) => contract.call("withdraw",[100])}
      onSuccess={(result) => alert("Success!")}
      onError={(error) => alert("Something went wrong!")}
      theme="dark"
    >
      Withdraw
    </Web3Button>
        </div>
        <div className={styles.connect}>
          <ConnectWallet />
        </div>


      </main>
    </div>
  );
}