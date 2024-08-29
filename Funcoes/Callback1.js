const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice, lista) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir);