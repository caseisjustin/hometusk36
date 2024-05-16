import { queryEx } from "../db/db.js";

async function createDebtTable() {
  try {
    await queryEx(`
      CREATE TABLE IF NOT EXISTS debts (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL,
        amount DECIMAL NOT NULL CHECK (amount >= 0),
        description TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY(user_id) REFERENCES users(id)
      );
    `);
    console.log('Debt table created successfully');
  } catch (err) {
    console.error('Error creating debt table:', err);
  }
}
createDebtTable()

export async function createDebt(user_id, amount, description) {
  try {
    const result = await queryEx(
      'INSERT INTO debts (user_id, amount, description) VALUES ($1, $2, $3) RETURNING *',
      [user_id, amount, description]
    );
    return result.rows[0];
  } catch (error) {
    return false
  }
}

export async function getDebtsByUserId(user_id) {
  try {
    const result = await queryEx('SELECT * FROM debts WHERE user_id = $1', [user_id]);
    return result.rows;
  } catch (error) {
    return false
  }
}

export async function updateDebt(id, amount, description) {
  try {
    const result = await queryEx(
      'UPDATE debts SET amount = $1, description = $2 WHERE id = $3 RETURNING *',
      [amount, description, id]
    );
    return result.rows[0];
  } catch (error) {
    return false
  }
}

export async function deleteDebt(id) {
  try {
    await queryEx('DELETE FROM debts WHERE id = $1', [id]);
    return true;
  } catch (error) {
    return false
  }
}