<template>
  <div
    class="
      h-max
      w-full
      flex flex-col
      items-center
      justify-center
      text-center text-2xl
      mt-6
      gap-6
    "
  >
    <p class="font-bold text-4xl md:text-6xl">My Projects</p>
    <project-card
      projectDates="01/06/2022"
      projectBackground="bg-portfolio2"
      projectTitle="Portfolio Website 2.0"
      projectDesc="An update to my previous portfolio using Nuxt 3 and Tailwind CSS to showcase projects I've worked on."
      projectLangs="Nuxt 3 & TailwindCSS"
      projectGithub="https://github.com/KayleeWilliams/Portfolio-2.0"
      projectExternal="https://www.kayleewilliams.dev"
      projectBox="lg:order-first lg:mr-[-24px] bg-portfolio2"
    />

    <project-card
      projectDates="23/05/2022"
      projectBackground="bg-youtubeWrapped"
      projectTitle="YouTube Wrapped"
      projectDesc="Presenting a users yearly recap using data obtained by Google Takeout and YouTube's API."
      projectLangs="Nuxt 3, Tailwind CSS, YouTube API & Python"
      projectGithub="https://github.com/KayleeWilliams/YouTube-Wrapped"
      projectExternal="https://wrapped.kayleewilliams.dev"
      projectBox="lg:order-last lg:ml-[-24px] bg-youtubeWrapped"
    />

    <project-card
      v-show="expand == true"
      projectDates="15/05/2022"
      projectBackground="bg-portfolio1"
      projectTitle="Portfolio Website 1.0"
      projectDesc="A website I created with Nuxt 2 and Tailwind CSS to act as my portfolio and is used to showcase projects I've worked on."
      projectLangs="Nuxt 2 & Tailwind CSS"
      projectGithub="https://github.com/KayleeWilliams/Portfolio-1.0"
      projectExternal="https://portfolio1.kayleewilliams.dev"
      projectBox="lg:order-first lg:mr-[-24px] bg-portfolio1"
    />

    <project-card
      v-show="expand == true"
      projectDates="30/03/2022"
      projectBackground="bg-playerTracker1"
      projectTitle="League Player Tracker 1.0"
      projectDesc="A Discord bot designed to track multiple players to help improve efficency within teams."
      projectLangs="Python, Discord, MongoDB & Riot API"
      projectGithub="https://github.com/KayleeWilliams/League-Player-Tracker-1.0"
      projectBox="lg:order-last lg:ml-[-24px] bg-playerTracker1"
    />

    <button
      @click="expand = true"
      v-show="expand == false"
      class="bg-box px-6 py-4 rounded-2xl text-xl"
    >
      Show More
    </button>
    <button
      @click="expand = false"
      v-show="expand == true"
      class="bg-box px-6 py-4 rounded-2xl text-xl"
    >
      Show Less
    </button>
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
import { defineComponent } from "vue";

export default defineComponent({
  data: () => {
    return {
      expand: false,
    };
  },
});
</script>
