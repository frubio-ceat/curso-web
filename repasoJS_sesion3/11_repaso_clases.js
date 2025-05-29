// objeto usuario con propiedades nombre, apellidos, fecha de nacimiento y un metodo saludar que imprima "Hola usuario <nombre> <apellidos>"

/*const usuario1 = {
    nombre: "Fernando",
    apellidos: "Rubio Perona",
    fechaNacimiento: "DD-MM-YYYY",

    saludar: function(){
        console.log(`Hola usuario ${this.nombre} ${this.apellidos}`);
    }
}*/

let contadorUsuarios = 0;

// crear una clase Usuario a basándonos en el objeto
class Usuario {
    constructor(nombre, apellidos, fechaNacimiento){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.fechaNacimiento = fechaNacimiento;

        this.id = this.calcularId();
        this.fechaCreacion = new Date();
    }

    calcularId(){
        //accedo a la base de datos donde está el indice del id
        let idAlmacenado = contadorUsuarios;
        let newId = idAlmacenado+1;
        contadorUsuarios = newId;
        // escribir en la base de datos el newId que sustituye al id almacenado
        return newId.toString().padStart(3,"0");
    }

    saludar(){
        console.log(`Hola usuario ${this.nombre} ${this.apellidos}`);
    }
}

const usuario1 = new Usuario("Fernando","Rubio Perona","DD-MM-YYYY");

// crear más objetos sobre la clase Usuario
const usuario2 = new Usuario("Firulais","Junior","1/1/1991");
console.log(usuario2);
usuario2.saludar();

