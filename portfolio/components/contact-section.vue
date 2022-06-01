<template>
    <div class="h-screen w-full flex flex-col gap-16 items-center justify-center text-center leading-tight text-2xl">
        <p class="text-4xl font-bold"> Contact Me! </p>
        <p> Feel free to get in contact with me by Email or on Linkedin. </p>
        <div class="flex flex-row gap-8">
            <MdiEmail class="w-12 h-12 text-button hover:text-highlight" />
            <MdiLinkedin class="w-12 h-12 text-button hover:text-highlight" />
        </div>
    </div>

</template>

<script setup>
import MdiLinkedin from '~icons/mdi/linkedin'
import MdiEmail from '~icons/mdi/email'
</script>