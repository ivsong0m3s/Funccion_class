var entrada = require ("readline-sync");


function imc(peso, altura){
    return(peso/(altura * altura))
}

var altura = parseFloat(entrada.question(`Digite sua altura: `));
var peso = parseFloat(entrada.question(`Digite seu peso: `));

var resultado = imc(peso,altura);
console.log(`O seu IMC é ${resultado}`);