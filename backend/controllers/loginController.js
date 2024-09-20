const express = require('express');
const sql = require('mssql');
const bcrypt = require('bcrypt');
require('dotenv').config();

const app = express();
app.use(express.json());

// Configuração do SQL Server
const config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER,
    database: process.env.DB_DATABASE,
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
};

// Conexão ao banco de dados e verificação de login
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .input('email', sql.VarChar, email)
            .input('password', sql.VarChar, password)
            .query('SELECT * FROM USERS WHERE LOGIN = @email AND SENHA = @password');
        
        if (result.recordset.length > 0) {
            const user = result.recordset[0];
            const passwordMatch = await bcrypt.compare(password, user.Password);

            if (passwordMatch) {
                res.status(200).send("Login bem-sucedido");
            } else {
                res.status(401).send("Senha incorreta");
            }
        } else {
            res.status(404).send("Usuário não encontrado");
        }
    } catch (err) {
        res.status(500).send("Erro de servidor");
    }
});

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
