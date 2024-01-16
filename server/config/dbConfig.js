const HOST = "db-1";
const USER = "postgres";
const PASSWORD = "LetsG000000";
const DB = "csvdb";
const dialect = "postgres";
const pool = {
  max: 5,
  min: 0,
  acquire: 30000,
  idle: 10000,
};

export default {
  HOST,
  USER,
  PASSWORD,
  DB,
  dialect,
  pool,
};
