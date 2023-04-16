import { ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
import HeadMenu from "../components/menu";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "binance-testnet";

function WalletConnect({ Component, pageProps }) {
  return (
    
    <ThirdwebProvider activeChain={activeChain}>
            <div>
        <HeadMenu/>
      </div>
      <Component {...pageProps} />

    </ThirdwebProvider>
  );
}

export default WalletConnect;
