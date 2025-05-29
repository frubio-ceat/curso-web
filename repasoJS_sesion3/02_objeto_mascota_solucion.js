/*
Crea un objeto mascota con propiedades nombre, energia, y métodos jugar(minutos) y dormir(horas). 
Jugar baja la energía el doble de los minutos jugados y dormir la sube por 10 de las horas dormidas.
El límite máximo de energía es 100 y el mínimo 0.
Si la energía es 0 no se puede jugar y si es 100 no se puede dormir.
Por último, crea un método estado() que muestre el estado de la mascota (nombre y energía).
Realiza una serie de llamadas a los métodos para probar su funcionamiento.
*/
const MAX_ENERGIA = 100;

let mascota = {
    nombre: "Firulais",
    energia: 100,
    jugar: function (minutos) {
        if (typeof minutos !== "number") {
            console.error("No se ha pasado un número a jugar");
            return;
        }

        if (minutos < 0) {
            console.error("No se admiten números negativos");
            return;
        }

        /*
        //si admitieramos valores negativos, lo pasamos a positivo.
        if (minutos < 0){
            minutos = -minutos;
        }

        minutos = Math.abs(minutos);
        */

        if (this.energia <= 0) {
            console.error(`${this.nombre} no tiene energía para jugar`);
            return;
        }

        let energiaGastada = minutos * 2;

        if (energiaGastada > this.energia) {
            console.log(`${this.nombre} no puede jugar tanto tiempo y no vamos a jugar.`);
            return;
        }

        this.energia -= energiaGastada;
        console.log(`${this.nombre} va a jugar ${minutos} minutos`);
    },

    dormir: function (horas) {
        if (typeof horas !== "number") {
            console.error("No se ha pasado un número a dormir");
            return;
        } 

        if (horas < 0) {
            console.error("No se admiten números negativos");
            return;
        }

        if (this.energia >= MAX_ENERGIA) {
            console.log(`${this.nombre} está al máximo de energía y no necesita dormir.`);
            return;
        }

        let energiaRecuperada = horas * 10;
        this.energia += energiaRecuperada;

        if (this.energia > MAX_ENERGIA) {
            this.energia = MAX_ENERGIA;
        }
        console.log(`${this.nombre} ha dormido ${horas} ${horas===1 ? "hora": "horas"} y tiene ${this.energia} energía`);
    },
    mostrar: function(){
        console.log(`${this.nombre} tiene ${this.energia} energía`);
    }
}

mascota.mostrar();
mascota.jugar(-10);
mascota.jugar("hola");
mascota.jugar(15);
mascota.mostrar();
mascota.dormir("no");
mascota.dormir(2);