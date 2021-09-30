<template>
  <div class="data">
    <div class="table">
      <div class="table__cell_header">ID</div>
      <div class="table__cell_header">Date</div>
      <div class="table__cell_header">Category</div>
      <div class="table__cell_header">Value</div>
    </div>
    <div class="table" v-for="(item, index) in items" v-bind:key="index">
      <div class="table__cell" title="ID">{{ index }}</div>
      <div class="table__cell" title="Date">{{ item.date }}</div>
      <div class="table__cell">{{ item.category }}</div>
      <div class="table__cell">{{ item.value }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PaymentDisplay',
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.data {
  text-align: center;
}
.table {
  display: grid;
  grid-template-columns: 1fr 2fr 2fr 2fr;
  width: 400px;
  margin: 0 auto;
}
.table__cell {
  border-bottom: solid 1px #eaeaea;
}
.table__cell_header {
  font-size: 15px;
  font-weight: 600;
  border-bottom: solid 1px #eaeaea;
}
</style>
