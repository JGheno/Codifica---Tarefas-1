//Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar utilizando uma estrutura de controle if.

const prompt = require("prompt-sync")();

// Instrução pedindo para o usuário digitar um número
let numero = Number(prompt('Digite o número desejado:'))

// Fazendo um check inical de o número é realmente um número e então verificando se é par ou impar
if(isNaN(numero)){
    console.log('Erro: Por vavor digite um número!')
} else {
    if (numero % 2 === 0 ) {
        console.log('Número é Par!')
    } else {
        console.log('Número é impar!')
    }
}