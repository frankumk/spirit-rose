<template>
  <v-app>
    <!-- <div id="app">
      <v-toolbar app color="#CC5500">
        <div id="nav">
          <router-link to="/">Home</router-link>        
          <router-link to="/roses">Rose Medicine</router-link>       
          <router-link to="/rituals">Ritual Creation</router-link>       
          <router-link to="/yonisteam">Yoni Steaming</router-link>      
          <router-link to="/herbs">More Herbs</router-link>      
          <router-link to="/wombhealing">Womb Healing</router-link>
        </div>
      </v-toolbar>
    <router-view/> -->
<div id="nav">
  <v-toolbar app color="#CC5500" dark>
    <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
    <v-toolbar-title><v-tab to="/">Spirit Rose</v-tab></v-toolbar-title>
    <v-spacer></v-spacer>
    <v-tab to="/roses">Rose Medicine</v-tab>
    <v-tab to="/rituals">Ritual Cretion</v-tab>
    <v-tab to="/yonisteam">Yoni Steam</v-tab>
    <v-tab to="/herbs">Herbs</v-tab>
    <v-tab to="/wombhealing">Womb Healing</v-tab>
    
  </v-toolbar>
  </div>
    
    <v-content>
      <router-view></router-view>
    </v-content>
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
export default{
  data: () => ({
    drawer: false
  })
}
</script>
<style>
  #nav{
    font-family: 'Bad Script', cursive;
    font-size: 2rem;
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
