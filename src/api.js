import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:9090');


function subscribeToMind() {
    socket.on('mindEvent', function(data) {
      let mindWaveData = data;
      let poorSignalLevel = mindWaveData.poorSignalLevel;

      if (poorSignalLevel === -1) {
          return "Poor signal"
      } else {
          return "Good signal"      
        }
    });
  }
  
  export { subscribeToMind };