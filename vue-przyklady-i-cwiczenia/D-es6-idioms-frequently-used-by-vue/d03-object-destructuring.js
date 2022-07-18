/**
	#Przykład D-03:
	Korzystanie z nowości wprowadzonej po 2015r. (ES6):
	tzw. Destructuring assignment

  @see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

	#cel:
  Zrozumienie gdzie Vue korzysta destrukturyzacji.
 */

/* -- #Przykład 1: -- */
const superUser = {
	firstName: 'Mike',
	lastName: 'Kowalsky',
	job: 'programmer',
	isAdmin: true,
	returnSomething() {
		return 'something';
	}
}


// Destrukturyzacja:
const { firstName, lastName, returnSomething } = superUser;

console.log(firstName);
console.log(lastName);
console.log(returnSomething());

// Dzięki temu unikamy żmudnego zapisu:
/*
  const firstName = superUser.firstName;
  const lastName = superUser.lastName;
  const returnSomething = superUser.returnSomething;
*/


/* -- #Przykład 2 (VUE): -- */
// W tym układzie odnosząc to bezpośrednio do Vue,
const { createApp, ref } = Vue;

// Z obiektu Vue, wyciągamy metodę, createApp() oraz ref()

// TO prawda, że ten zapis z Vue, nie będzie potrzebny w przypadku zastosowania aplikacji Node z plikami .vue,
// bo tam nie będzie obiektu globalnego Vue.
// Jednak będą zdarzały się inne okazje do zastosowania tego podejścia.
// Np. przy wykorzystaniu bardziej zaawansowanych
// "composable" w aplikacji.
