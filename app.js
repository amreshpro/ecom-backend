import express from 'express'
import productAPI from './api/productAPI.js'
import cors from 'cors'
const app = express()

// load json
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.get("/",(req,res)=>{
    res.send(productAPI)
})


const port = process.env.PORT || 5000

app.listen(port,()=>{
    console.log(`server started at http://localhost:${port}`)
})