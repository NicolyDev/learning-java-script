class calculo{
  constructor(numero1, numero2){
    this.numero1 = this.inserirNumero1()
    this.numero2 = this.inserirNumero2()
    this.operacao = this.inserirOperacao()
    this.resultado = this.escolherOperacao()
    this.continuar = this.perguntarContinuar()
  }

  inserirNumero1(){ 
  let numero1 = parseInt(prompt('Digite o primeiro número: '))
  return numero1
  }

  inserirNumero2(){
  let numero2 = parseInt(prompt('Digite o segundo número: '))
  return numero2
  }

  
  
  inserirOperacao(){
  let operacao = prompt('Qual operação você quer executar? MULTIPLICAÇÃO, ADIÇÃO, DIVISÃO, SUBTRAÇÃO? ')
  return operacao
  }
  
  escolherOperacao(){
    if (this.operacao === 'ADIÇÃO'){
      let resultado = this.numero1 + this.numero2
      alert(`O resultado é ${resultado}`)
    }else if(this.operacao === 'MULTIPLICAÇÃO'){
      let resultado = this.numero1 * this.numero2;
      alert(`O resultado é ${resultado}`)
    }else if(this.operacao === 'SUBTRAÇÃO'){
      let resultado = this.numero1 - this.numero2
      alert(`O resultado é ${resultado}`)
    }else{
        let resultado = this.numero1 / this.numero2
      alert(`O resultado é ${resultado}`)
    }
  }

  perguntarContinuar(){
   prompt('Deseja continuar?')
  }

  continuar(){
    if(this.continuar === 'SIM'){
      let calculo2 = new calculo()
   }else{
      alert('Espero ter ajudado!')
   }
  }
  
}


let calculo1 = new calculo()
