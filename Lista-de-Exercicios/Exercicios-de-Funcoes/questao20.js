/*  Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.
*/

const notas = (valor) => {
    let notas100 = 0;
    let notas50 = 0;
    let notas10 = 0;
    let notas5 = 0; 
    let notas1 = 0;
    for (let i = 0; valor >= 100; i++) {
        valor -= 100;
        notas100++;
    }
    for (let i = 0; valor >= 50; i++) {
        valor -= 50;
        notas50++;
    }
    for (let i = 0; valor >= 10; i++) {
        valor -= 10;
        notas10++;
    }
    for (let i = 0; valor >= 5; i++) {
        valor -= 5;
        notas5++;
    }
    for (let i = 0; valor >= 1; i++) {
        valor -= 1;
        notas1++;
    }
    if (notas100 > 0) {
        console.log(`${notas100} nota(s) de R$100`);
    }
    if (notas50 > 0) {
        console.log(`${notas50} nota(s) de R$50`);
    }
    if (notas10 > 0) {
        console.log(`${notas10} nota(s) de R$10`);
    }
    if (notas5 > 0) {
        console.log(`${notas5} nota(s) de R$5`);
    }
    if (notas1 > 0) {
        console.log(`${notas1} nota(s) de R$1`);
    }
}

notas(18);