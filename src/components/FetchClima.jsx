import { useEffect, useState } from "react"
import useFetch from "../hooks/useFetch"

export const FetchClima = ({ prop }) => {
  const [data, setData] = useState(null)
  const [ciudad, setCiudad] = useState(null)
  const urlBase = "https://api.openweathermap.org/data/2.5/weather"
  const iconos = {
    Clear: '../../public/sol.png',
    Clouds: '../../public/nublado.png',
    Rain: '../../public/lluvia.png',
    storm: '../../public/tormenta.png'
  }

  useEffect(() => {
    setCiudad(prop)
    console.log("PropEFECT: ", ciudad)
  }, [prop])

  useEffect(() => {
    console.log("Prop: ", ciudad)
    const fetchData = async () => {
      try {
        const dato = await useFetch(urlBase, ciudad);
        console.log("FetchClima: ", dato);
        setData(dato)
      } catch (error) {
        console.error("Error al obtener los datos del clima: ", error);
      }
    };
    fetchData()
  }, [ciudad])

  return (
    <>

      {data ? (
        <div className="text-center flex " >
          <article className="text-black">
            <h2>{data.name}</h2>
            <h3>{data.sys.country}</h3>
            <strong>El cielo se encuentra {data.weather[0].main}</strong>
            <p>Temperatura: {Math.trunc(data.main.temp - 273.15)}°C</p>
            <p>Humedad de {data.main.humidity}% </p>
            <p>Con vientos de {data.wind.speed} km/h</p>
          </article>
          <aside>
            <img src={iconos[data.weather[0].main]} alt="Icono Clima" className="w-40" />
          </aside>
        </div>
      )
        : (<p className="text-black font-bold ">Aun no busco nada</p>)}

    </>
  )
}

