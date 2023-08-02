<template>
  <component :is="name" v-bind="$props" />
</template>

<script>
import LoadingIcon from './LoadingIcon.vue';

export default {
  components: { LoadingIcon },
  props: {
    name: { type: String, required: true },
  },
};
</script>
