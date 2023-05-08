<!--==================== template ====================-->
<template>
  <h1>ToDoアプリ</h1>

  <form action="#" method="post">
    <input type="text" placeholder="todoを入力" v-model="todo" ref="inputField" />
    <button type="submit" @click.prevent="addList">追加</button>
  </form>

  <div class="todoList-container">
    <!-- <ul> -->
    <TransitionGroup mode="out-in" name="todoList" tag="ul">
      <li v-for="(task, index) of tasks" :key="task" ref="task" class="list">
        {{ task }}
        <button type="button" @click="deleteTask(index)">削除</button>
      </li>
    </TransitionGroup>
    <!-- </ul> -->
  </div>
</template>

<!--==================== script ====================-->
<script setup>
import { ref } from 'vue'

const todo = ref()
const tasks = ref([])
const inputField = ref(null)

const addList = () => {
  // 何も入力せずに「追加」ボタンを押したときは何もしない
  if (todo.value === '') {
    return
  }

  tasks.value.push(todo.value)
  todo.value = ''
  inputField.value.focus()
}

const deleteTask = (index) => {
  tasks.value.splice(index, 1)
}
</script>

<!--==================== style ====================-->
<style scoped lang="scss">
.todoList-enter-active,
.todoList-leave-active {
  transition: opacity 0.3s;
}
.todoList-enter-from {
  opacity: 0;
}
.todoList-enter-to {
  opacity: 1;
}
.todoList-leave-from {
  opacity: 1;
}
.todoList-leave-to {
  opacity: 0;
}
.list {
  display: flex;
  justify-content: space-between;
  padding: 0 8px 0 8px;
}
.list + .list {
  margin-top: 8px;
}
.todoList-container {
  width: 30%;
  background-color: #ccc;
}
</style>
