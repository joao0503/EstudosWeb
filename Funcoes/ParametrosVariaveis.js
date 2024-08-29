// javascript my beloved
// retorna a soma de todos os argumentos passados
function soma() {
    let soma = 0;
    for (let i in arguments) {
        soma += arguments[i];
    }
    return soma;
}

console.log(soma());
console.log(soma(1));
console.log(soma(1, 2, 3.3));
console.log(soma(1, 2, 'Teste'));
console.log(soma('a', 'b', 'c')); // retorna 0abc pq nao discrimina tipos