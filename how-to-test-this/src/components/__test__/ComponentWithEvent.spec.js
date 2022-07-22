import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import ComponentWithEvent from '@/components/ComponentWithEvent.vue'

describe('ComponentWithEvent', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(ComponentWithEvent)
  })

  it('should show text "dzisiaj padało" at start', () => {
    const h3Text = wrapper.get('[data-testid="text"]')

    expect(h3Text.text()).toBe('dzisiaj padało')
  })

  it('should show text "wczoraj padało" when "zmień porę dnia" clicked', async () => {
    const button = wrapper.get('button.btn')
    const h3Text = wrapper.get('[data-testid="text"]')

    await button.trigger('click')

    expect(h3Text.text()).toBe('wczoraj padało')
  })

  it('should toggle back and show text "dzisiaj padało" when "zmień porę dnia" clicked x2 times', async () => {
    const button = wrapper.get('button.btn')
    const h3Text = wrapper.get('[data-testid="text"]')

    await button.trigger('click')
    await button.trigger('click')

    expect(h3Text.text()).toBe('dzisiaj padało')
  })
})
