import { useState } from 'react';
import BaseColaboradores from '../../assets/JS/script';

const Listado = () => {
    const [colaboradores, setColaboradores] = useState(BaseColaboradores);

    const ordenarPorNombre = () => {
        const nuevosColaboradores = [...colaboradores];
        nuevosColaboradores.sort((a, b) => a.nombre.localeCompare(b.nombre));
        setColaboradores(nuevosColaboradores);
    };

    return (
        <div>
            <button onClick={ordenarPorNombre} className="btn btn-primary">Ordenar por nombre</button>
            <table className="table table-striped table-bordered table-hover">
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
                        colaboradores.map((colaborador, index) => {
                            return (
                                <tr key={`${colaborador.id}-${index}`}>
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
            </table>
        </div>
    );
};

export default Listado;