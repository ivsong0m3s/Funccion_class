var entrada = require ("readline-sync");

function soma(numero1, numero2){
    return numero1 + numero2;
 }

var numero1 = parseInt(entrada.question(`Digite um numero? `));
var numero2 = parseInt(entrada.question(`Digite mais outro numero? `));


var resultado= soma(numero1, numero2);
console.log(resultado);