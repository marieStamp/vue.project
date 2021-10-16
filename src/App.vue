<template>
  <div id="app">
    <header>
      <div class="header">My Personal costs</div>
    </header>
    <main>
      Total Price: {{ getFPV }}
      <AddPaymentForm />
      <PaymentDisplay :items="getPaymentsList" />
      <Pagination
        :curPage="page"
        :numOfPages="n"
        :length="getPaymentsList.length"
        @paginate="changePage"
      />
    </main>
  </div>
</template>

<script>
import AddPaymentForm from './components/AddPaymentForm.vue'
import PaymentDisplay from './components/PaymentDisplay.vue'
import { mapMutations, mapGetters, mapActions } from 'vuex'
import Pagination from './components/Pagination.vue'

export default {
  name: 'App',
  components: {
    PaymentDisplay,
    AddPaymentForm,
    Pagination
  },
  data: () => ({
    page: 1,
    n: 3
  }),
  methods: {
    ...mapMutations(['setPaymentsListData']),
    ...mapActions(['fetchData', 'fetchCategory']),
    changePage (p) {
      this.page = p
    }
  },
  computed: {
    ...mapGetters(['getFPV', 'getPaymentsList', 'getCategoryList']),
    getFPV () {
      return this.$store.getters.getPaymentsListFullPrice
    },
    paymentsList () {
      return this.$store.getters.getPaymentsList
    },
    currentElements () {
      const { n, page } = this
      return this.paymentsList.slice(n * (page - 1), n * (page - 1) + n)
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
