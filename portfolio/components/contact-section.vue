<template>
    <div class="h-screen w-full flex flex-col gap-16 items-center justify-center text-center leading-tight text-2xl md:text-3xl">
        <p class="font-bold text-4xl md:text-6xl"> Contact Me! </p>
        <p> Feel free to get in contact with me by Email or on Linkedin. </p>
        <div class="flex flex-row gap-8">
            <a href="mailto:kaylee@kayleewilliams.dev" target="_blank">
                <MdiEmail class="text-button hover:text-highlight w-12 h-12 md:w-16 md:h-16" />
            </a>

             <a href="https://www.linkedin.com/in/kaylee-williams-1559251bb" target="_blank">
                <MdiLinkedin class="text-button hover:text-highlight w-12 h-12 md:w-16 md:h-16" />
            </a>
        </div>
    </div>

</template>

<script setup>
import MdiLinkedin from '~icons/mdi/linkedin'
import MdiEmail from '~icons/mdi/email'
</script>