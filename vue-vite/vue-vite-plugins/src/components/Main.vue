<script setup>
import { ref } from "vue";

defineProps({
  msg: String,
});

const cpfCnpj = ref('');
const telefoneCelular = ref('');
</script>

<template>
  <h1>{{ msg }}</h1>

  

  <h2>MASKA</h2>

  <label>
    CPF / CNPJ: {{ cpfCnpj }}
    <the-mask v-mask="['###.###.###-##', '##.###.###/####-##']" />
  </label>
  <p></p>
    <label>
    Telefone / Celular: {{ telefoneCelular }}
    <the-mask v-mask="['(##) ####-####', '(##) #####-####']" />  
  </label>
</template>
