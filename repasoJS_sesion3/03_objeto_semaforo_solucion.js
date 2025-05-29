/*
En este ejercicio vamos a reutilizar funciones.
Hay que crear tres objetos semaforo que tenga un estado (rojo, amarillo, verde), una ubicación que será un string con la calle y dos métodos, cambiar(), que alterne el estado en orden, y mostrar(), que muestre el estado actual del semáforo y la ubicación.
Los semáforos comienzan en rojo.
Los métodos deben declararse fuera del objeto y se le pasará el objeto como parámetro. Para reutilizar el código.
El método cambiar debe pasar de rojo a verde, de verde a amarillo y de amarillo a rojo.
El método mostrar() debe mostrar el estado actual del semáforo.
Realiza una serie de llamadas a los métodos para probar su funcionamiento.
*/

let semaforo1 = {
    estado: "rojo", 
    ubicacion: "pinilla",
}

let plantillaCambiar = function () {
    if (this.estado === "rojo") {
        this.estado = "verde";
    }
    else if (this.estado === "amarillo") {
        this.estado = "rojo";
    }
    else {
        this.estado = "amarillo";
    }
};

let plantillaMostrar = function () {
    console.log(`El semáforo en ${this.ubicacion} está en ${this.estado}`);
}

semaforo1.cambiar = plantillaCambiar;
semaforo1.mostrar = plantillaMostrar;

let semaforo2 = {
    estado: "rojo",
    ubicacion: "calimoxo",
    cambiar: plantillaCambiar,
    mostrar: plantillaMostrar,
}

let semaforo3 = {
    estado: "rojo",
    ubicacion: "pinxo",
    cambiar: plantillaCambiar,
    mostrar: plantillaMostrar,
}

semaforo3.cambiar();
semaforo2.cambiar();
semaforo3.cambiar();

semaforo1.mostrar();
semaforo2.mostrar();
semaforo3.mostrar();