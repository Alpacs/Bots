import pkg from 'pg'
const { Pool } = pkg;
export const pool = new Pool({
    user: "postgres",
    password: "12345678",
    host: "localhost",
    port: 5432,
    database: "railway_bots"
})