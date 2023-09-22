
import { createSignal } from "solid-js"

export default function Buttons(){
    const [count,setCount]=createSignal(0)
    return(
        <div>
        <div className="flex justify-center items-center bg-[rgb(240,229,229)] h-16 w-1/4  rounded-md absolute  top-[150%]">

        <div className="mx-10 "><button className="h-full w-full" onClick={()=>setCount(count()-1)}><img  src="./src/assets/images/icon-minus.svg" alt="" /></button></div>

        <div><p>{count()}</p></div>

        <div className="mx-10"><button onClick={()=>setCount(count()+1)}><img 
        src="./src/assets/images/icon-plus.svg" alt="" /></button></div>
     </div>

     <div>
        <button className="border-2 flex justify-center items-center p-5 w-[40%] absolute top-[150%] left-[30%] rounded-md bg-[rgb(252,2,3)] text-white hover:bg-[rgb(10,8,8)]">  <img src="./src/assets/images/icon-cart.svg" alt="" /><p className="pl-5">Add to Cart</p></button>
     </div>

     <div  className="border-2  h-5 w-6 bg-orange-600 rounded-[200px] flex items-center justify-center absolute bottom-[165%] left-[64%] ">
        <h6 className="text-[80%] text-white flex justify-center items-center ">{count()}</h6>
      </div>

     </div>

    )
}