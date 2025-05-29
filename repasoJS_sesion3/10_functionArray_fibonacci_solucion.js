/*
Crea una función que reciba un número y devuelva un array con la longitud del número de la secuencia de Fibonacci + 1, porque el 0 no cuenta según la wikipedia.
console.log(calcularFibonacci(3)) // [0,1,1,2]
console.log(calcularFibonacci(10)) // [0,1,1,2,3,5,8,13,21,34,55]
*/

function calcularFibonacci(numero) {
    if (numero <= 0)
        return [];
    if (numero === 1)
        return [0];

    let fibonacciArray = [0, 1];

    /*
    fibonacciArray[2] = fibonacciArray[0] + fibonacciArray[1];
    fibonacciArray[3] = fibonacciArray[1] + fibonacciArray[2];
    fibonacciArray[4] = fibonacciArray[2] + fibonacciArray[3];
    .
    .
    .
    fibonacciArray[numero] = fibonacciArray[numero-2]+fibonacciArray[numero-1];
    */

    for (let i = 0; i + 2 <= numero; i++) {
        fibonacciArray[i + 2] = fibonacciArray[i + 0] + fibonacciArray[i + 1];
    }


    /*
    for(let i=2; i<=numero;i++){
        fibonacciArray.push(fibonacciArray[i-2]+fibonacciArray[i-1]);
        //1ª iteracion del bucle porque i empieza en 2 => fibonacciArray[2-2] + fibonacciArray[2-1];
        //1ª iteracion, el bucle hace un push de 0+1; dejando a fibonacciArray con [0,1,1]

        //2ª iteracion del bucle, i es igual a 3 => fibonacciArray[3-2] + fibonacciArray[3-1];
        //2ª iteracion, el bucle hace un push de 1+1; dejando a fibonacciArray con [0,1,1,2]

        //3ª iteracion del bucle, i es igual a 4 => fibonacciArray[4-2] + fibonacciArray[4-1];
        //3ª iteracion, el bucle hace un push de 1+2; dejando a fibonacciArray con [0,1,1,2,3]
    }
    */
    /*
    for(let i=0; i<=numero-2;i++){
        fibonacciArray.push(fibonacciArray[i]+fibonacciArray[i+1]);
    }
    */
    return fibonacciArray;
}

console.log(calcularFibonacci(3)) // [0,1,1,2]
console.log(calcularFibonacci(10)) // [0,1,1,2,3,5,8,13,21,34,55]