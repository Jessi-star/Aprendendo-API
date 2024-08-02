const { Pool } = require('pg');

const connection = new Pool ({
    connectionString: 'postgresql://postgres:Ab6aP8nUN4YYSKZi@newly-maiden-lamprey.data-1.use1.tembo.io:5432/postgres?sslmode=verify-full&sslrootcert=ca.crt',
    ssl: true
});

module.exports = connection;