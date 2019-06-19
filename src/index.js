const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

mongoose.connect('mongodb+srv://rocketTeste:FCStzaX1YmT7SjxV@cluster0-dbich.mongodb.net/test?retryWrites=true&w=majority',
{useNewUrlParser: true}
);

app.use('/files', express.static(path.resolve(_dirname, '..', 'uploads', 'redimensionado')));

app.use(require('./routes'));

app.listen(3333);