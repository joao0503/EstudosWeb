/* Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.
*/

const simples = (capital, taxa, tempo) => capital * taxa * tempo;
const composto = (capital, taxa, tempo) => capital * (1 + taxa) ** tempo;

console.log(simples(100, 0.1, 3));
console.log(composto(100, 0.1, 3));