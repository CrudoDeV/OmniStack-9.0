const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

const app = express();

mongoose.connect('mongodb://omnistack:omnistack@omnistack-shard-00-00-iwylh.mongodb.net:27017,omnistack-shard-00-01-iwylh.mongodb.net:27017,omnistack-shard-00-02-iwylh.mongodb.net:27017/semana09?ssl=true&replicaSet=OmniStack-shard-0&authSource=admin&retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
//GET, POST, PUT, DELETE
//req.query = Acessar os query params (para filtros)
//req.params = Acessar route params (para edição e delete)
//req.body = Acessar o corpo da requisição (para criação e edição)

app.use(express.json());
app.use(routes);


app.listen (3333);