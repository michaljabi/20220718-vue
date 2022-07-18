/**
	#Przykład D-01:
	Korzystanie z nowości wprowadzonej po 2015r. (ES6):
	tzw. Property Shorthand

	@see: http://es6-features.org/#PropertyShorthand

	#cel:
	Zrozumienie gdzie Vue korzysta z dobroci nowego lukru składniowego ES6 do skróconego zapisu pola obiektu,
	jeśli nazwa pola i nazwa zmiennej/stałej — są takie same.
 */

/* -- #Przykład 1: -- */
// Klasyczny zapis obiektu w JS:
const superUser = {
	name: 'Michał'
}
console.log(superUser)

// Zapis gdzie mamy dynamiczną wartość na zewnątrz:
// Możemy również zapisać coś takiego:
const name = 'Katarzyna'
const otherUser = {
	name: name
}
console.log(otherUser)

// Nowości ES6:
// Object Property Shorthand:
const shortenUser = {
	name
}
console.log(shortenUser)


/* -- #Przykład 2 (VUE): -- */
// W tym układzie odnosząc to bezpośrednio do Vue,
// zapis ten znajdziesz np. tam, gdzie będziesz definiował, z jakich innych komponentów będzie korzystał jeden z komponentów (ComponentWrapper)

const FirstComponent = {};
const SecondComponent = {};

const ComponentWrapper = {
	// definiujemy obiekt components, aby pokazać, z jakich komponentów będziemy korzystać na template
	components: {
		// Zwróć uwagę na te zapisy. To dokładnie skorzystanie z zależności opisanej w przykładzie #1
		FirstComponent,
		SecondComponent
	},
	template: `
		<div>
			<FirstComponent/>
			<SecondComponent/>
		</div>
	`
}
