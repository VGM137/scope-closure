const buildCount = (i) => {
  var count = i
  const displayCount = () => {
    console.log(count++)
  }
  return displayCount
}

const myCount = buildCount(1)
myCount()


//El closure recuerda el valor que se le transmite atraves de i. Cuando myCount es igual a buildCount(1) con el valor 1 remplazando a i, y es llamada tres veces se suman