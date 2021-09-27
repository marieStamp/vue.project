<template>
  <div id="app">
    <header>
      <div class="header">My Personal costs</div>
    </header>
    <main>
      <add-payment-form @emitName="methodName" />
      <PaymentDisplay show-items :items="paymentsList" />
      {{ fields }}
    </main>
  </div>
</template>

<script>
import AddPaymentForm from './components/AddPaymentForm.vue'
import PaymentDisplay from './components/PaymentDisplay.vue'
export default {
  name: 'App',
  components: {
    PaymentDisplay,
    AddPaymentForm
  },
  data: () => ({
    paymentsList: [],
    fields: {}
  }),
  methods: {
    fetchData () {
      return [
        {
          date: '28.03.2020',
          category: 'Food',
          value: 169
        },
        {
          date: '24.03.2020',
          category: 'Transport',
          value: 360
        },
        {
          date: '24.03.2020',
          category: 'Food',
          value: 532
        }
      ]
    },
    methodName (data) {
      this.paymentsList = [...this.paymentsList, data]
      this.fields.field3 = 'sdad'
    }
  },
  created () {
    this.paymentsList = this.fetchData()
  }
}
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.header {
  color: red;
}
</style>
