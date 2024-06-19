function definirMaiorNumero(numero1, numero2){
  if(numero1>numero2){
   return console.log(`O primeiro numero, ${numero1}, é maior do que o segundo, ${numero2}`)
  }else if(numero2>numero1){
   return console.log(`O segundo numero, ${numero2}, é maior que o primeiro número, ${numero1}.`)
  }else{
    return console.log('Os números são iguais')
  }
}

definirMaiorNumero(4,5)