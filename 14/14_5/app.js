'use sctrict';

const Hapi = require('hapi');
const server = new Hapi.Server({
    host: 'localhost',
    port: 3000
});

var Joi = require('joi');

server.route({
    method: 'GET',
    path: '/article/{id}',
    handler: function(req, res){
        res('Id artykułu = ' + req.params.id);
    },
    config: {
        validate: {
            params: {
                id: Joi.number()
            }
        }
    }
});

server.start();