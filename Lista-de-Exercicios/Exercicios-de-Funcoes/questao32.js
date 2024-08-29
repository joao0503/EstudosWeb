// Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.


const media = (vetor) => {
    let total = 0;
    for (let i = 0; i < vetor.length; i++) {
        total += vetor[i];
    }
    let media = total / vetor.length;
    return media;
}
let num = [1, 2, 3, 4, 5, 6]; 
console.log(`A média dos valores do vetor é: ${media(num)}.`);
