//Un closure es la combinacion de ina funcion y el ambito lexico en la cual ha sido declarada dicha funcion. Unclosure recuerda el ambito en el que fue creado.

//Ejemplo sin la estructura de un closure
const moneyBox = (coins) => {
  var saveCoins = 0
  saveCoins += coins;
  console.log(`MoneyBox: $${saveCoins}`)
}

moneyBox(10)
moneyBox(5)

//Ejemplo con la estructura de un closure
  const moneyBox = () => {
    var saveCoins = 0
    const countCoins = (coins) => {
      saveCoins += coins
      console.log(`MoneyBox: $${saveCoins}`)
    }
    return countCoins
  }

  let myMoneyBox = moneyBox()

  myMoneyBox(5)
  myMoneyBox(10)
  myMoneyBox(15)

  //En este segundo ejemplo, podemos ver el acumludao en la alcancia representada por moneyBox. El closure moneyBox recuerda la asignación de adición del ámbito en el que estaba saveCoins 