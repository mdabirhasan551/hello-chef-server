const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;

app.get ('/', (req,res)=>{
    res.send('Hello from server 300');
})

app.listen(port,()=>{
    console.log('server is running on port: ', port);
})