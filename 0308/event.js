let events = require('events');

let ev = new events();

ev.on('event',()=>{
    console.log('abcd');
});
ev.addListener('click',()=>{
    console.log('你单击我一下');
});
ev.emit('event');