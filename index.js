require('dotenv').config()
const express =require('express')
const app=express()
const port = 3000 


app.get('/',(req,res)=>{
    res.send('hello ashu')
})


app.get('/login',(req,res)=>{
    res.send('please login')
})

app.listen(process.env.PORT,()=>{
    console.log(`server is running on ${port}`)
})