// es un obj literal que contiene la logica de mi programa
const autos = require('../db/index')

const productController = {
    // toda la logica de mi programa
    index: function(req, res) {
        return res.render("autos", {listado : autos.lista,
                                    tipoListado: "Listado Completo",
                                    habilitado: false
        });
    },
    filtrarMarca: function(req, res) {

        let marcaBuscada = req.params.brand;
        let autosEncontrados = [];
    
        for (let i = 0; i < autos.lista.length; i++) {
            const element = autos.lista[i];
            if (marcaBuscada == element.marca) {
                autosEncontrados.push(element)
            }
        }
        return res.send(autosEncontrados);
    }
}

module.exports = productController;