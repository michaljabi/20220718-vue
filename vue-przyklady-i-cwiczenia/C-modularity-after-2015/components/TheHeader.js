import { ref } from 'https://unpkg.com/vue/dist/vue.esm-browser.js'

export default {
	name: 'TheHeader',
	setup() {
		// @hint zapis: transformDate = new Date() to nic innego jak "domyślna wartość parametru" transformDate
		// @see: http://es6-features.org/#DefaultParameterValues
		function formatDate(transformDate = new Date()) {
			const day = transformDate.getDate();
			const month = String(transformDate.getMonth() + 1).padStart(2, '0');
			const year = transformDate.getFullYear();
			return `Dzisiaj jest: ${day}/${month}/${year}`
		}

		// Today nie musi być ref, JEŚLI nie zmieniamy jej wartości podczas działania programu!
		const today = ref(new Date());

		return { today, formatDate }
	},
	template: `
    <header>
        <h1>Witaj w aplikacji</h1>
        <div style="text-align: right"> {{ formatDate(today) }} </div>
    </header>
	`
}
