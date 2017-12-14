
const io = require('socket.io')()
const nodeThinkGear = require('node-thinkgear-sockets')

const tgClient = nodeThinkGear.createClient({
  enableRawOutput: true,
})
tgClient.connect()

io.on('connection', (client) => {
  tgClient.on('data', (data) => {
    const signal = data.poorSignalLevel
    const attention = data.eSense.attention

    client.emit('signalRate', signal)
    client.emit('attentionRate', attention)

    console.log(attention)
  })
})

const port = 9090
io.listen(port)
console.log('listening on port ', port)

// Arduino server
const argv = require('minimist')(process.argv.slice(2), {
  default: {
    show: 1,
  },
})

const five = require('johnny-five')

const port2 = 9091
const io2 = require('socket.io')()

io2.listen(port2)
const board = new five.Board()


board.on('ready', () => {
  console.log('Arduino is on')

  io2.sockets.on('connection', (socket) => {
    let touchpad

    if (argv.show === 1) {
      touchpad = new five.Touchpad({
        controller: 'MPR121_SHIELD',
      })
    }

    if (argv.show === 2) {
      touchpad = new five.Touchpad({
        controller: 'MPR121_SHIELD',
        keys: [
          ['!', '@', '#'],
          ['$', '%', '^'],
          ['&', '-', '+'],
          ['_', '=', ':'],
        ],
      })
    }

    if (argv.show === 3) {
      touchpad = new five.Touchpad({
        controller: 'MPR121_SHIELD',
        keys: ['!', '@', '#', '$', '%', '^', '&', '-', '+', '_', '=', ':'],
      })
    }

    ['press'].forEach((eventType) => {
      touchpad.on(eventType, (event) => {
        socket.emit('objectTouched', event.which)
        console.log('Event: %s, Target: %s', eventType, event.which)
      })
    })
  })
})
