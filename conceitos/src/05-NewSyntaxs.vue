<template>
  <div>
    <h1>Minha lista de tarefas</h1>

    <button class="btn" @click="handleShowHideList()">
      {{ state.showList ? 'Esconder a lista' : 'Ver a lista' }}
    </button>

    <br /><br />

    <input
      type="text"
      v-focus
      v-model="state.currentTask"
      @keyup.enter="addTask()"
    />

    <br />

    <ul v-if="state.showList">
      <li
        class="task-item"
        v-for="(task, index) in state.tasks"
        :key="`${task}-${index}`"
        @dblclick="complete(task)"
        :class="{
          'line-through': task.isDone,
        }"
      >
        {{ task.name }}
        <button class="btn" @click="remove(task)">&times;</button>
      </li>
    </ul>

    <p v-else>Lista de tarefas escondida</p>
  </div>
</template>

<script>
import { reactive } from 'vue';

const focus = {
  mounted: (el) => {
    el.focus();
  },
};

export default {
  directives: {
    focus,
  },

  setup() {
    const state = reactive({
      currentTask: '',
      showList: false,
      tasks: [
        { name: 'Fazer o curso', isDone: false },
        { name: 'Beber 2 litros de água', isDone: false },
      ],
    });

    function handleShowHideList() {
      state.showList = !state.showList;
    }

    function addTask() {
      state.tasks.push({ name: state.currentTask, isDone: false });
      state.currentTask = '';
    }

    function complete(task) {
      state.tasks = state.tasks.map((t) => {
        if (t.name === task.name) {
          return { ...t, isDone: !t.isDone };
        }
        return { ...t };
      });
    }

    function remove(task) {
      state.tasks = state.tasks.filter((t) => t.name !== task.name);
    }

    return {
      state,
      handleShowHideList,
      addTask,
      complete,
      remove,
    };
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
