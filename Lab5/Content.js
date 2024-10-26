//task 1
const yodaSays = ['on JavaScript', 'programming ', 'I like ']
const messege = yodaSays[2] + yodaSays[1] + yodaSays[0]
document.getElementById('yodaMessege').innerHTML = messege
//task 2
const duck = {
	name: 'Donald',
	color: 'White',
	age: '1',
	favoriteFood: 'dark bread',
	heLoves: 'swimming in the park pond',
}
const duckDonald =
	'TASK 2 \n' +
	'He was ' +
	duck.color +
	' duck named' +
	duck.name +
	'.\n' +
	'He was ' +
	duck.age +
	' year old. \n' +
	'His favorite food was ' +
	duck.favoriteFood +
	'.\n' +
	'He also loved ' +
	duck.heLoves +
	'.\n' +
	'His meat was delicious.'
console.log(duckDonald)
//task 3
const login = prompt('Enter your login:')
if (login == 'admin') {
	const password = prompt('Enter your password:')
	if (password == 'BlackOverlord') {
		alert('Welcome!')
	} else if (password == '') {
		alert('Login canceled')
	} else {
		alert('Wrong Password!')
	}
} else if (login == '') {
	login == null
	if (!null) {
		alert('Always here')
	}
	alert('Login canceled')
} else {
	alert('Unknown user')
}
//task 4
const liquid = ['milk', 'beer', 'beer', 'milk', 'milk']
for (let i = 0; i < liquid.length; i++) {
	if (liquid[i] == 'milk') {
		console.log('good')
	} else if (liquid[i] == 'beer') {
		console.log('bad')
	}
}
//task 5
const symbol = prompt('Enter the symbol:')
let h = 1
let rectangle = ''
while (h < 8) {
	for (let i = 0; i < 20; i++) {
		rectangle += symbol
	}
	h++
	rectangle += '\n'
}
alert(rectangle)
//task 6
function calculateHours() {
	const seconds = document.getElementById('secondsInput').value
	document.getElementById('secondsResult').textContent =
		seconds + ' seconds left'
	const hours = Math.floor(seconds / 3600)
	let message
	if (hours > 1) {
		message = hours + ' hours left'
	} else if (hours === 1) {
		message = '1 hour left'
	} else {
		message = 'less than an hour left'
	}
	document.getElementById('hoursResult').textContent = message
}
//task 7
const num1 = Math.floor(Math.random() * 9) + 1
const num2 = Math.floor(Math.random() * 9) + 1
const userAnswer = prompt('What is ' + num1 + ' * ' + num2 + '?')
const correctAnswer = num1 * num2
if (userAnswer == '' || userAnswer != correctAnswer) {
	alert('You are wrong')
} else {
	alert('You are correct!')
}
//task 8
function convert(C) {
	return (C * 9) / 5 + 32
}
function convertCelsius() {
	const C = document.getElementById('celsiusInput').value
	const F = convert(Number(C))
	document.getElementById('result').textContent = F + ' Fahrenheits'
}
//task 9
function validateNumber() {
	const userInput = prompt('Input integer:')
	if (userInput == null) {
		return "You pressed 'Cancel'"
	}
	const number = Number(userInput)
	if (isNaN(number)) {
		return 'Your input is not integer '
	}
	if (number > 0) {
		return 'You input positive number'
	} else if (number < 0) {
		return 'You input negative number'
	} else {
		return 'You input zero'
	}
}
const result = validateNumber()
document.getElementById('validate').textContent = result
//task 10
function multiply(a, b) {
	if (a == undefined || b == undefined) {
		console.error('Two values are required')
		return
	}
	if (a == 0 || b == 0) {
		return 0
	}
	let result = 0
	const positive = Math.abs(b)
	for (let i = 0; i < positive; i++) {
		result += a
	}
	return b < 0 ? -result : result
}
console.log(multiply(2, 5))
//task 11
function power(a, b) {
	let result = 1
	if (b == undefined) {
		result = a * a
		return result
	}
	if (b == 0) {
		return 1
	}
	const power = b
	for (let i = 0; i < power; i++) {
		result *= a
	}
	return result
}
console.log(power(2))
console.log(power(2, 3))
//task 12
function countChars(char, str) {
	let count = 0
	for (let i = 0; i < str.length; i++) {
		if (str[i] == char) {
			count++
		}
	}
	return count
}
const count = countChars('b', 'BillyBob')
document.getElementById('charCount').textContent = count
//task 13
const southData = [13, 15, 19, 26, 21, 22, 23]
const westData = [15, 14, 16, 18, 17, 24, 25]
const eastData = [20, 17, 19, 15, 24, 25, 26]
const northData = [19, 18, 23, 20, 23, 19, 31]
function average(array) {
	let sum = 0
	for (let i = 0; i < array.length; i++) {
		sum += array[i]
	}
	return sum / array.length
}
const allData = [...southData, ...westData, ...eastData, ...northData]
const averageTemperature = average(allData)
document.getElementById('ariphmeticalAverage').textContent = averageTemperature
//task 14
const string1 = document.getElementById('string-3').textContent
const string2 = document.getElementById('string-5').textContent
const string3 = document.getElementById('string-2').textContent
const string4 = document.getElementById('string-6').textContent
const string5 = document.getElementById('string-4').textContent
const string6 = document.getElementById('string-1').textContent
console.log(string1)
console.log(string2)
console.log(string3)
console.log(string4)
console.log(string5)
console.log(string6)
//task 15
const elementsContainer = document.getElementsByClassName('element')
for (let i = 0; i < elementsContainer.length; i++) {
	if (i < 3) {
		elementsContainer[i].style.color = 'red'
		elementsContainer[i].style.backgroundColor = 'green'
	} else {
		elementsContainer[i].style.color = 'green'
	}
}
