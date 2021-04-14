const server =  require('./src/serve')

server.listen(server.get('port'), () => {
    console.log(`Server running on port: ${server.get('port')}`)
})