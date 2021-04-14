const express = require('express')

const server = express()

server.set('port', process.env.PORT || 3002)

server.use(express.json())

server.get('/', (req, res) => {
    res.json({
        message: 'Hello world Jenkins'
    })
})

module.exports = server