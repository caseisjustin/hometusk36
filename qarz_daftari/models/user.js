import { queryEx } from "../db/db.js";

const createUser = async () =>{
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
createUser()
export const addUser = async (email, password) =>{
  try {
    console.log("hello")
    return queryEx("INSERT INTO users(email, password) VALUES($1, $2) RETURNING *", [email, password])
  } catch (err) {
    return false
  }
}