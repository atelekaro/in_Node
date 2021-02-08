const express = require('express');

const app = express();

//routes
app.get('/users', require('./router/routes'))

///running our server
PORT = process.env.port || 5000;

app.listen(PORT, () => {
    console.log(`server running at Port ${PORT}`)
})