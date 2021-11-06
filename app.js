const express = require('express')
const cors = require('cors')
const route = require('./routes')
const app = express()
const port = 3002

app.use(cors())
app.get('/', (req,res) => {
    res.send("hi i am server")
});
route(app)
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })