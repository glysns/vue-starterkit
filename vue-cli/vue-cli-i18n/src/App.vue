<script setup>

import { ref } from 'vue'
  import i18n from "@/i18n"

  const selected = ref('')

  const languages = ref([
  { language: 'en-US', title: 'English' },
  { language: 'pt-BR', title: 'Portugês BR' } 
   
  ])

  const changeLocale = (locale) => {
    i18n.global.locale = locale
  }

</script>

<template>
  <h1>i18n - Config</h1>

  <select v-model="selected" @change="changeLocale(selected)">
  <option disabled value="">{{  $t('selectLanguage') }}</option>
  <option v-for="lang in languages" :key="lang.language" :value="lang.language">{{ lang.title  }}</option>
</select>

  <br>
  <br>
  Mensagem: {{ $t('welcome') }}
  <br>
  Idioma: {{ $t('language') }}

  <br>
  <h2> {{  $t('selectLanguage') }} </h2>

  <h1>Data</h1>

  <p>{{ $d (new Date(), 'short') }}</p>

</template>

