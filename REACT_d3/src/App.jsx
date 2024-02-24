import BaseColaboradores from './assets/JS/script.js';
import Listado from './Components/Listado/Listado.jsx';
import Formulario from './Components/Formulario/Formulario.jsx';
import { useState } from 'react';
import './App.scss';

const App = () => {
  const [mostrarListado, setMostrarListado] = useState(true);
  const [colaboradores, setColaboradores] = useState([...BaseColaboradores]);

  const toggleListado = () => {
      setMostrarListado(!mostrarListado);
  };
  
  return (
    <div className="App">
      <h1>Lista de Colaboradores</h1>
      <button onClick={toggleListado}>
              {mostrarListado ? 'Ocultar Listado' : 'Mostrar Listado'}
      </button>
      {mostrarListado && <Listado colaboradores={ colaboradores } />}
      <Formulario colaboradores={colaboradores} setColaboradores={setColaboradores} />
    </div>
  )
};

export default App;