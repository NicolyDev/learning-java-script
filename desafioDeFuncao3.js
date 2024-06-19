function dobrarNumero(numero) {
  numero = parseInt(prompt('Me diga um numero e eu mostrarei o dobro dele.'))
  dobroDoNumero = parseInt(numero * 2)
  return alert(`O dobro de ${numero} é ${dobroDoNumero}.`)
}

dobrarNumero()