import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";
import { firebaseConfig } from "./firebaseConfig.js";


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const cabecera = document.getElementById("main-header");
const contenedor = document.getElementById("contenido");

// Escuchar cambios en el estado de autenticación
onAuthStateChanged(auth, (user) => {
  // comprobamos si hay usuario
  if (user) {
    // Usuario autenticado → mostramos saludo
    const displayName = user.displayName || user.email;
    cabecera.innerHTML = `¡Bienvenido, ${displayName}!`;
    contenedor.innerHTML = "";

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
}




/*
if (user) {
  // Ya tenemos datos → mostramos saludo
  cabecera.innerHTML = `¡Bienvenido, ${user.email}!`;
  contenedor.innerHTML = `<button id="logout">Cerrar sesión</button>`;
  document.getElementById("logout").addEventListener("click", () => {
    localStorage.removeItem("usuario");
    location.reload(); // Recargar para volver al estado inicial
  });
} else {
  // No hay datos → estamos pendientes de login

  document.getElementById("loginForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const usuario = {
      email: email,
      password: password
    }
    localStorage.setItem("usuario", JSON.stringify(usuario));
    location.reload(); // Recargar para mostrar bienvenida
  });
}
*/