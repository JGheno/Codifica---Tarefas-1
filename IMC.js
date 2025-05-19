//Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade) utilizando if-else.

const prompt = require("prompt-sync")();

// Instrução pedindo para o usuário digitar os valores de peso e altura

let peso = Number(prompt("Digite seu peso em kg: "));
let altura = Number(prompt("Digite sua altura em metros: "));

// Verifica se os valores são válidos
if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
    console.log("Erro: peso e altura devem ser números positivos.");
} else {
    // Calcula o IMC
    let imc = peso / (altura * altura);
    console.log(`Seu IMC é: ${imc.toFixed(2)}`);

    // Classifica o IMC
    if (imc < 18.5) {
        console.log("Classificação: Baixo peso");
    } else if (imc >= 18.5 && imc < 25) {
        console.log("Classificação: Peso normal");
    } else if (imc >= 25 && imc < 30) {
        console.log("Classificação: Sobrepeso");
    } else {
        console.log("Classificação: Obesidade");
    }
}
