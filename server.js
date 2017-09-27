const io = require('socket.io')();
const nodeThinkGear = require('node-thinkgear-sockets');
const tgClient = nodeThinkGear.createClient({
    enableRawOutput: true
});
tgClient.connect();

io.on('connection', (client) => {

  tgClient.on('data', function(data) {
    let signal = data.poorSignalLevel;
    let attention = data.eSense.attention;

    client.emit('signalRate', signal);
    client.emit('attentionRate', attention);
    
    
    console.log(signal);
    console.log(attention);
  });


});

const port = 9090;
io.listen(port);
console.log('listening on port ', port);