<template>
  <div>
    <div class="flex justify-center w-full h-28 bg-brand-main">
      <header-logged />
    </div>

    <div class="flex flex-col items-center justify-center h-64 bg-brand-gray">
      <h1 class="text-4xl font-black text-center text-gray-800">Feedbacks</h1>

      <p class="mt-2 text-2xl font-regular text-center text-gray-800">
        Detalhes de todos os feedbacks recebidos.
      </p>
    </div>

    <div class="flex justify-center w-full pb=20">
      <div class="w-4/5 max-w-6xl py-10 grid grid-cols-4 gap-2">
        <div>
          <h1 class="text-3xl font-black text-brand-darkgray">Listagem</h1>

          <suspense>
            <template #default>
              <feedbacks-filters
                class="mt-8 animate__animated animate__fadeIn animate__faster"
              />
            </template>

            <template #fallback>
              <filters-loading class="mt-7" />
            </template>
          </suspense>
        </div>

        <div class="col-span-3 px-10 pt-20">
          <p
            v-if="state.hasError"
            class="text-lg text-center text-gray-800 font-regulars"
          >
            Aconteceu um erro ao carregar os feedbacks 🥺
          </p>

          <p
            v-if="state.feedbacks.length === 0 && !state.isLoading"
            class="text-lg text-center text-gray-800 font-regulars"
          >
            Ainda não há nenhum feedback recebido
          </p>

          <feedback-card-loading v-if="state.isLoading" />

          <feedback-card
            v-else
            v-for="(feedback, index) in state.feedbacks"
            :key="feedback.id"
            :is-opened="index === 0"
            :feedback="feedback"
            class="mb-8"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive } from 'vue';
import HeaderLogged from '@/components/HeaderLogged/HeaderLogged.vue';
import FeedbacksFilters from './FeedbacksFilters.vue';
import FiltersLoading from './FiltersLoading.vue';
import FeedbackCard from '@/components/FeedbackCard/FeedbackCard.vue';
import FeedbackCardLoading from '@/components/FeedbackCard/FeedbackCardLoading.vue';
import services from '@/services';

export default {
  components: {
    HeaderLogged,
    FeedbacksFilters,
    FiltersLoading,
    FeedbackCard,
    FeedbackCardLoading,
  },

  setup() {
    const state = reactive({
      isLoading: false,
      hasError: false,
      feedbacks: [],
      currentFeedbackType: '',
      pagination: { limit: 5, offset: 0 },
    });

    onMounted(() => fetchFeedbacks());

    function handleError(error) {
      state.hasError = !!error;
      state.isLoading = false;
    }

    async function fetchFeedbacks() {
      try {
        state.isLoading = true;

        const { data } = await services.feedbacks.getAll({
          ...state.pagination,
          type: state.currentFeedbackType,
        });

        state.feedbacks = data.results;
        state.pagination = data.pagination;

        state.isLoading = false;
      } catch (error) {
        handleError(error);
      }
    }

    return {
      state,
      handleError,
      fetchFeedbacks,
    };
  },
};
</script>
