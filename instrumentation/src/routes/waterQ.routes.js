const express = require('express');
const res = require('express/lib/response');
const router = express.Router();

//importar el esquema
const waterQModel = require('../models/waterQ');
const waterQ = require('../models/waterQ');

//Lectura de la DB
router.get('/', async(req, res, next) => {
    //realizamos un requerimiento a la DB
    const waterqObj = await waterQModel.find();
    //enviamos los datos como JSON
    res.json(waterqObj);
});

//solicitud de dtaos por lugar
router.get('/place/:lugar', async(req, res, next) => {
    //realizar el requerimiento por lugar
    //ex: http://localhost:3000/api/waterQ/place/Medellin
    const lugar = req.params.lugar;
    const waterqObj = await waterQ.find({
        place: lugar,
    })
    res.json(waterqObj);
})

//Solcitar ultimo dato por lugar
router.get('/last/place/:lug', async(req, res, next) => {
    //realizar el requerimiento por lugar
    //ex: http://localhost:3000/api/waterQ/last/place/Medellin
    const lugar = req.params.lug;
    const waterqObj = await waterQ.find({
        place: lugar,
    }).limit(1).sort({$natural: -1});
    res.json(waterqObj);
})

//solicitar valor de un lugar y que el ph se mayor que un valor
router.get('/place/:place/phgt/:ph', async(req, res, next) =>{
    const lugar = req.params.place;
    const phgt = req.params.ph;
    const waterqObj = await waterQ.find({
        place: lugar,
        ph: {$gt: phgt},
    });
    res.json(waterqObj);
});



//postear dato en la DB
router.post('/', async(req, res, next) => {
    //componer el dato a seguir guardado en la DB
    const{
        place, //ubiacion geografica
        station, //puntos de monitoreo
        temperature,
        ph,
        rgb_color,
        ir_diode_turbidity,
        volt_conduct,
        quality
    } = req.body;
    const waterqObj = new waterQModel({
        place, //ubiacion geografica
        station, //puntos de monitoreo
        temperature,
        ph,
        rgb_color,
        ir_diode_turbidity,
        volt_conduct,
        quality
    })

    await waterqObj.save()
    res.json({status: 'Dato guardado con éxito'})
}
)

module.exports = router;