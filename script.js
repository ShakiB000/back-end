require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World! This')
})
app.get("/shakib", (req, res)=>{
    res.send("This is shakib")
})

app.get("/login", (req, res) =>{
    res.send("login sutton")
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})