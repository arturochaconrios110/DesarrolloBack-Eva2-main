const Usuarios = require('../models/usuario');

const getAll = async (req, res) => {
    try {
        const result = await Usuarios.getAll();
        //console.log("Resultado obtenido en el controlador: ", result);
        res.status(200).json(result); // Asegurar que se envía la respuesta
    } catch (err) {
        console.error("Error al obtener los usuarios: ", err);
        res.status(500).json({ error: "Error al obtener los usuarios" });
    }
};
const create = async (req, res) => {
    try{
        const usuario = req.body;
        const result = await Usuarios.create(usuario);
        res.status(201).json(result);
    }
    catch(err){
        console.error("Error al crear el usuario: ", err);
        res.status(500).json({ error: "Error al crear el usuario" });
    }
    

}
const update = async (req, res) => {
    try{
        const usuario = req.body;
        const result = await Usuarios.update(usuario);
        res.status(200).json(result);
    }
    catch(err){
        console.error("Error al actualizar el usuario: ", err);
        res.status(500).json({ error: "Error al actualizar el usuario" });
    }
    
}
const remove = async (req, res) => {
    try{
        const usuario = req.body;
        const result = await Usuarios.remove(usuario);
        res.status(200).json(result);
    }
    catch(err){
        console.error("Error al actualizar el usuario: ", err);
        res.status(500).json({ error: "Error al actualizar el usuario" });
    }
    
}
const getById = async (req, res) => {
    try{
        const usuario = req.body;
        const result = await Usuarios.getById(usuario);
        res.status(200).json(result);
    }
    catch(err){
        console.error("Error al obtener el usuario: ", err);
        res.status(500).json({ error: "Error al obtener el usuario" });
    }
    
}
const desactiveUser = async (req, res) => {
    try{
        const usuario = req.body;
        const result = await Usuarios.desactiveUser(usuario);
        res.status(200).json(result);
    }
    catch(err){
        console.error("Error al desactivar el usuario: ", err);
        res.status(500).json({ error: "Error al desactivar el usuario" });
    }
    
}


module.exports = {getAll,getById,create,update,remove,desactiveUser};