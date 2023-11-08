//function Scope, es el espacio donde las variables locales solo se pueden acceder desde una funcion 
//del bloque de código.
// ejemplo:
function greeting (){
  let userName = 'Anaa';
  if(userName === 'Anaa'){
    console.log(`Hello ${userName}!`)
  };
};
greeting();



