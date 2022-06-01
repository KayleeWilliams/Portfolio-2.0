<template>
  <div
    class="
      h-max
      w-full
      flex flex-col
      gap-6
      items-center
      justify-center
      text-center text-2xl
      mt-6
    "
  >
    <p class="text-4xl font-bold">My Projects</p>
    <project-card
      projectDates="01/06/2022"
      projectTitle="Portfolio 2.0"
      projectDesc="A website to display projects I work on."
      projectLangs="Nuxt 3 & TailwindCSS"
      projectGithub="https://www.google.co.uk"
      projectYoutube="https://www.google.co.uk"
    />

    <project-card
      projectDates="01/06/2022"
      projectTitle="YouTube Wrapped"
      projectDesc="A website to display projects I work on."
      projectLangs="Nuxt 3 & TailwindCSS"
      projectGithub="https://www.google.co.uk"
      projectYoutube="https://www.google.co.uk"
    />

    <project-card
        v-show="expand == true"
      projectDates="01/06/2022"
      projectTitle="YouTube Wrapped"
      projectDesc="A website to display projects I work on."
      projectLangs="Nuxt 3 & TailwindCSS"
      projectGithub="https://www.google.co.uk"
      projectYoutube="https://www.google.co.uk"
    />

    <button @click="expand = true" v-show="expand == false" class="bg-box px-6 py-4 rounded-2xl text-xl"> Show More </button>
    <button @click="expand = false" v-show="expand == true" class="bg-box px-6 py-4 rounded-2xl text-xl"> Show Less </button>

  </div>
</template>

<script setup>
import MdiLanguagePython from "~icons/mdi/language-python";
import MdiVuejs from "~icons/mdi/vuejs";
import MdiNodejs from "~icons/mdi/nodejs";
import MdiLanguageCss3 from "~icons/mdi/language-css3";
import MdiLanguageHtml5 from "~icons/mdi/language-html5";
import SimpleIconsFigma from "~icons/simple-icons/figma";
</script>

<script>
import { defineComponent } from 'vue'

export default defineComponent ({
    data: () => {
            return {
                expand: false
            };
        },
});
</script>
