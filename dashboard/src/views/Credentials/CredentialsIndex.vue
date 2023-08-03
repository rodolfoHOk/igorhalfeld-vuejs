<template>
  <div>
    <div class="flex justify-center w-full h-28 bg-brand-main">
      <header-logged />
    </div>

    <div class="flex flex-col items-center justify-center h-64 bg-brand-gray">
      <h1 class="text-4xl font-black text-center text-gray-800">Credenciais</h1>

      <p class="mt-2 text-2xl font-regular text-center text-gray-800">
        Guia de instalação e geração de suas credenciais
      </p>
    </div>

    <div class="flex justify-center w-full h-full">
      <div class="flex flex-col justify-center w-4/5 max-w-6xl py-10">
        <h1 class="text-3xl font-black text-brand-darkgray">
          Instalação e configuração
        </h1>

        <p class="mt-10 text-lg text-gray-800 font-regular">
          Este aqui é a sua chave de api
        </p>

        <div
          class="flex py-3 px-5 mt-2 rounded items-center justify-between bg-brand-gray w-[630px] text-lg font-medium"
        >
          <span>{{ store.User.currentUser.apiKey }}</span>

          <div class="flex">
            <icon
              name="CopyIcon"
              :color="brandColors.graydark"
              size="24"
              class="cursor-pointer"
            />

            <icon
              name="LoadingIcon"
              :color="brandColors.graydark"
              size="24"
              class="cursor-pointer ml-3"
            />
          </div>
        </div>

        <p class="mt-5 text-lg text-gray-800 font-regular">
          Coloque o script abaixo no seu site para começar a receber feedbacks
        </p>

        <div
          class="py-3 px-5 mt-2 rounded bg-brand-gray w-[630px] text-lg font-medium overflow-x-scroll"
        >
          <pre>
&lt;script src="https://rodolfoHOk-feedbacker-widget.netlify.app?api_key={{
              store.User.currentUser.apiKey
            }}"&gt;&lt;/script&gt;</pre
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import useStore from '@/hooks/useStore';
import HeaderLogged from '../../components/HeaderLogged/HeaderLogged.vue';
import palette from '../../../palette';
import Icon from '../../components/Icon/IconFactory.vue';

export default {
  components: { HeaderLogged, Icon },

  setup() {
    const store = useStore();

    return {
      store,
      brandColors: palette.brand,
    };
  },
};
</script>
