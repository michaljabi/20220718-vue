import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ComponentWithoutProps from '@/components/ComponentWithoutProps.vue'

describe('ComponentWithoutProps', () => {
  it('should show "Hello from the component" text', () => {
    const wrapper = mount(ComponentWithoutProps)

    expect(wrapper.text()).toBe('Hello from the component')
  })
})
