import { useState } from "react"
import { useForm } from "../hooks/useForm"
import { FetchClima } from "./FetchClima"


export default function FormClima() {

  const [busqueda, setBusqueda] = useState(null)

  const { estado, handleChange } = useForm(null)

  const handleSubmit = (e) => {
    console.log("Estado: ", estado)
    setBusqueda(estado)
    console.log("Busqueda: ", busqueda)
    e.preventDefault()
  }



  return (
    <>
      <div className=" flex flex-col justify-center items-center p-10 w-full" >
        <form action="#" onSubmit={handleSubmit}
          className="flex flex-col w-full items-center">
          <input type="text" onChange={handleChange} 
          className="p-2 m-2  rounded-lg w-80"/>

          <button type="submit"
            className="p-2 m-4 w-28  bg-blue-400 rounded-lg  text-black font-bold hover:bg-blue-500 transition-all ">
            Consultar
          </button>
        </form>
        <FetchClima prop={busqueda}></FetchClima>
      </div>
    </>
  )
}
