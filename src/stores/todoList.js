import { defineStore } from "pinia";

export const useTodoListStore = defineStore('todoList', {
  state: () => ({
    todoList: [
      { item: 'Get the old bike working', id: 0, completed: false },
      { item: 'Buy my dog a new toy', id: 1, completed: false },
      { item: 'Finish my design portfolio', id: 2, completed: false },
      { item: 'Post new content on my socials', id: 3, completed: true },
    ],
  }),

  actions: {
    addTodo(item) {
      this.todoList.push({ item, id: this.length, completed: false })
    },

    deleteTodo(itemId) {
      this.todoList = this.todoList.filter((object) => {
        return object.id !== itemId
      })
    },

    toggleCompleted(itemId) {
      const task = this.todoList.find((item) => itemId === item.id)
      if (task) task.completed = !task.completed
    }
  }
})