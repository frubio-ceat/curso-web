/*
Crea un objeto llamado contador que tenga una propiedad valor (inicialmente 0) y tres métodos: incrementar(), decrementar() y mostrar() que muestre el valor actual.
Después haz una serie de llamadas a las funciones para probar su funcionamiento. No utilices console.log con el valor, para ello tienes el método mostrar().
*/
const MAX_VALUE = 10;

const contador = {
    valor: 0,
    incrementar: function () {
        this.valor++;
    },
    decrementar: function() {
        this.valor--;
    },
    mostrar: function(){
        console.log(this.valor);
    },
    decrementarPorNumero: function(numero) {
        this.valor -= numero;
    },
}

contador.incrementar();
contador.decrementar();
contador.incrementar();
contador.incrementar();
contador.decrementarPorNumero(10);

contador.mostrar();