<template>
  <div class="addData">
    <button class="addForm" v-on:click="showItems = !showItems">
      ADD NEW COST +
    </button>
    <div class="form" v-if="showItems">
      <input
        class="formField"
        placeholder="Payment Date"
        v-model="date"
      /><br />
      <SelectCategory
        :categories="categories"
        @changeCategory="changeCategory"
      />
      <br />
      <input
        type="number"
        class="formField"
        placeholder="Payment Amount"
        v-model="amount"
      /><br />
      <button class="saveBtn" @click="onSaveClick">Save!</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
import SelectCategory from './SelectCategory.vue'

export default {
  name: 'AddPaymentForm',
  components: { SelectCategory },
  data () {
    return {
      date: '',
      category: '',
      amount: '',
      showItems: false
    }
  },
  methods: {
    ...mapActions(['fetchCategory', 'fetchData']),
    ...mapMutations(['addDataToPaymentsList']),
    changeCategory (selected) {
      this.category = selected
    },
    onSaveClick () {
      const { category, amount } = this
      const data = {
        date: this.date || this.getCurrentDate,
        category,
        amount
      }
      this.addDataToPaymentsList(data)
    }
  },
  computed: {
    ...mapGetters({
      categories: 'getCategoryList'
    }),
    getCurrentDate () {
      const today = new Date()
      const d = today.getDate()
      const m = today.getMonth() + 1
      const y = today.getFullYear()
      return `${d}.${m}.${y}`
    }
  },
  created () {
    this.fetchData()
    if (!this.categories.length) {
      this.fetchCategory()
    }
  }
}
</script>

<style lang="scss" scoped>
.addForm {
  background-color: #40e0d0;
  color: white;
  border: transparent;
  margin: 15px;
}
.addData {
  margin-bottom: 15px;
}
.formField {
  margin-bottom: 20px;
}
.saveBtn {
  background-color: #40e0d0;
  color: white;
  border: transparent;
}
</style>
