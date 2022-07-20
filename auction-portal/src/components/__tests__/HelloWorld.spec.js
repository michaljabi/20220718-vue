import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import HelloWorld from '../HelloWorld.vue'

describe('HelloWorld', () => {

  it('should add two numbers', () => {

    expect(2 + 2).toBe(4);
  })

  it('should renders properly', () => {

    const wrapper = mount(HelloWorld, { props: { msg: 'Hello Vitest' } })


    // Znalezienie konkretnego elemetnu z wykorzystaniem css selectorów:

    console.log(wrapper.get('a[href="https://vuejs.org/"]'))
    console.log(wrapper.get('a[href="https://vuejs.org/"]').text())
    expect(wrapper.text()).toContain('Hello Vitest')
  })

  it('should have link https://vuejs.org/ with title Vue3', () => {
    // Arrange:
    const wrapper = mount(HelloWorld, { props: { msg: '' } })

    // Act:
    const anchor = wrapper.get('a[href="https://vuejs.org/"]')

    // Assert:
    expect(anchor.text()).toContain('Vue 3')
  })
})
