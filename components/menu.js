import { ConnectWallet } from "@thirdweb-dev/react";
import Link from 'next/link'

export default function HeadMenu() {


    return (
        <div id = "container" className = "container mx-auto">
            <Link  href="../" className ="flex flex-row  justify-around "><div class="bg-white opacity-50 border-0 text-center rounded-lg mt-5 w-1/6 text-2xl   inset-y-0 left-0" >Home</div>
            <div className ="self-end font-sans  text-6xl  hover:text-7xl font-bold subpixel-antialiased   ">
               <p className ='font-disolay text-blue-900 tracking-1 opacity-80'> MD</p>
                </div></Link>
            <div class = "grid grid-cols-7 gap-2 mt-12  bg-opacity-50 text-2xl text-black flex justify-around">
            <Link href="/swappage"><div class="bg-white  border-0 text-center rounded-lg opacity-50"><p className="swap">Swap</p></div></Link>
            <Link href="/mint"><div class="bg-white  border-0 text-center rounded-lg opacity-50 ">Mint</div></Link>
            <Link href="/stake"><div class="bg-white  border-0 text-center rounded-lg opacity-50">Stake</div></Link>
            <Link href="/vote"><div class="bg-white  border-0 text-center rounded-lg opacity-50 ">Vote</div></Link>
            <Link href="/marketplace"><div class="bg-white border-0 text-center rounded-lg opacity-50">Marketplace</div></Link>
            <Link href="/contact"><div class="bg-white border-0 text-center rounded-lg opacity-50">Contact</div></Link>
            <ConnectWallet/>
            </div>
        </div>
    
    )
}