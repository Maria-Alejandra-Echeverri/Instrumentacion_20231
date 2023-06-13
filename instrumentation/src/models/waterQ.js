const mongoose = require("mongoose")
const { Schema } = mongoose

//Crear el esquema de datos para almacenar en la DB
const WaterQualitySchema = new Schema(
    {
    //definir tipos de datos
    place: {type: String, required: true}, //ubiacion geografica
    station: {type: String, required: true}, //puntos de monitoreo
    turbidity: {type: Number, default: 0},
    color: {type: Array, default: [0,0,0]},
    conductivity: {type: Number, default: 0},
    ph: {type: Number, default: 0},
    temparature: {type: Number, default: 0}
    }, {
        timestamps: true
    }
);

//usar el esquema como un modelo

module.exports = mongoose.model("waterQ", WaterQualitySchema)