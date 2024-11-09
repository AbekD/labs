//Part 1
const Griffin = {
	hp: 2000,
	defense: 120,
	str: 250,
	weapon: 0,
}
const Witcher = {
	hp: 1000,
	defense: 100,
	str: 120,
	weapon: 250,
	swallowRounds: 0,
	activeStatus: false,
}
function getRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min)) + min
}
function griffinGetStatus() {
	return `Griffin : [${Griffin.hp}] HP`
}
function witcherGetStatus() {
	return `Witcher : [${Witcher.hp}] HP`
}
function griffinChangeHP(damage) {
	if (Griffin.hp > 0) {
		Griffin.hp = Math.max(Griffin.hp + damage, 0)
	}
}
function witcherChangeHP(damage) {
	if (Witcher.hp > 0) {
		Witcher.hp = Math.max(Witcher.hp + damage, 0)
	}
}
function witcherAttack() {
	let a = Math.random()
	if (a < 0.75) {
		const witcherDamage = Witcher.str + Witcher.weapon - Griffin.defense
		griffinChangeHP(-witcherDamage)
		console.log(`Witcher attack Griffin for [${witcherDamage}] damage.`)
		console.log(griffinGetStatus())
	} else {
		console.log('The Witcher missed the Griffin')
	}
}
function getIgniDamage() {
	let igniDamage = getRandomNumber(150, 200)
	griffinChangeHP(-igniDamage)
	console.log(`Witcher attack Griffin for [${igniDamage}] damage.`)
	console.log(griffinGetStatus())
}
function listenJaskier() {
	const phrases = [
		'Хватит валять дурака, пора уже тушить пожар в этой программе.',
		'Говорят, грифон никогда не наступит на лежащего ведьмака.',
		'Когда скромняга бард, отдыхал от дел, с Геральтом из Ривии, он песню эту пел...',
		'Трус умирает сто раз. Мужественный человек – лишь однажды.',
		'Людям для жизни необходимы три вещи: еда, питье и сплетни.',
	]
	const randomPhrase = phrases[getRandomNumber(0, phrases.length)]
	console.log(randomPhrase)
}
function runAway() {
	console.log('Witcher ran away from the Griffin. \n Battle ended.')
	console.log(witcherGetStatus())
	console.log(griffinGetStatus())
}
function drinkSwallow() {
	Witcher.activeStatus = true
	Witcher.swallowRounds = 2
}
function witcherTurn() {
	let choice = prompt('Choose Witcher action:', '1')
	switch (choice) {
		case '1':
			witcherAttack()
			break
		case '2':
			getIgniDamage()
			break
		case '3':
			listenJaskier()
			break
		case '4':
			runAway()
			return false
		case '5':
			if (Witcher.activeStatus == false) {
				drinkSwallow()
			} else {
				console.log(
					'Swallow potion is still active.Witcher can not drink it again right now.'
				)
			}
			break
		default:
			choice = prompt('Choose Witcher action:')
	}
	if (Witcher.activeStatus == true) {
		Witcher.swallowRounds--
		let heal = getRandomNumber(50, 100)
		witcherChangeHP(heal)
		console.log(`Witcher restored [${heal}] HP from potion "Swallow"`)
		console.log(witcherGetStatus())
		console.log(Witcher.swallowRounds + 'round left')
		if (Witcher.swallowRounds <= 0) {
			Witcher.activeStatus = false
			console.log('The effect of Swallow has worn off.')
		}
	}
}
function griffinTurn() {
	if (Math.random() < 0.5) {
		const griffinDamage = Griffin.str + Griffin.weapon - Witcher.defense
		witcherChangeHP(-griffinDamage)
		console.log(`Griffin attack Witcher for [${griffinDamage}] damage.`)
		console.log(witcherGetStatus())
		if (Witcher.activeStatus == true) {
			Witcher.activeStatus = false
			Witcher.swallowRounds = 0
			console.log(
				"The effect of Swallow has been interrupted by the Griffin's attack."
			)
		}
	} else {
		console.log('The Griffin did not attack the Witcher and fly')
	}
}
function gameCicle() {
	while (Witcher.hp > 0 || Griffin.hp > 0) {
		const continueGame = witcherTurn()
		console.log('============')
		if (continueGame == false) {
			break
		}
		if (Griffin.hp == 0) {
			console.log('Griffin was defeated!!!Witcher win the battle.')
			console.log('============')
			break
		}
		griffinTurn()
		console.log('============')
		if (Witcher.hp == 0) {
			console.log('Witcher lose the battle.')
			console.log('============')
			break
		}
	}
}
gameCicle()
