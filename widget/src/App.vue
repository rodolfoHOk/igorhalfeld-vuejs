<template>
  <widget />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Widget from '@/views/Widget/WidgetIndex.vue';

export default defineComponent({
  name: 'App',
  components: { Widget },
});
</script>
