import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import ComponentWithFormInputVeeValidate from '@/components/ComponentWithFormInputVeeValidate.vue'

describe('ComponentWithFormInputVeeValidate', () => {
  let wrapper
  let emailInput, submitBtn

  // Jeśli korzystamy z Vee Validate, czasem będziemy potrzebować dodatkowej pomocniczej funkcji do "odświeżenia DOM"
  // W tym układzie czekamy 80ms na update.
  const awaitSomeTimeToRepaint = () =>
    new Promise((resolve) => setTimeout(resolve, 80))
  // Można również skorzystać z zaleceń w dokumentacji narzędzia: https://vee-validate.logaretm.com/v4/guide/testing

  beforeEach(() => {
    wrapper = mount(ComponentWithFormInputVeeValidate)
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

    await awaitSomeTimeToRepaint()
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

    await awaitSomeTimeToRepaint()

    expect(wrapper.emitted()).toHaveProperty('subscribeWithEmail')
    expect(wrapper.emitted().subscribeWithEmail[0][0]).toBe('proper@email.com')
  })

  describe('with Vee Validate', () => {
    it('should show error just after emailInput looses focus', async () => {
      await emailInput.setValue('invalid mail')
      await emailInput.trigger('blur')

      await awaitSomeTimeToRepaint()
      const errorBox = wrapper.get('.alert.alert-danger')

      expect(errorBox.text()).toBe('Invalid email address...')
    })

    it('should drop button opacity from 1 to 0.5 when error in email', async () => {
      expect(submitBtn.attributes('style')).toBe('opacity: 1;')

      await emailInput.trigger('blur')
      await awaitSomeTimeToRepaint()

      expect(submitBtn.attributes('style')).toBe('opacity: 0.5;')
    })
  })
})
