// 1
let hello = alert('Hello World!')

// 2
alert('Vamos realizar uma soma?!')
const sumOne = Number(prompt('Digite o primeiro número abaixo: '))
const sumTwo = Number(prompt('Digite o segundo número abaixo: '))

const sum = sumOne + sumTwo
alert(`O resultado da soma é: ${sum}`)

// 3
const fstGuess = prompt('Digite qualquer caractere abaixo:')

if (!isNaN(fstGuess)) {
  alert(`${fstGuess}, é um número.`)
} else {
  alert(`${fstGuess}, não é um número`)
}

// 4
const scdGuess = prompt('Digite qualquer outro caractere abaixo:')

if (!isNaN(scdGuess)) {
  alert(`${scdGuess}, não é uma String.`)
} else {
  alert(`${scdGuess}, é  uma String`)
}

// 5
const option = prompt(`
Você terá 03 opções, digite uma das três abaixo:
- True
- NaN
- False
`).toLowerCase()

if (option === 'true' || option === 'false') {
  alert(`${option} é um booleano`)
} else if (option === 'nan') {
  alert(`${option} não é um booleano`)
} else {
  alert(`Opção inválida`)
}

// 6
alert('Vamos realizar uma subtração?!')
const subOne = Number(prompt('Digite o primeiro número abaixo:'))
const subTwo = Number(prompt('Digite o segundo número abaixo:'))

const sub = subOne - subTwo
alert(`O resultado da subtração é: ${sub}`)

// 7
alert('Vamos realizar uma multiplicação?!')
const multiOne = Number(prompt('Digite o primeiro valor abaixo: '))
const multiTwo = Number(prompt('Digite o segundo valor abaixo: '))

const multi = multiOne * multiTwo
alert(`O resultado da multiplicação é: ${multi}`)

// 8
alert('Vamos realizar uma divisão?!')
const divOne = Number(prompt('Digite o primeiro valor abaixo: '))
const divTwo = Number(prompt('Digite o segundo valor abaixo: '))

const div = divOne / divTwo
alert(`O resultado da divisão é: ${div.toFixed(2)}`)

// 9
const even = Number(prompt('Digite um número abaixo:'))

if (even % 2 === 0) {
  alert(`${even}, é um número Par.`)
} else {
  alert(`${even}, não é um número Par.`)
}

// 10
const odd = Number(prompt('Digite mais um número abaixo: '))

if (odd % 2 !== 0) {
  alert(`${odd}, é um número Ímpar.`)
} else {
  alert(`${odd}, não é um número Ímpar.`)
}
