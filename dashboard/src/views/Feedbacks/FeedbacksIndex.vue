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
                @select="changeFeedbacksType"
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
            v-if="
              state.feedbacks.length === 0 &&
              !state.isLoading &&
              !state.isLoadingFeedbacks &&
              !state.isLoadingMoreFeedbacks &&
              !state.hasError
            "
            class="text-lg text-center text-gray-800 font-regulars"
          >
            Ainda não há nenhum feedback recebido
          </p>

          <div
            v-if="state.isLoading || state.isLoadingFeedbacks"
            class="flex flex-col gap-6"
          >
            <feedback-card-loading />
            <feedback-card-loading />
            <feedback-card-loading />
          </div>

          <feedback-card
            v-else
            v-for="(feedback, index) in state.feedbacks"
            :key="feedback.id"
            :is-opened="index === 0"
            :feedback="feedback"
            class="mb-8"
          />

          <feedback-card-loading v-if="state.isLoadingMoreFeedbacks" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onErrorCaptured, onMounted, onUnmounted, reactive } from 'vue';
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
      isLoadingFeedbacks: false,
      isLoadingMoreFeedbacks: false,
      currentFeedbackType: '',
      pagination: { limit: 5, offset: 0, total: 0 },
    });

    onMounted(() => {
      fetchFeedbacks();
      window.addEventListener('scroll', handleScroll, false);
    });

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll, false);
    });

    onErrorCaptured(handleError);

    function handleError(error) {
      state.hasError = !!error;
      state.isLoading = false;
      state.isLoadingFeedbacks = false;
      state.isLoadingMoreFeedbacks = false;
    }

    async function handleScroll() {
      const isBottomOfWindow =
        Math.ceil(document.documentElement.scrollTop + window.innerHeight) >=
        document.documentElement.scrollHeight;

      if (state.isLoading || state.isLoadingMoreFeedbacks) {
        return;
      }

      if (!isBottomOfWindow) {
        return;
      }

      if (state.feedbacks.length >= state.pagination.total) {
        return;
      }

      try {
        state.isLoadingMoreFeedbacks = true;

        const { data } = await services.feedbacks.getAll({
          ...state.pagination,
          type: state.currentFeedbackType,
          offset: state.pagination.offset + 5,
        });

        if (data.results.length) {
          state.feedbacks.push(...data.results);
        }

        state.pagination = data.pagination;
        state.isLoadingMoreFeedbacks = false;
      } catch (error) {
        handleError(error);
      }
    }

    async function changeFeedbacksType(type) {
      try {
        state.isLoadingFeedbacks = true;

        state.pagination.limit = 5;
        state.pagination.offset = 0;
        state.currentFeedbackType = type;

        const { data } = await services.feedbacks.getAll({
          type,
          ...state.pagination,
        });

        state.feedbacks = data.results;
        state.pagination = data.pagination;

        state.isLoadingFeedbacks = false;
      } catch (error) {
        handleError(error);
      }
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
      changeFeedbacksType,
    };
  },
};
</script>
