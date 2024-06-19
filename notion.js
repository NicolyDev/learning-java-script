//saida
console.log("Digite o nome do seu jogador")

//declara uma variável
let nickname = "Thartra a que exterminou os monstros "

//concatenando uma mensagem fixa + uma variável
console.log("Bem vinda " + nickname)
console.log(nickname + "entrou no servidor")

let noti = "Pokemon Go diz:"

//saida
console.log(noti+": tem um novo pokemon na região")
console.log(noti+": você foi derrotado por um líder")

noti = ("Digimon GO")
console.log("agora o nome do jogo é " + noti)

console.log(noti+": tem um novo pokemon na região")
console.log(noti+": você foi derrotado por um líder")

let poteCafe = 'café pilão'
let poteAcucar = 'açúcar cristal'
let poteBiscoito = 'biscoito maizena'
const messagemDaVovo = 'Na cozinha hoje tem: '

console.log(messagemDaVovo +
poteCafe + ", " +
poteAcucar + " e " +
poteBiscoito
)

poteCafe = 'café 3 corações'

console.log(messagemDaVovo +
poteCafe + ", " +
poteAcucar + " e " +
poteBiscoito
)

et pokemon = ['pikachu', 'charmander', 'azul']
let tipos = [
['thartra', 'divino,', '200'],
['lufy','divino','260'],
['gabriel', 'monarca','200']
]
console.log (tipos[1][1])

let idade = 30
console.log('o valor da minha variável ' + idade)

idade = 30 + 6
console.log('operação de adição '+idade)

let primeiroNumero = 1022
let segundoNumero = 22
idade = 30 - 6
console.log('operação de subtração '+idade)
console.log(primeiroNumero-segundoNumero)

let precoProduto = 100.99
let taxa = precoProduto * 2
console.log (taxa)

let multiplicador = 4
let multiplicando = 12
let produto = multiplicador * multiplicando
console.log ('o resultado da multipilicação é ' + produto)

multiplicador=8
produto = multiplicador * multiplicando
console.log('o resultado da multipilicação é '+ produto )

let notaD

let notaDoMercado =50
let pessoas=2
console.log('operação de divisão '+notaDoMercado/pessoas)
let caclculo = 10%3
console.log('o resto da divisão é ou operação de módulo '+caclculo)

let contador = 4
//incremento
console.log(contador)
contador ++
contador ++
console.log(contador)
//decremento
contador--
contador--
contador--
console.log(contador)

let contador = 4
//incremento
console.log(contador)
contador ++
contador ++
console.log(contador)
//decremento
contador--
contador--
contador--
console.log(contador)

let contador = 4
//incremento
console.log(contador)
contador ++
contador ++
console.log(contador)
//decremento
contador--
contador--
contador--
console.log(contador)

//modo de calcular
let preco = 10
preco += 5 //preco + 5 = preco
preco -= 5 //preco - 5 = preco
console.log(preco)
//primeiro ele opera a variável e depois atribue o valor a ela
// você pode fazer isso com qualquer variável

let resultado = 2 *((5 + 5) - 10)
console.log(resultado)

let numero = '1'
console.log(numero === 1)
//= é atribuição
//== é para comparar o valor
//=== é para comaprar o valor e p formato do conteúdo
// !== é diferente?
//guardar o valor numa variável de resultado
let marca='Apple'
let resultado = marca !== 'Samsung'
console.log(resultado)

let cpfBlocked = 912321032
let cpfInserido = 8124821394
let situacaoCPF = cpfInserido === cpfBlocked
console.log ('o seu cpf está bloquado no sistema? ' + situacaoCPF )
let cpfPermitido = 8124821394
let cpfInserido2 = 8124821397
let statusCPF = cpfInserido2 !== cpfPermitido
console.log('é um usuário inválido ? '+statusCPF)

let idadeMinima = 18
let idadeUsuario = 18
let idadePermitida = idadeUsuario>=idadeMinima
console.log(idadePermitida)
let idadeCorte = 50
let idadeUsuario2 = 55
let idadeTerceiraIdade = idadeCorte <idadeUsuario2
console.log(idadeTerceiraIdade)

//operador AND
let idade = 18
let vistoVerificado = false
let resultado = ( (idade>=18) && (vistoVerificado===true))
console.log( resultado)

// AND - 100 moedas coletadas E 1 item estrela
let moedasColetadas = 99
let item = 'estrela'
let resultado = ((moedasColetadas >= 100) && (item==='estrela'))
console.log(resultado)

//operador OR || nosso boneco pode sair se tiver sem chuva ou com guarda-chuva
let chovendo = true
let item = 'pá'
let permissaoParaSair = ((chovendo===false)||(item==='guarda chuva'))
console.log('nosso personagem pode sair? '+permissaoParaSair)

//operador NOT
let tempo = 'chuva'
let horario = 8
let resultado = !((tempo !== 'chuva') && (horario>6))
console.log(resultado)

let nomesPokemon = ['pikachu', 'charmander', 'bulbasaur']
let timePokemon = [
['pikachu', 'm', 'level 1'],
['charmander', 'f', 'level 4'],
]
console.log('o pokemon ' + timePokemon[1][0] + ' é do sexo ' + timePokemon[1][1] + ' e está no ' + timePokemon[1][2])