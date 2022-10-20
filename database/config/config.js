require('dotenv').config();
const db = process.env.DEV_DATABASE_URL

module.exports = {
  development: {
    username: 'dev',
    password: '1',
    database: 'satudata',
    host: '127.0.0.1',
    dialect: 'mysql',
    // use_env_variable: 'DEV_DATABASE_URL',
    logging:  console.log,
  },
  test: {
    username: 'root',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'postgres',
    host: '127.0.0.1',
    dialect: 'postgres',
    use_env_variable: 'TEST_DATABASE_URL',
  },
  production: {
    username: 'root',
    password: null,
    database: 'database_production',
    host: '127.0.0.1',
    dialect: 'postgres',
    host: '127.0.0.1',
    dialect: 'postgres',
    use_env_variable: 'DATABASE_URL',
  },
};

