import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import FormClima from './components/FormClima.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <div className='flex flex-col justify-center items-center p-10 w-full div__Contenedor'>
      <FormClima  ></FormClima>
    </div>
  </>,
)
