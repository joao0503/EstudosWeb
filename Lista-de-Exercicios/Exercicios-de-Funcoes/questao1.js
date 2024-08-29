/* Crie uma função que dado dois valores (passados como parâmetros) 
mostre no console a soma, subtração, multiplicação e divisão desses valores.
*/ 

const operacao = (x,y) => {
    console.log(`Soma: ${x+y}, Subtração: ${x-y}, Multiplicação: ${x*y}, Divisão: ${x/y}`);
}
operacao(5,10);