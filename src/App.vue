<template>
  <v-app>
    <Navigation />
    <v-main>
      <router-view class="mt-16 pt-16"></router-view>
    </v-main>

    <Footer />
  </div>
  </v-app>
</template>

<script>
import Navigation from './components/Navigation.vue'
import Footer from './components/Footer.vue'

export default{
  components: {
      Navigation,
      Footer
  }
}
</script>
<style>
  #nav{
    font-family: 'Bad Script', cursive;
    font-size: 3rem;
    text-align: center;
    color: white;
  }
  a{
    color: inherit;
  }
  #nav a {
  font-weight: bold;
  margin: 1rem;
}

#nav a.router-link-exact-active {
    color: #2c3e50;
}


</style>
