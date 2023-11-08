//El scope local de bloque es el espacio donde las variables locales únicamente pueden ser accedidas desde un bloque de código del programa.
//Ejemplo/Example.
function fruits(){
  if(true){
    var fruit='Apple';//function scope
    let fruit2='Kiwi'; //block scope
    const fruit3='banna';//block scope
    console.log(fruit2);
    console.log(fruit3);
  }
  console.log(fruit);
}
fruits();