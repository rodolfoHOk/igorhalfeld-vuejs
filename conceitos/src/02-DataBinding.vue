<template>
  <div>
    <!-- <h1 v-bind:style="{ textDecoration: decoration }">Hello {{ name }}</h1> ou -->
    <h1 :style="{ textDecoration: decoration }">Hello {{ name }}!</h1>

    <input type="text" v-model="name" />

    <br /><br />

    <a :href="link">Link do curso!</a>
  </div>
</template>

<script>
export default {
  data: () => ({
    name: 'Rudolf',
    link: 'https://treinamento.vuejsbrasil.org/',
    decoration: 'underline',
  }),
};
</script>

<style></style>
