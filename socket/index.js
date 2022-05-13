const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const logger = require('morgan');
const cors = require('cors')

const port = process.env.PORT || 4001;
const index = require("./routes/index");

const app = express();
app.use(cors())
app.use(logger('dev'));
app.use(index);

const server = http.createServer(app);

const io = socketIo(server, { 
  cors: { 
    origin: '*',
    methods: ['GET', 'POST']
   }
 });

let interval;
let message =[]

io.on("connection", (socket) => {
  console.log("New client connected");
  if (interval) {
    clearInterval(interval);
  }
  socket.on('chat message', (msg) => {
    message.push(msg)
    io.emit('getMessage', message)
  });

  socket.emit('getMessage', message)
  // interval = setInterval(() => getMessages(socket), 1000);
  interval = setInterval(() => getApiAndEmit(socket), 1000);
  socket.on("disconnect", () => {
    console.log("Client disconnected");
    clearInterval(interval);
  });
});

const getApiAndEmit = socket => {
  const response = new Date();
  // Emitting a new message. Will be consumed by the client
  socket.emit("FromAPI", response);
};

server.listen(port, () => console.log(`Listening on port ${port}`));