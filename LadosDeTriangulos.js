// Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
// Isósceles, escaleno ou eqüilátero.
// Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
// Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
// Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
// Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)

const prompt = require('prompt-sync')()

console.log('Digite os valores para os três lados de um triângulo:')

let A = Number(prompt('Digite o primeiro valor: '))
let B = Number(prompt('Digite o segundo valor: '))
let C = Number(prompt('Digite o terceiro valor: '))

// Verifica se os valores digitados são números positivos e então faz a classificação
if (isNaN(A) || isNaN(B) || isNaN(C) || A <= 0 || B <= 0 || C <= 0) {
    console.log('Erro: Os três lados devem ter valores númericos e positivos')
} else {
    if (A < B + C && B < A + C && C < A + B) {
        if (A === B && B === C) {
            console.log("Tipo: Triângulo Equilátero");
        } else if (A === B || A === C || B === C) {
            console.log("Tipo: Triângulo Isósceles");
        } else {
            console.log("Tipo: Triângulo Escaleno");
        } 
    } else {
        console.log("Os lados fornecidos NÃO formam um triângulo.")
    } 
}
