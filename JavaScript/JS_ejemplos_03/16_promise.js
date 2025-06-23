function validarLogin(usuario, contraseña) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (usuario === "admin" && contraseña === "1234") {
        resolve("Acceso concedido");
      } else {
        reject("Usuario o contraseña incorrectos");
      }
    }, 1500); // Simula una espera de 1.5 segundos
  });
}

// Usamos la promesa
console.log("Validando al administrador...");
validarLogin("admin", "1234")
  .then(mensaje => console.log(mensaje))
  .catch(error => console.error(error));

console.log("Validando al usuario...");
validarLogin("user", "1234")
  .then(mensaje => console.log(mensaje))
  .catch(error => console.error(error));