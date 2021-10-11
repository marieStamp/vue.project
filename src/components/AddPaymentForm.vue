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
      <select
        class="formField select"
        placeholder="Payment Description"
        v-model="category"
      >
        <option v-for="option in categoryList" :key="option">
          {{ option }}
        </option>
      </select>
      <br />
      <input
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
  props: {
    categoryList: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      amount: '',
      category: '',
      date: '',
      showItems: false
    }
  },
  computed: {
    getCurrentDate () {
      return new Intl.DateTimeFormat('ru-RU', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      }).format(new Date())
    },
    ...mapGetters({
      categories: 'getCategoryList'
    })
  },
  methods: {
    onSaveClick () {
      const data = {
        amount: Number(this.amount),
        category: this.category,
        date: this.date || this.getCurrentDate
      }
      this.$emit('emitName', data)
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
  margin-bottom: 10px;
}
.select {
  width: 178.67px;
}
.saveBtn {
  background-color: #40e0d0;
  color: white;
  border: transparent;
}
</style>
