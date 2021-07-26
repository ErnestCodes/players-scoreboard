const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "nnaemeka",
  host: "localhost",
  port: 5432,
  database: "scoreboard",
});

module.exports = pool;
