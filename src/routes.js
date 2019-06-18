const express = require('express');
const multer = require('multer');
const PostController = require('./controllers/PostController');
const uploadConfig = require('./config/upload');
const LikeController = require('./controllers/LikeController');

const upload = multer(uploadConfig);
const routes = new express.Router();

routes.post('/posts', upload.single('imagem'), PostController.store);
routes.get('/posts', PostController.index);
routes.post('/posts/:id/like', LikeController.store);

module.exports = routes;