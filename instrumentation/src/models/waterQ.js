const mongoose = require("mongoose")
const { Schema } = mongoose

//Crear el esquema de datos para almacenar en la DB
const WaterQualitySchema = new Schema(
    {
    //definir tipos de datos
    place: {type: String, required: true}, //ubiacion geografica
    station: {type: String, required: true}, //puntos de monitoreo
    temperature: {type: Number, default: 0},
    ph: {type: Number, default: 0},
    rgb_color: {type: Array, default: [0,0,0]},
    ir_diode_turbidity: {type: Number, default: 0},
    volt_conduct: {type: Number, default: 0},
    quality: {type: String, required: true}
    }, {
        timestamps: true
    }
);

//usar el esquema como un modelo

module.exports = mongoose.model("waterQ", WaterQualitySchema)