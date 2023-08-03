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

          const { data } = await services.users.getMe();

          console.log(data);
        }
      }
    );
  },
};
</script>
