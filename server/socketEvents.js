exports = module.exports = function (io) {
  // Set socket.io listeners.
  io.on('connection', (socket) => {
    console.log('a user connected');

  socket.on('chat message', (conversation) => {
    console.log('pumpkin', conversation);
    socket.emit('refresh messages', conversation);
    // console.log('joined ' + conversation);
  });

  socket.on('add entry', (conversation) => {
    console.log('desert shade', conversation);
    io.emit('new entry', conversation + 'iguana');
    // console.log('joined ' + conversation);
  });

  // socket.on('new message', (conversation) => {
  //   io.sockets.in(conversation).emit('refresh messages', conversation);
  // });


    // On conversation entry, join broadcast channel
    // socket.on('enter conversation', (conversation) => {
    //   socket.join(conversation);
    //   // console.log('joined ' + conversation);
    // });

    // socket.on('leave conversation', (conversation) => {
    //   socket.leave(conversation);
    //   // console.log('left ' + conversation);
    // });

    // socket.on('new message', (conversation) => {
    //   io.sockets.in(conversation).emit('refresh messages', conversation);
    // });

    socket.on('disconnect', () => {
      // console.log('user disconnected');
    });
  });
};
