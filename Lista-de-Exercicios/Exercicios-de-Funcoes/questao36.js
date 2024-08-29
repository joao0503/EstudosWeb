/*  Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
o valor do elemento for maior que 5.
*/

function multiplicarVetor(vetor, numero) {
    let vetorResultado = [];
    for (let i = 0; i < vetor.length; i++) {
        vetorResultado.push(vetor[i] * numero);
    }
    return vetorResultado;
}

function multiplicarVetorSeMaiorQue5(vetor, numero) {
    let vetorResultado = [];
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] > 5) {
            vetorResultado.push(vetor[i] * numero);
        } else {
            vetorResultado.push(vetor[i]);
        }
    }
    return vetorResultado;
}

console.log(multiplicarVetor([1, 2, 3, 4, 5], 2));
console.log(multiplicarVetorSeMaiorQue5([1, 6, 3, 8, 5], 2));