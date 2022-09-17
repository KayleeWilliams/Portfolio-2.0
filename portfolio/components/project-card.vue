<template>
  <div class="w-full flex flex-row justify-center items-center">
    <!-- Text Card -->
    <div :class="projectBox" class="bg-cover bg-center lg:bg-none rounded-2xl w-80 h-64 lg:z-10 drop-shadow-lg">
        <div class="flex flex-col justify-between break-words text-left bg-box w-full h-full px-6 py-6 rounded-2xl opacity-95 lg:opacity-100">
            <div class="flex flex-col gap-2">
                <div class="flex flex-row justify-between items-center">
                    <p class="text-sm">{{ projectDates }}</p>

                    <!-- External Links -->
                    <div class="flex flex-row gap-1">
                        <a v-show="projectYoutube" :href="projectYoutube" target="_blank">
                            <MdiYoutube class="text-button transition ease-in-out delay-150 duration-300 hover:text-highlight hover:-translate-y-1 hover:scale-105 w-6 h-6 lg:w-8 lg:h-8" />
                        </a>

                        <a v-show="projectGithub" :href="projectGithub" target="_blank">
                            <MdiGithub class="text-button transition ease-in-out delay-150 duration-300 hover:text-highlight hover:-translate-y-1 hover:scale-105 w-6 h-6 lg:w-8 lg:h-8" />
                        </a>

                        <a v-show="projectExternal" :href="projectExternal" target="_blank">
                        <HeroiconsOutlineExternalLink class="text-button transition ease-in-out delay-150 duration-300 hover:text-highlight hover:-translate-y-1 hover:scale-105 w-6 h-6 lg:w-8 lg:h-8" />
                        </a>
                    </div>
                </div>
                <div class="flex flex-col gap-2">
                    <p class="text-xl font-bold">{{ projectTitle }}</p>
                    <p class="text-base">{{ projectDesc }}</p>
                </div>
            </div>
            <p class="text-xs">{{ projectLangs }}</p>
        </div>
    </div>


    <div :class="projectBackground" class="hidden lg:block bg-bg bg-cover bg-center rounded-2xl w-72 h-72 xl:w-96 xl-96">
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
    projectBackground: String,
    projectBox: String,
  }
}
</script>