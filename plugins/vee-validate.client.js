// plugins/vee-validate.ts

import { defineNuxtPlugin } from '#app';
import { configure } from 'vee-validate';
import * as rules from '@vee-validate/rules';
import { Field, Form, ErrorMessage } from 'vee-validate';

export default defineNuxtPlugin((nuxtApp) => {
  // Register all rules globally
  Object.keys(rules).forEach(rule => {
    configure({ [rule]: rules[rule] });
  });

  // Register global components
  nuxtApp.vueApp.component('VField', Field);
  nuxtApp.vueApp.component('VForm', Form);
  nuxtApp.vueApp.component('ErrorMessage', ErrorMessage);
});
