function miFuncion (variable1){
    return variable1 + 10;
}

let a = 10;
let resultado = miFuncion(a);

console.log(a);
console.log(resultado);

a = [1,2,3,4,5];
b = a;
a[0] = 100;

console.log(a);
console.log(b);

function miFuncion2 (lista){
    lista[0] = 1000;
    return lista;
}

let listaAlpha = [1,2,3];
let c = miFuncion2([...listaAlpha]);
listaAlpha[1] = 200;
console.log(c);
console.log(listaAlpha);
