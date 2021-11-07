<template>
  <v-card>
    <v-text-field
      class="pl-2"
      label="Name"
      :rules="rules"
      hide-details="auto"
    ></v-text-field>
    <v-text-field
      class="pl-2"
      label="Last Name"
      :rules="rules"
      hide-details="auto"
    ></v-text-field>
    <div class="d-flex justify-center">
      <v-btn class="mt-3" color="teal" dark>Save!</v-btn>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "Auth",
  data: () => ({
    rules: [
      value => !!value || "Required.",
      value => (value && value.length >= 1) || "Min 1 character"
    ]
  })
}
</script>

<style lang="scss" scoped>
input {
  margin-bottom: 20px;
}
button {
  margin-bottom: 15px;
  background-color: #40e0d0;
  color: white;
  border: transparent;
}
</style>
