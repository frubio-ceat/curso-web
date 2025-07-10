// Importar Firebase (asegúrate de incluir los scripts en tu HTML)
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-database.js";

// Configuración de Firebase (reemplaza con tu configuración)
const firebaseConfig = {
  apiKey: "AIzaSyB86vw55_7MDi3Z6P0yMAP9T98uycBrBqc",
  authDomain: "prueba1-dca18.firebaseapp.com",
  databaseURL: "https://prueba1-dca18.firebaseio.com",
  projectId: "prueba1-dca18",
  storageBucket: "prueba1-dca18.firebasestorage.app",
  messagingSenderId: "587887792922",
  appId: "1:587887792922:web:d47b56c174b85b56f492a3",
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

const cabecera = document.getElementById("main-header");
const contenedor = document.getElementById("contenido");

// Escuchar cambios en el estado de autenticación
onAuthStateChanged(auth, (user) => {
  if (user) {
    // Usuario autenticado → mostramos saludo
    const displayName = user.displayName || user.email;
    cabecera.innerHTML = `¡Bienvenido, ${displayName}!`;
    contenedor.innerHTML = `<button id="logout">Cerrar sesión</button>`;

    document.getElementById("logout").addEventListener("click", async () => {
      try {
        await signOut(auth);
        // El onAuthStateChanged se encargará de actualizar la UI
      } catch (error) {
        console.error("Error al cerrar sesión:", error);
      }
    });
  } else {
    // No hay usuario → mostrar formulario de login
    mostrarFormularioLogin();
  }
});

function mostrarFormularioLogin() {
  cabecera.innerHTML = "Iniciar Sesión";
  contenedor.innerHTML = `
    <form id="loginForm">
      <div>
        <label>Email:</label>
        <input type="email" id="email" required>
      </div>
      <div>
        <label>Contraseña:</label>
        <input type="password" id="password" required>
      </div>
      <div>
        <label>Nombre (solo para registro):</label>
        <input type="text" id="nombre">
      </div>
      <button type="submit">Iniciar Sesión</button>
      <button type="button" id="registerBtn">Registrarse</button>
    </form>
  `;

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

  document.getElementById("registerBtn").addEventListener("click", async () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const nombre = document.getElementById("nombre").value;

    if (!email || !password || !nombre) {
      alert("Por favor completa todos los campos para registrarte");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, {
        displayName: nombre
      });
    } catch (error) {
      alert("Error al registrarse: " + error.message);
    }
  });
}

import { set, ref } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-database.js";
async function escribirDatos() {
  try {
    // ref indica la ruta, set añade el objeto.
    await set(ref(db, 'usuarios/usuario1'), { nombre: 'Ana', edad: 28, activo: true });
    console.log('Datos guardados correctamente');
  } catch (error) {
    console.error('Error al guardar los datos:', error);
  }
}

import { update } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-database.js";
async function actualizarDatos() {
  try {
    // ref indica la ruta, update hace modificaciones solo en las variables del objeto.
    await update(ref(db, 'usuarios/usuario1'), { nombre: 'Pedro', edad: null, casado: true });
    console.log('Datos actualizados correctamente');
  } catch (error) {
    console.error('Error al guardar los datos:', error);
  }
}

import { push } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-database.js";
async function agregarDatos() {
  try {
    // ref indica la ruta, push crea un id nuevo en la ruta y añade el objeto a ese id.
    await push(ref(db, 'usuarios/'), { nombre: 'Maria', edad: 35, activo: false });
    console.log('Datos guardados correctamente');
  } catch (error) {
    console.error('Error al guardar los datos:', error);
  }
}

import { get, onValue } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-database.js";
async function leerUnaVez() {
  try {
    const snapshot = await get(ref(db, 'usuarios/usuario1'));
    if (snapshot.exists()) { // si la ruta no existe, no da error, por eso se comprueba esto.
      console.log('Datos:', snapshot.val());
    } else {
      console.log('No hay datos disponibles');
    }
  } catch (error) {
    console.error('Error al leer:', error);
  }
}

/*
const referencia = ref(db, 'usuarios/usuario1');
onValue(referencia, (snapshot) => {
  const datos = snapshot.val();
  console.log('Actualización en tiempo real:', datos);
});

onValue(referencia, (snapshot) => {
  const datos = snapshot.val();
  console.log('Lectura única de datos:', datos);
},
  {
    onlyOnce: true
  }
);
*/

document.getElementById("btn-escribir").addEventListener("click", leerUnaVez);