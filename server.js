const io = require('socket.io')()
const nodeThinkGear = require('node-thinkgear-sockets')
const tgClient = nodeThinkGear.createClient({
  enableRawOutput: true,
})
tgClient.connect()

io.on('connection', (client) => {
  tgClient.on('data', (data) => {
    let signal = data.poorSignalLevel;
    let attention = data.eSense.attention;

    client.emit('signalRate', signal);
    client.emit('attentionRate', attention);
    
    

    console.log(attention);
  })


})

const port = 9090
io.listen(port)
console.log('listening on port ', port)

//Arduino server
var argv = require('minimist')(process.argv.slice(2), {
  default: {
    show: 1,
  },
})

var five = require('johnny-five')
const port2 = 9091
var io2 = require('socket.io')()
io2.listen(port2)
var board = new five.Board()


board.on('ready', () => {
  console.log("Arduino is on");

  io2.sockets.on('connection', function (socket) {
        var touchpad;

        if (argv.show === 1) {
          touchpad = new five.Touchpad({
            controller: "MPR121_SHIELD"
          });
        }

        if (argv.show === 2) {
          touchpad = new five.Touchpad({
            controller: "MPR121_SHIELD",
            keys: [
              ["!", "@", "#"],
              ["$", "%", "^"],
              ["&", "-", "+"],
              ["_", "=", ":"]
            ]
          });
        }

        if (argv.show === 3) {
          touchpad = new five.Touchpad({
            controller: "MPR121_SHIELD",
            keys: ["!", "@", "#", "$", "%", "^", "&", "-", "+", "_", "=", ":"]
          });
        }

        ["press"].forEach(function(eventType) {
          touchpad.on(eventType, function(event) {
            socket.emit("objectTouched", event.which);
            console.log("Event: %s, Target: %s", eventType, event.which);
          });
        });
  });

})
