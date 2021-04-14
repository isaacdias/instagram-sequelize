const {Post, sequelize} = require('../models');

const postsController = {
    index: async (req, res) => {
        let posts = await Post.findAll();
        return res.json(posts);
    },
    create: async (req, res) => {
        const {texto, img, usuarios_id, n_likes} = req.body; 

        const post = await Post.create({
            texto,
            img,
            usuarios_id,
            n_likes
        });

        return res.json(post)
    },
    update: async (req, res) => {
        const {id} = req.params;
        const {texto, img, usuarios_id, n_likes} = req.body; 

        const post = await Post.update({
            texto,
            img,
            usuarios_id,
            n_likes
        }, {
            where: {id}
        });
        return res.json(post)
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