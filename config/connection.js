const Pool = require('pg').Pool

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'project_database',
    password: 'postgres1234',
    port: 5432,
})

pool.on('error', (err) => {
    console.error('Unexpected error on idle client', err);
  });  

module.exports = pool