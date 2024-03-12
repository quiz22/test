const buf = Buffer.from('hello word!');
console.log(buf);
console.log(buf.toString());

const buf1 = Buffer.alloc(6);
const buf2 = Buffer.alloc(6,3);
const buf3 = Buffer.alloc(12,'前段开发','utf-8');
const buf4 = Buffer.alloc(12,'前段开发课程','utf-8');

console.log(buf1);
console.log(buf2);
console.log(buf3);
console.log(buf4);