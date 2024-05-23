import { createRouter, createWebHistory } from 'vue-router'
import ToDoListView from '../views/ToDoListView.vue'
import CalendarView from '@/views/CalendarView.vue'
import SettingsView from '@/views/SettingsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'tasks',
      component: ToDoListView
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: CalendarView
    },
    {
      path: '/settings',
      name: 'settings',
      component: SettingsView
    },
  ]
})

export default router
