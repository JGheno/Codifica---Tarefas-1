//Crie um menu interativo no console que oferece ao usuário a escolha de três opções. Utilize switch-case para implementar a lógica de cada opção selecionada.

const prompt = require("prompt-sync")();

// Imprime as instruções para o usuário
console.log("=== MENU INICIAL ===");
console.log("1 - Verificar se um número é par ou ímpar");
console.log("2 - Verificar se uma nota é suficiente para aprovação");
console.log("3 - Sair");

let opcao = prompt("Escolha entra as opções 1, 2 ou 3: ");

// Verifica qual a opção escolhida e então roda um novo código
switch (opcao) {
    case "1":
        let numero = Number(prompt("Digite um número: "));
        if (isNaN(numero)) {
            console.log("Erro: valor inválido.");
        } else {
            if (numero % 2 === 0) {
                console.log("O número é Par.");
            } else {
                console.log("O número é Ímpar.");
            }
        }
        break;

    case "2":
        let nota = Number(prompt("Digite a nota (0 a 10): "));
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
        break;

    case "3":
        console.log("Encerrando o programa.");
        break;

    default:
        console.log("Opção inválida. Por favor, escolha 1, 2 ou 3.");
        break;
}
