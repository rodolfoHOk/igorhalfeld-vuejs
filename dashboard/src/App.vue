<template>
  <div>
    <modal-factory />

    <router-view />
  </div>
</template>

<script>
import { watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import ModalFactory from './components/ModalFactory/ModalFactory.vue';
import services from './services';
import { setCurrentUser } from './store/user';

export default {
  components: { ModalFactory },
  setup() {
    const router = useRouter();
    const route = useRoute();

    watch(
      () => route.path,
      async () => {
        if (route.meta.hasAuth) {
          const token = localStorage.getItem('token');

          if (!token) {
            router.push({ name: 'Home' });
            return;
          }

          try {
            const { data } = await services.users.getMe();
            setCurrentUser(data);
          } catch (error) {
            console.log('Erro ao tentar buscar os dados do usuário logado');
          }
        }
      }
    );
  },
};
</script>
