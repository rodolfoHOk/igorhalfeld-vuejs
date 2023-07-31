<template>
  <div>
    <h1>Minha lista de tarefas</h1>

    <button class="btn" @click="handleShowHideList()">
      {{ showList ? 'Esconder a lista' : 'Ver a lista' }}
    </button>

    <br /><br />

    <input type="text" v-focus v-model="currentTask" @keyup.enter="addTask()" />

    <br />

    <ul v-if="showList">
      <li
        class="task-item"
        v-for="(task, index) in tasks"
        :key="`${task}-${index}`"
        @dblclick="complete(task)"
        :class="{
          'line-through': task.isDone,
        }"
      >
        {{ task.name }}
        <!-- <button v-on:click="remove(task)">&times;</button> ou -->
        <button class="btn" @click="remove(task)">&times;</button>
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
    currentTask: '',
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
  methods: {
    handleShowHideList() {
      this.showList = !this.showList;
    },
    addTask() {
      this.tasks.push({ name: this.currentTask, isDone: false });
      this.currentTask = '';
    },
    complete(task) {
      this.tasks = this.tasks.map((t) => {
        if (t.name === task.name) {
          return { ...t, isDone: !t.isDone };
        }
        return { ...t };
      });
    },
    remove(task) {
      // console.log('task', task);
      this.tasks = this.tasks.filter((t) => t.name !== task.name);
    },
  },
};
</script>

<style scoped>
.line-through {
  text-decoration: line-through;
}
.task-item {
  cursor: pointer;
}
.btn {
  cursor: pointer;
}
</style>
