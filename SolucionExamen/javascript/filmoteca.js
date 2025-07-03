const filmoteca = {
    peliculas: [
        {
            nombre: "El padrino",
            descripcion: "El padrino es una pelicula sobre mafiosos italianos.",
            genero: "Documental histórico",
            anio_estreno: 1978,
            visto: false
        },
        {
            nombre: "El lobo de wall street",
            descripcion: "Biopic de Jordan Belfort.",
            genero: "Otro gran documental histórico",
            anio_estreno: 2013
        }
    ],
    agregarPelicula: function(nombre, descripcion, genero, anio_estreno){
        if(!nombre || !genero || !descripcion || !anio_estreno){
            console.log("Todos los campos son obligatorios");
            return;
        }

        if(typeof anio_estreno !== "number" || anio_estreno > new Date().getFullYear()){
            console.log("La fecha de esteno no es correcta");
            return;
        }

        for(const pelicula of this.peliculas){
            if(pelicula.nombre.toLowerCase().trim() === nombre.toLowerCase().trim()){
                console.log("La pelicula ya existe, no se va a añadir");
                return;
            }
        }

        this.peliculas.push({nombre, descripcion, genero, anio_estreno})
        localStorage.setItem("peliculas", JSON.stringify(this.peliculas));
        this.renderizarPeliculas();
    },

    renderizarPeliculas: function(){
        const container = document.getElementById("peliculas-container");
        container.innerHTML = "";
        for (const pelicula of this.peliculas){
            const tarjetaPelicula = document.createElement("div");
            tarjetaPelicula.className = "pelicula-card";
            tarjetaPelicula.innerHTML =
            `
                <div class="pelicula-titulo">${pelicula.nombre}</div>
                <div class="pelicula-genero">${pelicula.genero}</div>
                <div class="pelicula-descripcion">${pelicula.descripcion}</div>
                <div class="pelicula-anio">${pelicula.anio_estreno}</div>
            `;

            const botonVisto = document.createElement("button");
            botonVisto.className = pelicula.visto ? "visto" : "no-visto";
            botonVisto.textContent = pelicula.visto ? "Visto" : "No visto";
            botonVisto.addEventListener("click", (event)=>{
                const actualClass = event.target.className;
                event.target.className = actualClass === "visto" ? "no-visto" : "visto";
                event.target.textContent = actualClass === "visto" ? "No visto" : "Visto";
                pelicula.visto = actualClass !== "visto";
                localStorage.setItem("peliculas", JSON.stringify(this.peliculas));
            })
            tarjetaPelicula.appendChild(botonVisto);
            container.appendChild(tarjetaPelicula);
        }
    },

    cargarPeliculas: function(){
        const peliculasGuardadas = localStorage.getItem("peliculas");
        if (peliculasGuardadas){
            this.peliculas = JSON.parse(peliculasGuardadas);
        }
        else{
            this.agregarPelicula("Shrek 2", "Un ogro conoce a su suegro", "Animación", 2000);
            localStorage.setItem("peliculas", JSON.stringify(this.peliculas));
        }

        this.renderizarPeliculas();
    }
}

filmoteca.cargarPeliculas();
filmoteca.agregarPelicula("Cars", "El rashyo maquin", "Tragedia", 1999);


