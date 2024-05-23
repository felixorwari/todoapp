<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="md:container md:mx-auto px-4 md:px-6">
      <h1>My To Do List</h1>
    </div>
  </header>

  <RouterView />
</template>
