const template = `
	<div>
		Wyróżnione słowo na dzisiaj to <mark>{{word}}</mark> !
	</div>
`

export default {
	name: 'OneFileComponent',
	props: {
		word: String
	},
	template
}
