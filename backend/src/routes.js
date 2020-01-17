const {Router} = require('express');
const DevControllers = require('./controllers/DevController');

const routes = Router();

routes.get('/devs', DevControllers.index);
routes.post('/devs', DevControllers.store);

module.exports = routes;