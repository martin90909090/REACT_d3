import BaseColaboradores from '../../assets/JS/script';
import { Table } from 'react-bootstrap';

const Listado = () => {
  
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Correo</th>
                    <th>Edad</th>
                    <th>Cargo</th>
                    <th>Teléfono</th>
                </tr>
            </thead>
            <tbody>
                {
                    BaseColaboradores.map((colaborador) => {
                        return (
                            <tr key={colaborador.id}>
                                <td>{colaborador.id}</td>
                                <td>{colaborador.nombre}</td>
                                <td>{colaborador.correo}</td>
                                <td>{colaborador.edad}</td>
                                <td>{colaborador.cargo}</td>
                                <td>{colaborador.telefono}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </Table>
    );
};

export default Listado;