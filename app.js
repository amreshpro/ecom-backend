import express from 'express'
import productAPI from './api/productAPI.js'
import cors from 'cors'
const app = express()
import * as dotenv from 'dotenv'
// Load Environment Variables
dotenv.config();
// load json
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.get("/",(req,res)=>{
    res.json({"status":"ok","message":"It works bro test-route-> /product"})
})
app.get("/product",(req,res)=>{
    res.send(productAPI)
})


const port = process.env.PORT || 5800

app.listen(port,()=>{
    console.log(`server started at http://localhost:${port}`)
})