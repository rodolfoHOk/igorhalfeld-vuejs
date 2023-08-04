<template>
  <content-loader
    class="flex flex-col gap-3 rounded px-8 py-5"
    width="100%"
    height="180"
  >
    <div class="mt-3 flex justify-between">
      <content-loader
        class="rounded"
        width="70px"
        height="23px"
        animation-duration="2s"
      />

      <content-loader
        class="rounded"
        width="160px"
        height="23px"
        animation-duration="2.1s"
      />
    </div>

    <content-loader
      class="rounded"
      width="100%"
      height="23px"
      animation-duration="2.3s"
    />

    <content-loader
      class="rounded"
      width="55%"
      height="23px"
      animation-duration="2.5s"
    />

    <content-loader
      class="rounded"
      width="60%"
      height="23px"
      animation-duration="2.7s"
    />
  </content-loader>
</template>

<script>
import ContentLoader from '../ContentLoader/ContentLoader.vue';
export default {
  components: { ContentLoader },
};
</script>

ContentLoader
