/*
 * Declare Object
*/
const SocketBuffer = {};

/**
 * Encode data to buffer
 * @param data
 * @return {ArrayBufferLike}
 */
SocketBuffer.encode = function(data){
    try {
        return new Uint8Array(JSON.stringify(data).split("").map((c) => c.charCodeAt(0))).buffer;
    }
    catch (e) {
		console.log('Error on encoding data', e);
	}
};

/**
 * Decode buffer data
 * @param data
 * @return {string|object|array}
 */
SocketBuffer.decode = function(data){
    return JSON.parse(new Uint8Array(data).reduce((p, c) => p + String.fromCharCode(c), ""));
};

/*
 * Export Module
*/
module.exports = SocketBuffer;