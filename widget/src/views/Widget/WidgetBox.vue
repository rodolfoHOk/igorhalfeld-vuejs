<template>
  <div
    id="widget-box"
    class="box animate__animated animate_fadeInUp animate__faster"
  >
    <div
      class="relative w-full flex"
      :class="{
        'justify-between': canShowAdditionalControlAndInfo,
        'justify-end': !canShowAdditionalControlAndInfo,
      }"
    >
      <button
        v-if="canShowAdditionalControlAndInfo"
        @click="back"
        :disabled="canGoBack"
        :class="{ invisible: canGoBack }"
        class="text-xl text-gray-800 focus:outline-none"
      >
        <icon name="Back" :color="colors.gray['800']" />
      </button>

      <p
        v-if="canShowAdditionalControlAndInfo"
        class="text-xl font-black text-center text-brand-main"
      >
        {{ label }}
      </p>

      <button
        v-if="canShowAdditionalControlAndInfo"
        @click="() => emit('close-box')"
        class="text-xl text-gray-800 focus:outline-none"
      >
        <icon name="Close" :color="colors.gray['800']" size="14" />
      </button>
    </div>

    <wizard />

    <div
      v-if="canShowAdditionalControlAndInfo"
      class="text-gray-800 text-sm flex"
    >
      <icon name="Chat" class="mr-1" :color="brandColors.graydark" />
      widget by
      <span class="ml-1 font-bold">feedbacker</span>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, ComputedRef, defineComponent, SetupContext } from 'vue';
import colors from 'tailwindcss/colors';
import { DefaultColors } from 'tailwindcss/types/generated/colors.js';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { brand } from '../../../palette.js';
import Icon from '@/components/Icon/IconFactory.vue';
import Wizard from '@/components/Wizard/WizardIndex.vue';
import { useStore } from '@/hooks/store';
import { Navigation, useNavigation } from '@/hooks/navigation';

interface SetupReturn {
  emit: SetupContext['emit'];
  colors: DefaultColors;
  brandColors: Record<string, string>;
  label: ComputedRef<string>;
  canGoBack: ComputedRef<boolean>;
  canShowAdditionalControlAndInfo: ComputedRef<boolean>;
  back: Navigation['back'];
}

export default defineComponent({
  components: { Icon, Wizard },

  emits: ['close-box'],

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  setup(_, { emit }: SetupContext): SetupReturn {
    const store = useStore();
    const { back } = useNavigation();

    const label = computed<string>(() => {
      if (store.feedbackType === 'ISSUE') {
        return 'Reporte um problema';
      }

      if (store.feedbackType === 'IDEA') {
        return 'Nos fale a sua ideia';
      }

      if (store.feedbackType === 'OTHER') {
        return 'Abra sua mente';
      }

      return 'O que você tem em mente?';
    });

    const canGoBack = computed<boolean>(() => {
      return store.currentComponent === 'SelectFeedbackType';
    });

    const canShowAdditionalControlAndInfo = computed<boolean>(() => {
      return (
        store.currentComponent !== 'Success' &&
        store.currentComponent !== 'Error'
      );
    });

    return {
      emit,
      colors,
      brandColors: brand,
      label,
      canGoBack,
      canShowAdditionalControlAndInfo,
      back,
    };
  },
});
</script>

<style lang="postcss" scoped>
.box {
  @apply fixed z-50 bottom-0 right-0 mb-5 mr-5 bg-white rounded-xl py-5 px-5 flex flex-col items-center shadow-xl select-none;
  width: 400px;
}
</style>
