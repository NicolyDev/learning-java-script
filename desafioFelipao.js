let nome = 'Thartra Abraceus'
const mensagem ='O Herói de nome '+ nome + ' está no nível de '
let xpAtual = 1.000
for (let contador = 1.001;contador <=5800;contador++){
  xpAtual +=1.000
}
if(xpAtual<=1000){
 console.log('')
}else if(xpAtual<=2000){
  console.log(mensagem+'Bronze.')
}else if(xpAtual<6000){
  console.log(mensagem+'Prata.')
}else if(xpAtual<=7000){
  console.log(mensagem+'Ouro.')
}else if(xpAtual<=8000){
  console.log(mensagem+'Platina.')
}else if(xpAtual<=9000){
  console.log(mensagem+'Ascendente.')
}else if(xpAtual<=10000){
  console.log(mensagem+'Imortal.')
}else {
  console.log(mensagem+'Radiante.')
}
