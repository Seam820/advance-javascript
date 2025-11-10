// Falsy values in JavaScript:
// 0
//""
// null
// undefined
// NaN
// truthy values in JavaScript:
// '0'
// ' '
// []
// {}
let name = 0;
if(name || name == 0){
    console.log("This is true");
}
else{
    console.log("This is false");
}