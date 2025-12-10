import pkg from "pg";
const { Pool } = pkg;

export const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

// optional check
export async function checkDb() {
    const res = await pool.query("SELECT NOW()");
    return res.rows[0];
}
