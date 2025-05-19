// Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

const prompt = require('prompt-sync')()

console.log('Digite o número a ser impresso:')

let numero = Number(prompt('Digite seu número: '))

if (isNaN(numero)) {
    console.log('Erro: Digite um número')
} else {
    for (let i = 1; i <= numero; i++) {
        console.log(numero) 
    }
}