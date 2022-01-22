<template>
  <div class="hello">
    <button @click="test">测试</button>
  </div>
</template>

<script>
import axios from 'axios'
axios.defaults.withCredentials = true
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created () {
    axios.get('http://localhost:2022/login')
  },
  methods: {
    test () {
      axios.get('http://localhost:2022/api/lately/list')
    }
  }
}
</script>

<style scoped>
</style>
