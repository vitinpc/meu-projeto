const { Router } = require('express');
const router = Router();

const db = require('../database/db');

router.get('/', (req, res) => {
    try {
        const vagas = db.prepare(`
            SELECT v.*, e.nome AS empresa_nome
            FROM vagas v
            JOIN empresas e ON v.empresa_id = e.id
            ORDER BY v.created_at DESC
        `).all();
        res.json(vagas);
    } catch (error) {
        console.error('Erro ao buscar vagas:', error);
        res.status(500).json({ error: 'Erro interno ao buscar vagas' });
    }
});

module.exports = router;