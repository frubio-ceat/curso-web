document.getElementById("saludar").addEventListener("click", () => {
    const valor = document.getElementById("nombre").value;
    alert("Hola, " + valor);
});

document.getElementById("nombre").addEventListener("click", (evento) => {
    console.log("He hecho click en el input del nombre");
    console.log(evento.currentTarget.value);
})

document.getElementById("nombre").addEventListener("input", (evento) => {
    console.log("He hecho click en el input del nombre");
    console.log(evento.currentTarget.value);
    evento.currentTarget.value = evento.currentTarget.value.toUpperCase();
})

document.getElementById("inputButton").addEventListener("click", (evento) => {
    evento.preventDefault();
    document.getElementById("formulario");
    console.log(datos);
    for (let [clave, valor] of datos.entries()) {
        console.log(clave + ": " + valor);
    }
});

document.getElementByTag("input").addEventListener("keydown", (event) => {
    event.stopPropagation();
});

document.addEventListener("keydown", (event, numero) => {
    if (event.key === "s") {
        //event.preventDefault();
        console.log("Has usado  S");
    }
});

function anadirDigito(numero){
    // añadir el digito al value del input de la calculadora
}

document.getElementById("1").addEventListener("click", () => {
    anadirDigito(1);
});


document.getElementById("2").addEventListener("click", () => {
    anadirDigito(2);
});