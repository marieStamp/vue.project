<template>
  <div>
    About<br />
    <button @click="openModalAuth">Open Authorisation</button>
  </div>
</template>

<script>
export default {
  name: "About",
  methods: {
    openModalAuth () {
      this.$modal.show({ title: "Authorisation", content: "Auth" })
    }
  }
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
