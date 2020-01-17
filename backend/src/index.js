const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://fernando:<v5p6d4a6>@cluster0-wxxff.mongodb.net/omnistack10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json());
app.use(routes);

app.listen(3333);




//Métodos HTTP: get, post, put, delete

//Tipos de parametros:
//Query Params: request.Query (são usados para filtros, ordenação, paginação....)
//Route Params: request.Params (são usados para identificar um recurso na alteração ou delete)
//Body: request.Body (são dados para criação ou alteração de registro)
