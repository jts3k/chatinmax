var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

var port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('a user connected');
});

http.listen(port, () => {
  console.log('listening on *: ', port);
});

io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
    io.emit('chat message', msg);
  });
});

//test
