const sql = require('mssql');

const config = {
  user: 'sa',
  password: 'Sp#@2502',
  server: '192.168.0.207', // ou o endereço do seu servidor
  database: 'SYS_MVK',
  options: {
    encrypt: false,
    trustServerCertificate: true,
  },
};

sql.connect(config, (err) => {
  if (err) console.log('Erro ao conectar ao banco de dados', err);
  else console.log('Conectado ao SQL Server');
});

module.exports = sql;
