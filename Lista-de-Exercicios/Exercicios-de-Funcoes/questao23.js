/* Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.
*/

const calcularMedia = (cod, n1, n2, n3) => {
    let media = 0;
    if (n1 > n2 && n1 > n3) {media = n1*4 + n2*3 + n3*3;};
    if (n2 > n1 && n2 > n3) {media = n2*4 + n1*3 + n3*3;};
    if (n3 > n1 && n3 > n2) {media = n3*4 + n1*3 + n2*3;};
    media = media/10;
    let aprovacao = '';
    if (media >= 5) {aprovacao = 'Aprovado';}
    else {aprovacao = 'Reprovado';}

    while (cod >= 0) {
        console.log(`Código: ${cod}`);
        console.log(`Nota 1: ${n1}`);
        console.log(`Nota 2: ${n2}`);
        console.log(`Nota 3: ${n3}`);
        console.log(`Média: ${media}`);
        console.log(`Situação: ${aprovacao}`);
        console.log('-------------------');
        cod--;
    }
}

calcularMedia(2, 5, 6, 7);