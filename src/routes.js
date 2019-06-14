const express = require('express');
const multer = require('multer');
const PostController = require('./controllers/PostController');
const uploadConfig = require('./config/upload');

const upload = multer(uploadConfig);
const routes = new express.Router();

routes.post('/posts', upload.single('imagem'), PostController.store);

module.exports = routes;