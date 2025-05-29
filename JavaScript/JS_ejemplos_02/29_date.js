// Declaración de fechas
console.log("\nDeclaración de fechas:");
let now = new Date();  
let birthday = new Date("2000-05-16"); // si se utiliza string, este es el más común
let specificDate = new Date(2025, 4, 16); // 16 de mayo de 2025 (mes 4 = mayo)

let date1 = new Date("2025-05-16");  
let date2 = new Date("2025-05-16T15:30:00"); // con hora

// Acceso a componentes de la fecha
console.log("\nAcceso a componentes de la fecha:");
let year = now.getFullYear();  
let month = now.getMonth();     // El mes 0 es enero (lo hacen para fastidiar)
let day = now.getDate();
console.log(year, month, day); // Muestra el año, mes y día actual

now = new Date() // ahora
now.setFullYear(2030); // cambiamos solo el año
console.log(now); // Muestra la fecha con el año cambiado

// Formato de fecha
console.log("\nFormato de fecha:");
now = new Date();  
console.log(now.toDateString());
console.log(now.toTimeString());      
console.log(now.toLocaleDateString()); 
console.log(now.toLocaleString());    

// Formato ISO
console.log("\nFormato ISO:");
console.log(now.toISOString());   
console.log(now.toUTCString());   

// Formato regional
console.log("\nFormato regional:");
console.log(now.toLocaleString("es-ES", { timeZone: "Europe/Madrid" }));  
console.log(now.toLocaleString("en-US", { timeZone: "America/New_York" }));

// Formato personalizado
console.log("\nFormato personalizado:");
now = new Date();

day = String(now.getDate()).padStart(2, '0');       // "16"
month = String(now.getMonth() + 1).padStart(2, '0'); // "05"
year = String(now.getFullYear()).slice(-2);         // "25"

let customFormat = `${day}-${month}-${year}`;           // "16-05-25"
console.log(customFormat);

// Diferencia entre fechas
console.log("\nDiferencia entre fechas:");
date1 = new Date("2025-05-16");  
date2 = new Date("2025-05-10");  
const diffMs = date1 - date2; // diferencia en milisegundos
const msPerDay = 1000 * 60 * 60 * 24;  
const diffDays = diffMs / msPerDay; // 6 días
console.log(`Diferencia: ${diffDays} días`); // Muestra la diferencia en días

// Comparación de fechas
console.log("\nComparación de fechas:");
console.log(date1 > date2); // true

// Timestamp
console.log("\nTimestamp:");
const start = Date.now();  
// Simulación de una tarea que toma tiempo
for (let i = 0; i < 1e8; i++) {
  // Simulación de trabajo
  let x = Math.sqrt(i);
}
const end = Date.now();  
const duration = end - start; // duración en ms
console.log(`Duración: ${duration} ms`);
