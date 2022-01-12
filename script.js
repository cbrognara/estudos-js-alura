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

// Tema: WHILE XXXXXXXXXXXXX

// var anoCopa = 1930

// while (anoCopa < 2022) {
//   document.write('Teve copa em ' + '<b>' + anoCopa + '</b>')
//   anoCopa = anoCopa + 4
//   document.write('<br>')
// }

// var numero = 0

// while (numero <= 100) {
//   document.write(numero)
//   document.write('<br>')
//   numero = numero + 2
// }

// var loginCadastrado = 'alura'
// var senhaCadastrada = 'alura321'

// var loginInformado = prompt('Informe seu login')
// var senhaInformada = prompt('Informe sua senha')

// if (loginCadastrado == loginInformado && senhaCadastrada == senhaInformada) {
//   alert('Bem-vindo ao sistema ' + loginInformado)
// } else {
//   alert('Login inválido. Tente novamente')
// }

// var segredo = Math.round(Math.random() * 10)

// var input = document.querySelector('input')

// function verifica() {
//   if (input.value == segredo) {
//     alert('Você ACERTOU!')
//   } else {
//     alert('Você ERROU!!!!!!!!')
//   }
//   input.value = ''
//   input.focus()
// }

// var button = document.querySelector('button')

// button.onclick = verifica

// var segredos = [2, 4, 5, 7]
// var input = document.querySelector('input')

// function verificar() {
//   for (var posicao = 0; posicao < 4; posicao++) {
//     if (input.value == segredo) {
//       alert('Você ACERTOU!')
//     } else {
//       alert('Você ERROU!!!!!!!!')
//     }
//     input.value = ''
//     input.focus()
//   }
// }

// for (let index = 0; index < array.length; index++) {
//   const element = array[index];

// }

// let nota1 = 10
// let nota2 = 6.5
// let nota3 = 8
// let nota4 = 7.5

// let media = (10 + 6.5 + 8 + 7.5) / 4

// const media1 = {
//   nota1: 10,
//   nota2: 6.5,
//   nota3: 8,
//   nota4: 7.5
// }

// Tema: Arrays XXXXXXXXXXX

// const notas = [10, 6.5, 8, 7.5]
// const media = (notas[0] + notas[1] + notas[8] + [7.5]) / 4

// console.log(notas.length)

// const notasAluno1 = [10, 6, 8]
// notasAluno1.push(7)

// const arrayVazia = []

// console.log(arrayVazia)
// console.log(arrayVazia.length)

// Tema: lista com 2 dimensoes, inseption arrays XXXXXXXXXX

// const letras = ['a', 'b', 'c', 'd', 'e']
// const letras2 = letras
// const numeros = [7, 8, 9, 10]

// let mistura = [letras, numeros]

// console.log(`Mostra que ${mistura[0][1]} junta com ${mistura[1][3]}`)

// TEMA: LOOP - EXERCICIO ALURA

// Criar função que recebe como argumento o nome de um aluno;
// Verifique se o aluno está presente na lista e retorne a media final que se encontra no mesmo índice.
// Caso o nome do aluno não esteja na lista, retorne uma mensagem indicando que o aluno não foi encontrado.

const listaDeAlunos = ['Alexandre', 'Camila', 'Lulu']
const listaDeMedias = [6.5, 7, 8.5]

// function aluno(nome) {
//   if (listaDeAlunos.includes(nome)) {
//     console.log(listaDeMedias[listaDeAlunos.indexOf(nome)])
//   } else {
//     return 'Aluno não encontrado'
//   }
// }

// aluno('Camila')

const notaCamila = () => {
  let nome = 'Camila'
  if (listaDeAlunos.includes(nome)) {
    return listaDeMedias[listaDeAlunos.indexOf(nome)]
  } else {
    return 'Aluno não encontrado'
  }
}
