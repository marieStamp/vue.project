<template>
  <div class="data">
    <div class="table">
      <div class="table__cell_header">ID</div>
      <div class="table__cell_header">Date</div>
      <div class="table__cell_header">Category</div>
      <div class="table__cell_header">Value</div>
      <div class="table__cell_header"></div>
    </div>
    <div class="table" v-for="(item, index) in items" v-bind:key="index">
      <div class="table__cell" title="ID">{{ index }}</div>
      <div class="table__cell" title="Date">{{ item.date }}</div>
      <div class="table__cell">{{ item.category }}</div>
      <div class="table__cell">{{ item.amount }}</div>
      <div
        class="table__cell_context"
        @click="onClickContext($event, item.index)"
        :item="index"
      >
        ...
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex"
export default {
  name: "PaymentDisplay",
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {}
  },
  methods: {
    ...mapMutations(["deleteDataFromPaymentsList"]),
    onClickContext (event, index) {
      const items = [
        {
          text: "Edit",
          action: () => {
            this.$modal.show({
              title: "Adit Payment Form",
              content: "AddPaymentForm",
              index
            })
          }
        },
        {
          text: "Delete",
          action: () => {
            this.deleteDataFromPaymentsList(index)
          }
        }
      ]
      this.$context.show({ event, items })
    }
    // actionDelete (index) {
    //   mutation deleteItem
    //   this.$context.close()
  }
}
</script>

<style lang="scss" scoped>
.data {
  text-align: center;
}
.table {
  display: grid;
  grid-template-columns: 1fr 2fr 2fr 2fr 0.2fr;
  width: 400px;
  margin: 0 auto;
}
.table__cell {
  border-bottom: solid 1px #eaeaea;
  &_header {
    font-size: 15px;
    font-weight: 600;
    border-bottom: solid 1px #eaeaea;
  }
  &_context {
    cursor: pointer;
  }
}
</style>
