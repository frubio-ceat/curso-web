
let digito1 = "0";
let digito2 = "0";
let operacion = "";

let pantalla = document.getElementById("pantalla");
pantalla.value = "0";

// COMPORTAMIENTO DE LOS BOTONES NUMERICOS
// cada boton numerico va a concaternarse con lo que haya en pantalla
let cambiarPantalla = function (nuevoDigito) {

    if (typeof nuevoDigito !== "string") {
        console.error("solo trabajamos con strings");
        return;
    }
    if (pantalla.value === "0" ){
        pantalla.value = nuevoDigito;
        return;
    }
    pantalla.value += nuevoDigito;
}

// AÑADIMOS LA FUNCION A LOS BOTONES NUMERICOS
let botonesNumero = document.querySelectorAll(".numero");
for (let botonNumero of botonesNumero) {
    botonNumero.addEventListener("click", () => { cambiarPantalla(botonNumero.innerHTML); });
}

// COMPORTAMIENTO DE LOS BOTONES DE OPERACION
let seleccionarOperacion = function (nuevoOperador) {
    /*
    if(nuevoOperador !== "sumar" && nuevoOperador !== "restar" && nuevoOperador !== "multiplicar" && nuevoOperador !== "dividir"){
        console.error("La operacion es incorrecta");
        return;
    }
    */
    // comprobamos si el nuevoOperador no está en la lista
    let posiblesOperaciones = ["sumar", "restar", "multiplicar", "dividir"];
    if (!posiblesOperaciones.includes(nuevoOperador)) {
        console.error("La operacion es incorrecta");
        return;
    }

    operacion = nuevoOperador;
    digito1 = pantalla.value;
    pantalla.value = "0";
    document.getElementById("pantalla-aux").value = digito1;
}
// AÑADIMOS LA FUNCION A LOS BOTONES DE OPERACION
let botonesOperacion = document.querySelectorAll(".operacion");
for (let botonOperacion of botonesOperacion) {
    botonOperacion.addEventListener("click", () => { seleccionarOperacion(botonOperacion.id); });
}

// FUNCION DE RESULTADO
let operacionIgual = function () {
    // primero obtenemos el segundo dígito
    digito2 = pantalla.value;
    let numero1 = Number(digito1);
    let numero2 = Number(digito2);
    // switch con la operacion
    switch (operacion) {
        case "sumar":
            pantalla.value = numero1 + numero2;
            break
        case "restar":
            pantalla.value = numero1 - numero2;
            break;
        case "multiplicar":
            pantalla.value = numero1 * numero2;
            break;
        case "dividir":
            pantalla.value = numero1 / numero2;
            break;
    }
}
// AÑADIMOS LA FUNCION RESULTADO AL IGUAL
document.getElementById("igual").addEventListener("click", operacionIgual);

// 
let researCalculadora = function(){
    digito1="0";
    digito2="0";
    operacion="";
    pantalla.value = "0";
    document.getElementById("pantalla-aux").value = "";
}
document.getElementById("limpiar").addEventListener("click", researCalculadora);
