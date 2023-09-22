
import { createSignal } from "solid-js"
import Buttons from "./buttons"
import Empty from "./emptycart"


export default function Content(){

    const imgs=["./src/assets/images/image-product-1.jpg",
    "./src/assets/images/image-product-2.jpg",
   "./src/assets/images/image-product-3.jpg",
    "./src/assets/images/image-product-4.jpg"]

    const [show,setShow]=createSignal("")
       
    

   const [image,setImage]=createSignal("./src/assets/images/image-product-1.jpg")
   const [count,setCount]=createSignal(0)

    return(
        <div className="absolute left-[52%] top-[30%]">
    <div><h6 className="text-orange-600 font-bold ">SNEAKER COMPANY</h6></div>
    <div className="mt-[2%]">
      <h1 className="text-4xl font-bold w-[50%]">Fall Limited Edition Sneakers</h1>
      </div>
      <div className="mt-[5%]">
        <p className="w-[60%]  text-[rgb(142,142,142)]
        ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem amet quasi aspernatur quis dicta magni magnam, tenetur repellat labore totam!
        </p>
      </div>
      <Buttons/>

      <div className="absolute right-[125%] top-[0] flex justify-center items-center w-[50vh] h-[50vh] ">
        <img className="h-full rounded-[10px]" src={image()} alt="" />
      
      </div>

      <div className=" flex relative right-[20%] w-[5%] justify-center items-center bottom-6">
        <button onClick={()=>{
          setCount(count()+1)
          setImage(imgs[count()])
        }}>
            <img src="./src/assets/images/icon-next.svg" alt="" />
        </button>
      </div>

      <div className="absolute left-[63%] top-[-67%]">
            <button onClick={()=>{
              setShow(<Empty/>)
              
            }}><img src="./src/assets/images/icon-cart.svg" alt="" /></button>
            
           </div>

      <div className=" flex relative right-[86%] w-[5%] 
      justify-center items-center bottom-[43px]">
        <button onClick={()=>{
          setCount(count()-1)
          setImage(imgs[count()])
        }}>
             <img src="./src/assets/images/icon-previous.svg" alt="" />
        </button>
      </div>

      {show()}

  </div>
    )
}  