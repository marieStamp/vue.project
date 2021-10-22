<template>
  <div id="app">
    <header class="header">
      <router-link to="/dashboard">dashboard</router-link>
      <router-link to="/about">about</router-link>
      <div @click="goToPage('NotFound')">404</div>
      <!-- <a href="dashboard">dashboard</a>
      <a href="about">about</a>
      <a href="notfound">not found</a> -->
    </header>
    <main>
      <router-view />
      <!-- <Dashboard v-if="page === 'dashboard'" />
      <About v-if="page === 'about'" />
      <NotFound v-if="page === 'notfound'" /> -->
    </main>
  </div>
</template>

<script>
// import About from './views/About.vue'
// import Dashboard from './views/Dashboard.vue'
// import NotFound from './views/NotFound.vue'
export default {
  name: 'App',
  components: {
    // About,
    // Dashboard,
    // NotFound
  },
  data: () => ({
    // page: 'dashboard'
  }),
  methods: {
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
    //   const links = document.querySelectorAll('a')
    //   links.forEach(link => {
    //     link.addEventListener('click', event => {
    //       event.preventDefault()
    //       history.pushState({}, '', link.href)
    //       this.setPage()
    //     })
    //   })
    //   this.setPage()
    //   window.addEventListener('popstate', () => {
    //     this.setPage()
    //   })
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
</style>
