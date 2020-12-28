# socket-data-buffer
Encode and Decode values to buffer values for using on socket connections.
Get better security and speed over your socket.

<h2>Installation</h2>

$ npm i socket-data-buffer

<h2>Usage</h2>

`var buffer = require('socket-data-buffer');`

or in ES6:

`import buffer from 'socket-data-buffer';`

<h2>Example</h2>

Encode value
`buffer.encode( OBJECT|ARRAY|STRING );`

Decode value
`buffer.decode( OBJECT|ARRAY|STRING );`

<h2>Using on socket.io :</h2>

Encode:

`socket.emit('name', buffer.encode( { name: 'John', amount: 1000 } ) );`

Decode:

socket.on('name', (data) => {
	data = buffer.decode(data);
	console.log(data.name); // John
})
