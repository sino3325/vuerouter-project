<template>
  <main class="main">
    <RouterView name="header" />
    <RouterView name="main" />
    <RouterView name="footer" />
  </main>
</template>

<script setup>
// 削除したらだめ
import { RouterView } from 'vue-router'
</script>

<style scoped lang="scss">
.main {
  padding: 16px;
}
</style>
