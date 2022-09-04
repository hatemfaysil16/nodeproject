// const querystring = require('querystring');
// const someText = querystring.parse('name=hatem & lastname=faysil');
// console.log(someText);
//////////////////////////////////////////////////////////////
const querystring = require('querystring');
const someText = querystring.stringify({ name: 'hatem', 'lastname': 'faysil' });
console.log(someText);