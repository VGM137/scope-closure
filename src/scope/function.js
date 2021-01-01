const fruits = () => {
  var fruit = 'apple'
  console.log(fruit)
}

fruits()
/* console.log(fruit) */

const anotherFruit = () => {
  var x = 1
  var x = 2
  let y = 1
/*  let y = 2 */ 
  console.log(x)
  console.log(y)
}

anotherFruit()

//El scope local de una función permite acceder a las variables que estan dentro de ella. La palabra reservada var es capaz de ser sobrescrita, al contrario de la palabra reservada let que adquiere un valor inalterable, dentro de la función.