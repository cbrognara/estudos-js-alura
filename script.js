document.write('O número encontrado é ')
document.write(22)

alert('Janela nova')

const a = 2
const b = 6

document.write(a + b)

const a = 2
const b = '6'

document.write(a + +b)

document.write('Flávio nasceu em ' + (2016 - 39) + '<br>')

document.write('Joaquim nasceu em ' + (2016 - 20) + '<br>')

document.write('Barney nasceu em ' + (2016 - 40) + '<br>')

document.write('Minha idade é ' + '12')

document.write('Eu acertei: ' + (15 / 50) * 100 + '%')

var n = 2
document.write('O resultado da fórmula é : ' + n * (10 / 20))

document.write('<br>')
document.write('<br>')

var minhaIdade = 20
document.write('Eu nasci em ' + (2016 - minhaIdade))

var idadeLinda = 12
var idadeGuaraciara = 15
var idadePerola = 13

document.write((idadeLinda + idadeGuaraciara + idadePerola) / 3)
document.write('<br>')

var idadeLinda = 12
var idadeGuaraciara = 15
var idadePerola = 13
var somaDasIdades = idadeLinda + idadeGuaraciara + idadePerola

document.write(somaDasIdades / 3)
document.write('<br>')

var media = somaDasIdades / 3

document.write(Math.round(media))

var caminhoComGasolina = 480
var tanque = 40
var consumoDeGasolina = 480 / 40

document.write(consumoDeGasolina + ' litros / km')

document.write('<br>')

var caminhoComAlcool = 300
var consumoDeAlcool = 300 / 40

document.write(`${consumoDeAlcool} litros / km`)

var n1 = Number(prompt('Digite um número'))
var n2 = Number(prompt('Digite outro número'))
var s = n1 + n2

alert('A soma dos números é ' + s)
