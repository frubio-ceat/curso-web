function myFunction() {
    console.log( "This is my function." );
};

console.log(myFunction);
myFunction();

let a = myFunction;
let b = myFunction();

console.log(a);
console.log(b);

// a();
