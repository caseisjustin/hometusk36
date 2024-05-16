import express from "express"
import dotenv from "dotenv"
import authRouter from "./routes/auth.router.js"
import debtRouter from "./routes/debts.router.js"

dotenv.config()


const app = express()
app.use(express.json())



app.use("/api", authRouter)
app.use("/api/debts", debtRouter)



const port = process.env.PORT || 3001
app.listen(port, err=>{
    err ? console.log("Couldn't connect to server") :
    console.log("Connected to server on port ", port, "....")
})