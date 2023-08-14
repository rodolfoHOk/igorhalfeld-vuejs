<template>
  <div class="flex flex-col items-center justify-between w-full my-5">
    <icon name="check" :color="palette.success" size="70" />

    <p class="text-xl font-black text-center w-full mt-2">
      Obrigado! Recebemos o seu feedback.
    </p>

    <div class="flex justify-center items-center w-full mt-2">
      <button
        @click="goBack"
        class="rounded-full font-regular text-sm flex flex-col justify-center bg-brand-gray items-center px-2 py-5 cursor-pointer focus:outline-none"
      >
        Envie mais feedbacks
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { resetStore } from '@/store';
import Icon from '@/components/Icon/IconFactory.vue';
import palette from '../../../palette.js';

interface SetupReturn {
  palette: Record<string, string>;
  goBack: () => void;
}

export default defineComponent({
  components: { Icon },

  setup(): SetupReturn {
    function goBack() {
      resetStore();
    }

    return {
      palette: palette.brand,
      goBack,
    };
  },
});
</script>
