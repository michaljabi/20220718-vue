/**

  UWAGA: istotne tylko w przypadku używania Options API!

	#Przykład D-05:
	Czy to oznacza, że korzystając z Vue nie mogę używać arrow functions?

	#cel:
	Zrozumienie gdzie korzystamy z arrow functions a gdzie ze standardowych funkcji, które są zależne od kontekstu wywołania.
 */


/* -- #Przykład 1 (VUE): -- */
// oczywiście, że nie - możesz używać arrow functions przykładowo jako "helper functions"

const SomeComponent = {
	data() {
		return {
			hello: '',
			capitalized: '',
		}
	},
	methods: {
		helloWorld() {
			const capitalize = (word = '') => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();

			this.capitalized = capitalize(this.hello);
		}
	}
}


/* -- #Przykład 2 (VUE): -- */
// Będą przypadki w których - nawet będzie to wręcz wskazane - żeby użyć arrow function!

const UserComponent = {
	data() {
		return {
			name: ''
		}
	},
	// Wykorzystujemy life-cycle method "mounted"
	mounted() {
		// Po 3 sekundach imię ma zmienić się na "Michał".
		setTimeout(() => {
			// UWAGA: Jeśli to nie byłaby arrow function = wtedy this nie wskazywało by na UserComponent !!!!
			// Wygodniej jest nam tutaj jako tzw. callback - użyć arrow function.
			this.name = 'Michał'
		}, 3000)
	}
}
