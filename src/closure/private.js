const person = () => {
  var saveName = 'Name'
  return {
    getName: () => {
      return saveName;
    },
    setName: (name) => {
      saveName = name
    }
  }
}
let newPerson = person()
console.log(newPerson.getName())
newPerson.setName('Oscar')
newPerson.setName('Victor')
console.log(newPerson.getName())

let personas = [newPerson.getName()]
console.log(personas)
