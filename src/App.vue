<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view /> -->
    <tree
      :data="data"
      :options="options" />
  </div>
</template>
<script>
// import 
import { dataOne } from './data/items-one.js'

export default {
  data() {
    return {
      options: {
        store: {
          store: this.$store,
          getter: () => {
            return this.$store.getters.tree
          },
          dispatcher(tree) {
            this.$store.dispatch('updateTree', tree)
          }
        },
        checkbox: true
      }
    }
  },
  computed: {
    data() {
      return dataOne
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
