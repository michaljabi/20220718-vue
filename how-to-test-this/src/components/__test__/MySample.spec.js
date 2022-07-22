import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { defineComponent } from 'vue'

const MySample = defineComponent({
  template: '<h2>Hello From inline component</h2>',
})

describe('In file MySample component', () => {
  it('should be present in wrapper', () => {
    const wrapper = mount(MySample)

    expect(wrapper.html()).toContain('From inline')
  })
})
