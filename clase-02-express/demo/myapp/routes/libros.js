/* recuperar el express */
const express = require('express');
const router = express.Router();
const libros = require("../db/libros")


/* Crear rutas y parametros */
router.get('/', function(req, res) {
    return res.send(libros.lista)
});

router.get('/titulo/:nombreLibro/:autor', function(req, res){
    let libroBuscado = req.params.nombreLibro;
    let autor = req.params.autor;
    return res.send(libros.filtrarPorTitulo(libroBuscado))
})

router.get('/annio/:annioPublicado?' , function(req, res){
    let annioPublicado = req.params.annioPublicado;

    if (annioPublicado != undefined) {
        return res.send("Todos los libros que su fecha sea del " + annioPublicado)
    } else {
        return res.send("Por favor ingrese una fecha para su filtrado ")
    }

})

/* exportar el ruteador */
module.exports = router;