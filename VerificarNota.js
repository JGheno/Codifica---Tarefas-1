//Implemente um programa que recebe uma nota de 0 a 10 e classifica como "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

const prompt = require('prompt-sync')()

// Instrução pedindo para o usuário digitar o valor da nota
let nota = Number(prompt('Digite sua idade:'))

// Checando se o valor digitado é um número e se está entra 0 e 10, então verifica o status da nota

if (isNaN(nota) || nota < 0 || nota > 10) {
    console.log("Erro: Digite uma nota válida entre 0 e 10.");
} else {
    if (nota < 5 ) {
        console.log('Reprovado!')
    } else if (nota >= 5 && nota < 7) {
        console.log('Recuperação')
    } else {
        console.log('Aprovado!')
    }
}