var app=require('express')()
var router=require('./server/api')
var bodyparser=require('body-parser')
app.use(bodyparser.json())
app.use('/api',router)
app.listen(3000,()=>{
    console.log('listening at 3000')
})