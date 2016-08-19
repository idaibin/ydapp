/**
 * @file YOG2 框架启动入口
 * @author fis@baidu.com
 */

'use strict';

const yog = require('yog2-kernel');

const app = yog.bootstrap({
	rootPath: __dirname
}, () => {
	console.log('plugins load completed');
});

app.set('port', process.env.PORT || 8085);
app.disable('x-powered-by');

const server = yog.server = app.listen(app.get('port'), () => {
	console.log('Yog server listening on port ' + server.address().port);
});

server.on('connection', (socket) => {
	// disable nagle
	socket.setNoDelay(true);
});

// 仅在 Node.js 6.x开启这个功能 https://github.com/nodejs/node/issues/7126
if (parseInt(process.versions.node.split('.')[0], 10) >= 6) {
	server.on('clientError', function(err, socket) {
		socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
	});
}