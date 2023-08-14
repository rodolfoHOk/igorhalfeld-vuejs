<template>
  <component :is="name" v-bind="$props" />
</template>

<script lang="ts">
import Loading from './LoadingIcon.vue';
import Copy from './CopyIcon.vue';
import ChevronDown from './ChevronDownIcon.vue';
import Chat from './ChatIcon.vue';
import Back from './BackIcon.vue';
import Close from './CloseIcon.vue';
import Check from './CheckIcon.vue';
import Alert from './AlertIcon.vue';

export default {
  components: { Loading, Copy, ChevronDown, Chat, Back, Close, Check, Alert },
  props: {
    name: { type: String, required: true },
  },
};
</script>
