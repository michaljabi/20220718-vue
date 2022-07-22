import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { defineComponent } from 'vue'

const MySample = defineComponent({
  template: '<h3>Hello From inline component</h3>',
})

describe('In file MySample component', () => {
  it('should From inline be present in component text', () => {
    const wrapper = mount(MySample)

    expect(wrapper.html()).toContain('From inline')
  })
})
