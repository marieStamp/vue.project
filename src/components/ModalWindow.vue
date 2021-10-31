<template>
  <div class="wrapper">
    <div class="overlay">
      <div class="header">{{ title }}</div>
      <div class="content">
        <component :is="settings.content" />
        <!-- <add-payment-form v-if="settings.content === 'AddPaymentForm'" />
        <auth v-if="settings.content === 'Auth'" /> -->
      </div>
      <div class="footer">
        <button class="closeBtn" @click="onCloseClick">Close</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalWindow",
  components: {
    AddPaymentForm: () => import("./AddPaymentForm.vue"),
    Auth: () => import("./Auth.vue")
  },
  props: {
    // content: String,
    settings: Object
  },
  methods: {
    onCloseClick () {
      this.$modal.close()
    }
  },
  computed: {
    title () {
      return this.settings?.title || "Modal Window"
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  border: 1px solid #40e0d0;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  & .overlay {
    z-index: 0;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(68, 61, 61, 0.5);
  }
  & .content {
    position: relative;
    z-index: 100;
  }
  & .header {
    color: #40e0d0;
    margin-bottom: 20px;
    margin-top: 20px;
  }
}
.closeBtn {
  background-color: #40e0d0;
  color: white;
  border: transparent;
}
</style>
