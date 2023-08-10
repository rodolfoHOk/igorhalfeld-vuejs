<template>
  <component
    :is="store.currentComponent"
    @select-feedback-type="handleSelectFeedbackType"
    @next="next"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from '@/hooks/store';
import { StoreState, setFeedbackType } from '@/store';
import { Navigation, useNavigation } from '@/hooks/navigation';
import SelectFeedbackType from './WizardSelectFeedbackType.vue';
import WriteFeedback from './WizardWriteFeedback.vue';
import Error from './WizardError.vue';
import Success from './WizardSuccess.vue';

interface SetupReturn {
  store: StoreState;
  next: Navigation['next'];
  handleSelectFeedbackType: (type: string) => void;
}

export default defineComponent({
  components: { SelectFeedbackType, WriteFeedback, Error, Success },

  setup(): SetupReturn {
    const store = useStore();
    const { next } = useNavigation();

    function handleSelectFeedbackType(type: string): void {
      setFeedbackType(type);
    }

    return {
      store,
      next,
      handleSelectFeedbackType,
    };
  },
});
</script>

<style></style>
