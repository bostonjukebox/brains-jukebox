const io = require('socket.io')();
const nodeThinkGear = require('node-thinkgear-sockets');
const tgClient = nodeThinkGear.createClient({
    enableRawOutput: true
});
tgClient.connect();

io.on('connection', (client) => {

  tgClient.on('data', function(data){
    client.emit('mindEvent', data);
    console.log(data);
  });

});

const port = 9090;
io.listen(port);
console.log('listening on port ', port);