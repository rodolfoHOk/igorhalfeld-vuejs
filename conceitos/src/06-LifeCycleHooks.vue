<template>
  <div>
    <h1>Life Cycle Hooks</h1>
  </div>
</template>

<script>
import { onMounted } from 'vue';

export default {
  setup() {
    onMounted(() => {
      console.log('Foi montado composition API');
    });
  },
};

// export default {
//   mounted() {
//     console.log('Foi montado options API');
//   },
// };
</script>

<style scoped></style>
