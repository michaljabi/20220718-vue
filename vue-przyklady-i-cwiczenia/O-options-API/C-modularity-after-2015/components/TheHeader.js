export default {
	name: 'TheHeader',
	data() {
		return {
			today: new Date()
		}
	},
	methods: {
		// @hint zapis: transformDate = new Date() to nic innego jak "domyślna wartość parametru" transformDate
		// @see: http://es6-features.org/#DefaultParameterValues
		formatDate(transformDate = new Date()) {
			const day = transformDate.getDate();
			const month = String(transformDate.getMonth() + 1).padStart(2, '0');
			const year = transformDate.getFullYear();
			return `Dzisiaj jest: ${day}/${month}/${year}`
		}
	},
	template: `
    <header>
        <h1>Witaj w aplikacji</h1>
        <div style="text-align: right"> {{ formatDate(today) }} </div>
    </header>
	`
}
