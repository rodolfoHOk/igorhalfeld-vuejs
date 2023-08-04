<template>
  <span
    class="p-2 text-xs font-black text-white uppercase rounded-full"
    :class="backgroundColor"
  >
    {{ label }}
  </span>
</template>

<script>
import { computed } from 'vue';
export default {
  props: {
    type: { type: String, required: true },
  },

  setup(props) {
    const label = computed(() => {
      if (props.type === 'ISSUE') {
        return 'problema';
      } else if (props.type === 'IDEA') {
        return 'ideia';
      }
      return 'outros';
    });

    const backgroundColor = computed(() => {
      if (props.type === 'ISSUE') {
        return 'bg-brand-danger';
      } else if (props.type === 'IDEA') {
        return 'bg-brand-warning';
      }
      return 'bg-brand-graydark';
    });

    return {
      label,
      backgroundColor,
    };
  },
};
</script>
