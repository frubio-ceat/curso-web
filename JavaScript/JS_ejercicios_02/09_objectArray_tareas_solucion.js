/*
Crea un objeto gestorTareas que permita añadir tareas, marcar tareas como completadas, y mostrar el estado.
*/

const gestorTareas = {
    tareas: [{nombre: "tarea de ejemplo", estaCompleta: false}],
    agregarTarea: function (nombreTarea){
        if(noHayConexion){
            return {error: true, message: "No hay conexión"};
        }
        let nuevaTarea ={
            nombre: nombreTarea,
            estaCompleta: false
        }
        this.tarea.push(nuevaTarea);
    },

    completarTareaPorIndice: function(indiceTarea){

        if(indiceTarea > this.tareas.length){
            console.log("El indice está fuera de las tareas");
            return;
        }

        this.tareas[indiceTarea].estaCompleta = true;

    },
    completarTarea: function(nombreTarea){
        let tareaEncontrada = this.tareas.find(t => t.nombre===nombreTarea);
        tareaEncontrada.estaCompleta = true;

        for(let tarea of this.tareas){
            if(tarea.nombre === nombreTarea){
                tarea.estaCompleta = true;
            }
        }

    },
    mostrarTareas: function(){
        this.tareas.forEach( tarea => {
           console.log(`La tarea ${tarea.nombreTarea} está ${tarea.estaCompleta ? "completa" : "pendiente"}`);
        })

        for (let tarea of this.tareas){
            console.log(`La tarea ${tarea.nombreTarea} está ${tarea.estaCompleta ? "completa" : "pendiente"}`);
        }
    }
};