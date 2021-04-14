const {Usuario, sequelize} = require('../models')

module.exports = async (req, res, next) => {
    let {email, nome, senha} = req.body;
    let users = await Usuario.findAll({where: {email} });
    if(users.length) {
        res.status(400).json({error: "Email já cadastrado"})
    } else if (!nome) {
        res.status(400).json({error: "Nome precisa ser informado"})
    } else if (senha.length < 6 || senha.length > 12){
        res.status(400).json({error: "Senha precisa ter mais de 6 e menos que 12 caracteres"})
    }else{
        next();
    }
}

