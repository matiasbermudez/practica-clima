const APIKEY = "253b846a3f50b44aebb0386836a47dde"

const useFetch = async ( urlBase,endPoint ) => {
    try {
      const res = await fetch(`${urlBase}?q=${endPoint}&appid=${APIKEY} `)
      const dato = await res.json()
      if (dato.cod != 404) {
        console.log("DATO: ", dato)
        return dato
      }

    } catch (error) {
      console.error("Se encontro este error : ", error)

    }
  }

  export default useFetch