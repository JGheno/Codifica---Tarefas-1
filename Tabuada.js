// Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a 10) utilizando um loop for.

const prompt = require("prompt-sync")();

let numero = Number(prompt("Digite um número para ver sua tabuada: "));

if (isNaN(numero)) {
    console.log("Erro: Digite novamente um número.");
} else {
    console.log(`Tabuada de ${numero}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}