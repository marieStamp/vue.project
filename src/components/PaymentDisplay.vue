<template>
  <v-container>
    <v-row class="bot_border">
      <v-col :cols="1" class="font-weight-bold">#</v-col>
      <v-col :cols="3" class="font-weight-bold">Date</v-col>
      <v-col :cols="4" class="font-weight-bold">Category</v-col>
      <v-col :cols="2" class="font-weight-bold">Value</v-col>
      <v-col :cols="2" class="font-weight-bold">Action</v-col>
    </v-row>
    <v-row class="bot_border" v-for="item in items" :key="item.id">
      <v-col :cols="1">{{ item.id }}</v-col>
      <v-col :cols="3">{{ item.date }}</v-col>
      <v-col :cols="4">{{ item.category }}</v-col>
      <v-col :cols="2">{{ item.amount }}</v-col>
      <v-col :cols="2">
        <v-menu transition="slide-x-transition">
          <template v-slot:activator="{ on }">
            <v-btn
              color="teal"
              dark
              v-on="on"
              @click="onClickContext($event, item.id)"
            >
              <v-icon>mdi-playlist-edit</v-icon>
            </v-btn>
          </template>
          <context-menu :editItem="editItem" />
        </v-menu>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapMutations } from "vuex"
import ContextMenu from "./ContextMenu"

export default {
  name: "PaymentDisplay",
  components: {
    ContextMenu
  },
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      editItem: []
    }
  },
  methods: {
    ...mapMutations(["deleteDataFromPaymentsList"]),
    onClickContext (event, id) {
      this.editItem = [
        {
          text: "Delete",
          action: () => {
            this.deleteDataFromPaymentsList(id)
          }
        },
        {
          text: "Edit",
          action: () => {
            this.$modal.show("AddPaymentForm", { id })
          }
        }
      ]
    }
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
.bot_border {
  border-bottom: 1px solid #e0e0e0;
}
</style>
