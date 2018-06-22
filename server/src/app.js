console.log('hello');

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

//logger
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/server', (req, res) => {
    res.send({
        message: "hi"
    })
})

app.listen(process.env.PORT || 8081)