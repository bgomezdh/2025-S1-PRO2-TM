//Importar los modelos
let db = require("../database/models");
let op = db.Sequelize.Op;

let moviesController = {
    index: function(req, res) {
     

        db.Movie.findAll()
            .then(function(resultados){
                return res.render("movies", {movies: resultados});
            })
            .catch(function(error){
                return res.send(error);
            })
    },

    show: function(req, res){
        movieId= req.params.id
        
        db.Movie.findByPk(movieId)
            .then(function(data){
                return res.render('oneMovie', { movie: data})

            })
            .catch(function(error){
                return res.send(error)
            })
    },
    search: function(req, res){
        //recuperar la query


        //buscar todas las peliculas que coincidan cn la palabra
       
    }
  };


  module.exports = moviesController;