const {Post, sequelize} = require('../models');

const postsController = {
    index: async (req, res) => {
        let posts = await Post.findAll();
        return res.json(posts);
    },
}

module.exports = postsController;