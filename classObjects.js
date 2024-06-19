class formaDeBolo{
  constructor(saborDaMassa,saborDoRecheio){
    this.saborDaMassa = saborDaMassa
    this.saborDoRecheio = saborDoRecheio
  }

  escrever() {
    console.log(`Um delicioso bolo de ${this.saborDaMassa} com recheio de ${this.saborDoRecheio}`)
  }

  assar(){
    console.log(`Bolo assando de ${this.saborDaMassa}`)
  }
}

let boloFesta = new formaDeBolo('massa de chocolate','de nutella')
let boloPremium = new formaDeBolo('baunilha', 'coco')

boloFesta.saborDaMassa = 'morango'

boloFesta.assar()
boloFesta.escrever()
boloPremium.assar()
boloPremium.escrever()
