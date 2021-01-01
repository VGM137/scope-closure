const   helloWorld = () => {
  const hello = 'Hello World'
  console.log(hello)
}

helloWorld()
console.log(hello)

//Ambito lexico es:
// las funciones que se ejecutan utilizando la cadena del alncance donde estaba vijente en su momento.
var scope = 'I am global'

const  functionScope = () => {
  var scope = 'I am only local'
  const func = () => {
    return scope
  }
  console.log(func())
}

functionScope()
console.log(scope)