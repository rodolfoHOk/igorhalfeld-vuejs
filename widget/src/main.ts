import { createApp } from 'vue';
import { setup } from '@/utils/bootstrap';
import Playground from '@/views/Playground/PlaygroundIndex.vue';
import App from './App.vue';

import '@/assets/css/tailwind.css';
import '@/assets/css/fonts.css';
import 'animate.css';

setup({
  onProduction: () => {
    createApp(App).mount('#app');
  },

  onDevelopment: () => {
    createApp(Playground).mount('#app');
  },
});
