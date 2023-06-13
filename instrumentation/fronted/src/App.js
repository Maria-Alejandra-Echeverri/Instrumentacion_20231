import {Button, Table} from 'react-bootstrap'
import { axiosInstance } from './config/config';
import { useState } from 'react';

function App() {

  const [objWaterQ, setObjWaterQ] = useState([])

  //  Cargar datos desde la base de datos
  function loadDataFromDB(){
    axiosInstance.get('api/wAterQ/')
    .then((res) => {

      setObjWaterQ(res.data)
    }).catch((err) => console.error(err));
  }

  return (
    <div className="container">
      <h1 >Water Quality App</h1>

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

        {objWaterQ.map((item) => {
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







      <Button variant='secondary' onClick={loadDataFromDB}>Cargar datos</Button>
    </div>
  );
}

export default App;
