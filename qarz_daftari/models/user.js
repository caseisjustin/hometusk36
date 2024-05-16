import { query } from "../db/db.js";

class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  static async createUser(email, password) {
    // Implement user creation logic
  }

  // Add more methods as needed
}

export default new User();