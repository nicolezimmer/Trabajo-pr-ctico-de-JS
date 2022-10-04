//#region 
//imprimir variables let y const por consola
let usuario1 = 'nikol';
let usuario2 = "fram";
const bienvenida = `
Buen día!
Bienvenido a Francis web,
Nuevo usuario: 
`
const rechazado = `
Buen día!
Francis web no le da la bienvenida al usuario: 
`
console.log(bienvenida + usuario2);
console.log(rechazado + usuario1);

//#endregion

//#region 
//funciones de calculos matematicos
const num1 = 10;
const num2 = 2;
//funciones declarativas
function sumaDosNumeros(n1, n2) {
    const resultado = num1 + num2;
    return resultado;
}
//funciones fleha
const multiplicarDosNumeros = (n1, n2) => resultado = num1 * num2;
const dividirDosNumeros = (n1, n2) => resultado = num1 / num2;
//invocar funciones
s = sumaDosNumeros(num1, num2);
m = multiplicarDosNumeros(num1, num2);
d = dividirDosNumeros(num1, num2);
//mostrar resultado por consola
console.log('la suma es: ' + s + ', la multiplicacion es: ' + m + ', la division es: ' + d);

//#endregion

//#region 
//array
const misMascotas = ['francis', 'donna', 'maggie', 27, 1];
console.log(misMascotas[0] + ` es un perro muy particular,
muschos se preguntan: a que se dedica!? 
no hay manera de averiguarlo...
nacio el dia ` + misMascotas[3] + " del mes " + misMascotas[4])
    //recorrer un array con for
for (let i = 0; i <= misMascotas.length; i++) {
    console.log(misMascotas[i]);
}
//recorrer un array con for of

//#endregion