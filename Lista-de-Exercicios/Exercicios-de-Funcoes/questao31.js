// Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
// e imprime a quantidade no console.


const ordenar = (vetor) => {
    let negativos = 0;
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] < 0) {
            negativos++;
        }
    }
    return negativos;
}
console.log(` O vetor possui ${ordenar([1, -2, 3, 8, 10, -6])} números negativos.`);