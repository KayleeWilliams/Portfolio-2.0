<template>
  <div class="bg-bg text-white font-custom w-screen h-full">
    <div class="flex flex-col justify-center items-center px-8 pt-40 md:px-20 lg:pt-24  lg:px-32">
      <title-section @goTo="goTo"/>
      <div ref="About"><about-section /></div>
      <projects-section />
      <contact-section />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data: () => {
    return {
    };
  },

  methods: {
    goTo(location) {    
      const top = this.$refs[location].offsetTop;
      window.scrollTo({
        top: top,
        left: 0,
        behavior: "smooth",
      });
    }
  }
});
</script>