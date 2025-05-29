function saludar(nombre){
    console.log(`Hola ${nombre}`);
};
// llamada con parámetro
saludar("Juan");
// llamada sin parámetro
saludar();

// parámetro por defecto
function saludar2(nombre = "anónimo"){
    console.log(`Hola ${nombre}`);
}
// llamada con parámetro
saludar2("Juan");
// llamada sin parámetro
saludar2();

function saludar3(){

    console.log(`Hola ${arguments[0]}`);
}
// llamada con parámetro
saludar3("Juan");
// llamada sin parámetro
saludar3();

function imprimirLog(){
    let cadenaTotal = "";
    for(let i=0; i<arguments.length; i++){
        cadenaTotal += arguments[i]+" ";
    }
    console.log(cadenaTotal);
}

imprimirLog("hola", "mundo", "!");