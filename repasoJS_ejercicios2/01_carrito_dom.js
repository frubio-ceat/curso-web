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
    
  }
};

carrito.agregarProducto("Libro", 15);
carrito.agregarProducto("Lápiz", 2);
carrito.agregarProducto("Cuaderno", 5);
carrito.agregarProducto("Borrador", 1);
carrito.agregarProducto("Regla", 3);

// carrito.crearTablaProductos()
