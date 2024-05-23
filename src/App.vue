<script setup>
import { RouterLink, RouterView } from 'vue-router'
import CalendarIcon from './components/Icons/CalendarIcon.vue'
import TasksIcon from './components/Icons/TasksIcon.vue'
import SettingsIcon from './components/Icons/SettingsIcon.vue'
</script>

<template>
  <header class="sticky top-0 z-50 w-full border-b border-gray-200 shadow-xl shadow-gray-50">
    <div class="w-full max-w-screen-xl px-4 mx-auto bg-white/80 backdrop-blur">
      <nav class="flex items-center gap-8 pt-4 text-gray-500">
        <RouterLink
          :to="{ name: 'tasks' }"
          exactActiveClass="text-indigo-600 border-indigo-600"
          class="flex items-center px-2 py-4 font-semibold transition-all border-b-4 border-transparent hover:border-indigo-500"
        >
          <TasksIcon class="inline-block w-4 h-4 me-3" />
          Tasks
        </RouterLink>

        <RouterLink
          :to="{ name: 'calendar' }"
          exactActiveClass="text-indigo-600 border-indigo-600"
          class="flex items-center px-2 py-4 font-semibold transition-all border-b-4 border-transparent hover:border-indigo-500"
        >
          <CalendarIcon class="inline-block w-4 h-4 me-3" />
          Calendar
        </RouterLink>

        <RouterLink
          :to="{ name: 'settings' }"
          exactActiveClass="text-indigo-600 border-indigo-600"
          class="flex items-center px-2 py-4 font-semibold transition-all border-b-4 border-transparent hover:border-indigo-500"
        >
          <SettingsIcon class="inline-block w-4 h-4 me-3" />
          Settings
        </RouterLink>
      </nav>
    </div>
  </header>

  <main class="w-full max-w-screen-xl min-h-screen px-4 py-12 mx-auto">
    <RouterView />
  </main>

  <footer class="py-12 border-t border-gray-200">
    <div class="w-full max-w-screen-xl px-4 mx-auto mt-auto">
      <p class="text-sm text-gray-500">&copy; 2024. Vijukumu. All rights reserved.</p>
    </div>
  </footer>
</template>
