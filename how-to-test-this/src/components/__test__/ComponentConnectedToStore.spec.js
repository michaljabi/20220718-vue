import { useCounterStore } from '@/stores/counter'
import { describe, it, expect, beforeEach, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import ComponentConnectedToStore from '@/components/ComponentConnectedToStore.vue'

// https://pinia.vuejs.org/cookbook/testing.html#unit-testing-components
import { createTestingPinia } from '@pinia/testing'
import { nextTick } from 'vue'

describe('ComponentConnectedToStore', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(ComponentConnectedToStore, {
      global: {
        plugins: [createTestingPinia({ createSpy: vi.fn, stubActions: false })],
        // https://pinia.vuejs.org/cookbook/testing.html#customizing-behavior-of-actions
        // https://pinia.vuejs.org/cookbook/testing.html#specifying-the-createspy-function
      },
    })
  })

  it('should show "Kliknięto 0 razy" when project initially render', () => {
    const clickBtn = wrapper.get('button')

    expect(clickBtn.text()).toBe('Kliknięto 0 razy')
  })

  it('should show "Podwojona wartość to: 6" when store increment action fired x3 form outside source', async () => {
    const counterStore = useCounterStore()

    // Coś z zewnątrz wykonuje 3 akcje...
    counterStore.increment()
    counterStore.increment()
    counterStore.increment()

    // Specjalnie czekamy na update DOM komponentu !
    await nextTick(() => {})

    const paragraph = wrapper.get('p')

    expect(paragraph.text()).toBe('Podwojona wartość to: 6')
  })

  it('should increase the value to 2 when button clicked x2', async () => {
    const clickBtn = wrapper.get('button')

    await clickBtn.trigger('click')
    await clickBtn.trigger('click')

    expect(clickBtn.text()).toBe('Kliknięto 2 razy')
  })
})
