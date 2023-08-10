<template>
  <div>Write a feedback</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface SetupReturn {
  prop: string;
}

export default defineComponent({
  setup(): SetupReturn {
    return {
      prop: '',
    };
  },
});
</script>
