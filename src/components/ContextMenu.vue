<template>
  <v-list>
    <v-list-item
      v-for="item in editItem"
      :key="item.text"
      @click="onClick(item)"
    >
      <v-list-item-title v-text="item.text"></v-list-item-title>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  name: "ContextMenu",
  data () {
    return {
      // items: [],
      // shown: false
    }
  },
  props: {
    editItem: []
  },
  methods: {
    onClick (item) {
      item.action()
      this.onClose()
    },
    onShown ({ items }) {
      this.items = items
      this.shown = true
    },
    onClose () {
      this.items = []
      this.shown = false
    }
  }
  // mounted () {
  //   this.$context.EventBus.$on("shown", this.onShown)
  //   this.$context.EventBus.$on("close", this.onClose)
  // },
  // beforeDestroy () {
  //   this.$context.EventBus.$off("shown", this.onShown)
  //   this.$context.EventBus.$off("close", this.onClose)
  // }
}
</script>

<style lang="scss" scoped>
.context {
  position: absolute;
  background: #eee;
  cursor: pointer;
}
</style>
