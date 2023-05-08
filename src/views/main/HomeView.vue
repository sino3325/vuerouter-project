<template>
  <RouterLink :to="{ name: 'about' }" class="link">aboutページへ</RouterLink>
  <div class="todo-list">
    <h2>ToDo List</h2>
    <form @submit.prevent="addItem">
      <input type="text" v-model="newItem" placeholder="Add new item" />
      <button>Add</button>
    </form>
    <ul>
      <li v-for="(item, index) in todoList" :key="index">
        <input type="checkbox" v-model="item.completed" />
        <span :class="{ completed: item.completed }">{{ item.name }}</span>
        <button @click="deleteItem(index)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const todoList = ref([
  { name: 'Buy groceries', completed: false },
  { name: 'Do laundry', completed: false },
  { name: 'Clean the house', completed: true }
])

const newItem = ref('')

function addItem() {
  if (newItem.value !== '') {
    todoList.value.push({
      name: newItem.value,
      completed: false
    })
    newItem.value = ''
  }
}

function deleteItem(index) {
  todoList.value.splice(index, 1)
}
</script>

<style scoped lang="scss">
.completed {
  text-decoration: line-through;
}
.link {
  color: blue;
  &:hover {
    text-decoration: underline solid blue;
  }
}
</style>
