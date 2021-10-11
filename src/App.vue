<template>
  <div id="app">
    <header>
      <div class="header">My Personal costs</div>
    </header>
    <main>
      Total Price: {{ getFPV }}
      <AddPaymentForm />
      <PaymentDisplay :items="getPaymentsList" />
    </main>
  </div>
</template>

<script>
import AddPaymentForm from './components/AddPaymentForm.vue'
import PaymentDisplay from './components/PaymentDisplay.vue'

import { mapMutations, mapGetters, mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    PaymentDisplay,
    AddPaymentForm
  },
  methods: {
    ...mapMutations(['setPaymentsListData']),
    ...mapActions(['fetchData', 'fetchCategory'])
  },
  computed: {
    ...mapGetters(['getFPV', 'getPaymentsList', 'getCategoryList']),
    getFPV () {
      return this.$store.getters.getPaymentsListFullPrice
    },
    paymentsList () {
      return this.$store.getters.getPaymentsList
    }
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
  margin-bottom: 15px;
}
</style>
