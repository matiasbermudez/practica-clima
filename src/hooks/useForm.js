import { useState } from "react"

export const useForm = ( inicial) => {

    const [estado, setEstado] = useState(inicial)

const handleChange = (e) =>{ 
    setEstado(e.target.value)
    console.log(estado)
    e.preventDefault()
}

  return {
    estado,
    handleChange
  }
}
