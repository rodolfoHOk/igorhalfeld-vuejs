<template>
  <div class="flex flex-col items-center justify-center gap-2 w-full my-5">
    <textarea
      v-model="state.feedback"
      class="w-full rounded-lg border-2 border-gray-300 border-solid h-24 p-2 resize-none focus:outline-none"
    />

    <button
      @click="submitFeedback"
      class="rounded-lg font-black flex flex-col justify-center items-center py-2 w-full cursor-pointer focus:outline-none transition-all duration-200"
      :class="{
        'opacity-50': state.isLoading,
        'opacity-50 bg-gray-100 text-gray-500': submitButtonIsDisabled,
        'bg-brand-main text-white': !submitButtonIsDisabled,
      }"
      :disabled="submitButtonIsDisabled"
    >
      <icon
        v-if="state.isLoading"
        name="loading"
        class="animate-spin"
        color="white"
      />

      <template v-else> Enviar feedback </template>
    </button>
  </div>
</template>

<script lang="ts">
import { ComputedRef, computed, defineComponent, reactive } from 'vue';
import Icon from '@/components/Icon/IconFactory.vue';
import { useNavigation } from '@/hooks/navigation';
import { useStore } from '@/hooks/store';
import { setMessage } from '@/store';
import services from '@/services';

type State = {
  isLoading: boolean;
  hasError: Error | null;
  feedback: string;
};

interface SetupReturn {
  state: State;
  submitButtonIsDisabled: ComputedRef<boolean>;
  submitFeedback: () => Promise<void>;
}

export default defineComponent({
  components: { Icon },

  setup(): SetupReturn {
    const store = useStore();
    const { setErrorState, setSuccessState } = useNavigation();

    const state = reactive<State>({
      isLoading: false,
      hasError: null,
      feedback: '',
    });

    const submitButtonIsDisabled = computed<boolean>(() => {
      return !state.feedback.length;
    });

    function handleError(error: Error) {
      state.hasError = error;
      state.isLoading = false;
      setErrorState();
    }

    async function submitFeedback(): Promise<void> {
      state.isLoading = true;

      setMessage(state.feedback);

      try {
        const response = await services.feedbacks.create({
          type: store.feedbackType,
          text: store.message,
          page: store.currentPage,
          apiKey: store.apiKey,
          device: window.navigator.userAgent,
          fingerprint: store.fingerprint,
        });

        if (!response.errors) {
          setErrorState();
        } else {
          setSuccessState();
        }

        state.isLoading = false;
      } catch (error) {
        handleError(error as Error);
      }
    }

    return {
      state,
      submitButtonIsDisabled,
      submitFeedback,
    };
  },
});
</script>
