import React from "react";
import { Table } from "react-bootstrap";


export default function DataTable(props){
    const {data} = props;
    return(
        <div>
            <h3>REGISTRO DE DATOS</h3>
            <Table striped bordered hover>
            <thead>
        <tr>
          <th>Fecha</th>
          <th>Lugar</th>
          <th>Estación</th>
          <th>Turbidez</th>
          <th>Color</th>
          <th>Conductividad</th>
          <th>pH</th>
          <th>Temperatura</th>
        </tr>
      </thead>
      <tbody>

        {data.map((item) => {
          return(
            <tr key={item._id}>
              <td>{item.createdAt}</td>
              <td>{item.place}</td>
              <td>{item.station}</td>
              <td>{item.turbidity}</td>
              <td>{item.color}</td>
              <td>{item.conductivity}</td>
              <td>{item.ph}</td>
              <td>{item.temparature}</td>
            </tr>)
        })

        }
      </tbody>
    </Table>
        </div>
    )
}