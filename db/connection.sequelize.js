module.exports = {
  HOST: "ep-odd-pond-adx2h8kq-pooler.c-2.us-east-1.aws.neon.tech",
  DB: "neondb",
  USER: "neondb_owner",
  PASSWORD: "npg_7jIdCiDA5oSZ",
  dialect: "postgres",
  port: 5432,  // default Postgres port
  native: false, 
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};