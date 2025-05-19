// As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs compradas, calcule e escreva o valor total da compra.

const prompt = require('prompt-sync')()

// Pede ao usuario o número de maçãs que deseja comprar

let numeroMacas = Number(prompt('Digite o número de maçãs que deseja comprar: '))

let valorTotal = 0

if (isNaN(numeroMacas) || numeroMacas < 0) {
    console.log('Digite um número maior que zero.')
} else {
    if (numeroMacas < 12) {
        valorTotal = numeroMacas * 0.30
        console.log(`O valor total foi de R$ ${valorTotal}`)
    } else {
        valorTotal = numeroMacas * 0.25
        console.log(`O valor total foi de R$ ${valorTotal}`)
    }
}

