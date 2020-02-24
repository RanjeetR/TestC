const express=require('express');
const path = require('path');
const app=express();

app.use(express.static('kteest'))

app.get('/*', (req, res) => {
res.sendFile(path.join(__dirname, './kteest/index.html'));
})
var port_number = app.listen(process.env.PORT || 3003);
app.listen(port_number);
