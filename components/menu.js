import { ConnectWallet } from "@thirdweb-dev/react";

export default function HeadMenu() {


    return (
        <div id = "container" className = "container mx-auto">
            <a href="../"><div class="bg-white border-4 text-center rounded-lg mt-5 ">Home</div></a>
            <div class = "grid grid-cols-7 gap-2 mt-12 bg-gray-400 bg-opacity-30 text-2xl text-black">
            <a href="/swappage"><div class="bg-white border-4 text-center rounded-lg">Swap</div></a>
            <a href="/mint"><div class="bg-white border-4 text-center rounded-lg">Mint</div></a>
            <a href="/stake"><div class="bg-white border-4 text-center rounded-lg">Stake</div></a>
            <a href="/vote"><div class="bg-white border-4 text-center rounded-lg">Vote</div></a>
            <a href="/marketplace"><div class="bg-white border-4 text-center rounded-lg ">Marketplace</div></a>
            <a href="/contact"><div class="bg-white border-4 text-center rounded-lg">Contact</div></a>
            <ConnectWallet/>
            </div>
        </div>
    
    )
}