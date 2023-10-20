<template>
  <div>
    <h1>Vue + Vite + Reactivity</h1>
    <label >Integrante
      <input type="text" v-model="integrante" />
    </label>
    <button v-on:click="adicionar()" type="button"> Adicionar</button>
    <ul>
      <li v-for="membro in time"> {{ membro }}</li>
    </ul>
  </div>
</template>

<script setup>
  import {ref, reactive} from 'vue';

  const integrante = ref('') 
  const time = ref([])


  const adicionar = () => {
    time.value.push(integrante.value)
  }

</script>

