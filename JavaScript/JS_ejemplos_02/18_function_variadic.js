function myFunction( mySeparator, ...myStrings ) {
  let cadenaTotal = "";
    for(let i=0; i<myStrings.length-1; i++){
        cadenaTotal += myStrings[i]+mySeparator;
    }
    cadenaTotal += myStrings[myStrings.length-1];
    console.log(cadenaTotal);
};

myFunction( " - ", "My first string", "My second string", "my third string" );