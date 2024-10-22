<template>
  <VForm @submit="onSubmit">
    <div>
      <label for="email">Email:</label>
      <VField name="email" rules="required|email" as="input" v-model="form.email" />
      <ErrorMessage name="email" />
    </div>

    <div>
      <label for="password">Password:</label>
      <VField name="password" rules="required|min:6" as="input" type="password" v-model="form.password" />
      <ErrorMessage name="password" />
    </div>

    <button type="submit">Submit</button>
  </VForm>
</template>

<script setup>
import { ref } from 'vue';

const form = ref({
  email: '',
  password: '',
});

function onSubmit(values) {
  console.log('Form submitted:', values);
}
</script>
