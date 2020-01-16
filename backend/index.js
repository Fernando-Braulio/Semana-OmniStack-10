const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());

app.use(cors());

//Métodos HTTP: get, post, put, delete

//Tipos de parametros:
//Query Params: request.Query (são usados para filtros, ordenação, paginação....)
//Route Params: request.Params (são usados para identificar um recurso na alteração ou delete)
//Body: request.Body (são dados para criação ou alteração de registro)


app.post('/users', (request, response) => {
    console.log(request.body);
    return response.json({ message: 'Hello OmniStack' });
});

app.listen(3333);