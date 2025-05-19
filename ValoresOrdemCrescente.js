// Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais) e escreve-los em ordem crescente.

const prompt = require('prompt-sync')()

console.log('Digite dois valores numéricos diferentes:')

let valor1 = Number(prompt('Digite o primeiro valor: '))
let valor2 = Number(prompt('Digite o segundo valor: '))

if (isNaN(valor1) || isNaN(valor2)) {
    console.log('Erro: Escreva novamente dois números.')
} else {
    if (valor1 === valor2) {
        console.log('Os números não pode repetir. Digite novamente.')
    } else if(valor1 < valor2) {
        console.log(valor1)
        console.log(valor2)
    } else {
        console.log(valor2)
        console.log(valor1)
    }
}