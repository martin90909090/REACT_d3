import { BaseColaboradores } from "../../assets/JS/script.js";
import {Table} from "react-bootstrap";
import { useState, useEffect } from "react";

const Listado = () => {
    return (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>id</th>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Edad</th>
              <th>Cargo</th>
              <th>Teléfono</th>
            </tr>
          </thead>
          <tbody>
            {BaseColaboradores.map((colaborador, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{colaborador.nombre}</td>
                <td>{colaborador.email}</td>
                <td>{colaborador.posicion}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      );
};

export default Listado;