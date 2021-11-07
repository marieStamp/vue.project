<template>
  <div id="app">
    <header class="header">
      <router-link to="/dashboard">dashboard</router-link>
      <router-link to="/about">about</router-link>
      <router-link to="/404">not found</router-link>
    </header>
    <main>
      <router-view />
    </main>
    <transition name="fade">
      <modal-window v-if="modalIsShow" :settings="modalSettings" />
    </transition>
    <transition name="fade">
      <context-menu />
    </transition>
  </div>
</template>

<script>
import ContextMenu from "./components/ContextMenu.vue"
export default {
  name: "App",
  components: {
    ContextMenu,
    ModalWindow: () => import("./components/ModalWindow.vue")
  },
  data: () => ({
    modalIsShow: false,
    modalSettings: {}
  }),
  methods: {
    onShown (settings) {
      this.modalSettings = settings
      this.modalIsShow = true
    },
    onHide () {
      this.modalIsShow = false
      this.modalSettings = {}
    },
    goToPage (pageName) {
      this.$router.push({
        name: pageName
      })
    }
    // setPage () {
    //   this.page = location.pathname.slice(1)
    // }
  },
  mounted () {
    this.$modal.EventBus.$on("onShown", this.onShown)
    this.$modal.EventBus.$on("onClose", this.onHide)
  }
  // computed: {},
  // created () {
  //   this.$store.dispatch('fetchData')
  //   this.$store.dispatch('fetchCategory')
  // }
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
  & a {
    margin-right: 10px;
    &:hover {
      color: #40e0d0;
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
