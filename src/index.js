const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://rocketTeste:FCStzaX1YmT7SjxV@cluster0-dbich.mongodb.net/test?retryWrites=true&w=majority',
{useNewUrlParser: true}
);

//senha: FCStzaX1YmT7SjxV
//usuario: rocketTeste
//connection string: mongodb+srv://rocketTeste:<password>@cluster0-dbich.mongodb.net/test?retryWrites=true&w=majority

app.use(require('./routes'));

app.listen(3333);