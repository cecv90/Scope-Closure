//Crear una caja de ahorro, tener varios clientes.
function moneyBox(){
  let saveCoinst= 0;
  function countCoins(coins){
    saveCoinst += coins;
    console.log(`Mis Ahorros son de ${saveCoinst}`)
  };
  return countCoins;
};

const myMoneyBox = moneyBox();
myMoneyBox(5);
myMoneyBox(10);

const charlMoneyBox = moneyBox();
charlMoneyBox(20);
charlMoneyBox(65);

const otrosAhorro= moneyBox();
otrosAhorro(100);
otrosAhorro(200);

//Mis Ahorros son de 5
//Mis Ahorros son de 15
//Mis Ahorros son de 20
//Mis Ahorros son de 85
//Mis Ahorros son de 100
//Mis Ahorros son de 300
