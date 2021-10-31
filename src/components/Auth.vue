<template>
  <div>
    <input type="text" placeholder="Name" /><br />
    <input type="text" placeholder="Last Name" /><br />
    <button>Save!</button>
  </div>
</template>

<script>
export default {
  name: "Auth"
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
