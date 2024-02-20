import { useState, useEffect } from 'react'
import './App.scss'
import Alert from './Components/Alert/Alert.jsx'
import Buscador from './Components/Buscador/Buscador.jsx'
import Formulario from './Components/Formulario/Formulario.jsx'
import Listado from './Components/Listado/Listado.jsx'
import { BaseColaboradores } from './assets/JS/script.js'

const App = () => {

  return (
    <>
      <Listado />
    </>
  )
}

export default App; 
