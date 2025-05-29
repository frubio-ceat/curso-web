/*
Crea un objeto carrito que tenga un array de productos (de objetos con dos valores, nombre y precio) y métodos para agregarProducto(nombre, precio), calcularTotal() y mostrarProductos(). 
*/

let carrito = {
    productos: [],
    agregarProducto: function(nombre, precio){
        if(typeof nombre !== "string" && typeof precio !== "number"){
            console.error("El nombre o el precio no tienen los tipos correctos");
            return;
        }
        
        this.productos.push({nombre, precio});
        
        /* otra versión
        let objetoNuevo = {
            nombre: nombre,
            precio: precio
        }
        this.productos.push(objetoNuevo);
        */
    },

    calcularTotal: function(){
        let total=0;
        for(let producto of this.productos){
            total += producto.precio;
        }
        return total;
    },

    mostrarProductos: function(){
        //let listaProductos = document.createElement("ul");
        for(let producto of this.productos){
            console.log(`En el carrito hay: ${producto.nombre} con precio ${producto.precio}`);
            /* Ejemplo del DOM
            let liProducto = document.createElement("li");
            liProducto.textContent = `${producto.nombre} con precio ${producto.precio}`;
            listaProductos.appendChild(liProducto);
            */
        }
        console.log(`El total es ${this.calcularTotal()}€`);
        //return listaProductos;
    }
}

carrito.agregarProducto("bici",10);
carrito.agregarProducto("estanteria",50);
console.log(carrito.calcularTotal());

/* Ejemplo con DOM
let sumaTotal = carrito.calcularTotal();
let spanTotal = document.createElement("span");
spanTotal.textContent = `El precio total del carrito son ${carrito.calcularTotal()}€`;
document.body.appendChild(spanTotal);

document.body.appendChild(carrito.mostrarProductos());
*/

