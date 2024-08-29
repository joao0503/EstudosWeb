// Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.

const parImpar = (num) => {
    let i = num.length;
    let impar = 0;
    let par = 0;
    while (i >= 0) {
        if (num[i] % 2 == 0) {par++;}
        if (num[i] % 2 == 1) {impar++;}
        i--;
    }
    console.log(`Quantidade de números pares: ${par}`);
    console.log(`Quantidade de números ímpares: ${impar}`);
}
parImpar([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);