//Crie um programa que classifica a idade de uma pessoa em categorias (criança, adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de controle if-else.

const prompt = require('prompt-sync')()

// Instrução pedindo para o usuário digitar o valor da idade
let idade = Number(prompt('Digite sua idade:'))

// Checando se o valor digitado é um número e então vendo a categoria de idade em que iria se relacionar
if (isNaN(idade)) {
    console.log('Erro: Por favor, digite um número!')
} else {
    if (idade < 0) {
        console.log('Erro: Por favor, digite um número maior que zero!')
    } else if (idade >= 0 && idade < 12) {
        console.log('Essa idade representa uma criança!')
    } else if (idade >= 12 && idade < 18) {
        console.log('Essa idade representa um adolescente!')
    } else if (idade >= 18 && idade < 60) {
        console.log('Essa idade representa um adulto!')
    } else {
        console.log('Essa idade representa um idoso!')
    }
}