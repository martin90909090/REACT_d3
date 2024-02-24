import BaseColaboradores from './assets/JS/script.js';
import Listado from './Components/Listado/Listado.jsx';
import { useState } from 'react';

const App = () => {
  const [mostrarListado, setMostrarListado] = useState(true);

  const toggleListado = () => {
      setMostrarListado(!mostrarListado);
  };
  
  return (
    <div className="App">
      <h1>Lista de Colaboradores</h1>
      <button onClick={toggleListado}>
                {mostrarListado ? 'Ocultar Listado' : 'Mostrar Listado'}
      </button>
      {mostrarListado && <Listado colaboradores={ BaseColaboradores } />}
    </div>
  )
};

export default App;