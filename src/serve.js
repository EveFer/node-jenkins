const express = require('express')

const server = express()

server.set('port', 3000)

server.use(express.json())

server.get('/', (req, res) => {
    res.json({
        message: 'Hello world Jenkins'
    })
})

module.exports = server