const {Router} = require('express');
const DevControllers = require('./controllers/DevController');
const SearchControllers = require('./controllers/SearchController');

const routes = Router();

routes.get('/devs', DevControllers.index);
routes.post('/devs', DevControllers.store);

routes.get('/search', SearchControllers.index);

module.exports = routes;