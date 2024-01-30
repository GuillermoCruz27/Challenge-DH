module.exports = {
  development: {
    username: '',
    password: '',
    database: '',
    host: '127.0.0.1',
    dialect: 'mysql',
    port: '',
  },
  test: {
    username: '',
    password: '',
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  production: {
    username: 'root',
    password: null,
    database: 'database_production',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
};