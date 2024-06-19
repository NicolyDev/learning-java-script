let vitoria = prompt ('quantas vitorias você teve?')
let derrota = prompt ('quantas derrotas você teve?')
let rankeadas = calculoDeRankeadas (vitoria,derrota)
const mensagem = 'O Herói tem saldo de ' + vitoria + ' e está no nível de '


if(rankeadas>0){
   if(rankeadas<10){
     console.log(mensagem + 'ferro')
   }else if(rankeadas<=20){
      console.log (mensagem + 'bronze')
   }else if(rankeadas<=50){
     console.log (mensagem + 'prata')
   }else if(rankeadas<=80){
     console.log(mensagem + 'ouro')
   }else if(rankeadas<=90){
     console.log(mensagem + 'diamante')
   }else if(rankeadas<=100){
     console.log(mensagem + 'lendário')
   }else{
     console.log(mensagwm +'imortal')
   }
}else{
  console.log('mona se esforça mais aí vai')
}


function calculoDeRankeadas(vitorias,derrotas) {
  let resultado = vitorias - derrotas
  return resultado
}