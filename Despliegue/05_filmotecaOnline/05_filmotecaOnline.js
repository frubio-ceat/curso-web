import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  onAuthStateChanged, 
  signOut, 
  createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";
import { getDatabase, ref, get, update } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-database.js";
import { firebaseConfig } from "./firebaseConfig.js";


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

const cabecera = document.getElementById("main-header");
const contenedor = document.getElementById("contenido");

//**
//  Configuración de Firebase Auth
// */

// Escuchar cambios en el estado de autenticación
onAuthStateChanged(auth, (user) => {
  // comprobamos si hay usuario
  if (user) {
    // Usuario autenticado → mostramos saludo
    const displayName = user.displayName || user.email;
    cabecera.innerHTML = `¡Bienvenido, ${displayName}!`;
    renderizarPeliculas();
  } else {
    // No hay usuario → mostrar formulario de login
    mostrarFormularioLogin();
  }
});

function mostrarFormularioLogin() {
  cabecera.innerHTML = `¡Hola! ¿Quién eres?`
  contenedor.innerHTML = `
  <form id="loginForm">
      <input type="text" id="email" placeholder="email" required>
      <input type="text" id="password" placeholder="contraseña" required>
      <button type="submit">Entrar</button>
      <button type="button" id="registerButton">Registrarse</button>
    </form>
  `
  document.getElementById("loginForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      alert("Error al iniciar sesión: " + error.message);
    }
  });

  document.getElementById("registerButton").addEventListener("click", mostrarFormularioRegistro);
}

function mostrarFormularioRegistro() {
  cabecera.innerHTML = `Registrarse`
  contenedor.innerHTML = `
  <form id="regForm">
      <input type="text" id="email" placeholder="email" required>
      <input type="text" id="password" placeholder="contraseña" required>
      <input type="text" id="password-validation" placeholder="repite contraseña" required>
      <button type="submit">Registrarse</button>
      <button type="button" id="loginButton">Volver</button>
    </form>
  `
  document.getElementById("regForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const passwordValidation = document.getElementById("password-validation").value;
    if (password !== passwordValidation) {
      alert("Las contraseñas no coinciden");
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      alert("Error al registrarse: " + error.message);
    }
  });
  document.getElementById("loginButton").addEventListener("click", mostrarFormularioLogin);
}


//**
// Carga de películas de Firebase
//  */
async function renderizarPeliculas() {

  // leemos las peliculas de realTime Database
  const peliculas = await cargarPeliculas();
  const perfil = await cargarPerfil();

  contenedor.innerHTML = ''; // Limpiar el contenedor antes de renderizar
  
  // boton de cerrar sesion
  const logoutButton = document.createElement("button");
  logoutButton.id = "logout";
  logoutButton.textContent = "Cerrar sesión";
  contenedor.appendChild(logoutButton);

  logoutButton.addEventListener("click", async () => {
    try {
      await signOut(auth);
    }
    catch (error){
      console.error("Error al cerrar sesión");
    }
  });

  // vamos a meter las películas en un div, cada una con su tarjeta
  const peliculasContainer = document.createElement('div');
  peliculasContainer.id = "peliculas-container";
  peliculasContainer.className = "peliculas-container";
  contenedor.appendChild(peliculasContainer);
  // en este caso, las películas no son una lista, son objetos, donde cada clave es el id
  for (const id in peliculas) {
    const pelicula = peliculas[id];
    const tarjetaHTML = document.createElement('div');
    tarjetaHTML.className = "pelicula-card";
    tarjetaHTML.innerHTML =
      `
        <div class="pelicula-titulo">${pelicula.titulo}</div>
        <div class="pelicula-genero">${pelicula.genero}</div>
        <div class="pelicula-descripcion">${pelicula.descripcion}</div>
        <div class="pelicula-anio">${pelicula.anio}</div>
      `;

    // agregamos un boton para marcar como visto y añadimos un estado de visto a la pelicula que estemos creando
    // estos datos ahora están en el pefil
    if (!perfil.listaVistos) {
      perfil.listaVistos = {}; // si no existe, lo creamos
    }
    const peliculaVista = perfil.listaVistos[id] || false; // comprobamos si la peli está vista por el id
    const botonVisto = document.createElement('button');
    botonVisto.className = peliculaVista ? "visto" : "no-visto"; // Asignamos la clase según el estado
    botonVisto.textContent = peliculaVista ? "Visto" : "No visto"; // Asignamos el texto según el estado
    botonVisto.addEventListener('click', async (event) => {
      event.target.className = event.target.className === "visto" ? "no-visto" : "visto";
      event.target.textContent = event.target.className === "visto" ? "Visto" : "No visto";
      
      // hay que actualizar la pelicula en la base de datos
      let objetoVisto = {};
      objetoVisto[id] = event.target.className === "visto";
      await update(ref(db, 'perfil/' + auth.currentUser.uid + '/listaVistos/'), objetoVisto);
    });
    tarjetaHTML.appendChild(botonVisto);
    peliculasContainer.appendChild(tarjetaHTML);
  }
}

async function cargarPeliculas() {
  try {
    const snapshot = await get(ref(db, 'peliculas'));
    if (snapshot.exists()) { // si la ruta no existe, no da error, por eso se comprueba esto.
      return snapshot.val();
    } else {
      console.log('No hay datos disponibles');
      return {};
    }
  } catch (error) {
    console.error('Error al leer:', error);
  }
}

async function cargarPerfil() {
  if(auth.currentUser === null) {
    return {};
  }
  try {
    const userId = auth.currentUser.uid; // Obtenemos el ID del usuario autenticado
    const snapshot = await get(ref(db, 'perfil/' + userId));
    if (snapshot.exists()) { // si la ruta no existe, no da error, por eso se comprueba esto.
      return snapshot.val();
    } else {
      console.log('No hay datos disponibles');
      return {};
    }
  } catch (error) {
    console.error('Error al leer:', error);
  }
}

