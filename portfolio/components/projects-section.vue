<template>
  <div
    class="
      h-full
      w-full
      flex flex-col
      items-center
      justify-center
      text-center text-2xl
      mt-6
      gap-6
    "
  >
    <p class="font-bold text-4xl md:text-6xl">Featured Projects</p>

    <project-card
      projectDates="10/09/2022"
      projectBackground="bg-timetableCalendar"
      projectTitle="Timetable to Calendar"
      projectDesc="A tool created with Python to scrape data from my university timetable and use the data to add, modify and remove events on Google Calendar."
      projectLangs="Python & Google Calendar API"
      projectGithub="https://github.com/KayleeWilliams/Timetable-to-Calendar"
      projectYoutube="https://youtu.be/WXeFmFgpb64"
      projectBox="lg:order-first lg:mr-[-24px] bg-timetableCalendar"
    />
    
    <project-card
      projectDates="15/06/2022"
      projectBackground="bg-playerTracker2"
      projectTitle="League Player Tracker 2.0"
      projectDesc="A Discord Bot to provide information about the users League of Legends matches or generate a summary over multiple games."
      projectLangs="Typescript, Discord.js, MongoDB & Riot API"
      projectGithub="https://github.com/KayleeWilliams/League-Player-Tracker-2.0"
      projectBox="lg:order-last lg:ml-[-24px] bg-playerTracker2"
    />
    
    <project-card
      v-show="expand == true"
      projectDates="01/06/2022"
      projectBackground="bg-portfolio2"
      projectTitle="Portfolio Website 2.0"
      projectDesc="My portfolio is created with Vue.js, Nuxt 3 and Tailwind CSS to showcase projects that I made."
      projectLangs="Vue.js, Nuxt 3, Vue.js & TailwindCSS"
      projectGithub="https://github.com/KayleeWilliams/Portfolio-2.0"
      projectExternal="https://www.kayleewilliams.dev"
      projectBox="lg:order-first lg:mr-[-24px] bg-portfolio2"
    />

    <project-card
      v-show="expand == true"
      projectDates="23/05/2022"
      projectBackground="bg-youtubeWrapped"
      projectTitle="YouTube Wrapped"
      projectDesc="Using Google Takeout and YouTube API to present a recap of a user's data for the past year."
      projectLangs="Vue.js, Nuxt 3, Tailwind CSS, YouTube API & Python"
      projectGithub="https://github.com/KayleeWilliams/YouTube-Wrapped"
      projectExternal="https://wrapped.kayleewilliams.dev"
      projectBox="lg:order-last lg:ml-[-24px] bg-youtubeWrapped"
    />

    <project-card
      v-show="expand == true"
      projectDates="15/05/2022"
      projectBackground="bg-portfolio1"
      projectTitle="Portfolio Website 1.0"
      projectDesc="A website created with Vue.js, Nuxt 2 and Tailwind CSS to showcase projects I have worked on."
      projectLangs="Vue.js, Nuxt 2 & Tailwind CSS"
      projectGithub="https://github.com/KayleeWilliams/Portfolio-1.0"
      projectExternal="https://portfolio1.kayleewilliams.dev"
      projectBox="lg:order-first lg:mr-[-24px] bg-portfolio1"
    />

    <project-card
      v-show="expand == true"
      projectDates="30/03/2022"
      projectBackground="bg-playerTracker1"
      projectTitle="League Player Tracker 1.0"
      projectDesc="A Discord Bot designed to track multiple players to help improve efficiency within teams."
      projectLangs="Python, Discord, MongoDB & Riot API"
      projectGithub="https://github.com/KayleeWilliams/League-Player-Tracker-1.0"
      projectBox="lg:order-last lg:ml-[-24px] bg-playerTracker1"
    />

    <button
      @click="expand = true"
      v-show="expand == false"
      class="bg-box px-6 py-4 rounded-2xl text-xl mb-8"
    >
      Show More
    </button>
    <button
      @click="expand = false"
      v-show="expand == true"
      class="bg-box px-6 py-4 rounded-2xl text-xl mb-48"
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
