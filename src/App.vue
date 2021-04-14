<template>
  <v-app>
    <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/roses">Rose Medicine</router-link> |
      <router-link to="/rituals">Ritual Creation</router-link> |
      <router-link to="/yonisteam">Yoni Steaming</router-link> |
      <router-link to="/herbs">More Herbs</router-link> |
      <router-link to="/wombhealing">Womb Healing</router-link>
    </div>
    <router-view/>
    <v-footer absolute>
      <v-col
        class="text-center"
      >
      footer
      </v-col>
    </v-footer>
  </div>
  </v-app>
</template>

<script>
  import Footer from "./components/Footer.vue"
  export default {
    name: 'App',
      components: {
        Footer
    },

  data: () => ({
    //
  }),
};
</script>
<style>
  #nav{
    font-family: 'Bad Script', cursive;
    font-size: 2rem;
    text-align: center;
  }
</style>
