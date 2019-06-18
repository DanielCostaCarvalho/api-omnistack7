const Post = require('../models/Post');

module.exports = {
    async index(req, res){
        const posts = await Post.find().sort('-createdAt');
        return res.json(posts);
    },
    async store(req, res){        
        const {autor, lugar, descricao, hashtag} = req.body;
        const {filename: imagem} = req.file;

        const post = await Post.create({
            autor,
            lugar,
            descricao,
            hashtag,
            imagem
        });

        return res.json(post);
    }
}