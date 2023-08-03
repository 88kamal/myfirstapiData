const express = require('express');
const cors = require('cors');
const apiData = require('./data.json');

const app = express();
app.use(cors());

const port = 2000;

app.get('/', (req,res)=>{
    res.send(apiData);
})

app.listen(port, ()=>{
   console.log(`Example app listening on port http://localhost:${port}`)
})