import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import ComponentWithFormInput from '@/components/ComponentWithFormInput.vue'

describe('ComponentWithFormInput', () => {
  let wrapper
  let emailInput, submitBtn

  beforeEach(() => {
    wrapper = mount(ComponentWithFormInput)
    emailInput = wrapper.get('input#email')
    submitBtn = wrapper.get('button.btn')
  })

  it('should NOT show validation errors at start', async () => {
    const errorBox = await wrapper.find('.alert')

    // Pokazane użycie zaprzeczenia w asercji: .not
    expect(errorBox.exists()).not.toBeTruthy()
  })

  it('should show email validation error when wrong email given', async () => {
    await emailInput.setValue('wrong-mail@')
    await submitBtn.trigger('submit')

    const errorBox = wrapper.get('.alert.alert-danger')

    expect(errorBox.text()).toBe('Invalid email address...')
  })

  it('should NOT show validation error if email is valid', async () => {
    await emailInput.setValue('some.valid@adress.com')
    await submitBtn.trigger('submit')

    const errorBox = await wrapper.find('.alert.alert-danger')

    expect(errorBox.exists()).toBeFalsy()
  })

  it('should fire event when submitted valid e-mail', async () => {
    await emailInput.setValue('proper@email.com')
    await submitBtn.trigger('submit')

    expect(wrapper.emitted()).toHaveProperty('subscribeWithEmail')
    expect(wrapper.emitted().subscribeWithEmail[0][0]).toBe('proper@email.com')
  })
})
