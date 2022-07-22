import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import InfoPresenter from '@/components/InfoPresenter.vue'
import { defineComponent } from 'vue'

const ComponentToBePresented = defineComponent({
  template: '<h2> He<b>llo</b> from component ! </h2>',
})

describe('InfoPresenter', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(InfoPresenter, {
      props: { explain: 'Some Great explanation' },
    })
  })

  it('should have text + <hr /> only when just explain provided', async () => {
    expect(wrapper.html()).toContain('<hr')
    expect(wrapper.text()).toBe('-- Some Great explanation --')
  })

  it('should render wrapped ComponentToBePresented at default slot', () => {
    wrapper = mount(InfoPresenter, {
      props: { explain: 'The thing:' },
      slots: {
        // https://test-utils.vuejs.org/api/#slots
        default: ComponentToBePresented,
      },
    })

    const h2FromComponent = wrapper.find('h2')

    expect(h2FromComponent.text()).toBe('Hello from component !')
  })
})
