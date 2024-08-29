/* Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida
*/

const crescimento = (altura1, taxa1, altura2, taxa2) => {
    let anos = 0;
    let menor = [];
    let maior = [];
    if (altura1 == altura2) {
        return console.log('As crianças tem a mesma altura');
    }
    if (altura1 < altura2) {
        menor.push(altura1);
        menor.push(taxa1);
        maior.push(altura2);
        maior.push(taxa2);
    } else {
        menor.push(altura2);
        menor.push(taxa2);
        maior.push(altura1);
        maior.push(taxa1);
    }
    while (menor[0] < maior[0]) {
        menor[0] += menor[1];
        maior[0] += maior[1];
        anos++;
    }
    console.log(`A criança menor ultrapassará a maior em ${anos} anos`);
    console.log('Altura da criança menor: ' + menor[0]);
    console.log('Altura da criança maior: ' + maior[0]);
    return anos;
}

crescimento(150, 5, 170, 2);