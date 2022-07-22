import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils' // https://test-utils.vuejs.org/
import TheHeader from '@/components/TheHeader.vue'

describe('TheHeader', () => {
  it('should have title Auction Portal without given props', () => {
    const wrapper = mount(TheHeader)

    const $h1 = wrapper.get('h1')

    expect($h1.text()).toBe('Auction Portal')
  })

  it('should modify title when text prop provided', () => {
    const wrapper = mount(TheHeader, { props: { text: 'Some Text' } }) // https://test-utils.vuejs.org/api/#mount

    // https://test-utils.vuejs.org/api/#wrapper-methods
    const $h1 = wrapper.get('h1') // https://test-utils.vuejs.org/api/#get

    expect($h1.text()).toContain('Some Text')
  })
})
