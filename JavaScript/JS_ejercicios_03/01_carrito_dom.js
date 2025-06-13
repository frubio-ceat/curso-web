// ejercicio donde, utilizando el DOM, se crea una tabla con los productos de un carrito

// objeto carrito
const carrito = {
  productos: [],
  agregarProducto(nombre, precio) {
    this.productos.push({ nombre, precio });
  },
  calcularTotal() {
    // sin usar reduce
    let total = 0;
    for (let i = 0; i < this.productos.length; i++) {
      total += this.productos[i].precio;
    }
    return total;
  },
  crearTablaProductos() {
    let tableHTML = document.createElement("table");

    // primero insertamos la tabla
    let carrito = document.getElementById("carrito");
    carrito.insertBefore(tableHTML,carrito.lastElementChild);

    
    // segundo añadir el contenido a la tabla
    //2.1 cabecera de la tabla
    tableHTML.innerHTML = 
    `<thead>
     <th>Producto</th>
     <th>Precio</th> 
    </thead>`
    
    /*
    //2.2 contenido de la tabla
    tableHTML.innerHTML +=`<tbody>`
    // bucle
    // 1ª iteracion
    for(let i=0; i<this.productos.length; i++){
      tableHTML.innerHTML += 
    `<tr>
      <td>${this.productos[i].nombre}</td>
      <td>${this.productos[i].precio}</td>
    </tr>`;
    }
    tableHTML.innerHTML +=`</tbody>`
    */

    /*
    //2.2 contenido de la tabla
    let tableBody = document.createElement("tbody");
    tableHTML.appendChild(tableBody);
    */

    


  }
};

carrito.agregarProducto("Libro", 15);
carrito.agregarProducto("Lápiz", 2);
carrito.agregarProducto("Cuaderno", 5);
carrito.agregarProducto("Borrador", 1);
carrito.agregarProducto("Regla", 3);

carrito.crearTablaProductos()
