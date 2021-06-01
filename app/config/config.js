module.exports = {
  HOST: "localhost",
  USER: "cloudix",
  PASSWORD: "cloudix@123",
  DB: "cloudixdb",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
