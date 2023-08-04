<template>
  <content-loader class="flex flex-col rounded" width="100%" height="180px">
    <content-loader
      class="mt-1 ml-2 rounded"
      width="72px"
      height="28px"
      animation-duration="1.9s"
    />

    <content-loader
      class="mt-4 ml-2 rounded"
      width="90%"
      height="24px"
      animation-duration="2.0s"
    />

    <content-loader
      class="mt-2 ml-2 rounded"
      width="90%"
      height="24px"
      animation-duration="2.3s"
    />

    <content-loader
      class="mt-2 ml-2 rounded"
      width="90%"
      height="24px"
      animation-duration="2.7s"
    />

    <content-loader
      class="mt-2 ml-2 rounded"
      width="90%"
      height="24px"
      animation-duration="2.9s"
    />
  </content-loader>
</template>

<script>
import ContentLoader from '../../components/ContentLoader/ContentLoader.vue';

export default {
  components: { ContentLoader },
};
</script>

<style></style>
