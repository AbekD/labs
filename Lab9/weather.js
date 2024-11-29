const API_KEY = '5732e54801e6e2b2487f05ae4cb10e74'
const weatherContainer = document.getElementById('weather-container')
const updateBtn = document.getElementById('update-btn')

async function fetchWeather(cityName) {
	try {
		const response = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
		)
		if (!response.ok) throw new Error('Error while response data')
		return await response.json()
	} catch (error) {
		console.error(error)
		return null
	}
}

async function getCities() {
	const response = await fetch('./data.json')
	return await response.json()
}
function createCard(city, data) {
	const card = document.createElement('div')
	card.classList.add('card')
	if (data) {
		card.innerHTML = `
		<h3>${city.name},${city.country}</h3>
		<p>Temperature: ${data.main.temp}C</p>
		<p>Description: ${data.weather[0].description}</p>
		<p>Humidity: ${data.main.humidity}%</p>
    `
	} else {
		card.innerHTML = `
		<h3>${city.name},${city.country}</h3>
		<p>data not available</p>
		`
	}
	return card
}
async function updateWeather() {
	weatherContainer.innerHTML = `<p>Loading...</p>`
	const cities = await getCitiesAlt()
	weatherContainer.innerHTML = ''
	for (const city of cities) {
		const data = await fetchWeather(city.name)
		const card = createCard(city, data)
		weatherContainer.appendChild(card)
		cities.sort((a, b) => a.name.localeCompare(b.name))
	}
}
updateBtn.addEventListener('click', updateWeather)
updateWeather()

function getCitiesAlt() {
	return new Promise((resolve, reject) => {
		const AJAXRequest = new XMLHttpRequest()
		AJAXRequest.open('GET', './data.json')
		AJAXRequest.onload = () => {
			if (AJAXRequest.status == 200) {
				resolve(JSON.parse(AJAXRequest.responseText))
			} else {
				reject('Error while loading data')
			}
		}
		AJAXRequest.onerror = () => reject('Network connection error')
		AJAXRequest.send()
	})
}
