function calcularMediaDosNumeros(numero1, numero2, numero3) {
  alert ('Me diga três números e eu mostrarei a media deles')
  //numero1 = parseInt(prompt('Primeiro número 1'))
  //numero2 = parseInt(prompt('Primeiro número 2'))
  //numero3 = parseInt(prompt('Primeiro número 3'))
  mediaDosNumeros = parseInt(parseInt(numero1 + numero2 + numero3)/3)
  return alert(`A média entre eles é ${mediaDosNumeros}.`)
}

calcularMediaDosNumeros(3,4,5)