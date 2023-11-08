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


