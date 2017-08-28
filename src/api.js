import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:9090');

function subscribeToMind(cb) {
    socket.on('mindEvent', data => cb(null, data));
    socket.emit('subscribeToMind');    
  }
  
export { subscribeToMind };
