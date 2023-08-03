<template>
  <component :is="name" v-bind="$props" />
</template>

<script>
import LoadingIcon from './LoadingIcon.vue';
import CopyIcon from './CopyIcon.vue';

export default {
  components: { LoadingIcon, CopyIcon },
  props: {
    name: { type: String, required: true },
  },
};
</script>
