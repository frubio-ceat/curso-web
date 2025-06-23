
let mainInterval;

function startInterval() {
  mainInterval = setInterval(() => {
    console.log("Ejecutando tarea periódica");
  }, 1000);
}

function stopInterval() {
  clearInterval(mainInterval);
  console.log("Intervalo detenido");
}

document.getElementById("iniciar").addEventListener("click", () => {
  startInterval();
});
document.getElementById("detener").addEventListener("click", () => {
  stopInterval();
});