const net = require('net');

const server = net.createServer(socket => {
    socket.write('hello');
    socket.on('data' , data => {
        console.log(data.toString());
    })
})

server.listen(8080);

// to connect to this server using TCP
// telnet 127.0.0.1 8080