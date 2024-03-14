const express = require ('express')
const Testrouter=require('./TestRouter')
const connectDB = require('./DataBase')
const cors=require('cors')
const bodyParser = require('body-parser');
const dotenv=require('dotenv')

const app = express()
app.use(express.json())
app.use(bodyParser.json());

connectDB()

dotenv.config()
app.use(cors({
  origin:'http://localhost:3000',
  credentials:true,
}))

app.use('/',Testrouter)
app.get('/',(req,res)=>{
  res.send('API IS RUNNONG')
})

const PORT = process.env.PORT||5000
app.listen(PORT,()=>console.log(`Server is running on ${PORT}`))