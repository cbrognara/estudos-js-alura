// document.write('O número encontrado é ')
// document.write(22)

// alert('Janela nova')

// const a = 2
// const b = 6

// document.write(a + b)

// const a = 2
// const b = '6'

// document.write(a + +b)

// document.write('Flávio nasceu em ' + (2016 - 39) + '<br>')

// document.write('Joaquim nasceu em ' + (2016 - 20) + '<br>')

// document.write('Barney nasceu em ' + (2016 - 40) + '<br>')

// document.write('Minha idade é ' + '12')

// document.write('Eu acertei: ' + (15 / 50) * 100 + '%')

// var n = 2
// document.write('O resultado da fórmula é : ' + n * (10 / 20))

// document.write('<br>')
// document.write('<br>')

// var minhaIdade = 20
// document.write('Eu nasci em ' + (2016 - minhaIdade))

// var idadeLinda = 12
// var idadeGuaraciara = 15
// var idadePerola = 13

// document.write((idadeLinda + idadeGuaraciara + idadePerola) / 3)
// document.write('<br>')

// var idadeLinda = 12
// var idadeGuaraciara = 15
// var idadePerola = 13
// var somaDasIdades = idadeLinda + idadeGuaraciara + idadePerola

// document.write(somaDasIdades / 3)
// document.write('<br>')

// var media = somaDasIdades / 3

// document.write(Math.round(media))

// var caminhoComGasolina = 480
// var tanque = 40
// var consumoDeGasolina = 480 / 40

// document.write(consumoDeGasolina + ' litros / km')

// document.write('<br>')

// var caminhoComAlcool = 300
// var consumoDeAlcool = 300 / 40

// document.write(`${consumoDeAlcool} litros / km`)

// var n1 = Number(prompt('Digite um número'))
// var n2 = Number(prompt('Digite outro número'))
// var s = n1 + n2

// alert('A soma dos números é ' + s)

// const frase2 = 'blablabla'
// const frase3 = 'oioioioi'

// function pularLinha() {
//   document.write('<br>')
// }

// function mostraAFrase(parametro) {
//   document.write(parametro)
// }

// mostraAFrase(frase2)
// pularLinha()
// mostraAFrase(frase3)
// pularLinha()
// mostraAFrase('coco da lulu')

// function fazPegadinha() {
//   alert('Olá')
//   alert('amiga!')
//   alert('Tá')
//   alert('bastante')
//   alert('entediada?')
//   alert('Em ficar')
//   alert('Clicando em')
//   alert('Ok')
//   alert('né?')
// }

// fazPegadinha()

// function pulaLinha() {
//   document.write('<br><br>')
// }

// var titulo = 'Bem-vindo ao meu programa!'

// document.write('<h1>' + titulo + '</h1>')

// pulaLinha()

// document.write('Vocês não sabem o que tive que aprender para fazer isso!')

// pulaLinha()

// document.write('Contudo, assistindo os vídeos e estudando ...')

// pulaLinha()

// document.write('Eu vou mais longe!')

// pulaLinha()

// var idade1 = 26
// var idade2 = 24
// var result = 'Nossa diferença de idade é ' + (idade1 - idade2)

// function pularLinha() {
//   document.write('<br>')
// }

// function resultado(result) {
//   document.write(result)
//   pularLinha()
//   document.write(result)
// }

// resultado(result)

// mprima esse número da seguinte maneira: calcule quantos anos passaram desde 1500 e divida o resultado pela média de 28 anos.

// var geracoes = (2022 - 1500) / 28

// function result(geracoes) {
//   document.write(geracoes)
// }

// result(geracoes)

// Calculo de IMC

// var peso = 51
// var altura = 1.61

// function calculaIMC(peso, altura) {
//   var IMC = peso / (altura * altura)
//   document.write('O IMC calculado é ' + IMC)
// }

// calculaIMC(90, 1.85)

// var altura = Number(prompt('Insira a altura'))
// var peso = Number(prompt('Insira o peso'))

// function calculo(altura, peso) {
//   var imc = peso / (altura * altura)
//   alert('O IMC calculado é ' + imc)
// }

// calculo(altura, peso)

// function pulaLinha() {
//   document.write('<br>')
// }

// function mostra(frase) {
//   document.write(frase)
// }

// function calculaImc(altura, peso) {
//   return peso / (altura * altura)
// }

// mostra('O meu IMC é ' + calculaImc(1.63, 48))

// If else

// var vitorias = Number(prompt('Número de VITÓRIAS'))
// var derrotas = Number(prompt('Número de DERROTAS'))
// var pontos = vitorias - derrotas

// function situacao(pontos) {
//   if (pontos > 0) {
//     document.write('Seu time está ganhando')
//   } else if (pontos < 0) {
//     document.write('Seu time está perdendo')
//   } else if (pontos == 0) {
//     document.write('Seu time está empatado')
//   }
// }

// situacao(pontos)

// Jogo Adivinha Numero

// var numeroPensado = Math.round(Math.random() * 10)
// var chute = Number(prompt('digite seu chute!'))

// console.log(numeroPensado)

// if (chute == numeroPensado) {
//   document.write('Você acertou!')
// } else {
//   document.write('Você errou, o número pensado foi ' + numeroPensado)
// }

// // If dentro do If

// function pulaLinha() {
//   document.write("<br>");
// }

// function mostra(frase) {
//   document.write(frase);
//   pulaLinha();
// }

// var idade = parseInt(prompt("Qual é sua idade"));
// var temCarteira = prompt("Tem carteira? Responda S ou N");

// if( idade >= 18 ) {
//   if( temCarteira == "S") {
//       mostra("Pode dirigir");
//   }
// }

// if(idade < 18) {
//   mostra("Não pode dirigir");

// var anoCopa = 1930

// while (anoCopa < 2022) {
//   document.write('Teve copa em ' + '<b>' + anoCopa + '</b>')
//   anoCopa = anoCopa + 4
//   document.write('<br>')
// }

var numero = 0

while (numero <= 100) {
  document.write(numero)
  document.write('<br>')
  numero = numero + 2
}

var loginCadastrado = 'alura'
var senhaCadastrada = 'alura321'

var loginInformado = prompt('Informe seu login')
var senhaInformada = prompt('Informe sua senha')

if (loginCadastrado == loginInformado && senhaCadastrada == senhaInformada) {
  alert('Bem-vindo ao sistema ' + loginInformado)
} else {
  alert('Login inválido. Tente novamente')
}
