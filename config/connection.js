const Pool = require('pg').Pool
/*
const pool = new Pool({
    user: 'postgres',
    host: 'host.docker.internal',
    database: 'project-database',
    password: 'postgres1234',
    port: 5432,
})  
*/

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'project-database',
    password: 'postgres1234',
    port: 5432,
}) 

module.exports = pool