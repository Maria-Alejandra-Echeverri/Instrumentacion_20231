import {Button} from 'react-bootstrap'
import { axiosInstance } from './config/config';
import { useState } from 'react';
import DataTable from './components/DataTable';
import DataChart from './components/DataChart';

import './styles/App.css'

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
    <div className='App'>
    <div className="container">
      <h1 >Water Quality App</h1>

      <DataChart
        data={objWaterQ}
        array={objWaterQ.map((item) => item.ph)}
        title="pH"
      ></DataChart>

      <DataChart
        data={objWaterQ}
        array={objWaterQ.map((item) => item.turbidity)}
        title="Turbidez"
      ></DataChart>

      <DataChart
        data={objWaterQ}
        array={objWaterQ.map((item) => item.conductivity)}
        title="Conductividad"
      ></DataChart>

      <DataChart
        data={objWaterQ}
        array={objWaterQ.map((item) => item.temparature)}
        title="Temperatura"
      ></DataChart>

      <DataChart
        data={objWaterQ}
        array={objWaterQ.map((item) => item.color)}
        title="Color"
      ></DataChart>


      <DataTable data={objWaterQ}></DataTable>

      <Button variant='secondary' onClick={loadDataFromDB}>Cargar datos</Button>
    </div>
    </div>
  );
}

export default App;
