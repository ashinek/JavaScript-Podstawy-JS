'use strict';

const Hapi = require('hapi');
const server = new Hapi.Server({
    host: 'localhost',
    port: 3000
});

server.route({
	method: 'GET',
	path: '/',
	handler: function(req, res) {
		res('Strona Index');
	}
});

server.start();