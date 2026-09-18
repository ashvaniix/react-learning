import React from 'react'
import { ArrowRight } from "lucide-react";

const RightCardContent = (props) => {
  return (
    <div><div className=" absolute top-0 left-0 h-full w-full p-10 flex flex-col justify-between">
        <h2 className="bg-white flex justify-center items-center rounded-full h-12 w-12 font-semibold text-2xl">{props.id+1}</h2>
        <div className="">
          <p className="text-xl mb-8 text-white">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid,
            modi. Hic adipisci nemo rem maxime! Amet quidem tenetur minus
            aspernatur.
          </p>
          <div className="flex  justify-between ">
            <button className="bg-blue-500 px-5 py-2 rounded-full text-white font-semibold">{props.tag}</button>
            <button className="bg-blue-500 px-3  py-2   rounded-full  text-white font-semibold">
              <ArrowRight />
            </button>
          </div>
        </div>
      </div></div>
  )
}

export default RightCardContent