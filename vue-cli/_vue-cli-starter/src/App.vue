<template>
  <!-- É necessário que existe somente um elemento RAIZ -->
  <div>

    <h1> {{ variavel }}</h1>
    <input type="text" v-model="variavel" />
  
  </div>
  
</template>

<script>
export default {
  name: 'App',
  props: {
    propriedadeExterna: String
  },
  data() {
    return {
      variavel:'gleyson'
    };
  },
}
</script>

<!-- Adicione "scoped" para limitir o CSS somente para este componente -->
<style scoped>

</style>
