const db = require('../config/db');

// POST: Crear una nueva oferta
exports.crearOferta = async (req, res) => {
    const { titulo, descripcion, requisitos, salario, fecha_publicacion } = req.body;

    if (!titulo || !descripcion || !requisitos || !salario || !fecha_publicacion) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    try {
    const [resultado] = await db.execute(
        `INSERT INTO oferta_laboral (titulo, descripcion, requisitos, salario, fecha_publicacion, estado)
        VALUES (?, ?, ?, ?, ?, ?)`,
        [titulo, descripcion, requisitos, salario, fecha_publicacion, 'activa']
    );
    res.status(201).json({ mensaje: 'Oferta laboral creada exitosamente', id: resultado.insertId });
    } catch (error) {
    console.error('Error al crear la oferta:', error);
    res.status(500).json({ error: 'Error del servidor' });
    }
};

// GET: Listar todas las ofertas
exports.listarOfertas = async (req, res) => {
    try {
    const [ofertas] = await db.execute('SELECT * FROM oferta_laboral');
    res.status(200).json(ofertas);
    } catch (error) {
    console.error('Error al listar ofertas:', error);
    res.status(500).json({ error: 'Error del servidor' });
    }
};

// PUT: Editar una oferta
exports.editarOferta = async (req, res) => {
const { id } = req.params;
const { titulo, descripcion, requisitos, salario, fecha_publicacion } = req.body;

    try {
    await db.execute(
        `UPDATE oferta_laboral SET titulo = ?, descripcion = ?, requisitos = ?, salario = ?, fecha_publicacion = ? WHERE id = ?`,
        [titulo, descripcion, requisitos, salario, fecha_publicacion, id]
    );
    res.status(200).json({ mensaje: 'Oferta laboral actualizada correctamente' });
    } catch (error) {
    console.error('Error al editar oferta:', error);
    res.status(500).json({ error: 'Error del servidor' });
    }
};

// PATCH: Cambiar estado de la oferta (activa/inactiva)
exports.actualizarEstado = async (req, res) => {
const { id } = req.params;
const { estado } = req.body;

    if (!['activa', 'inactiva'].includes(estado)) {
    return res.status(400).json({ error: 'Estado inválido' });
    }

    try {
    await db.execute(`UPDATE oferta_laboral SET estado = ? WHERE id = ?`, [estado, id]);
    res.status(200).json({ mensaje: `Estado actualizado a ${estado}` });
    } catch (error) {
    console.error('Error al cambiar estado:', error);
    res.status(500).json({ error: 'Error del servidor' });
    }
};

// PATCH: Simular eliminación de oferta (marcar como inactiva)
exports.marcarComoEliminada = async (req, res) => {
const { id } = req.params;
    try {
    await db.execute(`UPDATE oferta_laboral SET estado = 'inactiva' WHERE id = ?`, [id]);
    res.status(200).json({ mensaje: 'Oferta laboral desactivada (simulación de eliminación)' });
    } catch (error) {
    console.error('Error al eliminar (simular) oferta:', error);
    res.status(500).json({ error: 'Error del servidor' });
    }
};