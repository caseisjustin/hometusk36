import { query } from "../db/db.js";


export async function createDebtTable() {
  try {
    await query(`
      CREATE TABLE IF NOT EXISTS debts (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL,
        amount DECIMAL NOT NULL CHECK (amount >= 0),
        description TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log('Debt table created successfully');
  } catch (err) {
    console.error('Error creating debt table:', err);
  }
}