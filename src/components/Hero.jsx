import React from 'react'
import { BsCircle } from "react-icons/bs";
import { RiMenuLine, RiCloseCircleLine, RiCheckboxBlankCircleFill} from "react-icons/ri";

const Hero = () => {
  return (
    <section className="h-[90vh] grid grid-cols-1 md:grid-cols-8">
      {/* INFORMACION */}
      <div className="md:col-span-5 flex items-center justify-center p-8 ">
        <div >
          <h1 className="text-7xl font-bold leading-[6.5rem]">Web Desing Impacful{" "}   
            <span className=" text-primary py-2 px-6 border-8 border-primary relative ">Products
            <RiCheckboxBlankCircleFill className="text-lg absolute -left-4 -top-4 text-white p-2 bg-primary box-content rounded-full" ></RiCheckboxBlankCircleFill>
            <RiCheckboxBlankCircleFill className="text-lg absolute -left-4 -bottom-4 text-white p-2 bg-primary box-content rounded-full" ></RiCheckboxBlankCircleFill>
            <RiCheckboxBlankCircleFill className="text-lg absolute -right-4 -top-4 text-white p-2 bg-primary box-content rounded-full" ></RiCheckboxBlankCircleFill>
            <RiCheckboxBlankCircleFill className="text-lg absolute -right-4 -bottom-4 text-white p-2 bg-primary box-content rounded-full" ></RiCheckboxBlankCircleFill></span></h1>
          <p>Descrippcion</p>
          <p>buttons</p>
        </div>
      </div>
      <div className="bg-blue-300 md:col-span-3">Imagen</div>
    </section>
  )
}

export default Hero