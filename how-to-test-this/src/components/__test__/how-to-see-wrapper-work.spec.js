import { mount } from '@vue/test-utils'
import { describe, beforeAll, it, expect } from 'vitest'
import { defineComponent } from 'vue'

// Komponent, który będziemy osadzać na DOM dzięki opcji attachTo:
const TheComponent = defineComponent({
  template: `
		<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam culpa eaque eum illum impedit laboriosam libero maiores molestias, nam nemo nesciunt omnis quibusdam, rem reprehenderit similique sint soluta voluptatum! </p>
	`,
})

describe('how wrapper works on DOM', () => {
  beforeAll(() => {
    document.body.innerHTML = `
		   <h1>Vanilla (non-vue) here</h1>
		   <div id="app"></div>
		`
  })

  it('TheComponent should be present on DOM', () => {
    mount(TheComponent, { attachTo: '#app' }) // https://test-utils.vuejs.org/api/#attachto

    expect(document.body.textContent.trim()).toBe(`Vanilla (non-vue) here
		    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam culpa eaque eum illum impedit laboriosam libero maiores molestias, nam nemo nesciunt omnis quibusdam, rem reprehenderit similique sint soluta voluptatum!`)

    // W tym układzie standardowe selektory zadziałają:
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelector
    const $paragraph = document.querySelector('p')

    // https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent
    expect($paragraph.textContent).toContain('Lorem ipsum dolor sit amet')
  })
})
