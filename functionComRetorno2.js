let userName = getFirstName('Nicoly-Andrade-Da-Silva', '-')
console.log('Seja bem vindo ' + userName)

userName = getFirstName('Thartra Abraceus', ' ') 
console.log('Seja bem vindo ' + userName)

function getFirstName(name, splitChar) {
  let firstName = name.split(splitChar)[0]
  return firstName
}