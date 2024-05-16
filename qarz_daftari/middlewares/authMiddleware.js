import bcrypt from "bcrypt"
import { query } from "../db/db.js";

async function authenticate(req, res, next) {
    const { email, password } = req.body
    try {
        const result = await query('SELECT * FROM users WHERE email = $1', [email])
        if (result.rows.length === 0) {
            return res.status(401).send("No user found by this email!")
        }
        const passwordMatch = await bcrypt.compare(password, result.rows[0].password)
        if (!passwordMatch) {
            return res.status(401).send("Incorrect password!");
        }
        req.user = result.rows[0]
        next();
    } catch (error) {
        console.error('Authentication error:', error)
        res.status(500).send("An error occured!")
    }
}

export {authenticate}