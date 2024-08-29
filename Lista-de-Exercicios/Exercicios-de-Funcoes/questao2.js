/*  Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).
*/

const tipo = (x,y,z) => {
    if(x == y && y == z){
        console.log('Equilátero');
    }else if(x == y || y == z || x == z){
        console.log('Isósceles');
    }else{
        console.log('Escaleno');
    }
}
tipo(1,1,1);
tipo(1,2,1);
tipo(3,2,1);