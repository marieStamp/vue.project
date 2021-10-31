<template>
  <div>
    <button @click="addPayment">Add Payment Form +</button><br />
    Total Price: {{ getFPV }}
    <PaymentDisplay :items="getPaymentsList" />
    <router-link to="/add/payment/Food?value=200" class="payments"
      >Food/200</router-link
    >
    <router-link to="/add/payment/Transport?value=50" class="payments"
      >Transport/50</router-link
    >
    <router-link to="/add/payment/Entertainment?value=2000" class="payments"
      >Entertainment/2000</router-link
    >
    <Pagination
      :curPage="page"
      :numOfPages="n"
      :length="getPaymentsList.length"
      @paginate="changePage"
    />
  </div>
</template>

<script>
import PaymentDisplay from "../components/PaymentDisplay.vue"
import { mapMutations, mapGetters, mapActions } from "vuex"
import Pagination from "../components/Pagination.vue"
export default {
  components: {
    PaymentDisplay,
    Pagination
  },
  name: "Dashboard",
  data: () => ({
    page: 1,
    n: 3
  }),
  methods: {
    ...mapMutations(["setPaymentsListData"]),
    ...mapActions(["fetchData", "fetchCategory"]),
    changePage (p) {
      this.page = p
    },
    addPayment () {
      this.$modal.show({ title: "Add Payment Form", content: "AddPaymentForm" })
    }
  },
  computed: {
    ...mapGetters(["getFPV", "getPaymentsList"]),
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
  },
  created () {
    this.page = Number(this.$route.params.page)
    this.$store.dispatch("fetchData")
    this.$store.dispatch("fetchCategory")
  }
}
</script>

<style lang="scss" scope>
.payments {
  margin-right: 10px;
}
button {
  background-color: #40e0d0;
  color: white;
  border: transparent;
  margin-bottom: 15px;
}
</style>
