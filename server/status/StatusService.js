const express = require('express')

const app = express();

const port = 4000 || process.env.PORT;
app.listen(port,()=>{
    console.log(`Status service running on port ${port}`)
})