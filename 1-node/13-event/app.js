const EventEmitter = require('events');

const emiiter = new EventEmitter();

emiiter.on('young', (args) => {
  console.log('first callback : ', args);
});
emiiter.on('hi', (args) => {
  console.log('first callback : ', args);
});
emiiter.emit('young', { msg : 'i love you'});