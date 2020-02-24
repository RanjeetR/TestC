const express=require('express');
const path = require('path');
const app=express();

app.use(express.static('kteest'))

app.get('/*', (req, res) => {
res.sendFile(path.join(__dirname, './kteest/index.html'));
})
const port =8081;
app.listen(port,()=>{
console.log(`App running on ${port}`);
})