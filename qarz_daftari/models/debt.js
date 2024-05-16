import { query } from "../db/db.js";


class Debt {
  constructor(user_id, amount, description, created_at) {
    this.user_id = user_id;
    this.amount = amount;
    this.description = description;
    this.created_at = created_at;
  }

  static async createDebt(user_id, amount, description) {
    // Implement debt creation logic
  }

  // Add more methods as needed
}

export default new Debt();