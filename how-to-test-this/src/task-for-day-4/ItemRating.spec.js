import { it, describe, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ItemRating from './ItemRating.vue'
import { beforeEach } from 'node_modules/vitest/dist/index'

describe('ItemRating', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(ItemRating)
  })

  it('should render', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('should start with 5 stars', () => {
    const allStars = wrapper.findAll('[data-testid="star"]')

    expect(allStars.length).toBe(5)
  })

  it('should drop level of stars when minus button clicked', async () => {
    const decBtn = wrapper.get('[data-testid="dec"]')
    await decBtn.trigger('click')

    const allStars = wrapper.findAll('[data-testid="star"]')

    expect(allStars.length).toBe(4)
  })

  it('should increase level of stars when plus button clicked', async () => {
    wrapper = mount(ItemRating, { props: { startRating: 2 } })

    const incBtn = wrapper.get('[data-testid="inc"]')
    await incBtn.trigger('click')

    const allStars = wrapper.findAll('[data-testid="star"]')

    expect(allStars.length).toBe(3)
  })

  it('should not drop level of stars below 1', async () => {
    wrapper = mount(ItemRating, { props: { startRating: 1 } })

    const decBtn = wrapper.get('[data-testid="dec"]')
    await decBtn.trigger('click')
    await decBtn.trigger('click')
    await decBtn.trigger('click')

    const allStars = wrapper.findAll('[data-testid="star"]')

    expect(allStars.length).toBe(1)
  })

  it('should not increase level of stars above 5', async () => {
    const incBtn = wrapper.get('[data-testid="inc"]')
    await incBtn.trigger('click')
    await incBtn.trigger('click')
    await incBtn.trigger('click')

    const allStars = wrapper.findAll('[data-testid="star"]')

    expect(allStars.length).toBe(5)
  })

  it('should not present more than 5 stars when props given', async () => {
    wrapper = mount(ItemRating, { props: { startRating: 10 } })

    const allStars = wrapper.findAll('[data-testid="star"]')

    expect(allStars.length).toBe(5)
  })

})
