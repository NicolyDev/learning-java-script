torrar(' pão de forma','Felipe', 10.90)

function torrar(pao, nome = 'Cliente', valor) {
  console.log('torrada feita com' + pao)
  console.log('ela é um pedido de ' + nome)
  console.log('O valor é ' + valor)
}
//sempre deixe a variavel opcional 
//para o final
//mas caso você precise, coloque o 
//unfined no lugar do valor da variável
//exemplo: torrar(' pão de forma',
//uefined , 10.90)
