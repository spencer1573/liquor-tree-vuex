<template>
  <div id="app">
            <tree
              :data="items"
              :options="options"
              ref="tree"
            >
  </div>
 </template>
<script>

import Store from './store/index.js'

export default {
  data: function() {
    return {
      options: {},
      items: dataOne,
    }
  },
  mounted() {
    console.log("🎹", this.$refs.tree);
    this.$nextTick(() => {
      //this.$refs.tree.append({ text: "record" });

    })

  },

}
</script>
