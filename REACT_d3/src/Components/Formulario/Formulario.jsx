import { useState } from 'react';
import PropTypes from 'prop-types';
import { Alert } from '../Alert/Alert.jsx';

const Formulario = ({ colaboradores, setColaboradores }) => {
    const [id, setId] = useState('');
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [edad, setEdad] = useState('');
    const [cargo, setCargo] = useState('');
    const [telefono, setTelefono] = useState('');
    const [errors, setErrors] = useState({});

    const emailRegex = /\S+@\S+\.\S+/;
    const phoneRegex = /^\d+$/;

    const nuevoId = Math.floor(Math.random() * (99 - 4 + 1)) + 4;

    const validate = (name, value) => {
        const age = parseInt(value, 10);
        
        switch (name) {
            case 'nombre':
              return value ? '' : 'El nombre es requerido.';
            case 'correo':
              return emailRegex.test(value) ? '' : 'El correo no es válido.';
            case 'edad':
              return age >= 1 && age <= 110 ? '' : 'La edad debe ser un número entre 1 y 110.';
            case 'cargo':
              return value ? '' : 'El cargo es requerido.';
            case 'telefono':
              return phoneRegex.test(value) ? '' : 'El teléfono debe contener sólo dígitos.';
            default:
              return '';
          }
        };

    const onChange = (event) => {
        const { name, value } = event.target;
        setErrors({ ...errors, [name]: validate(name, value) });
    };
  
    const handleSubmit = async (event) => {
        event.preventDefault();
          
        setId(nuevoId);
      
        console.log('ID:', id);
      
        const nuevoColaborador = { id, nombre, correo, edad, cargo, telefono };
        setColaboradores([...colaboradores, nuevoColaborador]);
      
        setNombre('');
        setCorreo('');
        setEdad('');
        setCargo('');
        setTelefono('');
      
        tableRefresh([nuevoColaborador]);
      };
      
      const tableRefresh = () => {
          const table = document.querySelector('table');
          table.innerHTML = '';
          const thead = table.createTHead();
          const tbody = table.createTBody();
          const row = thead.insertRow();
          const headers = ['ID', 'Nombre', 'Correo', 'Edad', 'Cargo', 'Teléfono'];
          headers.forEach((header) => {
              const th = document.createElement('th');
              const text = document.createTextNode(header);
              th.appendChild(text);
              row.appendChild(th);
          });
      
          colaboradores.forEach((colaborador) => {
              const row = tbody.insertRow();
              const values = Object.values(colaborador);
              values.forEach((value) => {
                  const cell = row.insertCell();
                  const text = document.createTextNode(value);
                  cell.appendChild(text);
              });
          });
      };
      
      return (
        <form onSubmit={handleSubmit}>
            <Alert errors={errors} />
          <div className="form-group">
            <label>Nombre</label>
            <input type="text" className="form-control" value={nombre} onChange={e => setNombre(e.target.value)} />
            <label>Correo</label>
            <input type="text" className="form-control" value={correo} onChange={e => setCorreo(e.target.value)} />
            <label>Edad</label>
            <input type="text" className="form-control" value={edad} onChange={e => setEdad(e.target.value)} />
            <label>Cargo</label>
            <input type="text" className="form-control" value={cargo} onChange={e => setCargo(e.target.value)} />
            <label>Teléfono</label>
            <input type="text" className="form-control" value={telefono} onChange={e => setTelefono(e.target.value)} />
          </div>
      
          <button type="submit" className="btn btn-primary">
            Agregar colaborador
          </button>
        </form>
      );
  };

Formulario.propTypes = {
    colaboradores: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.number,
    ]).isRequired,
    setColaboradores: PropTypes.func.isRequired,
};
  
export default Formulario;