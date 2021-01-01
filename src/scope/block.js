const fruits = () => {
  if(true){
    var fruits1 = 'apple'
    let fruits2 = 'banana'
    const fruits3 = 'kiwi'
    console.log(fruits1)
    console.log(fruits2)
    console.log(fruits3)
  }
}
fruits()
//var es una asignación del scope local dentro de una función
//let y const se establecen dentro del bloque

//Ejemplo1
let x = 1
{
  let x= 2
  console.log(x)
}
console.log(x)
//>2
//>1

const anotherFunction = () => {
  for (let i = 0; i < 10; i++){
    setTimeout(() => {
      console.log(i)
    }, 1000);
  }
}
anotherFunction()
//Si a i la declaramos como una variable var, esta función nos muestra en consola 10 veces el numero 10 porque accede al ultimo valor que recorre nuestro for.
//Pero si la declaramos con una variable let nos mostrará los número del 0 al 9
