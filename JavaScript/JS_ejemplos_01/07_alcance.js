// alcance de bloque 01
console.log("\nAlcance de bloque 01");
{
  let scopedVariable = true;
  console.log( scopedVariable );
}
//console.log(scopedVariable);

// alcance de bloque 02
console.log("\nAlcance de bloque 02");
{
  const myConstant = false;
}
const myConstant = true;

// alcance de bloque 03
console.log("\nAlcance de bloque 03");
{
  let scopedVariable3 = true;
  {
    console.log( scopedVariable3 );
  }
}

// alcance de bloque 04
console.log("\nAlcance de bloque 04");
{
  let scopedVariable4 = false;
  {
    scopedVariable4 = true;
  }
  console.log( scopedVariable4 );
}

// alcance de bloque 05
console.log("\nAlcance de bloque 05");
{
  {
    var scopedVariable5 = false;
  }
  console.log( scopedVariable5 );
}