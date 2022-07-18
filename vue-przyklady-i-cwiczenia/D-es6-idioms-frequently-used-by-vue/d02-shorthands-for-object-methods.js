/**
	#Przykład D-02:
	Korzystanie z nowości wprowadzonej po 2015r. (ES6):
	tzw. Method Properties

  @see: http://es6-features.org/#MethodProperties

	#cel:
  Zrozumienie gdzie Vue korzysta z dobroci nowego lukru składniowego ES6 - skróconego zapisu metody w obiekcie.
 */

/* -- #Przykład 1: -- */
// Klasyczny zapis metody w obiekcie JS:
const superUser = {
	name: 'Mike',
	sayMyName: function() {
		return 'My name is ' + this.name
	}
}
console.log(superUser.sayMyName())

// Nowości ES6:
// Method Properties:
const shortenUser = {
	name: 'Shorty',
	sayMyName() {
		return 'My name is ' + this.name
	}
}
console.log(shortenUser.sayMyName())


/* -- #Przykład 2 (VUE): -- */
// W tym układzie odnosząc to bezpośrednio do Vue,
// zapis ten znajdziesz np. w "methods" lub w "setup" dla komponentów:

const MyComponent = {
	setup() {
		const greetings = ref('');
		// Zwróć uwagę na obiekt zwracany przez "setup"
		return {
			greetings,
			// zamiast:
			// greetings: greetings,
			// Zwróć uwagę na zapis "sayMyName":
			sayMyName() {
				greetings.value = 'Good Morning !'
			}
		}
	}
}
