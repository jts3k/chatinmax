const io = require("socket.io-client");

const socket = io("https://chatinmax.herokuapp.com/");

const maxApi = require("max-api");

maxApi.outlet("hello world!");

function sendMessage() {
}


socket.on("connect", () => {
	// print when connection to socket.io is successful
	maxApi.post("connection: " + socket.connected);
});


socket.on("disconnect", () => {});

maxApi.addHandlers({
	message: (msg) => {
    socket.emit('chat message', msg);
    // maxApi.post(msg);
	}
});

socket.on('chat message', (msg) => {
	maxApi.outlet('messages:', msg);
});
