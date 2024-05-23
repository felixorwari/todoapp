<script setup>
import { useTodoListStore } from '@/stores/todoList'
import { storeToRefs } from 'pinia'

const store = useTodoListStore()

const { todoList } = storeToRefs(store)

const { toggleCompleted } = store
</script>

<template>
  <h1 class="mb-6 text-4xl font-semibold">
    Today
    <span class="inline-block text-sm text-gray-500 ms-auto">{{ todoList.length }} Tasks</span>
  </h1>

  <div
    v-for="todo in todoList"
    :key="todo.id"
    class="flex items-center px-6 py-4 bg-white border border-gray-200 rounded shadow"
  >
    <div
      @click.stop="toggleCompleted(todo.id)"
      :class="{ 'border-0': todo.completed }"
      class="inline-block w-6 h-6 transition-all border border-gray-300 rounded-full hover:cursor-pointer"
    >
      <span v-show="todo.completed">&#10004;</span>
    </div>
    <span
      class="border-l border-gray-200 ms-4 ps-4"
      :class="{ 'line-through text-gray-400': todo.completed }"
      >{{ todo.item }}</span
    >
  </div>
</template>
