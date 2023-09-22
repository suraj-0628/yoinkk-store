import { A } from "@solidjs/router"
import { createSignal } from "solid-js"
import Empty from "./emptycart"


export default function Header(){
    const [pos,setPos]=createSignal('left-0')
    const [show,setShow]=createSignal("")
    return(
        <header className="pt-[2%] ml-[10%] relative">
        <div>
          <h1 className="text-4xl font-bold">yoinkk</h1>
        </div>
       
          <nav className=" text-[rgb(142,142,142)] w-[30%] h-16 flex justify-center items-center absolute left-[15%] top-[25%] ">

            <div onClick={()=>setPos("left-[0%]")} className="w-1/5 flex justify-center  items-center ">Collection</div>
            
            <div onClick={()=>setPos("left-[20%]")} className="w-1/5 flex justify-center items-center text-center">Men</div>
            
            <div onClick={()=>setPos("left-[40%]")} className="w-1/5 flex justify-center items-center">Women</div>
            

            <div onClick={()=>setPos("left-[60%]")} className="w-1/5 flex justify-center items-center">About</div>

            <div onClick={()=>setPos("left-[80%]")} className="w-1/5 flex justify-center items-center">Contact</div>
            
            
          </nav>
           
           {/* <div className="absolute left-[80%] top-[54%]">
            <button onClick={()=>setShow(<Empty/>)}><img src="./src/assets/images/icon-cart.svg" alt="" /></button>
            
           </div> */}

           <div className="absolute left-[85%] top-[36%] ">
           <img className="h-12" src="./src/assets/images/image-avatar.png" alt="" />
           </div>
           
          <div className="border-b-2  relative top-16 w-[90%]"></div>

          
      </header>
    )
}