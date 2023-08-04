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

    <div>to do feedbacks list</div>
  </div>
</template>

<script>
import HeaderLogged from '../../components/HeaderLogged/HeaderLogged.vue';

export default {
  components: { HeaderLogged },
};
</script>
