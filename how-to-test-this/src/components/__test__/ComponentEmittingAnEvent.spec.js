import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import ComponentEmittingAnEvent from '@/components/ComponentEmittingAnEvent.vue'

describe('ComponentEmittingAnEvent', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(ComponentEmittingAnEvent)
  })

  it('should emit addToCart with first item (Dodaj do koszyka) clicked', async () => {
    const allListElements = wrapper.findAll('li')

    const firstElementBtn = allListElements[0].get('button')

    await firstElementBtn.trigger('click')

    expect(wrapper.emitted()).toHaveProperty('addToCart') // https://test-utils.vuejs.org/api/#emitted
    expect(wrapper.emitted().addToCart[0][0]).toEqual({
      id: 1,
      title: 'Some Item',
    })
  })

  it('should emit addToCart with second item (Dodaj do koszyka) clicked', async () => {
    const allListElements = wrapper.findAll('li')

    const firstElementBtn = allListElements[1].get('button')

    await firstElementBtn.trigger('click')

    expect(wrapper.emitted()).toHaveProperty('addToCart')
    expect(wrapper.emitted().addToCart[0][0]).toEqual({
      id: 2,
      title: 'Other fake Item',
    })
  })
})
