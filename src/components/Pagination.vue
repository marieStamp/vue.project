<template>
  <div class="pagination_wrapper">
    <div @click="onClick(curPage - 1)">&lt;</div>
    <div
      v-for="(i, index) in amount"
      :key="index"
      :class="{ active: curPage === i }"
      @click="onClick(i)"
    >
      {{ i }}
    </div>
    <div @click="onClick(curPage + 1)">&gt;</div>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    numOfPages: Number,
    curPage: Number,
    length: Number
  },
  computed: {
    amount () {
      return Math.ceil(this.length / this.numOfPages)
    }
  },
  methods: {
    onClick (p) {
      if (p < 1 || p > this.amount) {
        return
      }
      this.$emit('paginate', p)
    }
  }
}
</script>

<style lang="scss" scoped>
.pagination {
  &_wrapper {
    display: flex;
    justify-content: center;
    & > div {
      padding: 10px;
      cursor: pointer;
    }
  }
}
.active {
  background-color: #40e0d0;
  color: white;
}
</style>
