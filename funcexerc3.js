function verificarParImpar(numero) {
    if (numero % 2 === 0) {
        return "par";
    } else {
        return "ímpar";
    }
}

const números = [12, 356, 98, 89, 45, 12, 90, 34, 123, 834, 979];

for (var i = 0; i < números.length; i++) {
    const resultado = verificarParImpar(números[i]);
    console.log(`O número ${números[i]} é ${resultado}.`);
}
