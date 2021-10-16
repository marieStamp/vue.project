<template>
  <div>
    <select class="select_category" v-model="selected" @change="changeCategory">
      <option v-for="(option, index) in categories" :key="index">
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'SelectCategory',
  props: {
    categories: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      selected: ''
    }
  },
  methods: {
    changeCategory () {
      this.$emit('changeCategory', this.selected)
    }
  }
}
</script>
<style lang="scss" scoped>
.select_category {
  width: 178.67px;
  height: 21.11px;
}
</style>
