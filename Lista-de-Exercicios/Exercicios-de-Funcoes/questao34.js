/* Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras.
*/

function compararStrings(string1, string2) {
    let contido = true;
    for (let i = 0; i < string1.length; i++) {
        let caractereString1 = string1.charAt(i).toLowerCase();
        for (let j = 0; j < string2.length; j++) {
            let caractereString2 = string2.charAt(j).toLowerCase();
            if (caractereString1 == caractereString2) {
                contido = true;
                break;
            } else {
                contido = false;
            }
        }
        if (!contido) {
            break;
        }
    }
    return contido;
}

console.log(compararStrings('abc', 'cba'));
console.log(compararStrings('abc', 'cbd'));
