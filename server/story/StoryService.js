const express = require('express')

const app = express();

const port = 4001 || process.env.PORT;
app.listen(port,()=>{
    console.log(`Story service running on port ${port}`)
})