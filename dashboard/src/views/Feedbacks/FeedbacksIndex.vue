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
              <feedbacks-filters class="mt-8" />
            </template>

            <template #fallback> ...loading </template>
          </suspense>
        </div>
        <div class="col-span-3 px-10 pt-20">lista</div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderLogged from '../../components/HeaderLogged/HeaderLogged.vue';
import FeedbacksFilters from './FeedbacksFilters.vue';

export default {
  components: { HeaderLogged, FeedbacksFilters },
};
</script>
