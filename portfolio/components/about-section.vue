<template>
  <div
    class="h-screen w-full flex flex-col items-start justify-center text-left leading-tight gap-8 md:gap-16">
    <!-- About Section -->
    <div class="flex flex-col gap-6 text-2xl md:text-3xl">
      <p class="text-4xl md:text-6xl font-bold">About Me</p>
      <p>
        Hi, I'm Kaylee Williams. I am a software engineer currently studying
        Computer Science at university and will be graduating in 2023.
        <br /><br />
        Outside of programming I enjoy watching and being involed with Esports.
      </p>
    </div>

    <!-- Skills/Toolbox Section -->
    <div class="flex flex-col text-2xl items-center w-full gap-6 md:gap-8">
      <p class="text-4xl md:text-6xl font-bold">My Toolbox</p>
      <div class="flex flex-row flex-wrap">
        <MdiLanguagePython class="w-12 h-12 md:w-16 md:h-16 basis-1/3 mb-12" />
        <MdiLanguageHtml5 class="w-12 h-12 md:w-16 md:h-16 basis-1/3 mb-12" />
        <MdiLanguageCss3 class="w-12 h-12 md:w-16 md:h-16 basis-1/3 mb-12" />
        <MdiVuejs class="w-12 h-12 md:w-16 md:h-16 basis-1/3" />
        <MdiNodejs class="w-12 h-12 md:w-16 md:h-16 basis-1/3" />
        <SimpleIconsFigma class="w-12 h-12 md:w-16 md:h-16 basis-1/3" />
      </div>
    </div>
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