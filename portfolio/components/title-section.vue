<template>
    <div class="h-screen flex flex-col gap-4 items-center leading-tight">
        <p class="text-6xl md:text-9xl font-bold text-center"> Kaylee <br> Williams </p>
        <p class="text-5xl md:text-6xl font-bold text-center"> Software <br> Engineer </p>
        <a class="text-button hover:text-highlight animate-bounce h-12 w-12 mt-6 md:h-16 md:w-16 md:mt-8" @click="$emit('goTo', 'About')"> <MdiArrowDownThinCircleOutline class="h-12 w-12" /> </a>
    </div>
</template>
    
<script setup>
import MdiArrowDownThinCircleOutline from '~icons/mdi/arrow-down-thin-circle-outline'
</script>