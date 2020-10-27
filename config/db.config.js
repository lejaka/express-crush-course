module.exports = {
  host: "localhost",
  user: "root",
  password : 'TebogoLejaka',
  database : 'node_mysql_crud_db',
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
