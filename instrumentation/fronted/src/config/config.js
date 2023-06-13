//conexion con la base de datos
import axios from 'axios'

export const axiosInstance = axios.create({
    baseURL: 'https://waterquality-alejandraecheverri3.b4a.run/'
});