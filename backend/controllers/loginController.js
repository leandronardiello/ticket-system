const sql = require('./db'); // Arquivo de conexão ao banco de dados

const login = async (req, res) => {
  const { email, password } = req.body;

  console.log(email)

  try {
    // Consulta SQL para validar o usuário
    const result = await sql.query`SELECT * FROM USERS WHERE LOGIN = ${email} AND SENHA = ${password}`;
    
    if (result.recordset.length > 0) {
      res.status(200).send('Login bem-sucedido');
    } else {
      res.status(401).send('Usuário ou senha inválidos');
    }
  } catch (err) {
    res.status(500).send('Erro no servidor');
  }
};

module.exports = { login };

