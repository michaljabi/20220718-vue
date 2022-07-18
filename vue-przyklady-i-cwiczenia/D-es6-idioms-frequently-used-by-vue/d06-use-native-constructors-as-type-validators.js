/**
	#Przykład D-06:
  Konstruktory w JavaScript a ich rola w Vue.js

  @see: https://vuejs.org/guide/components/props.html#runtime-type-checks
  @see: https://vuejs.org/guide/components/props.html#prop-validation

	#cel:
	Zrozumienie zastosowania natywnych konstruktorów dla oceny poprawności przekazywanych danych do komponentu poprzez props.
 */

/* -- #Przykład 1: -- */
// Najpierw musisz przypomnieć sobie lub zrozumieć poprawność następującego zapisu:
console.log(String)
console.log(Boolean)
console.log(Number)
console.log(Date)
console.log(Array)
console.log(Function)
console.log(Promise)
console.log(Object)

// Jest to nic innego jak odwołanie się do natywnych konstruktorów w JavaScript.

// Przykładowo, robiąc coś takiego...
// Nowa instancja obiektu Date:
const dataObject = new Date('2020-03-01');
// ...mogę sprawdzić czy wprowadzona instancja jest odpowiedniego typu:
console.log(dataObject.constructor === Date);

// Podobnie można zrobić z typem prostym:
console.log(String('Hello World').constructor === String)
console.log('Hello World'.constructor === String)

// Co więcej, można tak zrobić z własnym typem
// Słowo kluczowe "class" wchodzi do użytku wraz z ES6:
class SuperCar {}
const lexus = new SuperCar();
console.log(lexus.constructor === SuperCar);

/* -- #Przykład 2 (VUE): -- */
// Vue korzysta z tej zależności w momencie, w którym ustalamy "props" dla komponentu.
// W tym układzie możemy określić jakiego typu będą nasze props:

const MySuperHero = {
	props: {
		name: String,
		nickname: String,
		cashAmount: Number,
		superPower: Function,
		strikeAttack: Promise
	}
};

const somePromise = Promise.resolve('Super Punch!');
// W tym układzie Vue może dla nas valid'ować poprawność przekazanych typów w momencie tworzenia instancji komponentu:
// fikcyjny (ale poprawny 👍) przykład użycia powyższego zapisu w template innego komponentu:
`<MySuperHero name="Bruce" nickname="Batman" :cash-amount="1000000000" :super-power="() => {}" :strike-attack="somePromise" >`
