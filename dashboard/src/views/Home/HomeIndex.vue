<template>
  <div>
    <home-header @create-account="handleAccountCreate" @login="handleLogin" />
    <home-contact />
    <div class="flex justify-center py-10 bg-brand-gray">
      <p class="font-medium text-center text-gray-800">feedbacker © 2023</p>
    </div>
  </div>
</template>

<script>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import HomeHeader from './HomeHeader.vue';
import HomeContact from './HomeContact.vue';
import useModal from '../../hooks/useModal';

export default {
  components: { HomeHeader, HomeContact },
  setup() {
    const router = useRouter();
    const modal = useModal();

    onMounted(() => {
      const token = localStorage.getItem('token');
      if (token) {
        router.push({ name: 'Feedbacks' });
      }
    });

    function handleLogin() {
      modal.open({
        component: 'ModalLogin',
      });
    }
    function handleAccountCreate() {
      modal.open({
        component: 'ModalCreateAccount',
      });
    }

    return {
      handleLogin,
      handleAccountCreate,
    };
  },
};
</script>
