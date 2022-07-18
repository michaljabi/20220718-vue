import { createApp } from 'https://unpkg.com/vue/dist/vue.esm-browser.js'
/*
	@hint:
	import u góry musi być bypass'owany, abyśmy uniknęli błędu "Same Origin Policy" (CORS).
	Standardowo moglibyśmy użyć po prostu: https://cdn.jsdelivr.net/npm/vue/dist/vue.js
*/
import TheHeader from './components/TheHeader.js'
import OneFileComponent from './components/OneFileComponent.js'

/**
 *  #Przykład C-101:
 *  Modułowość dzięki ES6 i wykorzystanie tego do projektu Vue.
 *  Ten przykład pokazuje Ci jak prosto można podzielić naszą aplikacje na mniejsze - bardziej niezależne części
 *  Nawet plikami - dzięki zastosowaniu składni z ES6 import/export
 *  @see http://es6-features.org/#ValueExportImport
 *
 *  #cel:
 *  Zrozumienie tego przykładu pozwoli Ci dobrze "wejść" do świata Node.js,
 *  gdzie modułowość między plikami i oddzielny scope - również są zachowane.
 *
 *  Zwróć uwagę iż, nie jest to rozwiązanie "produkcyjne".
 *
 *  Owszem, taki podział na pliki bardzo ułatwia nam Deweloperom - pracę z kodem,
 *  jednak docelowo chcielibyśmy mieć te wszystkie pliki spakowane i z minimalizowane!
 *  Najlepiej w jeden plik .js dla wydajności + checksum'a w nazwie pliku dla lepszej obsługi cache po stronie klienta.
 *  ... i tutaj na scenę wejdzie - BUNDLER.
* */

const app = createApp({
	data() {
		return {
			myWord: 'Hello'
		}
	},
	components: {
		TheHeader,
		OneFileComponent
	},
	template: `
		<main>
			<!-- 
				Pisząc HTML jako "Template" w środku świata JS - nie musisz stosować closing taga
				Przypomina to syntax XML'owy 
			 --> 
			<TheHeader />
			<!-- tutaj poniżej mamy data-binding, pamiętaj, ten zapis z ":" to inaczej "v-bind:" -->
			<OneFileComponent :word="myWord"/>
			<!-- tutaj z kolei do OneFileComponent przekazujemy String'a -->
			<OneFileComponent word="Home"/>
			<OneFileComponent word="World"/>
		</main>
	`
})

app.mount('#app')
