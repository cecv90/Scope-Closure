//Permiten acceder al espacio de una functión exterior desde una function interior. En Javascript las 
//closure se crean cada vez que una función es creada, son autoejecutable que devuelven variables,
//funciones con return se pueden trabajar en ellas. A diferencia de otros conceptos como funciones, variables
//u otros los closures no son siempre utilizados, tiene una closure cuando una funcion cualquiera accede
//a su variable fuera de su contexto y la recuerda.
//Ambito lexico, se refiere al alcance de una variable siguiendo la cadena de scope, una variable se puede utilizar.
//desde un nivel inferior hasta uno superior, pero no al contrario.
//Ejemplo/Example.

const miContandor =(function(){
  let contador = 0;
  function incrementar (){
    return contador ++;
  }
  function decrentar(){
    return contador --;
  }
  function valor(){
    return contador;
  }
  return{
    incrementar,
    decrentar,
    valor
  } 
})();

miContandor.valor();
miContandor.incrementar();
miContandor.incrementar();
miContandor.incrementar();
miContandor.decrentar();
//Resultado 3.