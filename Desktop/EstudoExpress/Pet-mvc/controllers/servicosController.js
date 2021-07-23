const servicosPet = require('../database/servicos.json')

const servicojson = require('../database/servicos.json')
const servicoController = {
    index: (req, res) => {
       return res.render('index',{"servicos":servicosPet.servicos})
        //return res.json(servicojson.servicos)
    },
    show: (req, res) => {
        const { id } = req.params
        let resultado = servicojson.servicos.filter(function (servico) {
            return servico.id == id
        })
        return res.send(resultado)
    },
    cadastro: (req, res) => {
        return res.render('cadastro')
    },
    contato: (req, res) => {
        return res.render('contato')
    },
    login: (req, res) => {
        return res.render('login')
    },
    servicos: (req, res) => {
        return res.render('servicos',{"servicos":servicosPet.servicos})
    },
    sobre: (req, res) => {
        return res.render('sobre')
    }
}

module.exports = servicoController;