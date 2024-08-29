// forma literal
function fun1() {};

// da pra armazenar em uma variavel
const fun2 = function(){};

// e em array
const array = [function(a, b) { return a + b }, fun1, fun2];
console.log(array[0](2, 3));

// e em atributos de objetos
const obj = {};
obj.falar = function(){return 'Opa'};
console.log(obj.falar());

// passar funcao como parametro
function run(fun) {
    fun();
}

run(function(){console.log('Executando...')});

// uma funcao pode retornar/conter uma funcao
function soma(a, b) {
    return function(c) {
        console.log(a + b + c);
    }
}

// meu deus do céu javascript é assustador
soma(2, 3)(4);
const cincoMais = soma(2, 3);
cincoMais(4);