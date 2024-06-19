class personagens{
  constructor(nome, classe, resistencia, forca, poder, defesa, velocidade, capacidade, qi){
    this.nome = nome
    this.classe = classe
    this.forca = forca
    this.velocidade = velocidade
    this.capacidade = capacidade
    this.resistencia = resistencia
    this.poder = poder
    this.defesa = defesa
    this.qi = this.calcularQi()

  }
  calcularQi(){
    return (this.forca + this.velocidade + this.capacidade + this.resistencia + this.poder + this.defesa)  
  }
  
  get qi(){
    return this._qi
  }
  
  criarPersonagem(){
    console.log(`O personagem de nome ${this.nome} e de classe ${this.classe}, possui QI de ${this.qi}.`)
  }
 
}

class cards{
  constructor(nomeacao, acao, valor, uso, requisito, acesso){
    this.nomeacao = nomeacao
    this.acao = this.definirAcao()
    this.valor = valor
    this.uso = uso
    this.requisito = requisito
    this.acesso = this.liberarAcesso()
  }
  
  liberarAcesso(){
    if(this.requisito > this.qi){
      return 'acesso liberado'
    }else{
      return 'carta bloquada'
    }
  }
  
  definirAcao(){
    if(this.acao === 'cura'){
      return 'cura';
    }else{
     return 'dano';
    }
  }
  
  criarCard(){
    console.log(`A carta de nome ${this.nomeacao} possui ${this.acao} de ${this.valor}`)
  }
}

class duelo{
 constructor(){
 }
}

//definir todas as cards por nome, dano, aumento de resistência e turnos

let cardXama1 = new cards('kohaku', 'ataque', 20, 1, 'força', 30)
let cardXama2 = new cards('KHALIFA', 'cura', 30, 1, 'qi', 200)

let cardGuerreiro1 = new cards('SOCO','ataque', 20, 1, 'qi', 150)
let cardGuerreiro2 = new cards('CORTE', 'ataque', 15, 2, 'força', 30)

//let nome = prompt('Qual o nome do seu personagem?')
//let classe = prompt('Qual a classe dele?')
//let resistencia = prompt('Qual a resistencia dele(a)?')
//let forca = prompt('Qual a força dele(a)?')
//let poder = prompt('Qual o poder dele(a)?')
//let defesa = prompt('Qual a defesa dele(a)?')
//let velocidade = prompt('Qual a velocidade dele(a)?')
//let capacidade = prompt('Qual a capacidade dele (a)?')

let personagem1 = new personagens('Thartra', 'xamã', 70, 40, 85, 20, 10, 20)
personagem1.criarPersonagem()
cardXama1.criarCard()

console.log ('Escolha sua carta entre essas.')

if (personagem1.classe ==='xamã'){
  console.log (cardXama1.nomeacao, cardXama2.nomeacao)
}else{
  console.log ('Qual sua classe?')
}

console.log(cardXama1.acesso)

//while(personagem1.resistencia>0||personagem2.resistencia>0){
//}



//proximas atualizções:
//colocar filtração de cards de acordo com o qi
//definir as funções de ataque das cards
//definir os processos de duelo do jogo
//exemplos: escolher card, tomou dano, morreu
//fazer if? pra personagem morrer quando resistencia acabar
//PROX colocar filtração para separar cards de dano das de aumento de resistencia OK
//fazer buff e de debuff
//atualizar valores das cards e personagens
//fazer mecanica pra usuario colocar as informações do personagem ele mesmo
//colocar monstros e outros
//fazer função pra aumento do qi conforme os exps dos personagens vão aumentando
//PROX fazer distriubução de qi de acordo com os atributos OK
//fazer mecanica pra atributos do personagem diminuir conforme o uso das cards
//fazer classe pra itens e armas 
//primeiro fazer uma mecanica simples dos jogadores duelarem e morrerem, sem buff e debuff, itens e tals, algo bem simples


//if(escolhaDoJogador===personagens[0][0]){
  //if(personagens[2][0]>220){
      //let escolhaDeCarta = prompt('Suas opções de carta é ', cardsXama[0] , '. Escolha uma!')
    //}else{
      //alert('Você não tem opções disponíveis ')
    //}
//}else{
    //if(personagens[2][1]>220){
      //let escolhaDeCarta = prompt('Suas opções de carta é', cardsGuerreiro[0], '. Escolha uma!')
    //}else{
      //alert('Você não tem opções disponíveis ')
  //}
//}
//criar loop com as escolhas de cartas que vai continuar até a resistência de alguém zerar
//i