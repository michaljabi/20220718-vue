import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import ComponentWithProps from '@/components/ComponentWithProps.vue'

describe('ComponentWithProps', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(ComponentWithProps)
  })

  it('should fallback and show default auction without given "auction" prop', () => {
    const title = wrapper.get('.card-header')
    const description = wrapper.get('.card-text')
    const price = wrapper.get('strong')

    expect(title.text()).toBe('Przykładowa aukcja')
    expect(description.text()).toBe('brak opisu...')
    expect(price.text()).toBe('100 zł')
  })

  it('should fallback and show proper image from picsum.photos when no "auction" prop given', () => {
    const img = wrapper.get('.card-img')

    expect(img.attributes('src')).toBe('https://picsum.photos/id/189/400/400')
  })

  it('should have size of default 200px when no "cardWidth" prop given', () => {
    const style = wrapper.attributes('style')

    expect(style).toContain('width: 200px')
  })

  it('should show proper auction according to "auction" prop', () => {
    const auction = {
      title: 'ExAmple',
      imgUrl: 'http://url',
      description: 'Desc',
      price: 3000,
    }

    const wrapper = mount(ComponentWithProps, { props: { auction } })

    const title = wrapper.get('.card-header')
    const description = wrapper.get('.card-text')
    const price = wrapper.get('strong')
    const img = wrapper.get('.card-img')

    expect(title.text()).toBe('ExAmple')
    expect(description.text()).toBe('Desc')
    expect(price.text()).toBe('3000 zł')
    expect(img.attributes('src')).toBe('http://url')
  })

  it('should have proper size according to "cardWidth" prop', () => {
    const wrapper = mount(ComponentWithProps, { props: { cardWidth: 500 } })

    const style = wrapper.attributes('style')

    expect(style).toContain('width: 500px')
  })

  it('should change size form 200px to 645px when "cardWidth" prop update in time', async () => {
    const wrapper = mount(ComponentWithProps)

    expect(wrapper.attributes('style')).toContain('width: 200px')

    await wrapper.setProps({ cardWidth: 654 })

    expect(wrapper.attributes('style')).toContain('width: 654px')
  })
})
