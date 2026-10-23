const db = require('./db');
const bcrypt = require('bcryptjs');

const senha = bcrypt.hashSync('123456', 10);

db.prepare(`
    INSERT OR IGNORE INTO empresas (id, nome, email, senha_hash)
    VALUES (1, 'TechNova Ltda', 'contato@technova.com', ?)
`).run(senha);

db.prepare(`
    INSERT OR IGNORE INTO vagas (id, titulo, empresa_id, tipo, tecnologias, salario, descricao)
    VALUES (?, ?, ?, ?, ?, ?, ?)
`).run(
    1,
    'Dev Frontend React',
    1,
    'remoto',
    'React, TypeScript, CSS',
    'R$ 6.000,00 - R$ 9.000,00',
    'Vaga para desenvolvimento Web'
);

console.log('Seed concluído com sucesso!');