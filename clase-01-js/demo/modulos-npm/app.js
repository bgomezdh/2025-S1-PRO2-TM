//quererir el modulo
const calculadora = require('./modules/calculadora');


let suma = calculadora.multiplicar(2,9);

console.log(suma);


/* --------------------modulo de terceros -------------------- */
const moment = require('moment');

let momentFormat = moment().format();

console.log(momentFormat);

/* ------------------------- requerir modulo de frase de peliculas--------------------------- */

const pmq = require('popular-movie-quotes');

console.log(pmq.getRandomQuote());
