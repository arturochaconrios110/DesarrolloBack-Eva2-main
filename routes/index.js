const express = require('express');
const router = express.Router();

//Importar las rutas de los diferentes modulos
const usuarioRoutes           = require('./usuario');
const antecentesLaborales     = require('./antecentesLaborales');
const antecendentesAcademicos = require('./antecendentesAcademicos');
const ofertaLaboral           = require('./ofertaLaboral');
const postulaciones           = require('./postulaciones');

//Asocias las rutas importadas a sus respectivos endpoints
router.use('/usuarios', usuarioRoutes);
router.use('/antecentesLaborales', antecentesLaborales);
router.use('/antecendentesAcademicos', antecendentesAcademicos);
router.use('/ofertaLaboral', ofertaLaboral);
router.use('/postulaciones', postulaciones);

//Middleware para captruar rutas no manejadas em este archivo
router.use((req,res) => {
    console.error("Ruta no orquestada en index.js"+req.method+" "+req.url);
    res.status(404).json({error: "Ruta no encontrada"});
})
//Exportar el router para usarlo en otros modulos
module.exports = router;