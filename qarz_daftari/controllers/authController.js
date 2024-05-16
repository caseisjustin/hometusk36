import { addUser } from "../models/user.js"

export const register = async (req, res) => {
  try {
    const { email, password } = req.body
    if(!email || !password){
      res.status(400).send("Couldn't get datas!")
      return
    }

    const check = await addUser(email, password);
    if(!check)
      res.status(500).send("Couldn't add user")
    else
      res.status(201).send(check.rows)
  } catch (err) {
    res.status(400).send("Couldn't get datas!")
  }
};

export const login = async (req, res) => {
  // Implement login logic
};