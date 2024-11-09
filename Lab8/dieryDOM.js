const elements = document.querySelectorAll('*')
elements.forEach(element => {
	element.style.margin = '0'
	element.style.padding = '0'
})
const list = document.getElementById('travelList')
list.style.height = '522px'
list.style.backgroundColor = 'aquamarine'

const forms = document.getElementById('forms')
forms.style.height = '189px'
forms.style.backgroundColor = 'burlywood'
forms.style.borderTop = 'solid'
forms.style.display = 'flex'

const selectBlock = document.createElement('div')
selectBlock.id = 'selector'
selectBlock.style.margin = '25px'
selectBlock.style.width = '33%'
forms.appendChild(selectBlock)

const BlockCountry = document.createElement('div')
BlockCountry.id = 'selectorCounry'
BlockCountry.style.display = 'flex'
selectBlock.appendChild(BlockCountry)

const countryName = document.createElement('h2')
countryName.textContent = 'Counry'
countryName.style.fontSize = '24px'
BlockCountry.appendChild(countryName)
const selectCountry = document.createElement('select')
selectCountry.id = 'country'
selectCountry.required = true
selectCountry.style.width = '50%'
selectCountry.style.height = '36px'
selectCountry.style.marginTop = '12px'
BlockCountry.appendChild(selectCountry)

const BlockDate = document.createElement('div')
BlockDate.id = 'selectorDate'
BlockDate.style.display = 'flex'
selectBlock.appendChild(BlockDate)

const dateName = document.createElement('h2')
dateName.textContent = 'Date'
dateName.style.fontSize = '24px'
BlockDate.appendChild(dateName)
const inputDate = document.createElement('input')
inputDate.id = 'date'
inputDate.type = 'date'
inputDate.required = true
inputDate.style.width = '50%'
inputDate.style.height = '36px'
inputDate.style.marginTop = '12px'
BlockDate.appendChild(inputDate)

const submitBlock = document.createElement('div')
submitBlock.id = 'submitter'
submitBlock.style.width = '67%'
submitBlock.style.display = 'flex'
forms.appendChild(submitBlock)

const textareaMessage = document.createElement('textarea')
textareaMessage.id = 'message'
textareaMessage.placeholder = 'Message'
textareaMessage.required = true
textareaMessage.style.width = '71%'
textareaMessage.style.fontSize = '16px'
textareaMessage.style.margin = '20px 0px 40px 20px'
submitBlock.appendChild(textareaMessage)

const submitButton = document.createElement('button')
submitButton.type = 'submit'
submitButton.id = 'submitBtn'
submitButton.textContent = 'Submit'
submitButton.style.height = '68%'
submitButton.style.width = '13.8%'
submitButton.style.margin = '20px 0px 40px 20px'
submitBlock.appendChild(submitButton)

const postsContainer = document.createElement('div')
postsContainer.id = 'posts'
list.appendChild(postsContainer)

let posts = JSON.parse(localStorage.getItem('posts')) || []

async function loadCountries() {
	try {
		const response = await fetch('https://restcountries.com/v3.1/all')
		const countries = await response.json()
		countries.forEach(country => {
			const option = document.createElement('option')
			option.value = country.name.common
			option.textContent = country.name.common
			selectCountry.appendChild(option)
		})
	} catch (error) {
		console.error('Error fetching countries:', error)
	}
}

function displayPost(post, postNumber) {
	const postElement = document.createElement('div')
	postElement.className = 'post'
	postElement.style.border = '1px solid'
	postElement.style.backgroundColor = 'white'
	postElement.style.width = '55%'
	postElement.style.height = '20%'
	postElement.style.paddingLeft = '2%'
	postElement.style.marginLeft = '20%'
	postElement.style.marginBottom = '1%'
	postsContainer.appendChild(postElement)

	const postHeader = document.createElement('div')
	postHeader.className = 'post-Header'
	postHeader.style.fontWeight = 'bold'
	postHeader.style.display = 'flex'
	postElement.appendChild(postHeader)
	const postInfo = document.createElement('p')
	postInfo.textContent = `Post #${postNumber} at ${post.date} being in: ${post.country}`
	postHeader.appendChild(postInfo)
	const editButton = document.createElement('button')
	editButton.textContent = 'Edit'
	editButton.style.color = 'white'
	editButton.style.backgroundColor = 'lightblue'
	editButton.style.height = '30px'
	editButton.style.borderRadius = '4px'
	editButton.style.marginLeft = '51%'
	editButton.style.cursor = 'pointer'
	editButton.onclick = () => editPost(postNumber - 1)
	postHeader.appendChild(editButton)
	const deleteButton = document.createElement('button')
	deleteButton.textContent = 'X'
	deleteButton.style.color = 'white'
	deleteButton.style.backgroundColor = 'red'
	deleteButton.style.height = '30px'
	deleteButton.style.borderRadius = '4px'
	deleteButton.style.marginLeft = '1%'
	deleteButton.style.cursor = 'pointer'
	deleteButton.onclick = () => deletePost(postNumber - 1)
	postHeader.appendChild(deleteButton)

	const postContent = document.createElement('div')
	postContent.className = 'post-Content'
	postElement.appendChild(postContent)
	const postMessage = document.createElement('p')
	postMessage.textContent = post.message
	postContent.appendChild(postMessage)
}

function displayPosts() {
	postsContainer.innerHTML = ''
	posts.forEach((post, index) => displayPost(post, index + 1))
}

function savePosts() {
	localStorage.setItem('posts', JSON.stringify(posts))
}

function addPost() {
	const country = selectCountry.value
	const date = inputDate.value
	const message = textareaMessage.value
	const post = { country, date, message }
	posts.push(post)
	displayPost(post, posts.length)
	savePosts()
	forms.reset()
}
function deletePost(index) {
	if (confirm('Are you sure,that you delete this record?') == true) {
		posts.splice(index, 1)
		displayPosts()
		savePosts()
	}
}
let editIndex = null
document.addEventListener('DOMContentLoaded', () => {
	loadCountries()
	displayPosts()
	forms.addEventListener('submit', e => {
		e.preventDefault()
		if (editIndex !== null) {
			saveEditPost()
		} else {
			addPost()
		}
	})
})

function editPost(index) {
	const post = posts[index]
	selectCountry.value = post.country
	inputDate.value = post.date
	textareaMessage.value = post.message
	submitButton.textContent = 'Save'
	editIndex = index
}

function saveEditPost() {
	const country = selectCountry.value
	const date = inputDate.value
	const message = textareaMessage.value
	posts[editIndex] = { country, date, message }
	savePosts()
	displayPosts()
	forms.reset()
	submitButton.textContent = 'Create'
	editIndex = null
}
