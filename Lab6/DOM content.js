//task 1
const string1 = document.getElementById('string-3').textContent
const string2 = document.getElementById('string-5').textContent
const string3 = document.getElementById('string-2').textContent
const string4 = document.getElementById('string-6').textContent
const string5 = document.getElementById('string-4').textContent
const string6 = document.getElementById('string-1').textContent
const allStrings = [string1, string2, string3, string4, string5, string6]
for (let i = 0; i < allStrings.length; i++) {
	console.log(allStrings[i])
}
//task 2
const elementsContainer = document.getElementsByClassName('element')
for (let i = 0; i < elementsContainer.length; i++) {
	if (i < 3) {
		elementsContainer[i].style.color = 'red'
	} else {
		elementsContainer[i].style.color = 'green'
	}
}
//task 3
const tasks = [
	'Buy lemonade',
	'Make toasts',
	'Repair car',
	'Play games',
	'Pet a cat',
]
const todolist = document.getElementById('todo-list')
for (let i = 0; i < tasks.length; i++) {
	const list = document.createElement('li')
	list.className = 'task'
	list.textContent = tasks[i]
	todolist.appendChild(list)
}
//task 4
const paragraphs = document.querySelectorAll('article p')
for (let i = 0; i < paragraphs.length; i++) {
	const hr = document.createElement('hr')
	paragraphs[i].after(hr)
}
//task 5
const element = document.getElementById('cart-items')
element.children[1].remove()
const newElement = document.createElement('div')
newElement.className = 'item'
newElement.innerHTML = 'Canned Fish<span class="qty"> x4</span>'
element.replaceChild(newElement, element.children[3])
//task 6
function createChessBoard(size) {
	const board = document.createElement('div')
	board.style.width = `${size * 20}px`
	board.style.height = `${size * 20}px`
	board.style.display = 'grid'
	board.style.gridTemplateColumns = `repeat(${size}, 20px)`
	board.style.gridTemplateRows = `repeat(${size}, 20px)`
	for (let row = 0; row < size; row++) {
		for (let col = 0; col < size; col++) {
			const cell = document.createElement('div')
			cell.style.width = '20px'
			cell.style.height = '20px'
			cell.style.backgroundColor = (row + col) % 2 === 0 ? 'white' : 'black'
			board.appendChild(cell)
		}
	}
	return board
}
const chessBoard = createChessBoard(16)
document.body.appendChild(chessBoard)
