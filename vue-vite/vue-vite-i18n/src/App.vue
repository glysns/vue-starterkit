<script setup>

import { ref } from 'vue'
  import { useI18n } from "vue-i18n"
  import i18n from "./plugins/i18n"

  const selected = ref('')

  const languages = ref([
    { language: 'en', title: 'English' },
    { language: 'es', title: 'Español' }
  ])

  const changeLocale = (locale) => {
    i18n.global.locale.value = locale
  }

</script>

<template>
  <h1>i18n - Config</h1>
  Mensagem: {{ $t('welcome') }}
  <br>
  Idioma: {{ $t('language') }}

<select @change="changeLocale(selected)">
  <option disabled value="">Selecione um Idioma</option>
  <option v-for="lang in languages" :key="lang.language" :value="lang.language">{{ lang.title  }}</option>
</select>


</template>
