<template>
  <article class="markdown-body" v-html="md">
  </article>
  <Button>这是默认按钮</Button>
</template>

<script>
import Button from '../lib/Button.vue'
import md from './markdown/start.md'

export default {
  name: "Start",
  components: {
    Button
  },
  data() {
    return {md}
  }
}
</script>

<style scoped>

</style>