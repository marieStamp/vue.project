<template>
  <v-container>
    <v-row>
      <v-col>
        <div class="text-h5 text-sm-h3">My personal costs</div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-dialog v-model="dialog" width="500">
          <template v-slot:activator="{ on }">
            <v-btn color="teal" dark v-on="on" @click="dialog = !dialog"
              >Add new cost <v-icon>mdi-plus</v-icon></v-btn
            >
          </template>
          <v-card>
            <add-payment-form />
          </v-card>
        </v-dialog>
        <PaymentDisplay :items="getPaymentsList" />
        <v-alert outlined color="grey lighten-2">
          <div class="text-center">
            <v-pagination
              color="teal"
              v-model="page"
              :length="4"
            ></v-pagination>
          </div>
        </v-alert>
      </v-col>
      <v-col>
        <Chart :items="getSortedItemsList" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import PaymentDisplay from "../components/PaymentDisplay.vue"
import { mapMutations, mapGetters, mapActions } from "vuex"
import AddPaymentForm from "../components/AddPaymentForm.vue"
import Chart from "../components/Chart.vue"
// import Pagination from "../components/Pagination.vue"

export default {
  components: {
    PaymentDisplay,
    AddPaymentForm,
    Chart
    // Pagination
  },
  name: "Dashboard",
  data: () => ({
    dialog: false,
    page: 1,
    n: 3,
    loaded: false
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
    // getFPV () {
    //   return this.$store.getters.getPaymentsListFullPrice
    // },
    paymentsList () {
      return this.$store.getters.getPaymentsList
    },
    currentElements () {
      const { n, page } = this
      return this.paymentsList.slice(n * (page - 1), n * (page - 1) + n)
    },
    getSortedItemsList () {
      return this.$store.getters.getSortedPaymentList
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
