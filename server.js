const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const morgan = require('morgan')
//const EmployeeRoute = require('./routes/employee')
const AuthRoute = require('./routes/auth')

mongoose.connect('mongodb+srv://umang:umang12345@cluster0.ytwsy.mongodb.net/umang?retryWrites=true&w=majority')
const db = mongoose.connection
db.on('error',(err)=>{
    console.log(err)
})
db.once('open',()=>{
    console.log('Database connection successful')
})
const app = express()
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use('/uploads',express.static('uploads'))

const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)

})
//app.use('/api/employee',EmployeeRoute)
app.use('/api',AuthRoute)