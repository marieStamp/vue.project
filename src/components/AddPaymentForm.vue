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
      <input
        class="formField"
        placeholder="Payment Description"
        v-model="category"
      /><br />
      <input
        class="formField"
        placeholder="Payment Amount"
        v-model="value"
      /><br />
      <button class="saveBtn" @click="onSaveClick">Save!</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddPaymentForm',
  data () {
    return {
      value: '',
      category: '',
      date: '',
      showItems: false
    }
  },
  computed: {
    getCurrentDate () {
      const today = new Date()
      const d = today.getDate()
      const m = today.getMonth() + 1
      const y = today.getFullYear()
      return `${d}.${m}.${y}`
    }
  },
  methods: {
    onSaveClick () {
      const data = {
        value: this.value,
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
.saveBtn {
  background-color: #40e0d0;
  color: white;
  border: transparent;
}
</style>
