const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema(
    {
        autor: String,
        lugar: String,
        descricao: String,
        hashtag: String,
        imagem: String,
        likes: {
            type: Number,
            default: 0
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Post', PostSchema);