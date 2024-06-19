//JSON - JavaScrpit Object Notário
//chave e valor com o objetivo de transferir dados

let name = 'Felipe'
let age = 28
let products = ['mouse 2xwm', 'Teclado mecânico', 'Monitor']
let productsValues = [29.90,129.99,899.99]

generateInvoice(name, products, age, productsValues)

function generateInvoice(name, products, age, productsValues) {
  console.log('O comprador é ' + name)
  console.log('A idade é ' + age)
  console.log('--------------')
  console.log('o produto é ' + products[0])
  console.log('O valor é ' + productsValues[0])
}