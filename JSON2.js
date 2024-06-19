//JSON - JavaScrpit Object Notário
//chave e valor com o objetivo de transferir dados
let invoice = {
  name: 'Felipe', 
  age: 28,
  products:{
    0: ['mouse 2xwm', 29.90],
    1: ['Teclado mecânico', 129.99],
    2: ['Monitor', 899.99],
    3: ['TV 100 polegadas', 10000.90]
  }
}

//console.log(invoice.products)


generateInvoice(invoice)

function generateInvoice(invoice) {
  console.log(`O comprador é ${invoice.name}`)
  console.log(`A idade é ${invoice.age}`)
  console.log('--------------')

  for(let index in invoice.products){
    let [productName, productPrice] = invoice.products[index]
    console.log(` - ${productName}: R$ ${productPrice}`)
  }
}
