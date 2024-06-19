let personagens = [['THARTRA ABRACEUS', 'BELAKOR LEVIATÃ'],
                   ['XAMÃ','GUERREIRO'],
                   [220, 350]
                   ]
let classe
let Qi
//definir todas as cards por nome, dano, aumento de resistência e turnos
let cardsXama = [['KOHAKU','KHALIFA'],
                [20,0],
                [0,30]
               ]
let cardsGuerreiro = [['SOCO','CORTE'],
                      [20,15],
                      [0,0]
]  
     

let escolhaDoJogador = prompt('Qual é seu personagem?' + personagens [0])



if(escolhaDoJogador===personagens[0][0]){
  if(personagens[2][0]>220){
      let escolhaDeCarta = prompt('Suas opções de carta é ', cardsXama[0] , '. Escolha uma!')
    }else{
      alert('Você não tem opções disponíveis ')
    }
}else{
    if(personagens[2][1]>220){
      let escolhaDeCarta = prompt('Suas opções de carta é', cardsGuerreiro[0], '. Escolha uma!')
    }else{
      alert('Você não tem opções disponíveis ')
  }
}
//criar loop com as escolhas de cartas que vai continuar até a resistência de alguém zerar
if(escolhaDeCarta = )