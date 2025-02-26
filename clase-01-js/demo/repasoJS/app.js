//console.log("un mensaje desde la terminal");

//variables
let nombre = "brian";

const pi = 3.14151645; // www.gooogle.com

// booleanos

let validacion = false; // false

/* if (validacion) {
    console.log("Su validacion es verdadera"); 
}else{
    console.log("Su validacion es falsa"); 
}

 */
/* 
let edad = 16;

if (edad >=18) {
    console.log("Puede ingresar a la bresh");
} else {
    console.log("hoy te toca quedarte con los primitos");
    
}
 */
/* 

arrays


let listadoEdades = [44,35,15,16,13,45,67,45];
let listaNueva = [];

for (let i = 0; i < listadoEdades.length; i++) {
    const element = listadoEdades[i];
    if (element >= 18) {
        listaNueva.push(element)
    }
    
}

console.log(listaNueva);
 */


/* Objetos */

let apuntador = {
    color: "negro",
    peso: 100,
    marca: "logitec",
    encender: function() {
        return "El apuntador "+ this.color +" esta encendido";
    },
    apagar: function() {
        return `El apuntador ${this.color} esta apagado`;
    }
}

console.log(apuntador.apagar());

