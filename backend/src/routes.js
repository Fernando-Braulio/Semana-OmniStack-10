const {Router} = require('express');

const routes = Router();

routes.post('/users', (request, reponse) => {
    console.log(request.body);
    return Response.json({ message: 'Hello OmniStack' });
});

module.exports = routes;