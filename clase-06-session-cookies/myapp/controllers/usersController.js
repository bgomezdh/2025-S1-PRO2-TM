let db = require("../database/models");
let bcryptjs = require("bcryptjs");

// requerir bcryptjs

let usersController = {
    show: function(req, res) {
        return res.render("register");
    },
    create: function(req, res){
        // recuperar los datos del form
        let username = req.body.username;
        let email = req.body.email;
        let password = req.body.password;

        // guardar el usuario
        let usuario = {
            name: username,
            email: email,
            password: bcryptjs.hashSync(password, 10)
        }

        db.User.create(usuario)
            .then(function(results) {
                return res.redirect("/")
            })
            .catch(function(err) {
                return res.send(err)
            })
        
    },
    showLogin: function(req, res) {
        return res.render("login");
    },
    createLogin: function(req, res){
        // recuperar los datos del form
        let userInfo = {
            email: req.body.email,
            password:  req.body.password,
            recordarme:  req.body.recordarme
        }
       
        // validar que el mail y la pasword sean correctas


        //poner en session
        req.session.user = userInfo;

        // check de recordarme?
        if (userInfo.recordarme != undefined) {
            // como se crea una cookie?
            res.cookie("user", userInfo, { maxAge: 150000});
        }

        res.redirect("/movies")
        
    }

  };


  module.exports = usersController;