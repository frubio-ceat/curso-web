/*
Crea un objeto auto con propiedades modelo, combustible, y métodos conducir(kilometros) y repostar(litros). 
Conducir baja el combustible en 0.2 litros por kilómetro recorrido, y repostar lo sube según los litros ingresados.
El combustible tiene un mínimo de 0 y un máximo de 50 litros.
Si el combustible es 0 no se puede conducir y si es 50 no se puede repostar.
Por último, crea un método estado() que muestre el modelo del auto y su nivel de combustible.
Realiza una serie de llamadas a los métodos para probar su funcionamiento.
*/

const MAX_COMBUSTIBLE = 50;

const auto = {
  modelo: "Toyota Corolla",
  combustible: 50,
  conducir(km) {
    // checks
    if (typeof km !== 'number') {
      console.log("Error: km debe ser un número.");
      return;
    }

    if (km <= 0) {
      console.log("Error: km no puede ser 0 o negativo.");
      return;
    }

    if (this.combustible <= 0) {
      console.log("No tengo gasolina.");
      return;
    }

    // implements
    const consumo = km * 0.2;
    const autonomia = this.calcularAutonomia();

    if(consumo>this.calcularAutonomia()){
      console.log("No tengo gasolina suficiente");
      return;
    }

    this.combustible -= consumo;
    console.log(`${this.modelo} condujo ${km} km.`);
  },
  calcularAutonomia(){
    return this.combustible/0.2;
  },
  repostar(litros) {
    this.combustible += litros;

    if (this.combustible === MAX_COMBUSTIBLE) {
      console.log(`${this.modelo} ya tiene el tanque lleno.`);
      return;
    }
    else {
      if (typeof litros !== 'number') {
        console.log("Error: litros debe ser un número.");
        return;
      }
    }

    if (this.combustible > 50) this.combustible = 50;
    console.log(`${this.modelo} repostó ${litros} litros.`);
  },
  estado() {
    console.log(`${this.modelo} tiene ${this.combustible.toFixed(1)} litros de combustible`);
  }
};

// Ejemplo de uso:
auto.conducir("1");   // consume 20 litros
auto.estado();        // debería mostrar 30 litros
auto.conducir(200);   // consume lo que queda
auto.estado();        // 0 litros
auto.repostar(30);
auto.estado();        // 30 litros
auto.repostar(25);    // se llena hasta 50, no más
auto.estado();        // 50 litros