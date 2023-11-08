//Variables, permiten que las computadoras almacenen datos y manipulen datos de forma facil.
//tipo de datos, undefined, null, booleano, string, symbol, number, object y BigInt.
//Scope,(Ámbito), Indica el alcance de una variable, objetos y funciones desde diferentes partes del código.

//Declarando variables.
var a;

//Declarando y asignando valor. 
var b= 'b';

//Reasignar valor.
b ='b';

//Redeclaración.
var a ='a';

console.log(a);

//Global Scope, Las variables declaradas  en el espacio global son visibles y pueden ser utilizadas en cualquier parte del código, ya sea dentro de funciones, bucles u otras estructuras.

var fruit= 'apple';
const bestFruit= () => {
  console.log(fruit);
};
bestFruit();