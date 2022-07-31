const express = require('express')

const app = express();

const port = 4002 || process.env.PORT;
app.listen(port,()=>{
    console.log(`User service running on port ${port}`)
})