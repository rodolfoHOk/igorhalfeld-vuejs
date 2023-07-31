<template>
  <div>
    <h1>Minha lista de tarefas</h1>

    <button @click="() => (showList = !showList)">
      {{ showList ? 'Esconder a lista' : 'Ver a lista' }}
    </button>

    <br /><br />

    <input type="text" v-focus />

    <br />

    <ul v-if="showList">
      <li v-for="(task, index) in tasks" :key="`${task}-${index}`">
        {{ task.name }}
      </li>
    </ul>

    <p v-else>Lista de tarefas escondida</p>
  </div>
</template>

<script>
const focus = {
  mounted: (el) => {
    el.focus();
  },
};

export default {
  directives: {
    focus,
  },
  data: () => ({
    showList: false,
    tasks: [
      {
        name: 'Fazer o curso',
        isDone: false,
      },
      {
        name: 'Beber 2 litros de água',
        isDone: false,
      },
    ],
  }),
};
</script>

<style></style>
