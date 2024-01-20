// const HOST = "db-1"; [SequelizeHostNotFoundError]: getaddrinfo ENOTFOUND db-1
const HOST = "localhost"; //ConnectionRefusedError [SequelizeConnectionRefusedError]
// const HOST = "host.docker.internal"; HostNotFoundError [SequelizeHostNotFoundError]: getaddrinfo ENOTFOUND host.docker.internal
// const HOST = "db"; [SequelizeHostNotFoundError]: getaddrinfo ENOTFOUND db
// const HOST = "10.0.0.16"; [SequelizeConnectionRefusedError]: connect ECONNREFUSED 10.0.0.16:5432
// const HOST = "172.30.0.2"; // ip address of container 'db': ConnectionError [SequelizeConnectionError]: connect ETIMEDOUT 172.30.0.2:5432
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
