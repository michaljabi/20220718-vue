/**

  UWAGA: istotne tylko w przypadku używania Options API!

	#Przykład D-04:
	Dlaczego słowo kluczowe "this" jest tak ważne w przypadku używania komponentów Vue?

	#cel:
	Zrozumienie "kontekstu wywołania" w JavaScript jest kluczem do tego aby poprawnie pisać metody
	w środku definicji komponentu Vue.
 */

/* -- #Przykład 1: -- */
// Zauważ iż taki zapis funkcji poza obiektem — nie ma sensu.
// this — będzie wskazywało na "obiekt globalny"
// Jednak funkcja ta jest przygotowana specjalnie, aby pokazać Ci jej zależność od kontekstu.
function greetings() {
	return 'Hello my name is ' + this.name;
}

const user = {
	name: 'Michał',
	// komponujemy wcześniej przygotowaną funkcję do obiektu:
	greetings: greetings,
	// Oto dlaczego nie możesz użyć w środku obiektu — arrow function.
	// Vue będzie polegało na "this" - i musi ono zależeć od Kontekstu wywołania, a nie od momentu deklaracji
	arrowGreetings: () => {
		return 'Hello my name is ' + this.name
	}
}

const otherUser = {
	name: 'Kasia',
	// komponujemy wcześniej przygotowaną funkcję do obiektu (korzystając z property shorthand 😎):
	greetings
}

user.greetings() //?
otherUser.greetings() //?

// teraz zobacz co stanie się w przypadku użycia zdefiniowanego pola w arrow function:
user.arrowGreetings() //?

/* -- #Przykład 2 (VUE): -- */
// W tym układzie odnosząc to bezpośrednio do Vue,
// łącząc wiedzę z przykładów d01 oraz d02
// będziemy z tego korzystać następująco:

const SampleVueComponent = {
	data() {
		return {
			name: 'Example',
			greetings
		}
	}
}
