<template>
  <v-card class="text-left pa-8">
    <template>
      <div>
        <v-menu
          ref="menu"
          v-model="menu"
          :close-on-content-click="false"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="date"
              label="Date"
              prepend-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="date"
            :active-picker.sync="activePicker"
            :max="
              new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
                .toISOString()
                .substr(0, 10)
            "
            min="1950-01-01"
            @change="save"
          ></v-date-picker>
        </v-menu>
      </div>
    </template>
    <v-select v-model="category" label="Category" :items="categoryList" />
    <v-text-field v-model.number="amount" type="number" label="Value" />
    <v-text-field v-model.number="id" type="number" label="Id" />
    <div class="d-flex justify-space-around mb-6">
      <v-btn color="teal" dark @click="onSaveClick">
        Save!
      </v-btn>
      <!-- <v-btn color="teal" dark @click="onCloseClick">
        Close
      </v-btn> -->
    </div>
  </v-card>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex"

export default {
  name: "AddPaymentForm",
  data () {
    return {
      activePicker: null,
      date: null,
      menu: false,
      category: "",
      amount: "",
      id: ""
    }
  },
  watch: {
    menu (val) {
      val && setTimeout(() => (this.activePicker = "YEAR"))
    }
  },
  methods: {
    ...mapActions(["fetchCategory", "fetchData"]),
    ...mapMutations(["addDataToPaymentsList"]),
    changeCategory (selected) {
      this.category = selected
    },
    save (date) {
      this.$refs.menu.save(date)
    },
    onSaveClick () {
      const { category, amount } = this
      const data = {
        id: this.id,
        date: this.date || this.getCurrentDate,
        category,
        amount
      }
      this.addDataToPaymentsList(data)
    }
    // onCloseClick () {
    //   this.$modal.close()
    // }
  },
  computed: {
    categoryList () {
      return this.$store.getters.getCategoryList
    },
    ...mapGetters({
      categories: "getCategoryList"
    }),
    getCurrentDate () {
      const today = new Date()
      const d = today.getDate()
      const m = today.getMonth() + 1
      const y = today.getFullYear()
      return `${d}.${m}.${y}`
    },
    getAmountFromRoute () {
      return Number(this.$route.query?.value || "")
    }
  },
  created () {
    this.fetchData()
    if (!this.categories.length) {
      this.fetchCategory()
    }
    this.amount = this.getAmountFromRoute
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
