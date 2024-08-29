/* Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
como parâmetros um número n (número de termo), a1 (o primeiro termo) e r (a razão) e escreva os n termos ,
bem como a soma dos elementos.
*/

const progressaoAritmetica = (n, a1, r) => {
    let termos = [];
    let soma = 0;
    for (let i = 0; i < n; i++) {
        termos.push(a1 + r * i);
        soma += a1 + r * i;
    }
    return { termos, soma };
}

const progressaoGeometrica = (n, a1, r) => {
    let termos = [];
    let soma = 0;
    for (let i = 0; i < n; i++) {
        termos.push(a1 * Math.pow(r, i));
        soma += a1 * Math.pow(r, i);
    }
    return { termos, soma };
}

console.log(progressaoAritmetica(5, 1, 2));
console.log(progressaoGeometrica(5, 1, 2));