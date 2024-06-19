torrar(' pão de forma','felipe')
torrar(' pão integral ', 'Janaina')

function torrar(pao,nome) {
  console.log('torrada feita com' + pao)
  console.log('ela é um pedido de ' + nome) 
}
//não posso chamar uma variável que foi
//declarada na função fora da função
//se você quiser declarar uma variável 
//pra usar onde quiser, tem que declarar 
//var pra criar uma variável global
//pode passar quantos parâmetros você quiser