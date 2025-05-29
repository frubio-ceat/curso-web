// 
let contadorMultiplicador = 0;

function multiplicarX10(contador, variable1){
    contador++;
    variable1 = variable1 * 10;
    return [contador, variable1];
}

let arrayResultado = multiplicarX10(contadorMultiplicador, 30);
console.log(arrayResultado);
contadorMultiplicador = arrayResultado[0];
resultadoMultiplicador = arrayResultado[1];

[contadorMultiplicador, resultadoMultiplicar] = multiplicarX10(contadorMultiplicador, 30);
console.log(contadorMultiplicador);

