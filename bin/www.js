#!/usr/bin/env node

const app = require('../app'),
      http = require('http');

const server = http.createServer(app.callback());

server.listen('10204');
server.on('listening', () => {
      const addr = server.address();
      const bind = typeof addr === 'string'
      ? 'pipe ' + addr
      : 'port ' + addr.port;

      console.log('Listening on ' + bind);
})
