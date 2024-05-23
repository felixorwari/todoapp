<script setup>
import { ref } from 'vue'
import { useTodoListStore } from '@/stores/todoList'

const todo = ref('')

const store = useTodoListStore()

function addTaskAndClear(item) {
  if (item.length === 0) return

  store.addTodo(item)
  todo.value = ''
}
</script>

<template>
  <form @submit.prevent="addTaskAndClear(todo)">
    <div class="flex items-center flex-nowrap">
      <input
        type="text"
        name="todo"
        v-model="todo"
        class="w-full focus-visible:outline-sky-300 px-4 py-2.5 border border-gray-300 rounded focus:ring-2 focus:ring-sky-200 focus:ring-offset-2 placeholder:text-gray-500"
        placeholder="Task"
        required
      />

      <button
        type="submit"
        :disabled="!todo"
        class="px-6 py-3.5 text-sm font-semibold shrink-0 tracking-widest text-white uppercase transition-all bg-indigo-600 rounded hover:bg-indigo-500 disabled:opacity-25 disabled:shadow-none disabled:text-indigo-900 disabled:bg-indigo-200 ms-4 hover:text-white focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400 hover:shadow-xl active:shadow-none"
      >
        Add Task
      </button>
    </div>
  </form>
</template>
