import bcrypt from "bcrypt"
import { createUser, getUserByEmail } from "../models/user.js"

export async function register(req, res) {
  const { email, password } = req.body;
  try {
    const existingUser = await getUserByEmail(email);
    if (existingUser) {
      return res.status(400).send("Email already registered");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await createUser(email, hashedPassword);
    res.status(201).send(`User registered successfully ${JSON.stringify(newUser)}`);
  } catch (error) {
    res.status(500).send("An error occured");
  }
}

export async function login(req, res) {
  const { email, password } = req.body;
  try {
    const user = await getUserByEmail(email);
    if (!user) {
      return res.status(401).send("Invalid email or password");
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).send("Invalid email or password")
    }
    res.status(200).send("Login successful");
  } catch (error) {
    res.status(500).send("An error occured")
  }
}
