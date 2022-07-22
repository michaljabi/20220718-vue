<script setup>
import { Field, Form } from 'vee-validate'
const emit = defineEmits(['subscribeWithEmail'])

function handleSubmit(values, formOptions) {
  emit('subscribeWithEmail', values.email)
  formOptions.resetForm()
}

// https://vee-validate.logaretm.com/v4/guide/components/validation#form-level-validation
const validationSchema = {
  email(value) {
    return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
      ? 'Invalid email address...'
      : true
  },
}

// https://vee-validate.logaretm.com/v4/guide/global-validators
// https://vee-validate.logaretm.com/v4/guide/components/validation#customizing-validation-triggers
</script>

<template>
  <Form
    class="my-4"
    @submit="handleSubmit"
    :validation-schema="validationSchema"
  >
    <div class="mb-3 w-50">
      <Field name="email" v-slot="{ field, meta, errors }">
        <label for="email" class="form-label">
          Wpisz adres e-mail, aby subskrybować:
        </label>
        <div class="input-group">
          <input
            type="email"
            class="form-control"
            :class="{ 'border-danger': meta.touched && !meta.valid }"
            id="email"
            placeholder="your.email@example.com"
            v-bind="field"
          />
          <button
            type="submit"
            class="btn btn-outline-primary"
            :style="{ opacity: meta.touched && !meta.valid ? 0.5 : 1 }"
          >
            Zapisz
          </button>
        </div>
        <div
          class="alert alert-danger border-danger"
          v-if="meta.touched && !meta.valid"
        >
          {{ errors.join(' ') }}
          <!-- https://vee-validate.logaretm.com/v4/guide/components/validation#displaying-error-messages -->
        </div>
      </Field>
    </div>
  </Form>
</template>
