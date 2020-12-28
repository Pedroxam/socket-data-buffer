# socket-data-buffer
Encode and Decode values to buffer values for using on socket connections.

Get better security and speed over your socket.

Installation
$ npm i socket-data-buffer

Usage

var buffer = require('socket-data-buffer');

or in ES6:

import buffer from 'socket-data-buffer';

Example

Encode value
buffer.encode( OBJECT|ARRAY|STRING );

Decode value
buffer.decode( OBJECT|ARRAY|STRING );

Using on socket.io :

Encode:
socket.emit('name', buffer.encode( { name: 'John', amount: 1000 } ) );

Decode:

socket.on('name', (data) => {
	data = buffer.decode(data);
	console.log(data.name); // John
})
