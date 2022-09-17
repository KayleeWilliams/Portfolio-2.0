<template>
  <div class="snap-y snap-mandatory scroll-auto overflow-y-scroll justify-center items-center h-screen w-screen bg-bg text-white px-8 md:px-20 lg:px-32 xl:px-64">
    <div class="snap-center snap-normal"><title-section @goTo="goTo" /></div>
    <div ref="About" class="snap-center snap-normal"><about-section /></div>
    <div class="snap-center snap-normal"><projects-section /></div>
    <div class="snap-center snap-normal"><contact-section /></div>
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
      this.$refs[location].scrollIntoView({behavior: "smooth"});
    }
  }
});
</script>