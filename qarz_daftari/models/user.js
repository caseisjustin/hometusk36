import { queryEx } from "../db/db.js";

const createTableUsers = async () =>{
  try {
    await queryEx(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL
      );
    `);
    console.log('User table created successfully');
  } catch (err) {
    console.log(err);
  }
}
createTableUsers()

export async function createUser(email, password) {
  try {
    const result = await queryEx(
      'INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *',
      [email, password]
    );
    return result.rows[0];
  } catch (err) {
    throw false;
  }
}

export async function getUserByEmail(email) {
  try {
    const result = await queryEx('SELECT * FROM users WHERE email = $1', [email]);
    return result.rows[0];
  } catch (err) {
    throw false;
  }
}
