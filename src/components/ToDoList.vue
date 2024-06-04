<script setup>
import { useTodoListStore } from '@/stores/todoList'
import { storeToRefs } from 'pinia'

const store = useTodoListStore()

const { todoList } = storeToRefs(store)

const { toggleCompleted, deleteTodo } = store
</script>

<template>
  <h1 class="mb-6 text-4xl font-semibold">
    Today
    <span class="inline-block text-sm text-gray-500 ms-auto">{{ todoList.length }} Tasks</span>
  </h1>

  <div
    v-for="todo in todoList"
    :key="todo.id"
    class="flex items-start py-4 pl-6 bg-white border border-gray-200 rounded shadow"
  >
    <button
      type="button"
      title="Toggle completion"
      @click.stop="toggleCompleted(todo.id)"
      :class="[ todo.completed ? 'border-transparent' : 'border-gray-300']"
      class="inline-flex w-6 h-6 transition-all border rounded shrink-0"
    >
      <span v-show="todo.completed">&#10004;</span>
    </button>

    <span
      class="w-full border-gray-200 border-x ms-4 ps-4"
      :class="{ 'line-through text-gray-400': todo.completed }"
      >{{ todo.item }}</span
    >

    <button
      type="button"
      title="Delete"
      @click="deleteTodo(todo.id)"
      class="inline-flex px-4 transition-all ms-auto"
    >
      &#10060;
    </button>
  </div>
</template>
