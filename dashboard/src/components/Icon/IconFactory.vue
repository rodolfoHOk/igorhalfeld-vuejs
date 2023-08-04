<template>
  <component :is="name" v-bind="$props" />
</template>

<script>
import Loading from './LoadingIcon.vue';
import Copy from './CopyIcon.vue';
import ChevronDown from './ChevronDownIcon.vue';

export default {
  components: { Loading, Copy, ChevronDown },
  props: {
    name: { type: String, required: true },
  },
};
</script>
