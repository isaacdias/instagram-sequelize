const {Usuario, sequelize} = require('../models');

const usuariosController = {
    index: async (req, res) => {
        let usuarios = await Usuario.findAll();
        return res.render('usuarios', {listaUsuarios: usuarios});
    },
    create: async (req, res) => {
        const {nome, email, senha} = req.body;
        
        const usuario = await Usuario.create({
            nome,
            email,
            senha
        });
        return res.json(usuario)
    },
    update: async (req, res) => {
        const {id} = req.params;
        const {nome, email, senha} = req.body;

        const usuario = await Usuario.update({
            nome,
            email,
            senha
        }, {
            where: {id}
        });
        return res.json(usuario)
    },
    delete: async (req, res) => {
        const usuario = req.params;
        await Usuario.destroy({where: {
            id: usuario.id
        }})
        return res.send('Usuario deletado com sucesso!')
    }
}

module.exports = usuariosController;