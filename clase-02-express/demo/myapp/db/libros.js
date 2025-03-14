const libros = {
    lista: [
        {
            id:1,
            titulo: "titulo 1",
            autor: "brian",
            annio: 2024
        },
        {
            id:2,
            titulo: "titulo 2",
            autor: "brian",
            annio: 2022
        },
        {
            id:3,
            titulo: "titulo 3",
            autor: "luis",
            annio: 2022
        },
    ],
    filtrarPorTitulo: function(tituloBuscado){

        let listaNueva = [];

        for (let i = 0; i < this.lista.length; i++) {
            const libroIterado = this.lista[i];
            if (libroIterado.titulo == tituloBuscado) {
                listaNueva.push(libroIterado);
            }
        }

        return listaNueva;
    }
}

module.exports = libros;