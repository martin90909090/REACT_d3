import BaseColaboradores from './assets/JS/script.js';
import Listado from './Components/Listado/Listado.jsx';

const App = () => {
  return (
    <div className="App">
      <h1>Lista de Colaboradores</h1>
      <Listado colaboradores={ BaseColaboradores } />
    </div>
  );
};

export default App;