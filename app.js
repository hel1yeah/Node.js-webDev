const EventEmitter = require('events');

const emmitter = new EventEmitter();

emmitter.on('some_event', (text) => {
  console.log(text);
});

emmitter.emit('some_event', 'Event test text!!!');
