const Cliente = require('../models/cliente.model');


exports.update = async (req, res) => {
    try {
        const [updated] = await Cliente.update(req.body, { where: { id: req.params.id } });
        if (updated) {
            const updatedCliente = await Cliente.findByPk(req.params.id);
            res.json(updatedCliente);
        } else {
            res.status(404).json({ error: 'Cliente no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


