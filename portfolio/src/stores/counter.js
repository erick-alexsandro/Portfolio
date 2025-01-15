import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCounterStore = defineStore('counter', () => {
  const time = ref('')

  function startTime() {
    const date = new Date()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()
    time.value = `${hours}:${minutes}:${seconds}`
  }

  return { time, startTime }
})
