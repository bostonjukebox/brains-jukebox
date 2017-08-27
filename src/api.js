import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:9090');


function subscribeToMind(cb) {
    socket.on('timer', timestamp => cb(null, timestamp));
    socket.emit('mindEvent', data);
  }
  
  export { subscribeToMind };