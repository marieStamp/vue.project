<template>
  <v-container>
    <v-col class="d-flex justify-center">
      <div class="text-h5 text-sm-h3">About</div>
    </v-col>
    <v-col class="d-flex justify-center">
      <v-dialog v-model="dialog" width="500">
        <template v-slot:activator="{ on }">
          <v-btn color="teal" dark v-on="on" @click="dialog = !dialog"
            >Open Authorisation</v-btn
          >
        </template>
        <v-card>
          <auth />
        </v-card>
      </v-dialog>
    </v-col>
  </v-container>
</template>

<script>
import Auth from "../components/Auth"
export default {
  name: "About",
  components: {
    Auth
  },
  data: () => ({
    dialog: false
  })
  // methods: {
  //   openModalAuth () {
  //     this.$modal.show({ title: "Authorisation", content: "Auth" })
  //   }
  // }
}
</script>

<style lang="scss" scoped>
button {
  margin-top: 10px;
  background-color: #40e0d0;
  color: white;
  border: transparent;
}
</style>
