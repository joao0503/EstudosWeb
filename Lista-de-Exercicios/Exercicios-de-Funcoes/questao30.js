// Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.


const ordenar = (vetor) => {
    for (let i = 0; i < vetor.length; i++) {
        for (let j = 0; j < vetor.length; j++) {
            if (vetor[i] < vetor[j]) {
                let temp = vetor[i];
                vetor[i] = vetor[j];
                vetor[j] = temp;
            }
        }
    }
    let maior = vetor[vetor.length - 1];
    let menor = vetor[0];
    return 'Maior: ' + maior + ', Menor: ' + menor;
}
console.log(ordenar([1, 4, 3, 8, 10, 6]));