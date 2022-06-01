<template>
  <div class="w-full flex flex-row justify-center">
    <!-- Text Card -->
    <div class="bg-playerTracker1 bg-cover bg-center w-64 h-56 rounded-2xl">
        <div class="flex flex-col justify-between break-words text-left bg-box w-full h-full px-6 py-6 rounded-2xl opacity-95">
            <div class="flex flex-row justify-between items-center">
                <p class="text-base">{{ projectDates }}</p>

                <!-- External Links -->
                <div class="flex flex-row gap-1">
                    <a v-show="projectYoutube" :href="projectYoutube" target="_blank">
                        <MdiYoutube class="w-6 h-6 text-button hover:text-highlight" />
                    </a>

                    <a v-show="projectGithub" :href="projectGithub" target="_blank">
                        <MdiGithub class="w-6 h-6 text-button hover:text-highlight" />
                    </a>

                    <a v-show="projectExternal" :href="projectExternal" target="_blank">
                    <HeroiconsOutlineExternalLink class="w-6 h-6 text-button hover:text-highlight" />
                    </a>
                </div>
            </div>
            <p class="text-xl font-bold">{{ projectTitle }}</p>
            <p class="text-lg">{{ projectDesc }}</p>
            <p class="text-base">{{ projectLangs }}</p>
        </div>
    </div>
  </div>
</template>

<script setup>
import MdiGithub from "~icons/mdi/github";
import MdiYoutube from "~icons/mdi/youtube";
import HeroiconsOutlineExternalLink from "~icons/heroicons-outline/external-link";
</script>

<script>
export default {
  props: {
    projectTitle: String,
    projectDates: String,
    projectDesc: String,
    projectLangs: String,
    projectGithub: String,
    projectYoutube: String,
    projectExternal: String,
  },
};
</script>
