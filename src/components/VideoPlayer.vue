<template>
  <video :src="src" ref="video" />
  <div v-if="video">
    <button @click="video.play()">Play</button>
    <button @click="video.pause()">Pause</button>
  </div>
</template>

<script setup lang="ts">
import { useGlobalEvent } from "@/composables/useGlobalEvent";
import { ref } from "vue";

const props = defineProps({ src: { type: String } });
const video = ref(null);

useGlobalEvent("keypress", (e) => {
  if (e.charCode !== 32) {
    return;
  }
  e.preventDefault();
  video.value.paused ? video.value.play() : video.value.pause();
});
</script>
