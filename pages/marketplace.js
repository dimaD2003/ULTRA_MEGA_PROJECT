import {
    ThirdwebNftMedia,
    useAddress,
    useContract,
    useMetamask,
    useNFTs,
  } from "@thirdweb-dev/react";
  import styles from "../styles/Home.module.css";
  
  const Home = () => {
    const address = useAddress();
    const connectWithMetamask = useMetamask();
    const { contract } = useContract(
      "0x9605B7Ec3AC56986cA674F5b905c26A7c68cF63e"
    );
  
    const { data: nfts, isLoading: loading } = useNFTs(contract?.nft, {
      start: 0,
      count: 1,
    });
  
    const truncateAddress = (address) => {
      return (
        address.substring(0, 6) + "..." + address.substring(address.length - 4)
      );
    };
  
    if (loading) {
      return <div className={styles.container}>Loading...</div>;
    }
  
    return (
      <div className={styles.container}>
        {!address && (
          <button onClick={connectWithMetamask}>Connect Wallet</button>
        )}
  
        {nfts && nfts?.length > 0 && (
          <div className={styles.cards}>
            {nfts
              .filter(
                (nft) =>
                  nft.owner !== "0x0000000000000000000000000000000000000000"
              )
              .map((nft) => (
                <div key={nft.metadata.id.toString()} className={styles.card}>
                  <h1>{nft.metadata.name}</h1>
                  <ThirdwebNftMedia
                    metadata={nft.metadata}
                    className={styles.image}
                  />
                  <p>
                    owned by{" "}
                    {address && nft.owner === address
                      ? "you"
                      : truncateAddress(nft.owner)}
                  </p>
                </div>
              ))}
          </div>
        )}
      </div>
    );
  };
  
  export default Home;