const express = require('express')
const app = express()

const port = 8000

app.listen(port, ()=> {
    console.log(`Server connected to port ${port}`)
})

app.get('/', (req, res)=> {
    res.send(`
    <h1>
        Hello World!
    </h1>
    `)
    console.log("request received")
})