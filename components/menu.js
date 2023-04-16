import { ConnectWallet } from "@thirdweb-dev/react";
import Link from 'next/link'
export default function HeadMenu() {


    return (
        <div id = "container" className = "container mx-auto">
            <Link  href="../"><div class="bg-white border-4 text-center rounded-lg mt-5 ">Home</div></Link>
            <div class = "grid grid-cols-7 gap-2 mt-12 bg-gray-400 bg-opacity-30 text-2xl text-black">
            <Link href="/swappage"><div class="bg-white border-4 text-center rounded-lg">Swap</div></Link>
            <Link href="/mint"><div class="bg-white border-4 text-center rounded-lg">Mint</div></Link>
            <Link href="/stake"><div class="bg-white border-4 text-center rounded-lg">Stake</div></Link>
            <Link href="/vote"><div class="bg-white border-4 text-center rounded-lg">Vote</div></Link>
            <Link href="/marketplace"><div class="bg-white border-4 text-center rounded-lg ">Marketplace</div></Link>
            <Link href="/contact"><div class="bg-white border-4 text-center rounded-lg">Contact</div></Link>
            <ConnectWallet/>
            </div>
        </div>
    
    )
}