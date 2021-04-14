const {Post, sequelize} = require('../models');

const postsController = {
    index: async (req, res) => {
        let posts = await Post.findAll();
        return res.json(posts);
    },
    create: async (req, res) => {
        const post = req.body;
        await Post.create(post);
        return res.json(post)
    },
    update: async (req, res) => {
        const post = req.params;
        const postAtualizado = req.body;
        await Post.update(postAtualizado, {where: {
            id: post.id
        }})
        return res.json(postAtualizado)
    },
    delete: async (req, res) => {
        const post = req.params;
        await Post.destroy({where: {
            id: post.id
        }})
        return res.send('Post deletado com sucesso!')
    },
    show: async (req, res) => {
        let { id } = req.params;
        let posts = await Post.findAll({
            where: { usuarios_id: id } 
        });
        return res.json(posts);
    }
}

module.exports = postsController;