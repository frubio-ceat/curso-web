let fruta = "manzana";

switch (fruta) {
  case "manzana":
  case "pera":
  case "plátano":
    console.log("Es una fruta común.");
  case "kiwi":
    console.log("Es una fruta exótica.");
    break;
  default:
    console.log("No es una fruta reconocida.");
}
