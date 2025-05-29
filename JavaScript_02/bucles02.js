miArray = [5, 3, 1, 2, 4];

let hayCambios = true;
while (hayCambios) {
    hayCambios = false;
    for (let i = 0; i < miArray.length - 1; i++) {
        if (miArray[i] > miArray[i + 1]) {
            let aux = miArray[i];
            miArray[i] = miArray[i + 1];
            miArray[i + 1] = aux;
            hayCambios = true;
        }

    }
}
console.log(miArray);

const persona = {
    nombre: "Ana",
    edad: 30,
    ciudad: "Madrid"
};
for (let clave in persona) {
    console.log(clave + ": " + persona[clave]);
}
arrayUsuarios=
[
    {
      "nombre": "Laura",
      "apellidos": "Martínez Pérez",
      "referencia": "BM-101",
      "fechaNacimiento": "1990-05-14"
    },
    {
      "nombre": "Carlos",
      "apellidos": "Gómez Sánchez",
      "referencia": "AVD-204",
      "fechaNacimiento": "1985-11-23"
    },
    {
      "nombre": "Ana",
      "apellidos": "López Ramírez",
      "referencia": "TRX-308",
      "fechaNacimiento": "1992-08-01"
    }
];

for(let miObjeto of arrayUsuarios){
    for(let clave in miObjeto){
        if(clave==="nombre"){
            console.log(miObjeto[clave])
        }
    }
}